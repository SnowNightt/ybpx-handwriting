type MyParameters<T extends (...args:any[])=>any> = T extends (...args:infer U)=>any?U:never
function fn(name:string,age:number){
}
type IFn = (name:string,age:number)=>void
type args = MyParameters<IFn>
