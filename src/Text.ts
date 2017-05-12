import Inline from './Inline'

class Text extends Inline {

  static tagName = 'span'

  update(mutation: MutationRecord): void {
    switch (mutation.type) {

      case 'childList': {
        // @todo hoist Block/Inline/Embed
        break
      }

      case 'attributes': {
        // @todo update attributes
        break
      }

      case 'characterData': {
        // let it be
        break
      }
    }
  }
}

export default Text
