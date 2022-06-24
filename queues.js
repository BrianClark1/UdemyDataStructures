//Can create a queue with an array however it is not ideal
//it is simpler
//Linked list Queue performs better

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

    //place at end
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
          this.first = newNode;
          this.last = newNode;
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }
    
        return ++this.size;
      }
      //remove from beginning
      dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
          this.first = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
      }
    
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}




let newQueue = new Queue();
console.log(newQueue)
newQueue.enqueue('hello');
newQueue.enqueue('world');
newQueue.enqueue('chris');
newQueue.dequeue();
console.log(newQueue);

