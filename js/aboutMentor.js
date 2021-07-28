setTimeout(() => {

    const table = document.getElementById('tBodyDataAboutMentor')
    
    var td = ''
    var tr = ''

    for(data in course) {
        
        td += `<td>${course[data].course}</td>`
        td += `<td>${course[data].mentor}</td>`
        td += `<td>${course[data].user}</td>`
        td += `<td>${String(course[data].date).substring(0,16)}</td>`
        td += `<td>${course[data].price}</td>`
        td += `<td>${course[data].status}</td>`
        tr += `<tr>` + td 
        td = ""

    }
    table.innerHTML = tr    
}, 2000);
