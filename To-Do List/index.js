let input = document.querySelector(".typetask")
let list = document.querySelector(".ullist-container")

function addtask() {
    let inp = input.value;
    if (inp == "") {
        window.alert("Type any tasks here!..")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inp;    
        list.append(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveData()
    }
    input.value = "";
}

const saveData = ()=>{
    // localStorage.setItem("data",list.innerHTML)
        localStorage.setItem("data",list.innerHTML)
}
const showData = ()=>{
   list.innerHTML = localStorage.getItem("data")
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData()
})
showData()