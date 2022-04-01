const button = document.getElementById("button");

button.addEventListener("click", () => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(res.data.length);
        return res;
    })
    .then(res => {
        const list = document.getElementById("list");
        const fragment = document.createDocumentFragment();
        for(const userInfo of res.data){
            const listElement = document.createElement("li");
            listElement.textContent = `${userInfo.id} - ${userInfo.name}`;
            fragment.appendChild(listElement);
        }
        list.appendChild(fragment);
    })
    .catch(error => console.log(error))
});