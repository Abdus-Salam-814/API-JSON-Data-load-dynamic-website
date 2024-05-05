


// .then(res => res.json())
// .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/posts';

function loadData(){
    fetch(url)
    .then(res => res.json())
    
    .then(data =>  display2(data))
    


}
function display2(data){
    const ul =document.getElementById('user-post');
    for(const post of data){
        const setId = post.id;
        // console.log(post.id);
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>Post ID: ${post.id} </h2>
        <h3>Ittle: ${post.title} </h3>
        <h5>Dicription: ${post.body} </h5>

        `;
        ul.appendChild(li);
    };
}


