
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


MakeRequest('http://aaayushexample.com')
.then((data) => {
    console.log("resolved Successfuly");
}, (err) => {
    console.log("rejected");
})
