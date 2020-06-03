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
        if (this.size === 0) return null;
        const temp = this.first;
        if (this.size === 1) {
            this.last = null;
        } 
        this.first = temp.next;
        this.size--;

        return temp.value;
    }

    print() {
        let arr = [];
        let current = this.first;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
    }
}


const stack = new Stack();

console.log("========");
console.log("Push onto stack");
console.log("--------");
console.log(stack.push('first!!'));
console.log(stack.push("now I'M first!"));
console.log(stack);
console.log(stack.push("THE NEWEST FIRST"));
console.log(stack);
console.log(stack.print());

console.log();
console.log("========");
console.log("Pop off stack");
console.log("--------");
console.log(stack.pop());
console.log(stack, stack.print());
console.log(stack.pop());
console.log(stack, stack.print());