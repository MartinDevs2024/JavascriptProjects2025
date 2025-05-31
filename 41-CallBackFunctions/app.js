const posts = [
    { title: 'Post One', body: 'this is post one'},
    { title: 'Post Two', body: 'this is post two'},

];

//function createPost(post){
//setTimeout(function(){
    //posts.push(post);
//},2000);

//}


//function getPosts(){
    //setTimeout(function(){
    //let output ='';
    //posts.forEach(function(post){
       //output+= `<li>${post.title}</li>`;
       //output+= `<li>${post.body}</li>`;
    //});
    //document.body.innerHTML = output;
   // },1000);
//}

//createPost({title: 'Post Three', body: 'This os post three'});

//getPosts();



function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
    
    }
    
    
    function getPosts(){
        setTimeout(function(){
        let output ='';
        posts.forEach(function(post){
           output+= `<li>${post.title}</li>`;
           output+= `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
        },1000);
    }

createPost({title: 'Post Three', body: 'This os post three'},getPosts);