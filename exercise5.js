fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const uncompleted = json.reduce((arr, item) => {
      if (!item.completed) arr.push({ userId: item.userId, title: item.title });
      return arr;
    }, []);
    console.log(uncompleted);
  })
  .catch(function (err) {
    console.log(err);
  });
