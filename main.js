



document.querySelector('form').onsubmit = function () {
    const cardHolder = document.querySelector('#name').value;
    const cardNumber = document.querySelector('#number').value;
    const cardDate = document.querySelector('#date').value;
    const cardCvc = document.querySelector('#cvc').value;
    const toggleOnsubmit = document.querySelector('.form-card-back ');

    function setcheck() {
        if (cardNumber.length === 8 && cardDate.length === 4 && cardCvc.length === 3) {
            document.querySelector('.cardnumber').innerHTML = cardNumber;
            document.querySelector('.carddate').innerHTML = cardDate;
            document.querySelector('.cardcvc').innerHTML = cardCvc;
            toggleOnsubmit.classList.add('toggle');
        }
    }

    document.querySelector('.btn').onclick = function () {
        window.location.reload()
    }

    setcheck()

    //Function for Timeout
    function timeOut() {
        document.querySelector('.enmessage').innerHTML = '';
    }

    function enuOut() {
        document.querySelector('.enumessage').innerHTML = '';
    }

    function edOut() {
        document.querySelector('.edmessage').innerHTML = '';
    }

    function ecOut() {
        document.querySelector('.ecmessage').innerHTML = '';
    }


    //Cardholder
    if (cardHolder === '') {
        document.querySelector('.enmessage').innerHTML = 'Can\'t be blank';
        setTimeout(timeOut, 2000)
    }
    else {
        document.querySelector('.cardname').innerHTML = cardHolder
    }

    //CardNumber
    if (cardNumber === '') {
        document.querySelector('.enumessage').innerHTML = 'Can\'t be blank';
        setTimeout(enuOut, 2000)
    } else if (cardNumber.length > 8 || cardNumber.length < 8) {
        document.querySelector('.enumessage').innerHTML = 'Wrong Format..';
        setTimeout(enuOut, 2000)
    }


    //CardDate
    if (cardDate === '') {
        document.querySelector('.edmessage').innerHTML = 'Can\'t be blank';
        setTimeout(edOut, 2000)
    } else if (cardDate.length > 4 || cardDate.length < 4) {
        document.querySelector('.edmessage').innerHTML = 'Wrong Format..';
        setTimeout(edOut, 2000)
    }

    //CardCvc
    if (cardCvc === '') {
        document.querySelector('.ecmessage').innerHTML = 'Can\'t be blank';
        setTimeout(ecOut, 2000)
    } else if (cardCvc.length > 3 || cardCvc.length < 3) {
        document.querySelector('.ecmessage').innerHTML = 'Wrong Format..';
        setTimeout(ecOut, 2000)
    }

    //Empty/Clear Input Field on Submit
    document.querySelector('#name').value = '';
    document.querySelector('#number').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#cvc').value = '';

    return false;
}
