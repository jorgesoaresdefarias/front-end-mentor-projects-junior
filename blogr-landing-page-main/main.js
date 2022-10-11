const product = document.querySelector('.wrapper__header .header .header__left .product');
const company = document.querySelector('.wrapper__header .header .header__left .company');
const connect = document.querySelector('.wrapper__header .header .header__left .connect');

let isProductOpen = false;
let isCompanyOpen = false;
let isConnectOpen = false;

function openProduct() {
    if(!isProductOpen) {
        product.style.display = 'block'
        isProductOpen = true;
    }else {
        product.style.display = 'none'
        isProductOpen = false;
    }
}
function openCompany() {
    if(!isCompanyOpen) {
        company.style.display = 'block'
        isCompanyOpen = true;
    }else {
        company.style.display = 'none'
        isCompanyOpen = false;
    }
}
function openConnect(){
    if(!isConnectOpen) {
        connect.style.display = 'block'
        isConnectOpen = true;
    }else {
        connect.style.display = 'none'
        isConnectOpen = false;
    }
}

let isMenuMobileOpen = false;
function showMenuMobile(){
    if(!isMenuMobileOpen) {
        document.querySelector('.wrapper__header .header__mobile .card').style.display = 'block'
        isMenuMobileOpen = true;
    }else {
        document.querySelector('.wrapper__header .header__mobile .card').style.display = 'none'
        isMenuMobileOpen = false;
    }
}

let isMobileProductOpen = false;
let isMobileCompanyOpen = false;
let isMobileConnectOpen = false; 

function mobileProduct(){
    if(!isMenuMobileOpen) {
        document.querySelector('.wrapper__header .header__mobile .card').style.display = 'block'
        isMenuMobileOpen = true;
    }else {
        document.querySelector('.wrapper__header .header__mobile .card').style.display = 'none'
        isMenuMobileOpen = false;
    }
}