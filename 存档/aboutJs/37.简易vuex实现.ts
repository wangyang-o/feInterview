interface InfStore {
  state: Record<string, any>;
  getters: Record<string, Function>;
  mutations: Record<string, Function>;
  actions: Record<string, Function>;
  commit: (mutationName: string, paypoad: any) => void;
  dispatch: (actionName: string, paypoad: any) => void;
}
type Options = Omit<InfStore, "commit" | "dispatch">;
class Store implements InfStore {
  state: Record<string, any>;
  getters: Record<string, Function>;
  mutations: Record<string, Function>;
  actions: Record<string, Function>;
  constructor(options: Options) {
    this.state = options.state;
    // 当调用getterName的时候，才去执行对应的函数，获取最新的值，类似computed
    for (const [getterName, getterFunc] of Object.entries(options.getters)) {
      Object.defineProperty(this.getters, getterName, {
        get: () => getterFunc(this.state, this.getters),
      });
    }
    // 处理 mutations
    for (const [mutateName, mutateFunc] of Object.entries(options.mutations)) {
      this.mutations[mutateName] = (payload: any) => {
        mutateFunc(this.state, payload);
      };
    }
    // 处理 mutations
    for (const [actionName, actionFunc] of Object.entries(options.actions)) {
      this.mutations[actionName] = (payload: any) => {
        actionFunc(this.state, payload);
      };
    }
  }

  commit(mutationName, payload) {
    const mutationFn = this.mutations[mutationName];
    if (!mutationFn) {
      console.error(`[Error]: mutation '${mutationName}' not exist`);
      return;
    }
    mutationFn(payload);
  }
  dispatch(actionName, payload) {
    const actionFn = this.mutations[actionName];
    if (!actionFn) {
      console.error(`[Error]: actionName '${actionName}' not exist`);
      return;
    }
    actionFn(payload);
  }
}

const store = new Store({
  state: {
    count: 1,
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  mutations: {
    add: (state, payload) => {
      return state.count + payload.num;
    },
  },
  actions: {
    add: async ({ commit }) => {
      const num = await new Promise<number>((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 100);
      });
      commit("add", { num });
    },
  },
});
