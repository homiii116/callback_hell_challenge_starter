const hey = document.querySelector('.hey');

const promiseHey = new Promise((resolve) => {
  // クリックイベントで関数を実行しましょう
  const click = hey.addEventListener('click', function(e) {
    let el = e.currentTarget;
    el.textContent = 'watch me!🧞‍♂️';
  });
  resolve(click)
});

// 以下を.thenでつなぎましょう
// 1. 2秒後に丸くする＆回転させる
promiseHey
  .then((resolve) => {
    const getCircle = el.classList.add('circle');
    setTimeout(() => {
      resolve(getCircle);
    }, 1200);
  })
// 2. 0.5秒後に水色の背景を変える
// 3. 0.25秒後に四角に戻す
// 4. 0.3秒後に背景色を緑にする
// 5. 0.5秒後にフェードアウトする

// エラーのハンドリング処理は、.catchを使い、文字列Error!と表記 & 引数の値のアウトプットをconsole.log()で行います