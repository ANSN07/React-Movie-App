fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const todoTitles = json.map((item) => item.title);
    console.log(todoTitles);
  })
  .catch(function (err) {
    console.log(err);
  });
