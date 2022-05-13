const form  = document.getElementById("form");
const input = document.getElementById("input");
const toDoList = document.getElementById("toDoList");

const savedEls = JSON.parse(localStorage.getItem('toDoArray'));

if(savedEls){
    savedEls.forEach(el=>{
        addToDoEl(el);
    });
}

form.addEventListener('submit', (e) =>{

    addToDoEl();
    
});

function addToDoEl(el){
    let toDoText = input.value;

    if(el){
        toDoText = el.text;
    }

    if(toDoText){
        const toDoEl = document.createElement("li");

        if(el && el.completed){
            toDoEl.classList.add("completed");
        }

        toDoEl.innerHTML = toDoText;

        
        toDoEl.addEventListener("click", () =>{
            toDoEl.classList.toggle('completed');
            updateLocalStorage();
        });

        toDoEl.addEventListener("contextmenu", (e) =>{
            toDoEl.remove();

            updateLocalStorage();
        });

        toDoList.appendChild(toDoEl);

        input.value ='';

        updateLocalStorage();
    }
}

function updateLocalStorage(){
    const toDoListEL = document.querySelectorAll("li");

    const toDoArray = [];

    toDoListEL.forEach(toDoEl => {
        toDoArray.push({
            text: toDoEl.innerText,
            completed: toDoEl.classList.contains("completed")
        });
    });

    localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
}