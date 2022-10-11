const tip_amount = document.querySelector('.wrapper .card .card_result .amount .tip');
const total_amount = document.querySelector('.wrapper .card .card_result .amount .total');


const bill = document.querySelector('.wrapper .card .bill .bill__val');
const number = document.querySelector('.wrapper .card .bill .number__people');

let porcentagem = 0;

function reset() {
    tip_amount.innerHTML = "$0.00";
    total_amount.innerHTML = "$0.00";
}

function set(porcent) {
    porcentagem = porcent;
    doCalc();
}

function doCalc() {
    let billValue = bill.value;
    let numberValue = number.value;
 
    if(billValue == 0){
        document.querySelector('.wrapper .card p .bill__span').style.display = "block";
        bill.style.outline = "2px solid red";
        return 0;
    }else {
        document.querySelector('.wrapper .card p .bill__span').style.display = "none"
        bill.style.outline = "";
    }

    if(numberValue == 0){
        document.querySelector('.wrapper .card p .number__span').style.display = "block";
        number.style.outline = "2px solid red";
        return 0;
    }else {
        document.querySelector('.wrapper .card p .number__span').style.display = "none"
        number.style.outline = "";
    }


    let tipValue = (billValue * (porcentagem/100));
    console.log(tipValue);
    let finalValue = parseFloat(billValue) + parseFloat(tipValue);

    document.querySelector('.wrapper .card .card_result .amount .tip').innerHTML = "$"+(tipValue/numberValue).toFixed(2);
    document.querySelector('.wrapper .card .card_result .amount .total').innerHTML = "$"+(finalValue/numberValue).toFixed(2);
}