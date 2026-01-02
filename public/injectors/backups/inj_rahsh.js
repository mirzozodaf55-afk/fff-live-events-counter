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




var leftPanel = document.getElementById('event_view_left'), liveEventCount = document.getElementById('liveEventCount')
if (liveEventCount) {
    liveEventCount.click()
    result.count.live = liveEventCount.innerText.trim()
}

if (leftPanel) {
    var sports = leftPanel.querySelectorAll('a')
    sports.forEach(sport => {
        var title = sport.title.trim().toLowerCase()
        var parts = sport.innerText.trim().split('(')
        if (parts.length > 1 && !isNaN(parseInt(parts[1]))) {
            var parsed = parseInt(parts[1])

            // football
            if (title == 'футбол') result.count.football = parsed

            // hockey
            else if (title == 'хоккей') result.count.hockey = parsed
            
            // basketball
            else if (title == 'баскетбол') result.count.basketball = parsed   
            
            // volleyball
            else if (title == 'волейбол') result.count.volleyball = parsed

            // tennis
            if (title == 'теннис') result.count.tennis = parsed

            // table tennis
            if (title == 'настольный теннис') result.count.tableTennis = parsed

        }
    })
} else {
    result.message = 'События не найдены'
}


result;