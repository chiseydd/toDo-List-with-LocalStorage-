import todos from './modules/todos';
import addDeletetodo from './modules/addDeletetodo';

window.addEventListener('DOMContentLoaded', function(){

    todos('.points__add-area', '.points__add-submit', '.points__list', '#done', '.point__delete', '.point__list-textpoint', '.all__xp', '.score__point');
    addDeletetodo('#done', '.point__delete', '.point__list-textpoint');

});