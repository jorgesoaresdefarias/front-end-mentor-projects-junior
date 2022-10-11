var isMenuOpen = false;

function showMenu(){
    if(!isMenuOpen){
        document.querySelector(".initial .top .menu__mobile__wrapper .menu__link ").style.display = "flex";
        document.querySelector(".initial .top .menu__mobile__wrapper .triangule").style.display = "flex";
        isMenuOpen = true;
    }else {
        document.querySelector(".initial .top .menu__mobile__wrapper .menu__link ").style.display = "none";
        document.querySelector(".initial .top .menu__mobile__wrapper .triangule").style.display = "none";
        isMenuOpen = false;
    }
}
