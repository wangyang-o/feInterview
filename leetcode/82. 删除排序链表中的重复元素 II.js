/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  const hair = new ListNode(0, head);
  let cur = hair;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val;
      while (cur.next && cur.next.val === val) {
        // 这里指的是删除节点
        cur.next = cur.next.next;
      }
    } else {
      // 记录当前节点位置
      cur = cur.next;
    }
  }
  return hair.next;
};
