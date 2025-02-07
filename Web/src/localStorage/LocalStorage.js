const GetLocalStorage = (key) => {
    let value = localStorage.getItem(key); 
    return value?JSON.parse(value):null;
} 
const SetLocalStorage = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));     
} 

const RemoveLocalStorage = (key)=>{
    localStorage.removeItem(key);
}


export {GetLocalStorage,SetLocalStorage,RemoveLocalStorage} ;