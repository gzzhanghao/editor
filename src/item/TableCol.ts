import Container from '../abstract/Container'
import Item from '../abstract/Item'

class TableCol extends Container {

  static tagName = 'td'
}

export function parse(node: Node): Array<Item> {
  return []
}

export default TableCol
