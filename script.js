function searchJob(){

let value =
document.querySelector(".search-box input").value;

if(value === ""){
alert("Please enter a job title");
}
else{
alert("Searching for: " + value);
}

}