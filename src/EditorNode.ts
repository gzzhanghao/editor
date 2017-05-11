import Editor from './Editor'

abstract class EditorNode<ContentType extends EditorNode<any>> {

  static tagName = 'div'

  static defaultChild = null

  domNode: Element

  parent: EditorNode<any>

  format: Dictionary<any> = {}

  children: Array<ContentType> = []

  constructor(public editor: Editor, domNode?: Element) {
    this.domNode = domNode || document.createElement(this.statics().tagName)
    this.editor.setEditorNode(this.domNode, this)

    if (this.domNode.childNodes.length) {
      // @todo attach children
      return
    }

    const DefaultChild = this.statics().defaultChild

    if (DefaultChild) {
      this.insertChild(new DefaultChild(this.editor))
    }
  }

  clone(): EditorNode<ContentType> {
    const Constructor = <new (Editor, Element?) => EditorNode<ContentType>> this.constructor
    return new Constructor(this.editor, this.domNode.cloneNode(false))
  }

  insertChild(child: ContentType, index: number = this.children.length): void {
    if (index < 0 || index > this.children.length) {
      throw new RangeError('Invalid index for the child to insert')
    }
    if (child.parent) {
      child.parent.removeChild(child)
    }
    child.parent = this
    if (index < this.children.length) {
      this.domNode.insertBefore(child.domNode, this.children[index].domNode)
      this.children.splice(index, 0, child)
    } else {
      this.domNode.appendChild(child.domNode)
      this.children.push(child)
    }
  }

  insertBefore(child: ContentType, refChild: ContentType): void {
    this.insertChild(child, this.children.indexOf(refChild))
  }

  insertAfter(child: ContentType, refChild: ContentType): void {
    this.insertChild(child, this.children.indexOf(refChild) + 1)
  }

  removeChild(child: ContentType): void {
    const index = this.children.indexOf(child)
    if (index < 0) {
      throw new Error('The node to remove is not a child of this node')
    }
    child.parent = null
    this.domNode.removeChild(this.children[index].domNode)
    this.children.splice(index, 1)
  }

  statics(): any {
    return this.constructor
  }
}

export default EditorNode
