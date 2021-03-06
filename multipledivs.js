class Item {
    constructor() {
        this.items = [];
    }

    addItem = () => {
        const newItem = {
            backgroundColor: this.getRandomColor()
        };
        this.items.push(newItem);
        this.drowItems();
    };

    drowItems = () => {
        document.getElementById('items').innerHTML = ' ';
        this.items.forEach((item, index) => {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<span id="buttons">
            <button type="button" onclick="addItem()">Add Item</button>
            <button type="button" onclick="removeItem(${index})">Remove</button>
            </span>`;
            newDiv.setAttribute('id', `item_${index}`);
            newDiv.style.backgroundColor = item.backgroundColor;
            document.getElementById('addItem').style.visibility = 'hidden';
            document.getElementById('items').appendChild(newDiv);
        });
        if (document.getElementsByTagName('SPAN').length === 0) {
            document.getElementById('addItem').style.visibility = 'visible';
        }
    };

    removeItem = (id) => {
        this.items.map((item, index) => {
            if (index === id) {
                this.items.splice(index, 1);
            }
        });
        this.drowItems();
    };

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        return [0, 1, 2, 3, 4, 5].reduce(acc => acc + letters[Math.floor(Math.random() * 16)], '#');
    }
}

const item = new Item();
const addItem = () => item.addItem();
const removeItem = id => item.removeItem(id);
