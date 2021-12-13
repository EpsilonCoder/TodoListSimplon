const ul = document.querySelector('ul');
const form = document.querySelector('form');
const button=document.querySelector('button');
const deleteall = document.querySelector('.deleteall');
const delet = false;


const list = (item, id) => {
    const html =`<li data-id=${id} class="list-group-item"> ${item} 
                      <i class="bi bi-check2-circle"" ></i>
                      <i class="bi bi-trash-fill" ></i>
                  </li>`;
    ul.innerHTML += html;
}


const deliteTodo = (id) => {
    const todos = document.querySelectorAll('li');
    todos.forEach(todo => {
        if(todo.getAttribute("data-id")=== id)
        {
            todo.remove();
        }
    })
};


const unsub= db.collection('todos').onSnapshot(snapshot => 
{    
    snapshot.docChanges().forEach(change => {
        if(change.type==="added")
        {
            list(change.doc.data().item, change.doc.id);
        }else{
            deliteTodo(change.doc.id)
        }
    });
});


// cette fonctionalité permet d'ajouter une nouvelle taches
form.addEventListener('submit', e => {

    e.preventDefault();
    const todo ={
        item : form.todo.value,
        done: false
    }
    
    db.collection('todos').add(todo)
    .then(()=>{console.log("Tu as ajouté la tache suivante ->",todo)})
    .catch((err) => console.log(err));

    form.reset();
});



//la fonctionalité qui va nous permettre de supprimer des taches en cliquant sur l'icone  poubelle
ul.addEventListener('click', e=> {
    e.preventDefault();
    
    if(e.target.tagName === "I" )
    {
        const toRemove=e.target.parentElement.getAttribute('data-id');
        if(e.target.classList.contains("bi-trash-fill"))
        {
        
            db.collection('todos').doc(toRemove).delete()
            .then(()=>console.log("la suppression a ete effectué avec succes"))
            .catch(err => console.log(err));
            
        }
         if(e.target.classList.contains("bi-check2-circle"))
        {
           e.target.parentElement.classList.toggle('checked');
        }
    
    }
});



//Notre button d'ajout
button.addEventListener('click',e => {
    e.preventDefault();
    unsub();
    alert("Felicitation t as bien travaillé aujourd hui ");
});





deleteall.addEventListener('click', e => {
e.preventDefault();

db.collection('todos').get().then(snapshot => 
    {    
        snapshot.docChanges().forEach(change => {
            db.collection('todos').doc(change.doc.id).delete()
            .then(()=>console.log("delete success"))
            .catch(err => console.log(err));
        });
        });      
});