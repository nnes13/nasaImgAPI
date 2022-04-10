document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
  let date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=LfSAHEg0CtF0Ai9jfbiaukj8tIpHZGR2euBiW4yw&date=${date}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url;
        document.querySelector('h2').innerText = data.title;
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

