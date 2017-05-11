import EditorNode from './EditorNode'
import Block from './Block'
import Table from './Table'

class Container extends EditorNode<Block | Table> {

  static defaultChild = Block

  updateChildList(mutation: MutationRecord): void {
    for (const node of [].slice.call(mutation.addedNodes)) {
      // @todo add Block
    }
    for (const node of [].slice.call(mutation.removedNodes)) {
      const instance = this.editor.getEditorNode(node)
      // @todo remove Block
    }
  }
}

export default Container
