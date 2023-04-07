fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const completedArray = json.reduce((accumulator, item) => {
      if (item.completed) {
        accumulator[item.userId] =
          item.userId in accumulator ? accumulator[item.userId] + 1 : 1;
      }
      return accumulator;
    }, {});
    console.log(completedArray);
  })
  .catch(function (err) {
    console.log(err);
  });
