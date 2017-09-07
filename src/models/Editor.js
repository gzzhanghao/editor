import Keys from './Keys'

import Content from './Content'

export default class Editor {

  content = new Content

  composing = false

  $trap = null

  $content = null

  initialize({ trap, content }) {

    this.$trap = trap
    this.$content = content

    this.resetSelection()
  }

  onSelectionChange = () => {
    this.resetSelection()
  }

  onCopy = event => {
    event.preventDefault()
    console.log('onCopy')
  }

  onCut = event => {
    event.preventDefault()
    console.log('onCut')
  }

  onPaste = event => {
    event.preventDefault()
    console.log('onPaste')
  }

  onInput = event => {
    console.log('onInput', this.composing, this.$trap.innerHTML)
  }

  onKeyDown = event => {
    console.log('onKeyDown', event.keyCode)
  }

  onKeyPress = event => {
    event.preventDefault()
    console.log('onKeyPress', JSON.stringify(String.fromCharCode(event.charCode)))
  }

  onCompositionStart = () => {
    this.composing = true
    console.log('onCompositionStart')
  }

  onCompositionEnd = () => {
    this.composing = true
    console.log('onCompositionEnd', this.$trap.innerHTML)
    this.$trap.innerHTML = ''
  }

  resetSelection() {
    const selection = document.getSelection()

    if (this.$trap !== selection.anchorNode && !this.$trap.contains(selection.anchorNode)) {
      selection.collapse(this.$trap, 0)
    }
  }
}
