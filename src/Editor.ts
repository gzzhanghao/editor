import Container from './Container'
import EditorNode from './EditorNode'

const DOM_KEY_PREFIX = '__Editor__'

const OBSERVER_CONFIG = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
}

const MUTATION_METHODS = {
  'childList': 'updateChildList',
  'attributes': 'updateAttributes',
  'characterData': 'updateCharacterData',
}

export default class Editor {

  static editorId = 0

  domKey = DOM_KEY_PREFIX + Editor.editorId++

  container: Container

  observer: MutationObserver

  constructor(public domNode: Element) {
    // initialize children
    this.container = new Container(this, domNode)
    domNode.setAttribute('contentEditable', 'true')

    // observe mutations in container
    this.observer = new MutationObserver(mutations => {
      this.update(mutations)
    })
    this.observer.observe(this.domNode, OBSERVER_CONFIG)
  }

  update(mutations: Array<MutationRecord>): void {
    for (const mutation of mutations) {
      let target = mutation.target
      if (target.nodeType === Node.TEXT_NODE) {
        target = target.parentNode
      }
      const instance = this.getEditorNode(target)
      if (instance) {
        instance[MUTATION_METHODS[mutation.type]](mutation)
      }
    }
  }

  getEditorNode(node: Node): EditorNode<any> {
    return node[this.domKey]
  }

  setEditorNode(node: Node, editorNode: EditorNode<any>): void {
    node[this.domKey] = editorNode
  }
}
