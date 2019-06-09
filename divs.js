const items = [];
// get incremented id for the next div element
/*const increment = () => {
    increment.counter = typeof increment.counter == 'undefined' ? 0 : increment.counter + 1;
    return increment.counter;
};*/
const letters = '0123456789ABCDEF';
const getRandomColor = () => [0, 1, 2, 3, 4, 5].reduce(acc => acc + letters[Math.floor(Math.random() * 16)], '#');

const addItem = () => {
    const newDiv = {};
    newDiv.id = '';
    newDiv.backgroundColor = getRandomColor();
    items.push(newDiv);
    drowDivs();
    console.log(items,666666)
};
const removeItem = (id) => {
    items.map((item,index) => {
        if(index === id){
            items.splice(index,1)
        }
    })
    drowDivs();
    if(document.getElementsByTagName("SPAN").length === 0){
        document.getElementById('addItem').style.visibility = 'visible';
    }
};
const drowDivs = () => {
    document.getElementById("items").innerHTML ="";
    items.map((item,index) => {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<span id="buttons">
            <button type="button" onclick="addItem()">Add Item</button>
        <button type="button" onclick="removeItem(${index})">Remove</button>
            </span>`
        newDiv.setAttribute('id',`item_${index}`);
        newDiv.style.backgroundColor = item.backgroundColor;
        document.getElementById('addItem').style.visibility = 'hidden';
        document.getElementById('items').appendChild(newDiv)
    })
};
