//tabs

// function tabs(tabsNameSelector, tabContentSelector, tabParentSelector){

//     const tabsNames = document.querySelectorAll(tabsNameSelector), //названия табов
//           tabContent = document.querySelectorAll(tabContentSelector),//то, что будет отображаться
//           tabParent = document.querySelector(tabParentSelector);//обертка для кнопок табов

//     function hideTabContent(){
//         tabContent.forEach(item =>{
//             item.classList.add('hide');
//             item.classList.remove('show');
//         });
//         tabsNames.forEach(item => {
//             item.classList.remove('menu__list-tem_active');
//         });
//     }

//     function showTabContent(i = 0){
//         tabContent[i].classList.add('show');
//         tabContent[i].classList.remove('hide');
//         tabsNames[i].classList.add('menu__list-tem_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabParent.addEventListener('click', function(event){
//         const target = event.target;
//         if(target && target.classList.contains('menu__list-item')){
//             tabsNames.forEach((item, i) => {
//                 if(target == item){
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });
// }

// export default tabs;
