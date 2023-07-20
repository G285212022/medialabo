
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// ボタンを押した後の処理をする関数 hantei() の定義
let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei);

function hantei() {
    let a3 = document.querySelector('p#result');
    let i = document.querySelector('input[name="su"]');
    let su = i.value;
    let a1 = document.querySelector('span#kaisu'); 
    let a2 = document.querySelector('span#answer');
    a1.textContent = kaisu; 
    a2.textContent = su;

    console.log(kaisu + "回目の予想:" + su);
    if(kaisu < 4 && kotae == su){
        a3.textContent = "正解です.おめでとう！";
    }else if(kaisu < 4 && kotae > su){
        a3.textContent = "まちがい.答えはもっと大きいですよ";
    }else if(kaisu < 4 && kotae < su){
        a3.textContent = "まちがい.答えはもっと小さいですよ";
    }else{
        a3.textContent = "答えは" + kotae + "でした.すでにゲームは終わっています.";
    }
    if(kaisu < 4){
        kaisu = kaisu + 1;
    }
}