var Node = (value) => {
  var node = {}

  node.value = value;
  node.next = null;

  return node;
}

class LinkedList {

  constructor() {
      var list = {}
      this.head = null;
      this.tail = null;
      this.hasHead = false;
  }

    addToTail(value) {
        if(this.hasHead){
            this.tail.next = Node(value)
            this.tail = this.tail.next
        } else {
            this.head = Node(value)
            this.tail = this.head
            this.hasHead = true
        }
    }

  removeHead() {
      var temp = this.head
      this.head = this.head.next
      return temp.value
  }

    contains(target) {
        var current = this.head
        while(true){
            if(current.value===target)
                return true
            if(current.next===null)
                break
            current = current.next
        }
        return false
    }
}
