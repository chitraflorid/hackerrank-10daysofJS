document.addEventListener('DOMContentLoaded', () => {
    console.log("im here");
  const btn = document.querySelector('#btn');
    btn.addEventListener('click', handleBtnClick);
    let counter = 0;
    function handleBtnClick(event) {
     counter++;
     btn.innerHTML = counter;
    }
});
