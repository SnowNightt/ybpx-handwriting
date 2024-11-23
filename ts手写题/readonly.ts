interface IData {
  name: string;
  age: number;
  sex: string;
}
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
type Data2 = MyReadonly<IData>;
