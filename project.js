let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
	let i = document.querySelector('input[name="id"]');
	let id = i.value;
	console.log(id);
  let a = document.querySelector('script#sid'); 
  let c = document.createElement('src'); 
  a.textContent = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';
  c.insertAdjacentElement('afterend', a);
  let d = document.querySelector('div#result'); 
  let e = document.createElement('p'); 
  d.textContent = data;
  e.insertAdjacentElement('afterend', d);
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
