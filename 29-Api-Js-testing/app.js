const baseURL = 'https://hp-api.herokuapp.com/api/characters';
const memberList = document.getElementById('memberList');
const searchBar = document.getElementById("searchBar");
let members = [];

searchBar.addEventListener('keyup', (e) =>{
    const searchstring = e.target.value.toLowerCase();
    const filterMembers = members.filter(character => {
        return character.actor.toLowerCase().includes(searchstring) ||
               character.name.toLowerCase().includes(searchstring);
    });
     displayMembers(filterMembers);
});


const loadMembers = async () => {
    try { 
        const res = await fetch(baseURL);
        members = await res.json();
        displayMembers(members);
        console.log(members);
    }catch(err) {
        console.log(err)
    }
} 

const displayMembers = (members) => {
    const htmlString = members.map((member) => {
        return `
        <div class="col-md-3">    
        <div class="card">
        <img class="card-img-top" src="${member.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${member.actor}</h5>
          <p class="card-text">${member.name}</p>
          <h3 class="card-title">${member.dateOfBirth}</h3>
          <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
       </div>`;
    }).join('');
    memberList.innerHTML = htmlString;
} 
loadMembers();