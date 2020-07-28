const hey = document.querySelector('.hey');

const promiseHey = new Promise((resolve) => {
  // クリックイベントで関数を実行しましょう
  hey.addEventListener('click', resolve);
});

// 以下を.thenでつなぎましょう
// 1. 2秒後に丸くする＆回転させる    
// 2. 0.5秒後に水色の背景を変える
// 3. 0.25秒後に四角に戻す
// 4. 0.3秒後に背景色を緑にする
// 5. 0.5秒後にフェードアウトする

promiseHey
  .then((e) => {
    let el = e.currentTarget;
    console.log(el);
    el.textContent = 'watch me!🧞‍♂️';

    setTimeout(() => {
      console.log(el);
      el.classList.add('circle');
    }, 1200);

    setTimeout(() => {
      console.log(el);
      el.classList.add('cean');
    }, 1200+500);

    setTimeout(() => {
      console.log(el);
      el.classList.remove('circle');
    }, 1200+500+250);

    setTimeout(() => {
      console.log(el);
      el.classList.remove('cean');
      el.classList.add('green');
    }, 1200+500+250+300);

    setTimeout(() => {
      console.log(el);
      el.classList.add('fadeout');
    }, 1200+500+250+300+500);  
  })

// エラーのハンドリング処理は、.catchを使い、文字列Error!と表記 & 引数の値のアウトプットをconsole.log()で行います