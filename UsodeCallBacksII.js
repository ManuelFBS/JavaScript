function primero(segundo) {
        // console.log('PRIMERO');
        setTimeout(function() {
                console.log('PRIMERO');
                segundo();
        }, 3000);
}
//
function segundo() {
        console.log('SEGUNDO');
}

primero(segundo);
// segundo();