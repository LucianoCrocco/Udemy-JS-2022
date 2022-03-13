const users = [{id:1,name:"Pedro"}, {id:2,name:"Laura"}, {id:3,name:"Carlos"}];
const emails = [{id:1,email:"Pedro@mail.com"}, {id:2,email:"Laura@mail.com"}];



const getUser2 = (id) => {
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
            console.log(error);
        } else {
            console.log(res);
        }
    })
})