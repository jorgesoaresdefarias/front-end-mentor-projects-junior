var url = 'https://api.adviceslip.com/advice';
window.onload(searchAdvice());
function searchAdvice() {
    let data  = getAPI(url);
    let advice = JSON.parse(data);

    var idAdvice = advice.slip.id;
    var adviceText = advice.slip.advice;
    document.querySelector('.advice_number').innerHTML = "ADVICE #" + idAdvice;
    document.querySelector('.advice').innerHTML = `"${adviceText}"`;
    console.log(idAdvice);
    console.log(adviceText);
}

function getAPI(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}