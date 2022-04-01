const button = document.getElementById("button");

button.addEventListener("click", () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title : "A new post",
        body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        userId: 1
      })
      .then(res => {
          console.log(res);
          return res;
      })
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
});