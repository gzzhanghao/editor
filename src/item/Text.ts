import Inline from '../abstract/Inline'
import Item from '../abstract/Item'

class Text extends Inline {

  static tagName = 'span'

  update(mutation: MutationRecord): void {
    switch (mutation.type) {

      case 'childList': {
        // @todo hoist Block/Inline/Embed
        break
      }

      case 'attributes': {
        // @todo update attributes
        break
      }

      case 'characterData': {
        // let it be
        break
      }
    }
  }
}

export function parse(node: Node): Array<Item> {
  if (node.nodeType === Node.TEXT_NODE) {
    return [new Text({ content: node.textContent })]
  }
}

export default Text
