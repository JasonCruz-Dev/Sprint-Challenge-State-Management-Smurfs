1. What problem does the context API help solve?

- The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are objects with up to two properties, a type property and a payload property. The type property is mandatory and describes what action is happening and affects how the reducer modifies state. The payload is optional information that can be sent along with the action. Reducers are the only way we can update state using Redux. They are triggered by actions and take two arguments, an action and the state. They use the action to determine how the state is to be modified and return state accordingly. The store is responsible for the applications state tree, and can only be modified using different reducers. It's the single source of truth because it is read-only, and can only be modified using actions to trigger a reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is accesible throughout an entire React application. Component state is typically local to a single React component. You would use Application state to aviod drilling props through your various components in order to pass state between them.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-thunk is middleware that allows us to perform asynchronus actions using Redux. It lets us use actions that return functions instead of strictly action objects. We have been using this to make asynchronus API calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- I have had the most success using Context API on projects and I seem to understand how it flows the best. Making state accessible globally is the easiest for me to work around, whereas using Redux and reducers is a tedious way of actually triggering state changes.
