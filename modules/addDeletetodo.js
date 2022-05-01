import {saveToDo, saveCheck} from './local';

function addDeletetodo(pointDoneSelector, pointDeleteBtnSelector, textPointSelector){

    const pointDone = document.querySelectorAll(pointDoneSelector),
          pointDeleteBtn = document.querySelectorAll(pointDeleteBtnSelector),
          textPoint = document.querySelectorAll(textPointSelector);

    pointDeleteBtn.forEach(item =>{
        item.addEventListener('click', (i) =>{
            let parentDelete = item.parentElement;
            parentDelete.parentElement.remove();
            saveCheck();
            saveToDo();  
        });
    });

    for (let i = 0; i < pointDone.length; i++) {
        pointDone[i].onclick = function() {
            textPoint[i].classList.toggle('line');
            if(textPoint[i].classList.contains('line')){
                saveCheck();
                saveToDo();
            }else{
                saveCheck();
                saveToDo();
            }
        };
    };
}

export default addDeletetodo;
export{addDeletetodo};
