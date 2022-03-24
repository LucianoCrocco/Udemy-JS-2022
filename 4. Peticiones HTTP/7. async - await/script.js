const getName = () => {
    return new Promise((resolve, rejected) => {
        resolve("Luciano");
    })
}

console.log(getName());
getName().then(res => console.log(res));