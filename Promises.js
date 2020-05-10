
function MakeRequest(url)
{
    return new Promise((resolve, reject) =>
    {
        console.log('URL is '+ url);
        if(typeof url === "string")
        {
            resolve('Operation Successfull');
        }
        else{
            reject('Operation failed');
        }
    })
}


MakeRequest('http://aaayush_example.com')
.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})


//simply promise works like this

const promise =new Promise((resolve,reject) =>
{
    setTimeout(() => {resolve('resolved')},4000);
})
.then((resolve) =>
{
    console.log(resolve);
});//if we are only executing resolve function then .then will be called only
//neglecting the rejext



//promises in real life

axios.get('http://aaayush_example.com')
.then( response =>
    {
        console.log(response);
    }).catch( reject =>
        {
            console.log(reject);
        })


//promise in advance

let one = new Promise((resolve) => {resolve('one')});
let two = new Promise((resolve) => {resolve('two')});

Promise.all([one , two])//only executed when both of the promises get executed
.then((resolve) =>
    {
        console.log(resolve);
    });

    Promise.race([one , two])//only executed when one of the promises get executed
    .then((resolve) =>
        {
            console.log(resolve);
        });