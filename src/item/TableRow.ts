import Parent from '../abstract/Parent'
import TableCol from './TableCol'
import Item from '../abstract/Item'

class TableRow extends Parent {

  static tagName = 'tr'

  static defaultChild = TableCol
}

export function parse(node: Node): Array<Item> {
  return []
}

export default TableRow
