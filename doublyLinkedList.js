class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //removes a node from the beggining of the DLL
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //add a node to beginning of DLL
    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //accessing a node by its position 
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let count, current;
        if (idx <= (this.length / 2)) {
            count = 0;
            current = this.head;
            while (count !== idx) {
                currentNode = currentNode.next;
                count++;
            }
        }
        else {
            count = this.length - 1;
            current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    //takes an index and a piece of data to replace it
    set(idx, val) {
        let replaceNode = this.get(idx);
        if (replaceNode != null) {
            replaceNode.val = val;
            return true;
        }
        return false;
    }


    //add a node in a certain position

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(idx - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;

        this.length++;
        return true;
    }

    //Get rid of a node a certain position 
    remove(idx) {


    }



}

console.log('yaaaaaaaaaa')
let nodey = new Node(8)
console.log(nodey)