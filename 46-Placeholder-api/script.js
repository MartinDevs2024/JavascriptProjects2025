let BaseUrl = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = async () => {
    try{
        const res = await fetch(BaseUrl);
        postsMessage = await res.json();
        console.log(postsMessage);
    }
    catch(err) {
        console.log(err);
    }  
}
loadPosts();

//Create Post
const createPost = () => {
    fetch(BaseUrl, {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }, 
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
createPost();

//Update Post
const updatePost = () => {
     fetch(BaseUrl + '/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar201',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; chartset=UTF-8',
        },
     })
     .then((response)=> response.json())
     .then((json) => console.log(json));
}
updatePost();

const deletingPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}
deletingPost


// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=10')
  .then((response) => response.json())
  .then((json) => console.log(json));

  // This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then((response) => response.json())
.then((json) => console.log(json));



