setTimeout(() => {

    const table = document.getElementById('tBodyDataPayout')
    
    var td = ''
    var tr = ''

    for(data in dataBase) {
        
        td += `<td><img class='pic' src="https://drive.google.com/thumbnail?id=${dataBase[data].photo.split('/')[5]}" alt="Profile"></td>`
        td += `<td>${dataBase[data].name}</td>`
        td += `<td>${dataBase[data].email}</td>`
        td += `<td>${dataBase[data].transfer}</td>`
        td += `<td style = "color:blue">${dataBase[data].status}</td>`
        td += `<td><span uk-icon="pencil"></span><a href="#modal-overflow" uk-toggle>Edit</a></td>`
        td += `<td><span uk-icon="tripadvisor"></span> <a href="#modal-overflow" uk-toggle>View</a></td>`
        tr += `<tr>` + td 
        td = ""

    }
    table.innerHTML = tr    
}, 2000);
