// 2. 两数相加
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let flag = 0;
    let head = new ListNode(0);
    let cur = head;
    while (l1 || l2) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + flag;
        flag = sum >= 10 ? 1 : 0;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    flag && (cur.next = new ListNode(1));
    return head.next;
};