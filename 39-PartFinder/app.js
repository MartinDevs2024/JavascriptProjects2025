$(document).ready(() => {
    $('#searchForm').on('keyup', (e) => {
        let searchText = $("#searchText").val().toLowerCase();
        getRepairs(searchText);
    });
 });
 
 function getRepairs() {
      fetch('Data/repairs.json')
      .then((res) => res.json())
      .then((data) => {
         let output = '';
         data.forEach(function(repair) {
            output += `
                <ul id="myList">
                   <li>ID: ${repair.id}</li>
                   <li>Brand: ${repair.brand}</li>
                   <li>Type: ${repair.type}</li>
                   <li>Control Board - Repair: $ ${repair.boardPrice}</li>
                   <li>Cooling Fan - Assm: $ ${repair.coolingFanPrice}</li>
                </ul>
            
            `;
         })
         document.getElementById('brands').innerHTML = output;
         
      }); 
 }
 