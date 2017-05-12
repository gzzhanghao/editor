import Break from './Break'
import Block from './Block'

class Paragraph extends Block {

  static tagName = 'p'

  static defaultChild = Break
}

export default Paragraph
