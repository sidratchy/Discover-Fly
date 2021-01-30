

//First Class Increase Handler..........
ticketCounter('firstClass-increase', 'firstClass-input', true);

//first class Decrease  Handler........
ticketCounter('firstClass-decrease', 'firstClass-input', false);


///Economy increase Handler......

ticketCounter('economy-increase', 'economy-input', true);


///Economy Decrease Handler......
ticketCounter('economy-decrease', 'economy-input', false);


//function for ticket counting.......
function ticketCounter(eventId, inputId, isIncrease) {
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
        flightCost(inputId);
    });
}

///function for total flight cost......
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



////function for book now button.....
function bookNow() {
    document.getElementById('hidden-area').style.display = 'none';
    document.querySelector('.confirmation').style.display = 'block';
    let firstClassInput = document.getElementById('firstClass-input').value;
    let economyInput = document.getElementById('economy-input').value;

    document.getElementById('first').innerText = firstClassInput;
    document.getElementById('economy').innerText = economyInput;


}

/// function for back button.....
function backAgain() {
    document.getElementById('hidden-area').style.display = 'block';
    document.querySelector('.confirmation').style.display = 'none';
    
}