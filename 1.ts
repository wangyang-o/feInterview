interface Person {
  name: string;
  age: number;
  gender: "man" | "women";
  zhiwei: string;
}

type MyPick<T, K extends keyof T> = {
  K: T[K];
};
type name = Pick<Person, "zhiwei">;
