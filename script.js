const buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', function(){
    
    const userName = document.getElementById('nameuser').value;
    const chilometers = parseInt(document.getElementById('km').value);
    const range = document.getElementById('agerange').value;
    console.log(userName, chilometers);

    const priceKm = 0.21;
    const discount20 = 20;
    const discount40 = 40;

    let priceTicket = chilometers * priceKm;
    
    let offerta = 'Offerta standard';

    if(range == 'minorenne'){
        const priceDiscounted20 = priceTicket * discount20 / 100;
        const priceTicketMin = priceTicket - priceDiscounted20;
        priceTicket = priceTicketMin;
        offerta = 'Sconto Minorenni';
        console.log(priceTicketMin);
    }else if(range == 'over65'){
        const priceDiscounted40 = priceTicket * discount40 / 100;
        const priceTicketOver = priceTicket - priceDiscounted40;
        priceTicket = priceTicketOver;
        offerta = 'Sconto Over 65';
        console.log(priceTicketOver);
    }else{
        console.log(priceTicket);
    }

    // Stampare nome utente
    document.getElementById('utente').innerHTML = userName;

    // Stampare offerta 
    document.getElementById('offerta').innerHTML = offerta;

    // Stampare prezzo
    document.getElementById('prezzobiglietto').innerHTML = priceTicket.toFixed(2);



    
})