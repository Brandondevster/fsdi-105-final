function displayCards(aPet){
    let petsDiv=document.getElementById("pets");
    let tmp=`<div id="${aPet.id}" class="bg"> <h1>${aPet.name}</h1> <p>Age: ${aPet.age}</p> <p>Gender: ${aPet.gender}</p> <p>Breed: ${aPet.breed}</p> <p>Size: ${aPet.size}</p> <p>Service: ${aPet.service}</p> <p>Owner: ${aPet.owner}</p> <p>Phone: ${aPet.phone}</p> <button onclick="deletePet(${aPet.id});">Delete</button> 
    `;
    petsDiv.innerHTML+=tmp;
}