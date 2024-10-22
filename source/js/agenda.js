// Load Contacts on load page
 window.onload = function(){
     loadContacts();
}

function loadContacts(){
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    if(contacts){
        contacts.forEach(contact => {
            addContact(contact);
        });
    }
}

function addContact(contact){
    let contactList = document.getElementById('contactList');
    let contactElement = document.createElement('div');
    contactElement.classList.add('card');
    contactElement.id = `contato-${contact.id}`;
    contactElement.innerHTML = `
                                    <div class="card-header">
                                        <img src="${contact.image}" alt="contact image">
                                    </div>
                                    <div class="card-body">
                                        <h2>${contact.contactName}</h2>
                                        <p>Tel.:${contact.telefone}</p>
                                        <p>E-mail:${contact.email}</p>
                                        <p>Endereco: ${contact.endereco}</p>
                                    </div>
                                    <div class="card-footer">
                                        <button onclick="return  OpenModal_Editar()" disabled>Editar</button>
                                        <button  onclick="return  removeContact('contato-${contact.id}')">Excluir</button>
                                    </div>
                                `;
    contactList.appendChild(contactElement);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const contactName = document.getElementById('contactName').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const image = document.getElementById('image').value;
    const id = new Date().getTime();
    const userOwner = JSON.parse(localStorage.getItem('loginData')).email;
    if(contactName.value == "" || telefone.value == "" || email.value == "" || endereco.value == "" || image.value == ""){
        alert("Preencha todos os campos");
        return;
    }
    
    if(contactName.length < 3){
        alert("Nome do contato deve ter no mínimo 3 caracteres");
        return;
    }

    if(telefone.length < 8){
        alert("Telefone do contato deve ter no mínimo 8 caracteres");
        return;
    }

    if(email.length < 3){
        alert("Email do contato deve ter no mínimo 3 caracteres");
        return;
    }

    if(endereco.length < 3){
        alert("Endereço do contato deve ter no mínimo 3 caracteres");
        return;
    }

    if(image.length < 3){
        alert("Imagem do contato deve ter no mínimo 3 caracteres");
        return;
    }

    if(image.indexOf('http') == -1){
        alert("Imagem do contato deve ser uma URL válida");
        return;
    }

    if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
        alert("Email do contato deve ser um email válido");
        return;
    }
    // verifica se o telefone possui apenas numeros
    if(!/^\d+$/.test(telefone)){
        alert("Telefone do contato deve conter apenas números");
        return;
    }
   
    const data = { contactName, telefone, email, endereco, image, id, userOwner };
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    if(contacts){
        contacts.push(data);
    }else{
        contacts = [data];
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
    addContact(data);
    document.getElementById('contactForm').reset();
});

function removeContact(id){
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    id = id.split('-')[1];
    let newContacts = contacts.filter(contact => contact.id != id);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    console.log(newContacts);
    window.location.reload();
}

// function updateContact(id){
//     let contacts = JSON.parse(localStorage.getItem('contacts'));
//     id = id.split('-')[1];
//     let newContacts = contacts.filter(contact => contact.id != id);
//     localStorage.setItem('contacts', JSON.stringify(newContacts));
//     console.log(newContacts);
//     window.location.reload();
// }