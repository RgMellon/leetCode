function defaultCompare(a, b) {
  return a === b;
}

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export class LinkedList {
  constructor(equalsFn = defaultCompare) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAtIndex(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index == 0) {
        //remove o primeiro item da lista;
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        //remove algum item especifico
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}
