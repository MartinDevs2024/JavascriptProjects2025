const baseURL = 'https://fakestoreapi.com/products';
const productList = document.querySelector("#newProducts");
const searchBar = document.querySelector('#searchBar');
let products = [];

console.log(searchBar)
searchBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();
    const filterProducts = products.filter(character => {
        return character.title.toLowerCase().includes(searchString) ||
               character.category.toLowerCase().includes(searchString);
    });
     displayProducts(filterProducts);
})


const loadProducts = async () => {
   try{
    const res = await fetch(baseURL);
    products = await res.json();
    displayProducts(products);
    console.log(products);
   }catch(err){
       console.log(err)
   }
}

const displayProducts = (products) => {
     const htmlString = products
     .map((product) => {
         return `  
         <div class="col-md-3">    
         <div class="card">
         <img class="card-img-top" src="${product.image}" alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">${product.title}</h5>
           <p class="card-text">${product.description}</p>
           <h3 class="card-title">$${product.price}</h3>
           <a href="#" class="btn btn-primary">Detail</a>
         </div>
       </div>
        </div>        
     `
     }).join('');
    productList.innerHTML = htmlString;
}
loadProducts();