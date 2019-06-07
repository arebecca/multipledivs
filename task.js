const increment = (() => {
    let i = 2;
    return () => i++;
})();
const letters = '0123456789ABCDEF';
const  getRandomColor = () => [0,1,2,3,4,5].reduce( acc => acc + letters[Math.floor(Math.random() * 16)],'#')

const addItem = ()=> {
    const id = increment();
    let newDiv = document.createElement('div');
    newDiv.innerHTML =`<span id="buttons">
        <button type="button" onclick="addItem()"> Add</button>
        <button type="button" onclick="removeItem(${id})"> Remove</button>
      </span>`;
    newDiv.setAttribute("id", `item_${id}`);
    newDiv.style.backgroundColor = getRandomColor();
    document.getElementById('addItem').style.visibility = "hidden"
    document.getElementById('items').appendChild(newDiv);

}
const removeItem = (id) => {
    let item = document.getElementById(`item_${id}`);
    item.parentNode.removeChild(item);
    if(document.getElementsByTagName("SPAN").length === 0){
        document.getElementById('addItem').style.visibility = "visible"
    }
}
