import Block from './Block'
import Break from './Break'

class Heading extends Block {

  static tagName = 'h1'

  static defaultChild = Break

  createTag(): HTMLElement {
    return document.createElement(this.attributes.level || this.statics().tagName)
  }
}

export default Heading
