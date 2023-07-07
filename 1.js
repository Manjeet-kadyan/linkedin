const profile = document.querySelector(".online");
const viewMenu = document.querySelector(".profile-menu-wrap");

function toggleSettings(){
   
    viewMenu.classList.toggle("open-menu")
    console.log(viewMenu)
}

const showMore =document.getElementById("showMoreLink");
const sideActivity = document.querySelector(".sidebar-activity");
function showMoreLink(){
    sideActivity.classList.toggle("open-sidebar")
    if(sideActivity.classList.contains("open-sidebar")){
        showMore.innerHTML = 'Show Less <b>-</b>'
    }
    else{
        showMore.innerHTML = 'Show More <b>+</b>'
    }
}