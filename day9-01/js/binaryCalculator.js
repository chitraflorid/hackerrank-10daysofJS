
document.addEventListener('DOMContentLoaded', () => {
    
   document.querySelector('#btns').addEventListener('click', handleBtnsClick);
   let res = document.querySelector('#res');
   let operator = '';
    
     function handleBtnsClick(e) {
        const targetBtn = e.target.getAttribute('id');
         
        switch(targetBtn) {
            case 'btnClr':
                res.textContent = '';
                operator = '';
                console.log("clearing res");
                break;
                
            case 'btn0':
                console.log("0 clicked");
                
                res.textContent += '0';
                console.log("res::" + res.textContent);
                break;
                
            case 'btn1':
                res.textContent += '1';
                break;
            
            case 'btnSum':
                res.textContent += '+';
                operator = '+';

                break;
                
            case 'btnSub':
                res.textContent += '-';
                operator = '-';
                break;
                
            case 'btnMul':
                res.textContent += '*';
                operator = '*';
                break;
                
            case 'btnDiv':
                res.textContent += '/';
                operator = '/';
                break;
                
            case 'btnEql':
                const operands = res.textContent.split(operator);
                const op1 = parseInt(operands[0], 2);
                const op2 = parseInt(operands[1], 2);
                let result;
                switch(operator) {
                    case '+':
                    result = op1 + op2;
                    break;
                        
                    case '*':
                        result = op1 * op2;
                        break;
                    
                    case '/':
                        if (op2) {
                            result = op1 / op2;
                        } else {
                            result = '';
                        }
                        break;
                        
                    case '-':
                        result = op1 - op2;
                        break;
                        
                }
                
                res.textContent = result.toString(2);
                
        }
    }

});
