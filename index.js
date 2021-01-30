///Economy increase Handler......

ticketCounter('economy-increase', 'economy-input', true);


///Economy Decrease ......
ticketCounter('economy-decrease', 'economy-input', false);


//First Class Increase ..........
ticketCounter('firstClass-increase', 'firstClass-input', true);

//first class Decrease........
ticketCounter('firstClass-decrease', 'firstClass-input', false);



//function for ticket counting.......
function ticketCounter(eventId, inputId, isIncrease, price) {
    document.getElementById(eventId).addEventListener('click', function () {
        const ticketInput = document.getElementById(inputId);

        const ticketInputNumber = parseInt(ticketInput.value);

        let ticketCount = 0;
        if (isIncrease == true) {
            ticketCount = ticketInputNumber + 1;

        }
        else if (isIncrease == false && ticketInputNumber > 0) {
            ticketCount = ticketInputNumber - 1;
        }
        document.getElementById(inputId).value = ticketCount;

        //Total cost of flight function.......
        flightCost();
    });
}


function flightCost() {
    let firstClassInput = document.getElementById('firstClass-input');

    let firstClassCount = parseInt(firstClassInput.value);

    let economyInput = document.getElementById('economy-input');
    let economyCount = parseInt(economyInput.value);

    const subtotal = firstClassCount * 150 + economyCount * 100;

    const totalVat = (subtotal * 10) / 100;

    const total = subtotal + totalVat;


    document.getElementById('subtotal').innerText = subtotal;

    document.getElementById('totalVat').innerText = totalVat;

    document.getElementById('total').innerText = total;
    


}



////
function bookNow() {
    document.getElementById('hidden-area').style.display = 'none';
    document.querySelector('.confirmation').style.display = 'block';
    let firstClassInput = document.getElementById('firstClass-input').value;
    let economyInput = document.getElementById('economy-input').value;

    document.getElementById('first').innerText = firstClassInput;
    document.getElementById('economy').innerText = economyInput;

    
}
function backAgain(){
    document.getElementById('hidden-area').style.display = 'block';
    document.querySelector('.confirmation').style.display = 'none';
}