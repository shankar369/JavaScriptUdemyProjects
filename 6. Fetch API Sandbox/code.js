document.getElementById('button-1').addEventListener('click',getLocalTXT);
document.getElementById('button-2').addEventListener('click',getLocalJSON);
document.getElementById('button-3').addEventListener('click',getOusideData);

function getLocalTXT(){
    fetch('local.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getLocalJSON(){
    fetch('local.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(user => output+=`<li>${user.name}</li>`);
        console.log(output);
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getOusideData(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(user => output+=`<li>${user.login}</li>`);
        console.log(output);
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}