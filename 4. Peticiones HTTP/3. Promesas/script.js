const users = [{id:1,name:"Pedro"}, {id:2,name:"Laura"}, {id:3,name:"Carlos"}];
const emails = [{id:1,email:"Pedro@mail.com"}, {id:2,email:"Laura@mail.com"}];


const getUser = (id) => {
    const user = users.find(user => user.id === id);
    const promise = new Promise((resolve,reject) => {
        if(user == undefined){
            reject(`Not exist a user with ID ${id}`);
        } else {
            resolve(user);
        }
    });
    return promise;
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id === user.id);

        return promise = new Promise((resolve,reject) => {
        if(email == undefined){
            reject(`Not exist a email with ID ${user.id}`);
        } else {
            resolve({
                id: user.id,
                name: user.name,
                email: email.email
            });
        }
    });

}
/*
console.log(getUser(1));

getUser(1).then(data => console.log(data)).catch("Error, no se encontro al usuario");
getUser(5).then(data => console.log(data)).catch(error => console.log(error));
*/

getUser(2).then(user => getEmail(user)).then(res => console.log(res)).catch(error => console.log(error));