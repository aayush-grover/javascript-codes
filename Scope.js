//Global Scope
let random = 5;
console.log(random);


const bla = () =>
{
    let num=10;
    console.log(num);//10
    console.log(random);//5
}
bla();
console.log(num);//error

//lexical scope

const hlo = () =>{
    let a = 10;
    const gg = () =>
    {
        console.log(a);//10//a in the caling context of gg
    }
    gg();
}
hlo();//10