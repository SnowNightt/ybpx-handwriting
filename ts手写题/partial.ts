interface IData {
  name: string;
  age: number;
  sex: string;
}
type myPartial<T> = {
  [K in keyof T]?: T[K];
};
type data = myPartial<IData>;
// {
//   name?: string;
//   age?: number;
//   sex?: string;
// }
