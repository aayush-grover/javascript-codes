// closures

const conterNew = () =>{
    let count=0;
    const counter = () =>{
        count+=1;
        return count
    }
    return counter;
}
let inc = conterNew();//return function
inc();//1
inc();//2//contains reference to its lexical environment