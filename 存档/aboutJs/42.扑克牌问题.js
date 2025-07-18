// 我手中有一堆扑克牌， 但是观众不知道它的顺序。
// 1、第一步， 我从牌顶拿出一张牌， 放到桌子上。
// 2、第二步， 我从牌顶再拿一张牌， 放在手上牌的底部。
// 3、第三步， 重复第一步、第二步的操作， 直到我手中所有的牌都放到了桌子上。
// 最后， 可以看到桌子上牌的顺序是：(牌底部）1,2,3,4,5,6,7,8,9,10,11,12,13(牌顶部）
// 问， 刚开始拿在手里的牌的顺序是什么？

const reverse = () => {
  const hand = [];
  const table = Array.from({ length: 13 }, (v, k) => k + 1);
  console.log(table);
  while (table.length > 0) {
    // 从手中牌底拿一张牌返回牌顶
    if (hand.length > 0) hand.push(hand.shift());
    // 在桌子上取出最后一张
    hand.push(table.pop());
  }
  return hand;
};
console.log(reverse().join(","));
