import Break from './Break'
import Block from '../abstract/Block'
import Item from '../abstract/Item'

class Section extends Block {

  static tagName = 'p'

  static defaultChild = Break
}

export function parse(node: Node): Array<Item> {
  return []
}

export default Section
