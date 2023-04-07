fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const uncompleted = json
      .filter((item) => !item.completed)
      .map((uncompleted) => {
        return {
          userId: uncompleted.userId,
          title: uncompleted.title,
        };
      });
    console.log(uncompleted);
  })
  .catch(function (err) {
    console.log(err);
  });
