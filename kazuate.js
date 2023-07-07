
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let yoso = 4;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei);

function hantei() {
    let a3 = document.querySelector('p#result');
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let i = document.querySelector('input[name="su"]');
    let su = i.value;
    let a1 = document.querySelector('span#kaisu'); 
    let a2 = document.querySelector('span#answer');
    a1.textContent = kaisu; 
    a2.textContent = su;

    
  
  console.log(kaisu + "回目の予想:" + yoso);
    if(kaisu <= 3 && kotae === yoso){
        console.log("正解です.おめでとう！");
        a3.textContent = "正解です.おめでとう！";
    }else if(kaisu <= 3 && kotae > yoso){
        console.log("まちがい．答えはもっと大きいですよ");
        a3 = document.querySelector('p#result');
        a3.textContent = "まちがい．答えはもっと大きいですよ";
    }else if(kaisu <= 3 && kotae < yoso){
        console.log("まちがい．答えはもっと小さいですよ");
        a3 = document.querySelector('p#result');
        a3.textContent = "まちがい．答えはもっと小さいですよ";
    }else{
        console.log("答えは" + kotae + "でした.すでにゲームは終わっています.");
        a3 = document.querySelector('p#result');
        a3.textContent = "答えは" + kotae + "でした.すでにゲームは終わっています.";
    }
    if(kaisu < 4){
        kaisu = kaisu + 1;
    }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}






// let ns = [1,2,3,4];
//   let yoso = 4;

//   for (let i=0; i<ns.length; i=i+1) {
//     console.log(ns[i] + "回目の予想:" + yoso);
//     if(ns[i] <= 3 && kotae === yoso){
//         console.log("正解です.おめでとう！");
//         break;
//     }else if(ns[i] <= 3 && kotae > yoso){
//         console.log("まちがい．答えはもっと大きいですよ");
//     }else if(ns[i] <= 3 && kotae < yoso){
//         console.log("まちがい．答えはもっと小さいですよ");
//     }else{
//         console.log("答えは" + kotae + "でした.すでにゲームは終わっています.");
//     }
//   }
