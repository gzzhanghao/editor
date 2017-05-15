import Parent from './Parent'

const DOM_KEY = '__EditorItem__'

abstract class Item {

  domNode: HTMLElement

  parent: Parent

  constructor(public attributes: Dictionary<any> = {}, domNode: HTMLElement = null) {
    this.domNode = domNode || this.createTag()
    this.domNode[DOM_KEY] = this
  }

  createTag(): HTMLElement {
    return document.createElement(this.statics().tagName)
  }

  clone(): Item {
    const Constructor = <new (...args: Array<any>) => Item> this.constructor
    return new Constructor(this.attributes, this.domNode.cloneNode(false))
  }

  statics(): any {
    return this.constructor
  }

  update(mutation: MutationRecord): void {
    // Nothing to do
  }

  static of(node: Node): Item {
    return node[DOM_KEY]
  }
}

export default Item
