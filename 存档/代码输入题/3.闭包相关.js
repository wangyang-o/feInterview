function func() {
  let i = 0;
  return () => {
    i++;
    console.log(i);
  };
}

const func1 = func();
const func2 = func();
func1(); // 1
func2(); // 1
func1(); // 2
func2(); // 2
func1 === func2; // false
