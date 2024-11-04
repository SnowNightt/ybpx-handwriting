const arr1 = [{id:1,name:'xiaoming'},{id:2,name:'xiaohog'}]
const arr2 = [{id:1,age:12},{id:2,age:23}]
function combine(arr1,arr2){
    const res = []
    for(let i =0;i<arr1.length;i++){
        const id = arr1[i].id
        for(let j = 0;j<arr2.length;j++){
            const obj = arr2[j]
            if(obj.id == id){
                res.push({...obj,arr1[i].name})
            }
        }
    }
    return res
}