  document.addEventListener('DOMContentLoaded', () => {
     document.querySelector('#btn5').addEventListener('click', handleBtnClick);
     const btnMappingHash = {
         'btn1': 'btn2',
         'btn2': 'btn3',
         'btn3': 'btn6',
         'btn6': 'btn9',
         'btn9': 'btn8',
         'btn8': 'btn7',
         'btn7': 'btn4',
         'btn4': 'btn1'
     };
      
    function handleBtnClick(event) {
        const prevVal = {};
        for (const srcBtn in btnMappingHash) {
           const target = document.getElementById(btnMappingHash[srcBtn]);
           const src = document.getElementById(srcBtn);
            
           prevVal[btnMappingHash[srcBtn]] = target.innerText;
           target.innerText = prevVal[srcBtn] ? prevVal[srcBtn] : src.innerText;
        }
     }
  });
