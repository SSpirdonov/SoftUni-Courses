function addItem() {
    // Прочитаме входните полета input 0 и 1 и ги присвояваме на две променливи
    let inpText  = document.getElementById('newItemText' ).value;
    let inpValue = document.getElementById('newItemValue').value;
    // Ако не са празни извикваме функцията  onCLick 

    if ( inpText !== '' && inpValue !== '') {
        onClick();
    }
    //----------------------FUNCTIONS-------------------------------------
    // Вътре в нея създаваме / createElement / нов елемент от тип option и му присвояваме стойности за value и textContent
    function onClick() {
        let newOption = document.createElement('option');
        newOption.textContent = inpText ;
        newOption.value = inpValue ;
        document.getElementById('menu').appendChild(newOption);
        document.getElementById('newItemText' ).value = '';
        document.getElementById('newItemValue').value = '';
    }
    
    // Добавяме новия елемент към <select>, който е с id 'menu'
    // Изтриваме стойностите от двете входни полета
}