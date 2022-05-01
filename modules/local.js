function saveToDo(){
    localStorage.setItem('todoLoc', document.querySelector('.points__list').innerHTML);
}

function load(){    
    let checked = localStorage.getItem('ok');
    if (checked === 'true') {
        document.querySelectorAll("#done").forEach(item => {
            if(item.classList.contains('checke')){
                item.setAttribute('checked','checked');
            }
            else{
                item.removeAttribute('checked','checked');
            }
        }) 
    }
}

function saveCheck(){
    document.querySelectorAll('#done').forEach(item => {
        if(item.checked){
            item.classList.add('checke');
            localStorage.setItem('ok', true);
        }
        else{
            item.classList.remove('checke');
            localStorage.setItem('ok', true);
        }
    });
}

export {saveToDo, saveCheck, load};
