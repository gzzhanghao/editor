import TableRow from './TableRow'
import Block from './Block'

class Table extends Block {

  static tagName = 'table'

  static defaultChild = TableRow
}

export default Table
