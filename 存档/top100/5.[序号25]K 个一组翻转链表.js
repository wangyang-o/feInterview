/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const reverse = (head, tail) => {
  let pre = null;
  let p = head;
  while (pre !== tail) {
    const next = p.next;
    p.next = pre;
    pre = p;
    p = next;
  }
  return [tail, head];
};
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    for (i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return hair.next;
      // 如果最后少于k的也反转
      // if (!tail.next) break;
      //  tail = tail.next;
    }
    const nex = tail.next;
    [head, tail] = reverse(head, tail);
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = nex;
  }
  return hair.next;
};
