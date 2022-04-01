/*
/* Promesa explicita */
const getName = async () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("Luciano");
        }, 1000);
    })
}

const saludar = async() => {
    const nombre = await getName();
    return `Hola ${nombre}`;
}

saludar().then(res=>console.log(res)).catch(error => console.error(error));

/* Promesa implicita */


const users = [{id:1,name:"Pedro"}, {id:2,name:"Laura"}, {id:3,name:"Carlos"}];
const emails = [{id:1,email:"Pedro@mail.com"}, {id:2,email:"Laura@mail.com"}];


const getUser = async (id) => {
    const user = users.find(user => user.id === id);
    
    if(user == undefined){
        throw new Error(`Not exist a user with ID ${id}`);
    }
    
    return user;
    
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id === user.id);
    
    if(email == undefined){
        throw(`Not exist a email with ID ${user.id}`);
    }

    return ({
        id: user.id,
        name: user.name,
        email: email.email
    });
}

const getInfo = async(id) =>{
    try{
        const user = await getUser(id);
        const res = await getEmail(user);
        return `${res.name} el mail es ${res.email}`
    }catch(error){
        console.log(error);
    }

}

getInfo(1).then(res => console.log(res));

getUser(2).then(res=> getEmail(res)).then(res => console.log(res)).catch(error=>console.log(error));