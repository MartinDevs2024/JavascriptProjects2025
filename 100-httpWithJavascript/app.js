const http = new easyHTTP;

//Get Posts
// http.get('http://jsonplaceholder.typicode.com/posts',
// function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//        console.log(response);
//     }
     
// });

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};


//Create Post 
// http.post('http://jsonplaceholder.typicode.com/posts',
// data , function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//        console.log(response);
//     }
// });
//Update Post
// http.put('http://jsonplaceholder.typicode.com/posts/1',
//  data, function(err, response){
//      if(err){
//         console.log(err);
//      }else{
//        console.log(response);
//      }
//  });
//DELETE post
http.delete('http://jsonplaceholder.typicode.com/posts/1',
function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});