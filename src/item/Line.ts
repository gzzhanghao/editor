import Embed from '../abstract/Embed'
import Item from '../abstract/Item'

class Line extends Embed {

  static tagName = 'hr'
}

export function parse(node: Node): Array<Item> {
  if (node.nodeName.toLowerCase() === 'hr') {
    return [new Line]
  }
}

export default Line
