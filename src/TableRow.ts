import EditorNode from './EditorNode'
import TableCol from './TableCol'

class TableRow extends EditorNode<TableCol> {

  static tagName = 'tr'

  static defaultChild = TableCol

  updateChildList(mutation: MutationRecord): void {
    for (const node of [].slice.call(mutation.addedNodes)) {
      // @todo add TableCol
    }
    for (const node of [].slice.call(mutation.removedNodes)) {
      const instance = this.editor.getEditorNode(node)
      // @todo remove TableCol
    }
  }

  updateAttributes(mutation: MutationRecord): void {
    // @todo update TableRow attribute
  }
}

export default TableRow
