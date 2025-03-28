const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});

// document.getElementById('btn').addEventListener('click', () => {
//     document.getElementById('text').textContent = 'ボタンをクリックしました';
//   });