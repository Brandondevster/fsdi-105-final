console.log("register");
let salon={
    name:"Fashion Pet",
    address:{
        street:"University",
        number:"758-k",
        zip:"22569",
        state:"CA",
        city:"San Diego"
    },
    hours:{
        open:"9:00am",
        close:"20:00pm"
    },
    pets:[]
}
//create three pets using constructor
let x=0;
class Pet {
    constructor(name, age, gender, breed, size, service, ownerName, contactPhone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.size = size;
        this.service = service;
        this.owner = ownerName;
        this.phone = contactPhone;
        this.id = x++;

}
}
    let scooby=new Pet("Scooby", 14, "Male", "German Shepard", 55, "Grooming", "Shaggy", "555-555-5555");
    let scrappy=new Pet("Scrappy", 10, "Female", "Hound", 40, "Nails", "Shaggy", "555-555-5555");
    let scratchy=new Pet("Scratchy", 11, "Male", "Poodle", 35, "Shampoo", "Shaggy", "555-555-5555");
    salon.pets.push(scooby,scrappy,scratchy);
    console.log(salon.pets);
    displayCards(scooby);
    displayCards(scrappy);
    displayCards(scratchy);
    //get the values from the input
    let txtName=document.getElementById("petName");
    let txtAge=document.getElementById("petAge");
    let txtGender=document.getElementById("petGender");
    let txtBreed=document.getElementById("petBreed");
    let txtSize=document.getElementById("petSize");
    let txtService=document.getElementById("petService");
    let txtOwner=document.getElementById("ownerName");
    let txtPhone=document.getElementById("ownerPhone");
    
    
    



function register(){
console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtSize.value,txtService.value,txtOwner.value,txtPhone);

let newPet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtSize.value,txtService.value,txtOwner.value,txtPhone.value);
salon.pets.push(newPet);
console.log(newPet);
console.log(salon.pets);
displayCards(newPet);
clear();
}
function clear(){
    txtName.value = "";
    txtAge.value = "";
    txtGender.value = "";
    txtBreed.value = "";
    txtSize.value = "";
    txtService.value = "";
    txtOwner.value = "";
    txtPhone= "";
}
   
function simpleDisplay(){
    console.log(salon.pets[0].name);

}

function deletePet(petId){
    console.log("Delete pet "+petId);
    //search the pet
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        if(petId===pet.id){
            indexDelete=i;
        }
    }
    //delete from html
    document.getElementById(petId).remove();
    //delete from the array
    salon.pets.splice(indexDelete,1);
}

function searchPet(){
    let searchString=document.getElementById("txtsearchPet").value;
    for(let i=0;i<salon.pets.length;i++){
        if(searchString==salon.pets[i].name){
            document.getElementById(salon.pets[i].id).classList.add("highlight");
        }
    }
    console.log(searchString);
}

