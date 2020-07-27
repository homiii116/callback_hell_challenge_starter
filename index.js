const hey = document.querySelector('.hey');

const promiseHey = new Promise((resolve) => {
  // クリックイベントで関数を実行しましょう
  hey.addEventListener('click', resolve);
});

// 以下を.thenでつなぎましょう

promiseHey
  .then((e) => {
    let el = e.currentTarget;
    el.textContent = 'watch me!🧞‍♂️';
  })
// 1. 2秒後に丸くする＆回転させる
  .then((e) => {
    setTimeout(() => {
      let el = e.currentTarget;
      el.classList.add('circle');
    }, 1200);
  })
// 2. 0.5秒後に水色の背景を変える
  .then((e) => {
    setTimeout(() => {
      let el = e.currentTarget;
      el.classList.add('cean');
    }, 500);
  })
// 3. 0.25秒後に四角に戻す
  .then((e) => {
    setTimeout(() => {
      let el = e.currentTarget;
      el.classList.remove('circle');
    }, 250);
  })
// 4. 0.3秒後に背景色を緑にする
  .then((e) => {
    setTimeout(() => {
      let el = e.currentTarget;
      el.classList.remove('cean');
      el.classList.add('green');
    }, 300);
  })
// 5. 0.5秒後にフェードアウトする
  .then((e) => {
    setTimeout(() => {
      let el = e.currentTarget;
      el.classList.add('fadeout');
    }, 500);
  })

// エラーのハンドリング処理は、.catchを使い、文字列Error!と表記 & 引数の値のアウトプットをconsole.log()で行います