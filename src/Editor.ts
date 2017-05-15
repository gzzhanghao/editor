import Container from './abstract/Container'
import Item from './abstract/Item'

const OBSERVER_CONFIG = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
}

export default class Editor {

  readonly container = new Container

  observer: MutationObserver

  constructor(public domNode: HTMLElement) {
    // initialize children
    domNode.appendChild(this.container.domNode)
    domNode.setAttribute('contentEditable', 'true')

    // observe mutations in container
    this.observer = new MutationObserver(mutations => {
      this.update(mutations)
    })
    this.observer.observe(this.domNode, OBSERVER_CONFIG)
  }

  update(mutations: Array<MutationRecord>): void {
    for (const mutation of mutations) {
      let target = mutation.target
      if (target.nodeType === Node.TEXT_NODE) {
        target = target.parentNode
      }
      const instance = Item.of(target)
      if (instance) {
        instance.update(mutation)
      }
    }
  }
}
