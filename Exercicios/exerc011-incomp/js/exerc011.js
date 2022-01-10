let adm = window.document.querySelector('input#adm');
let sel = window.document.querySelector('select#adms')
let item = window.document.createElement('option')
let usuarios = new Map();
usuarios.set('Pedro', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Maria', 'Admin');
usuarios.set('Joana', 'Admin');
//item.text = `${usuarios.key}`
//sel.appendChild(item)
//res.innerHTML = `${usuarios}`

function getAdmins(map){
    //let res = window.document.querySelector('div#res')
    let admins =[]
    for ([key, value] of map){
        if (value === 'Admin'){
            admins.push(key)
            //res.innerHTML = `${admins}`
        }
        
    }
    for (i = 0; i < admins.length; i++){
        item.text = `${admins[i]}`
        
    }
    sel.appendChild(item)
    //return admins
}

function adicionar(){
    usuarios.set(adm.value, 'Admin')
    return getAdmins(usuarios)

    /* for (const[identifier, {id, nome}] of usuarios){
        let item = window.document.createElement('option')
        item.text = `${nome}`
        sel.appendChild(item)
        usuarios.set('Admin',adm)
        res.innerHTML = `${getAdmins(usuarios)}` */

}


/* let pessoas = [
    {id: 1, nome: 'Mario'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'joão'},
    {id: 4, nome: 'Marta'}
]
const Admin = new Map()
for (const NewAdm of pessoas){
    const {id} = NewAdm;
    Admin.set(id,{...NewAdm})
    
}
console.log(Admin)

for (const[identifier, {id, nome}] of Admin){
    console.log(nome)
} */