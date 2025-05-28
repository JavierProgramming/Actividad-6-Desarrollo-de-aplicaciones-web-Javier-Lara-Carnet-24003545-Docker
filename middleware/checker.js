const forbiddenWord = "bitcoin";

const checker = (store) => (next) => (action) => {
  console.log(action);

  const { type, payload } = action;
  if (
    (type === 'todos/addTodo' || type === 'goals/addGoal') &&
    payload?.name?.toLowerCase().includes(forbiddenWord)
  ) {
    alert("Nope. That's a bad idea.");
    // No enviar la acción al siguiente middleware/reductor
    return;
  }

  return next(action);
};

export default checker;
