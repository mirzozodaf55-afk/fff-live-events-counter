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




var lineHolder = document.querySelector('#line-holder, .line-holder')
if (lineHolder) {
    var entries = lineHolder.querySelectorAll('img[width="20"]')
    entries.forEach(entry => {
        if (entry.parentElement) {
            var title = entry.parentElement.querySelector('div'), count = entry.parentElement.querySelector('span')
            title = title ? title.innerText.trim().toLowerCase() : ''
            count = count ? parseInt(count.innerText.trim().toLowerCase()) : ''

            if (title && !isNaN(count)) {

                result.count.live += count

                // football
                if (title == 'футбол') result.count.football = count

                // hockey
                else if (title == 'хоккей') result.count.hockey = count
                
                // basketball
                else if (title == 'баскетбол') result.count.basketball = count   
                
                // volleyball
                else if (title == 'волейбол') result.count.volleyball = count

                // tennis
                if (title == 'теннис') result.count.tennis = count

                // table tennis
                if (title == 'настольный теннис') result.count.tableTennis = count

            }

        }
    })
} else {
    result.message = 'События не найдены'
}

result;