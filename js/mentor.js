setTimeout(() => {

    const table = document.getElementById('tBodyData')
    
    var td = ''
    var tr = ''

    for(data in dataBase) {
        
        td += `<td><img class='pic' src="https://drive.google.com/thumbnail?id=${dataBase[data].photo.split('/')[5]}" alt="Profile"></td>`
        td += `<td>${dataBase[data].name}</td>`
        td += `<td>${dataBase[data].email}</td>`
        td += `<td>${dataBase[data].course}</td>`
        td += `<td>${dataBase[data].student}</td>`
        td += `<td>${dataBase[data].income}</td>`
        td += `<td><span uk-icon="pencil"></span><a href="#modal-overflow" uk-toggle>View</a></td>`
        tr += `<tr>` + td 
        td = ""

    }

    table.innerHTML = tr    
}, 2000);
