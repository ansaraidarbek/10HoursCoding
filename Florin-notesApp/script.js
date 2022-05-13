const addBtn = document.getElementById("add");

const nts = JSON.parse(localStorage.getItem('notes'));

if(nts){
    nts.forEach(nt=>{
        addNewNote(nt);
   });
}


addBtn.addEventListener("click", ()=>{
    addNewNote();
});

function addNewNote(nt = ''){
    const note = document.createElement("div");
    note.classList.add('note');

    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button class="edit"><i  class="fas fa-edit"></i></button>
            <button class="delete"><i  class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${nt ? '':'hidden'}">
        </div>
        <textarea class=" ${nt ? 'hidden':''}"></textarea>
    </div>
    `;


    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    editBtn.addEventListener("click", ()=>{
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", ()=>{
        note.remove();
        updateLS();
    });


    textArea.addEventListener("input", (e)=>{
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    textArea.value = nt;
    main.innerHTML =marked(nt);

    document.body.appendChild(note);

    function updateLS(){
        const notesText = document.querySelectorAll("textarea");

        const notes= [];

        notesText.forEach(note =>{
            notes.push(note.value);
        });

        localStorage.setItem('notes', JSON.stringify(notes));
    }
}
