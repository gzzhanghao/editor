import EditorNode from './EditorNode'
import Block from './Block'

class Inline extends EditorNode<null> {

  static tagName = 'span'

  textContent = ''

  updateChildList(mutation: MutationRecord): void {
    for (const node of [].slice.call(mutation.addedNodes)) {
      // @todo hoist Inline or Block
    }
  }

  updateAttributes(mutation: MutationRecord): void {
    // @todo update Inline attribute
  }

  updateCharacterData(mutation: MutationRecord): void {
    // @todo update character data
  }
}

export default Inline
