interface IData {
  name: string;
  age: number;
  sex: string;
}
type MyPick<T, U extends keyof T> = {
  [K in U]: T[K];
};
type Data3 = MyPick<IData, "name" | "age">;
