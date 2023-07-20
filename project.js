let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
	let i = document.querySelector('input[name="id"]');
	let id = i.value;
	console.log(id); 
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

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
    let h1 = document.querySelector('div#result'); 
    let p1 = document.createElement('p'); 
    p1.textContent = data.coord.lon;
    h1.insertAdjacentElement('beforeend', p1);
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
