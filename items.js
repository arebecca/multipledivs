class Item {
    constructor(){
        this.items = [];
    }

    addItem() {
        console.log(this.getRandomColor());
        const newItem = {};
        newItem.backgroundColor = this.getRandomColor();
        this.items.push(newItem);
        this.drowDivs();
    }

    drowDivs() {
        console.log("mtaa stexxx");
       document.getElementById("items").innerHTML = " ";
        this.items.map((item,index) => {
            console.log(index,"baaaaa");
            let newDiv = document.createElement('div');
            newDiv.innerHTML =`<span id="buttons">
            <button type="button" onclick="addItem()">Add Item</button>
        <button type="button" onclick="() => console.log('fdjkfj')|| this.removeItem(${index})">Remove</button>
            </span>`
            newDiv.setAttribute('id',`item_${index}`);
            newDiv.style.backgroundColor = item.backgroundColor;
            document.getElementById('addItem').style.visibility = 'hidden';
            document.getElementById('items').appendChild(newDiv)
        })
    }

    removeItem(id) {
        console.log("fgfgfgfgfg");
        items.map((item,index) => {
            if(index === id){
                items.splice(index,1)
            }
        });
        this.drowDivs();
        if(document.getElementsByTagName("SPAN").length === 0){
            document.getElementById('addItem').style.visibility = 'visible';
        }
    }

    getRandomColor() {
        console.log("tesst");
        const letters = '0123456789ABCDEF';
        return [0, 1, 2, 3, 4, 5].reduce(acc => acc + letters[Math.floor(Math.random() * 16)], '#');
    }
}

let item = new Item();
const addItem =() => console.log(46465) || item.addItem();

