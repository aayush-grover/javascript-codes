// function returning function

const createAdder = () =>
{
    const addNumber = (a,b) =>
    {
        let result =a+b;
        return result;
    }
    return addNumber
}
let adder = createAdder();
console.log(adder(3,5));