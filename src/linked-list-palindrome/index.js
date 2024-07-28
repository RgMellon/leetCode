function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function isPalindrome(head) {
  if (!head || !head.next) return true;

  // Encontrar o meio da lista
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverter a segunda metade da lista
  let prev = null;
  while (slow) {
    const nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  // Comparar a primeira metade com a segunda metade revertida
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}
