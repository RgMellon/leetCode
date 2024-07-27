/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function defaultCompare(a, b) {
  return a === b;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class LinkedList {
  constructor(equalsFn = defaultCompare) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new ListNode(element);

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
      return current.val;
    }
    return undefined;
  }
}

function createLinkedList(arr) {
  if (arr.length === 0) return;
  const list = new LinkedList();
  list.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    list.push(arr[i]);
  }

  return list;
}

var isPalindrome = function (head) {
  const result = createLinkedList(head);

  let isPalindrom = true;

  while (result.count > 0) {
    const currentElement = result.head.val;
    const item = result.removeAtIndex(result.count - 1);

    if (currentElement != item) {
      isPalindrom = false;
      break;
    }
    result.removeAtIndex(0);
  }

  return isPalindrom;
};

console.log(isPalindrome([1, 2]));
