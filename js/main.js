// Filter Navbar With Search Bar
const searchBar = document.getElementById("search-bar");
const navBar = document.getElementById("nav-bar");
const navLinks = navBar.getElementsByTagName("li");
searchBar.addEventListener("keyup",()=>{
    const filter = searchBar.value.toLowerCase();
    for(let i = 0 ; i < navLinks.length ; i++){
        const linkValue = navLinks[i].innerText.toLowerCase();
        if(linkValue.includes(filter)){
            navLinks[i].style.display = '';
        }
        else{
            navLinks[i].style.display = 'none';
        }
    }
})
// Navbar Anmation
let absDiv = document.getElementById("absDiv");
const servicesNav = document.getElementById("nav");
const servicesLinks = servicesNav.getElementsByTagName("button");
function raplaceBtnClass(btnIndex){
    for(let i = 0 ; i < servicesLinks.length ; i++){
        if (i != btnIndex){
            servicesLinks[i].classList.remove("text-dark")
            servicesLinks[i].classList.add("text-light")
        }
    }
}
servicesLinks[0].addEventListener("click",() =>{
    absDiv.className = '';
            servicesLinks[0].classList.add("text-dark")
            absDiv.classList.add("btn-1-selected")
            servicesLinks[0].classList.remove("text-light")
            raplaceBtnClass(0);
})
servicesLinks[1].addEventListener("click",() =>{ 
            absDiv.className = '';
            servicesLinks[1].classList.add("text-dark")
            absDiv.classList.add("btn-2-selected")
            servicesLinks[1].classList.remove("text-light")
            raplaceBtnClass(1);
})
servicesLinks[2].addEventListener("click",() =>{
    absDiv.className = '';
            servicesLinks[2].classList.add("text-dark")
            absDiv.classList.add("btn-3-selected")
            servicesLinks[2].classList.remove("text-light")
            raplaceBtnClass(2);
})
 