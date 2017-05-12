import Parent from './Parent'
import TableCol from './TableCol'

class TableRow extends Parent {

  static tagName = 'tr'

  static defaultChild = TableCol
}

export default TableRow
