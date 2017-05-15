import TableRow from './TableRow'
import Block from '../abstract/Block'
import Item from '../abstract/Item'

class Table extends Block {

  static tagName = 'table'

  static defaultChild = TableRow
}

export function parse(node: Node): Array<Item> {
  return []
}

export default Table
