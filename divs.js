const items = [];
// get incremented id for the next div element
const increment = () => {
    increment.counter = typeof increment.counter == 'undefined' ? 0 : increment.counter + 1;
    return increment.counter;
};
const letters = '0123456789ABCDEF';
const getRandomColor = () => [0, 1, 2, 3, 4, 5].reduce(acc => acc + letters[Math.floor(Math.random() * 16)], '#');

const addItem = () => {
    const id = increment();
    const newDiv = {};
    newDiv.innerHTML = `<span id="buttons">
        <button type="button" onclick="addItem()">Add Item</button>
        <button type="button" onclick="removeItem(${id})">Remove</button>
      </span>`;
    newDiv.id = `item_${id}`;
    newDiv.backgroundColor = getRandomColor();
    items.push(newDiv);
    drowDivs(newDiv.id);
};
const removeItem = (id) => {
    const item = document.getElementById(`item_${id}`);
    item.parentNode.removeChild(item);
    if (document.getElementsByTagName('SPAN').length === 0) {
        document.getElementById('addItem').style.visibility = 'visible';
    }
};
const drowDivs = id => items.reduce((acc, curr) => {
    acc = document.createElement('div');
    if (curr.id === id) {
        acc.innerHTML = curr.innerHTML;
        acc.setAttribute('id', `${id}`);
        acc.style.backgroundColor = curr.backgroundColor;
        document.getElementById('addItem').style.visibility = 'hidden';
        document.getElementById('items').appendChild(acc);
    }
}, null);
