// const getUser = (id, cb) =>{
//     const user = {
//         name: "Luciano",
//         id:id //Se puede poner solamente id, ya que al tener el mismo nombre JS entiende que es id = id;
//     }
//     if(id == 2) cb('user id 2', user);
//     else cb(null, user)
// }

// getUser(1, function(error, user){
//     if(error){
//         return console.log(error);
//     } else {
//         console.log(`User name is ${user.name}`);
//     }
// });

//  OTRO EJEMPLO
const users = [{
    id:1,
    name:"Pedro"
},{
    id:2,
    name:"Laura"
}, {
    id:3,
    name:"Carlos"
}];

const emails = [{
    id:1,
    email:"Pedro@mail.com"
},{
    id:2,
    email:"Laura@mail.com"
}]

const getUser2 = (id, cb) => {
    const user = users.find(user => user.id === id);

    if(user == undefined){
        cb(`Not exist a user with ID ${id}`);
    } else {
        cb(null, user);
    }
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id === user.id);
    
    if(!email ) cb(`Not exist a email with ID ${user.id}`);
    else  cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    });
}

getUser2(2,(error, user) => {
    if(error) console.log(error);
    else getEmail(user, function(error, res){
        if(error){
            return console.log(error);
        } else {
            console.log(res);
        }
    })
})