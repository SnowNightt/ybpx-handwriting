type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
interface IObj {
  name: string;
  age: number;
  sex: string;
  job: string;
}
type IStu = MyOmit<IObj, "name" | "job">;
const student: IStu = { age: 12, sex: "boy" };
