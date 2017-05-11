import EditorNode from './EditorNode'
import Inline from './Inline'
import Break from './Break'

class Block extends EditorNode<Inline> {

  static tagName = 'p'

  static defaultChild = Break

  updateChildList(mutation: MutationRecord): void {
    for (const node of [].slice.call(mutation.addedNodes)) {
      // @todo add Inline or hoist Block
    }
    for (const node of [].slice.call(mutation.removedNodes)) {
      const instance = this.editor.getEditorNode(node)
      // @todo remove Inline
    }
  }

  updateAttributes(mutation: MutationRecord): void {
    // @todo update Block attribute
  }
}

export default Block
