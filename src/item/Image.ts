import Inline from '../abstract/Inline'
import Item from '../abstract/Item'

class Image extends Inline {

  static tagName = 'img'

  domNode: HTMLImageElement
}

export function parse(node: Node): Array<Item> {
  if (node.nodeName.toLowerCase() !== 'img') {
    return
  }
  const element = (<HTMLElement>node)
  return [new Image({
    image: { src: element.getAttribute('src') },
    width: parseInt(element.style.width || element.getAttribute('width')),
    height: parseInt(element.style.height || element.getAttribute('height')),
  })]
}

export default Image
