import Block from './Block'
import Container from './Container'

class TableCol extends Container {

  static tagName = 'td'

  static defaultChild = Block
}

export default TableCol
