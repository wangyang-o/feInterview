/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 迭代
 var mergeTwoLists = function (list1, list2) {
    const head = new ListNode();
    let cur = head;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }
    //  如果有一个链表已经遍历完了，那么就直接将另一个链表的剩余部分链接到最后
    cur.next = list1 || list2;
    return head.next;
 };
// 递归
var mergeTwoLists1 = function (list1, list2) { 
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists1(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists1(list1, list2.next);
        return list2;
    }
}