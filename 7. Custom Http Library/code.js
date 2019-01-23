const http = new EasyHTTP;

//get data
/*
http.getData('http://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));
*/

const user = {
    name : "shankar",
    age : 21
}


//post data
/*
http.postData('http://jsonplaceholder.typicode.com/users',user)
.then(data => console.log(data))
.catch(err => console.log(err));
*/

//put data(update)
http.putData('http://jsonplaceholder.typicode.com/users/3',user)
.then(data => console.log(data))
.catch(err => console.log(err));



//Delete data
/*
http.deleteData('http://jsonplaceholder.typicode.com/users/5')
.then(data => console.log(data))
.catch(err => console.log(err));
*/