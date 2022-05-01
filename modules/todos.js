import {addDeletetodo} from './addDeletetodo';
import {saveToDo, saveCheck, load} from './local';

function todos(pointAreaSelector, pointSubmitBtnSelector, pointsAreaSelector, pointDoneSelector, pointDeleteBtnSelector, textPointSelector, allXPSelector, moneyAreaSelector){
    const pointArea = document.querySelector(pointAreaSelector),
          pointSubmitBtn = document.querySelector(pointSubmitBtnSelector),
          pointsAreaInPage = document.querySelector(pointsAreaSelector),
          fromStorage = localStorage.getItem('todoLoc');

    if(fromStorage){
        document.querySelector('.points__list').innerHTML = fromStorage;    
    }
    load();
    
    pointSubmitBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(pointArea.value === '' || pointArea.value === ' '){

        }else{
            let point = document.createElement('li');

            point.innerHTML = `
                <div class="points__list-item-left">
                    <input id="done" class="point__done" type="checkbox">
                    <span class="point__list-textpoint">${pointArea.value}</span>
                </div>
                <div class="points__list-item-right">
                    <button class="point__delete"><img class="point__delete-img" src="images/point-delete.png" alt="point-delete"></button>
                </div>
            `;
            point.classList.add('points__list-item');
            pointsAreaInPage.append(point);
            pointArea.value = '';
            addDeletetodo(pointDoneSelector, pointDeleteBtnSelector, textPointSelector, allXPSelector, moneyAreaSelector);
            saveCheck();
            saveToDo();
        }
    });
}

export default todos;

