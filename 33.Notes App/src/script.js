const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const adding = $("button");
const notesContainer = $(".notes-container");


var app = {
    initLocal: function() {
        const datas = JSON.parse(localStorage.getItem("notes"))
        if (datas) {
            for (let i = 0;i<datas.length;i++) {
                this.createNotes(datas[i])
            }
        }
    },
    updateLocal: function() {
        const notesText = $$("textarea")
        const notes = [];

        notesText.forEach(noteText => {
            notes.push(noteText.value);  
        });
        
        localStorage.setItem("notes",JSON.stringify(notes))
        
    },

    createNotes: function(text = "") {
        var note = document.createElement('div');
        note.classList.add("note");
        note.innerHTML = `
            <div class="tools">
                <div class="write">
                    <i class="fas fa-edit"></i>
                </div>
                <div class="remove">
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
            <div class="main">
                <p>${text}</p>
                <textarea name="note" style="width: 400px;height: 400px;">${text}</textarea>
            </div>
            `
        if (text != "") {
            notesContainer.appendChild(note)
        }
        const focusButts = note.querySelector(".write")
        const removeButts = note.querySelector(".remove")
        const textArea = note.querySelector("textarea")
        const main = note.querySelector(".main")

        focusButts.onclick = () => {
            main.classList.toggle("focused")
            textArea.focus()
            if (!main.classList.contains("focused")) {
                let textValue = textArea.value;
                main.firstElementChild.innerHTML = textValue;
            } else {

            }
        }
        
        removeButts.onclick = () => {
            note.remove()
            this.updateLocal()
        }
        textArea.oninput = () => {
            this.updateLocal()  
        }
        return note
    },


    handleEvent: function() {
        //Add
        adding.onclick = () => {
            notesContainer.appendChild(this.createNotes(""));
        }
    },

    

    start: function() {
        this.initLocal();
        this.handleEvent();
    }

        
}
app.start();





