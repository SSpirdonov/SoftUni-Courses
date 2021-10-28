function addItem() {
    // Прочитаме входните полета input 0 и 1 и ги присвояваме на две променливи
    let inpText  = document.getElementById('newItemText' );
    let inpValue = document.getElementById('newItemValue');
    // Ако не са празни извикваме функцията  onCLick 

    if ( inpText.value !== '' && inpValue.value !== '') {
        onClick();
    }
    //----------------------FUNCTIONS-------------------------------------
    // Вътре в нея създаваме / createElement / нов елемент от тип option и му присвояваме стойности за value и textContent
    function onClick() {
        let newOption = document.createElement('option');
        newOption.textContent = inpText.value ;
        newOption.value = inpValue.value ;
        document.getElementById('menu').appendChild(newOption);
        inpText.value = '';
        inpValue.value = '';
    }
    
    // Добавяме новия елемент към <select>, който е с id 'menu'
    // Изтриваме стойностите от двете входни полета
}