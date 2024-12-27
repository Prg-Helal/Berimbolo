// Navbar Anmation
let absDiv = document.getElementById("float-div");
const servicesNav = document.getElementById("s-nav");
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
            absDiv.classList.add("btn-float-scon")
            servicesLinks[0].classList.remove("text-light")
            raplaceBtnClass(0);
})
servicesLinks[1].addEventListener("click",() =>{ 
            absDiv.className = '';
            servicesLinks[1].classList.add("text-dark")
            absDiv.classList.add("btn-float-scam")
            servicesLinks[1].classList.remove("text-light")
            raplaceBtnClass(1);
})
servicesLinks[2].addEventListener("click",() =>{
    absDiv.className = '';
            servicesLinks[2].classList.add("text-dark")
            absDiv.classList.add("btn-float-sguard")
            servicesLinks[2].classList.remove("text-light")
            raplaceBtnClass(2);
})
 