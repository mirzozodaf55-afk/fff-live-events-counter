var result = {
    message: '',
    count: {
        live: 0,
        football: 0,
        hockey: 0,
        basketball: 0,
        tennis: 0,
        tableTennis: 0,
        volleyball: 0 
    },
}


const liElements = document.querySelector('div.assideCon_body.top5.u-display-block ul.sport_menu.sport3.old3.no-touch');



if(liElements){
    var live = document.getElementById('cG')
    var liveCount = parseInt(live.innerText.replace(/[()]/g, ""))
    if(live && !isNaN(liveCount)){
        result.count.live = liveCount;
    }
    var football = liElements.querySelector('li a[data-sportid="1"]')
    if(football){
        var text = football.innerText
        var fbi = text.indexOf('(')
        if(fbi >= 0){
            if(!isNaN(parseInt(text.substring(fbi + 1)))) result.count.football = parseInt(text.substring(fbi + 1))
        }
        
    }
    var hockey = liElements.querySelector('li a[data-sportid="2"]')
    if(hockey){
        var text = hockey.innerText
        var fbi = text.indexOf('(')
        if(fbi >= 0){
            if(!isNaN(parseInt(text.substring(fbi + 1)))) result.count.hockey = parseInt(text.substring(fbi + 1))
        }
        
    }

    var basketball = liElements.querySelector('li a[data-sportid="3"]')
    if(basketball){
        var text = basketball.innerText
        var fbi = text.indexOf('(')
        if(fbi >= 0){
            if(!isNaN(parseInt(text.substring(fbi + 1)))) result.count.basketball = parseInt(text.substring(fbi + 1))
        }
        
    }

    var tennis = liElements.querySelector('li a[data-sportid="4"]')
    if(tennis){
        var text = tennis.innerText
        var fbi = text.indexOf('(')
        if(fbi >= 0){
            if(!isNaN(parseInt(text.substring(fbi + 1)))) result.count.tennis = parseInt(text.substring(fbi + 1))
        }
        
    }
    var tableTennis = liElements.querySelector('li a[data-sportid="10"]')
    if(tableTennis){
        var text = tableTennis.innerText
        var fbi = text.indexOf('(')
        if(fbi >= 0){
            if(!isNaN(parseInt(text.substring(fbi + 1)))) result.count.tableTennis = parseInt(text.substring(fbi + 1))
        }
        
    }

    var volleyball = liElements.querySelector('li a[data-sportid="6"]')
    if(volleyball){
        var text = volleyball.innerText
        var fbi = text.indexOf('(')
        if(fbi >= 0){
            if(!isNaN(parseInt(text.substring(fbi + 1)))) result.count.volleyball = parseInt(text.substring(fbi + 1))
        }
        
    }
}

else {
    result.message = "Событие не найдено"
}

function returnData() {
    return result;
}

returnData()