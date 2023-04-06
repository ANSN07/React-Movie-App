fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const completed = json.reduce((count, item) => {
      if (item.completed) count++;
      return count;
    }, 0);
    console.log(completed);
  })
  .catch(function (err) {
    console.log(err);
  });
