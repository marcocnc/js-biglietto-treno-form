const buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', function(){
    
    const userName = document.getElementById('nameuser').value;
    const chilometers = parseInt(document.getElementById('km').value);
    console.log(userName, chilometers);

    const priceKm = 0.21;
    const discount20 = 20;
    const discount40 = 40;

    const priceTicketStandard = chilometers * priceKm;
    console.log(priceTicketStandard);

    if(agerange == 'minorenne'){
        const priceDiscounted20 = priceTicketStandard * discount20 / 100;
        console.log(priceDiscounted20);
    }
    if(agerange == 'over65'){
        const priceDiscounted40 = priceTicketStandard * discount40 / 100;
        console.log(priceDiscounted40);
    }
})