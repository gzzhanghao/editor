import Parent from './Parent'
import Paragraph from '../item/Section'

class Container extends Parent {

  static tagName = 'div'

  static defaultChild = Paragraph
}

export default Container
