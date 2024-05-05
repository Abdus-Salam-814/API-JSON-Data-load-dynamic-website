// ---------- Photo Fetch

const url = 'https://jsonplaceholder.typicode.com/photos';

function photlod(){
    fetch(url)
    .then(ref => ref.json())
    .then(photos => displayPhoto(photos))
}

function displayPhoto(photos){
  const div = document.getElementById("photo-list");

  for(const photo of photos){
  
    const imgTag = document.createElement('img');
    imgTag.src = `${photo.url}`
    

    div.appendChild(imgTag);

    const p = document.createElement('p');
    p.innerHTML = `
    
    <h2> Albam: ${photo.albumId} </h2>
    <h2> Id: ${photo.id} </h2>
    <h2> Title: ${photo.title} </h2>
    `
    div.appendChild(p);
  }
}