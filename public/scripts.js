// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {
    let check = document.getElementById('opponent');
    let radiorps = document.getElementsByClassName('rps');
    let radiorpsls = document.getElementsByClassName('rpsls');

    if (check.checked == true) {
        $('.shots').show();
    } else {
        $('.shots').hide();
    }
}

function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame() {
    let game = $('input[type=radio][name=game]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();

    let baseURL = window.location.href + 'app/';
    let url = baseURL + game + '/play/';

    let response = await fetch(url); //Insert URL for A04 API here
    let result = await response.json();

}