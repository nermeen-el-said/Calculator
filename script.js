// variable
const colculatorContainer = document.getElementById('continer');
const displayArea= document.getElementById('display-area');
// Event Listener
colculatorContainer .addEventListener('click',(e) =>{
    if (e.target.nodeName == 'BUTTON'){
        switch(e.target.textContent){
            case 'AC':
                clear();
                break;
            case 'DE':
                deleteOneValue();
                break;
            case '=':
                evaluate();
                break;
            default:   
                addToDisplayArea(e.target.textContent);
        }
    }
});
// function clear (AC)
function clear() {
    displayArea.textContent = '';
}
// add values to display area
function addToDisplayArea(value) {
    displayArea.textContent = displayArea.textContent + value;
}
// delete one value (DE)
function deleteOneValue() {
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(
        0,
        currentContent.length - 1
    );

}
// equal
function evaluate(){
    try{
        let colculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = colculation;
    }
    catch{
        displayArea.textContent = 'error';
        console.error(error);
    }
}