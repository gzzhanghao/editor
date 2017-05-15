import Inline from '../abstract/Inline'
import Item from '../abstract/Item'

class Break extends Inline {

  static tagName = 'br'
}

export function parse(node: Node): Array<Item> {
  if (node.nodeName.toLowerCase() === 'br') {
    return [new Break]
  }
}

export default Break
