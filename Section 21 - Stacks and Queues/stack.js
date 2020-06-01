class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const tempNode = this.first;
            this.first = newNode;
            this.first.next = tempNode;
        }

        this.size++;

        return this;
    }
}


const stack = new Stack();

stack.push('first!!');
stack.push("now I'M first!");
console.log(stack);