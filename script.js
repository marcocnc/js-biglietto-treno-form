const buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', function(){
    
    const userName = document.getElementById('nameuser').value;
    const chilometers = parseInt(document.getElementById('km').value);
    const range = document.getElementById('agerange').value;
    console.log(userName, chilometers);

    const priceKm = 0.21;
    const discount20 = 20;
    const discount40 = 40;

    const priceTicketStandard = chilometers * priceKm;
    

    if(range == 'minorenne'){
        const priceDiscounted20 = priceTicketStandard * discount20 / 100;
        const priceTicketMin = priceTicketStandard - priceDiscounted20;
        console.log(priceTicketMin);
    }else if(range == 'over65'){
        const priceDiscounted40 = priceTicketStandard * discount40 / 100;
        const priceTicketOver = priceTicketStandard - priceDiscounted40;
        console.log(priceTicketOver);
    }else{
        console.log(priceTicketStandard);
    }
})