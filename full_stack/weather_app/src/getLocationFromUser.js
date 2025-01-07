export function getLocationFromUser(){
    let location = document.getElementById('location');
    return location.value.trim().toLowerCase(); 
}
