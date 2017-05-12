import ListItem from './ListItem'
import Block from './Block'

class List extends Block {

  static tagName = 'ul'

  static defaultChild = ListItem
}

export default List
