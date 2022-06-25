/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (this.tail === null) {
    this.tail = newNode;
    this.head = newNode;
    return;
  }
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
};
/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  // check if the head is the value
  if (this.head.val === val) {
    this.head.next.prev = null;
    this.head = this.head.next;
    return val;
  }
  // check if the tail is the value
  if (this.tail.val === val) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    return val;
  }

  // remove from middle;
  let curr = this.head;
  while (curr) {
    if (curr.val === val) {
      // assign the prev to the next
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
      return val;
    }
    curr = curr.next;
  }
};

const test = new DoublyLinkedList();
test.add(1);
test.add(2);
// console.log(test);
test.remove(1);
console.log(test);

module.exports = { DoublyLinkedList, Node };
