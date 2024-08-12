 async function getjoke(){

    const jokeData = await fetch('https://icanhazdadjoke.com/', {
         headers : {
            'Accept' : 'application/json'
        }

    });


const jokeobj = await jokeData.json();
document.getElementById('jokes').innerHTML = jokeobj.joke;
}
