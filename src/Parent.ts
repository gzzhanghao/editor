import Item from './Item'

abstract class Parent extends Item {

  constructor(attributes: Dictionary<any> = {}, public children: Array<Item> = [], domNode: HTMLElement = null) {
    super(attributes, domNode)

    // Append children to dom node
    if (this.children.length) {
      for (const child of children) {
        this.domNode.appendChild(child.domNode)
      }
      return
    }

    // Initialize default child
    const defaultChild = this.createDefaultChild()
    if (defaultChild) {
      this.appendChild(defaultChild)
    }
  }

  createDefaultChild(): Item {
    const DefaultChild = this.statics().defaultChild
    return new DefaultChild
  }

  appendChild(item: Item): void {
    if (item.parent) {
      item.parent.removeChild(item)
    }
    this.children.push(item)
    this.domNode.appendChild(item.domNode)
    item.parent = this
  }

  removeChild(item: Item): void {
    const index = this.children.indexOf(item)
    if (index < 0) {
      throw new Error('Item to removed is not a child of this item')
    }
    this.domNode.removeChild(item.domNode)
    this.children.splice(index, 1)
  }
}

export default Parent
