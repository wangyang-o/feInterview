const render = () => {};

// 单个state版
{
  let _state = undefined;

  function _useState<T extends undefined>(initState: T) {
    _state = _state || initState;
    const setState = (newState: T) => {
      _state = newState;
      render();
    };
    return [_state, setState];
  }
}
// 完善版
{
  const stateArr: any[] = [];
  let cursor = 0;
  function useState<T extends undefined>(initState: T) {
    stateArr[cursor] = stateArr[cursor] || initState;

    const setState = (newState: T) => {
      stateArr[cursor] = newState;
      render();
    };
    return [stateArr[cursor++], setState];
  }
}
