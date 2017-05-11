import EditorNode from './EditorNode'
import TableRow from './TableRow'

class Table extends EditorNode<TableRow> {

  static tagName = 'table'

  static defaultChild = TableRow

  updateChildList(mutation: MutationRecord): void {
    for (const node of [].slice.call(mutation.addedNodes)) {
      // @todo add TableRow
    }
    for (const node of [].slice.call(mutation.removedNodes)) {
      const instance = this.editor.getEditorNode(node)
      // @todo remove TableRow
    }
  }

  updateAttributes(mutation: MutationRecord): void {
    // @todo update Table attribute
  }
}

export default Table
