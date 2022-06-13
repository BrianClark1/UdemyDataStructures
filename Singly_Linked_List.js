//piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//Insertion - O(1)
//Removal - O(1) or O(N) (it depends)
//Searching - O(N)
//Access - O(N)

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Adds node to end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse() {
  //     let current = this.head;
  //     while (current) {
  //         current = current.next;
  //     }
  //     }

  //Removes node from end of the list
  //Must access node before tail & set null
  //so have to traverse whole list
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //removing a node from the start of the list
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  //Adding a node to the start of the list
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Retrieving a node by its position in the Linked List
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //Update an Existing Nodes Value 
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  //Adding a node to LLL at a specifec position 
  insert(index, value) {

    if (index < 0 || index > this.length) return false;
    //!! Coerce to boolean return true 
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    
    let newNode = new Node(value);
    let prev = this.get(index - 1);

    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //Removing a node from the Linke List at a specific position 
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  //Reversing the Linked List in place!
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

      //Tranversing the list keeping track of 3 values 
      //node, next, and previous
      //prev starts out as null since we begin at the head
    //then we reassign .next to previous (reversing)
    //then traverse by reassigning the variables and continuing 
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //See Linked List values in an array 

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next
    }
    console.log(arr);
  }

}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.pop();
list.push("Craig");
list.shift();
list.unshift("Yello");
console.log(list.get(2));
console.log(list.set(2, "Mamy"))
console.log(list.get(2));
console.log(list.insert(3, "Yao"))
list.remove(3);
console.log(list);
list.print();
list.reverse();
list.print();
console.log(list);
