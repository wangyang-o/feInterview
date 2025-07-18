
const first = { name: "tom", arr: [1, 2, 1], list: [1, 1], obj: { label: "str", value: "1" } };
const second = { name: "tom1", arr: [1, 1, 2], list: [1], obj: { label: "str", value: "2" } };

const diffFunc = (first, second) => {


};

// 输出

const res = {
  name: { type: "modified", oldVal: "tom", newVal: "tom1" },
  arr: {
    // 0: { type: "Unchanged", oldVal: 1, newVal: 1 },
    1: { type: "modified", oldVal: 2, newVal: 1 },
    2: { type: "modified", oldVal: 1, newVal: 2 },
  },
  list: {
    // 0: { type: "Unchanged", oldVal: 1, newVal: 1 },
    1: { type: "removed", oldVal: 1, newVal: undefined },
  },
  obj: {
    // label: { type: "Unchanged", oldVal: "str", newVal: "str" },
    value: { type: "modified", oldVal: "1", newVal: "2" },
  },
};
