import EditorNode from './EditorNode'
import Block from './Block'

class Inline extends EditorNode<null> {

  static tagName = 'span'

  textContent = ''

  updateChildList(mutation: MutationRecord): void {
    for (const child of [].slice.call(this.domNode.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        // @todo ignore or clone
      } else {
        // @todo hoist element
      }
    }
  }

  updateAttributes(mutation: MutationRecord): void {
    // @todo update Inline attribute
  }

  updateCharacterData(mutation: MutationRecord): void {
    this.textContent = this.domNode.textContent
    // @todo trigger update
  }

  setContent(content: string): void {
    this.domNode.textContent = content
    this.textContent = content
  }

  insertChild(...args: any[]): void {
    throw new Error('Cannot insert children into inline node')
  }

  removeChild(...args: any[]): void {
    throw new Error('Cannot remove children from inline node')
  }

}

export default Inline
