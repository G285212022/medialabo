let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
	let i = document.querySelector('input[name="id"]');
	let id = i.value;
	console.log(id);
    let url;
    if(id === '1'){
        const id1 = '360630';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '2'){
        const id1 = '524901';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '3'){
        const id1 = '993800';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '4'){
        const id1 = '1816670';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '5'){
        const id1 = '1850147';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '6'){
        const id1 = '1880252';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '7'){
        const id1 = '2147714';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '8'){
        const id1 = '2643743';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '9'){
        const id1 = '2968815';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '10'){
        const id1 = '3451189';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '11'){
        const id1 = '5128581';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }
    if(id === '12'){
        const id1 = '5368361';
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id1 + '.json';
    }

    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);
}

function showResult(resp) {
    let data = resp.data;

    if(typeof data ==='string') {
        data = JSON.parse(data);
    }
    console.log(data);
    let h1 = document.querySelector('span#ido'); 
    h1.textContent = data.coord.lon;
    h1 = document.querySelector('span#keido'); 
    h1.textContent = data.coord.lat;
    h1 = document.querySelector('span#tenki'); 
    for(let n of data.weather){
        h1.textContent = n.description;
    }
    h1 = document.querySelector('span#saitei'); 
    h1.textContent = data.main.temp_min;
    h1 = document.querySelector('span#saikou'); 
    h1.textContent = data.main.temp_max;
    h1 = document.querySelector('span#situdo'); 
    h1.textContent = data.main.humidity;
    h1 = document.querySelector('span#fuusoku'); 
    h1.textContent = data.wind.speed;
    h1 = document.querySelector('span#fuukou'); 
    h1.textContent = data.wind.deg;
    h1 = document.querySelector('span#tosi'); 
    h1.textContent = data.name;
}


function showError(err){
    console.log(err);
}

function finish() {
    console.log(finish);
}












// let d = document.querySelector('#print');
// d.addEventListener('click', sendRequest);

// function sendRequest() {

//   let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';

//   axios.get(url)
//       .then(showResult)   
//       .catch(showError)   
//       .then(finish);      
// }

// function showResult(resp) {
//   let data = resp.data;

//   if (typeof data === 'string') {
//       data = JSON.parse(data);
//   }

//   console.log(data);

//   console.log(data);
// }

// function showError(err) {
//   console.log(err);
// }

// function finish() {
//   console.log('Ajax 通信が終わりました');
// }
