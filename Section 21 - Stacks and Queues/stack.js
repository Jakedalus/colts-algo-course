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

        return ++this.size;
    } 

    pop() {

    }

    print() {
        let arr = [];
        let current = this.first;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}


const stack = new Stack();

console.log(stack.push('first!!'));
console.log(stack.push("now I'M first!"));
console.log(stack);