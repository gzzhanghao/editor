import _ from 'lodash'

const AVAILABLE_DISPLAY = [
  'block',
  'inline',
  'inline-block',
  'table',
  'table-row',
  'table-cell',
  'list-item',
]

const BLOCK_ELEMENTS = [
  'p',
  'div',
  'header',
  'footer',
  'section',
]

const DISPLAY_MAP = {
  table: 'table',
  tr: 'table-row',
  td: 'table-cell',
  li: 'list-item',
}

class Item {

  constructor(attributes) {
    this.attributes = attributes
  }
}

class Inline extends Item {

  constructor(attributes, content) {
    super(attributes)
    this.content = content
  }
}

class Block extends Item {

  constructor(attributes, children = null) {
    super(attributes)
    this.children = children
  }
}

class Table extends Block {
  // empty
}

class TableRow extends Block {
  // empty
}

class TableCell extends Block {
  // empty
}

export default function normalize(node, context = {}) {
  if (node.nodeType === Node.TEXT_NODE) {
    return new Inline(context, node.textContent)
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return []
  }
  if (node.nodeName.toLowerCase() === 'br') {
    return new Break
  }
  const display = getDisplayOf(node)
  switch (display) {
    case 'block': {
      return normalizeChildren(_.flatten(_.map(node.childNodes, node => normalize(node, { /* @todo children context */}))))
    }
    case 'inline-block':
    case 'inline': {
      return _.flatten(_.map(node.childNodes, node => normalize(node, { /* @todo children context */ })))
    }
    case 'table': {
      return new Table({}, _.filter(_.flatten(_.map(node.childNodes, node => normalize(node, { /* @todo children context */ }))), node => node instanceof TableRow))
    }
    case 'table-row': {
      return new TableRow({}, _.filter(_.flatten(_.map(node.childNodes, node => normalize(node, { /* @todo children context */ }))), node => node instanceof TableCell))
    }
    case 'table-cell': {
      return new TableCell({}, normalizeChildren(_.flatten(_.map(node.childNodes, node => normalize(node, { /* @todo children context */ })))))
    }
  }
}

function getDisplayOf(node) {
  const display = node.style.display
  if (AVAILABLE_DISPLAY.indexOf(display) >= 0) {
    return display
  }
  const nodeName = node.nodeName.toLowerCase()
  if (BLOCK_ELEMENTS.indexOf(nodeName) >= 0 || /^h[1-6]$/.test(nodeName)) {
    return 'block'
  }
  return DISPLAY_MAP[nodeName] || 'inline'
}

function normalizeChildren(list) {
  const children = list.slice()
  const removeEmpty = _.some(children, node => node instanceof Block)
  for (let i = children.length - 1, j = i; i >= 0; i = j - 1) {
    let isEmpty = true
    for (j = i; j >= 0; j--) {
      if (children[j] instanceof Block) {
        break
      }
      if (children[j].content.trim()) {
        isEmpty = false
      }
    }
    if (i === j) {
      continue
    }
    if (removeEmpty && isEmpty) {
      children.splice(j + 1, i - j)
      continue
    }
    const block = new Block({ /* @todo block attributes */ })
    block.children = children.splice(j + 1, i - j, block)
  }
  return children
}
