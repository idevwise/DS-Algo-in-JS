export default class LinkedList {
    constructor(dataArr) {
        console.log(dataArr)
        if (!Array.isArray(dataArr)) {
            return;
        }

        if (dataArr.length === 0) {
            return;
        }
        let node = new Node(dataArr[0]);
        this.head = node;
        for(let i=1; i<dataArr.length; i++) {
            this.add(dataArr[i]);
        }
    }

    add(data) {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(data);
    }
    
    print() {
        let curr = this.head;
        while (curr) {
            console.log(' -> ' + curr.data);
            curr = curr.next;
        }
    }
}

export class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next ? next : null;
    }
}

