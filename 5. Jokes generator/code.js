/*document.body.addEventListener('mouseover',function(e){ 
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
});*/


document.getElementById('btn').addEventListener('click', generateJokes);

function generateJokes(e) {
    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            let output = '';

            if (jokes.type === 'success') {
                jokes.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output = `<li> Something went wrong</li>`;
                
            }
            document.getElementById('number').value = '';
            document.getElementById('jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}

