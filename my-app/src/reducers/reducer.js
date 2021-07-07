export const todo = [
  {
    id: 1,
    item: "Learn about reducers",
    completed: false
  },
  {
    id: 2,
    item: "Take my pills",
    completed: false
  },
  {
    item: "Eat my soup",
    completed: false,
    id: 3
  }
];

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload[0], id: Date.now(), completed: false }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
