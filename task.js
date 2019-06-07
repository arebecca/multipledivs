let increment = (function () {
    var i = 2;
    return function () {
        return i++;
    }
})();
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
    let t = document.getElementById(`item_${id}`);
    t.parentNode.removeChild(t);
    if(document.getElementsByTagName("SPAN").length === 0){
        document.getElementById('addItem').style.visibility = " visible"
    }
}

