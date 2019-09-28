1. What problem does the context API help solve?
The context API allows us the ability to wrap a component chain with a provider and use state anywhere within the chain without having to "prop-drill".
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store holds the state of the application, which is why it's known as the 'single source of truth'. Actions are defined and then sent to reducers, which alter the state accordingly.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state of the entire application at the given time. Component state is relative to the defined component. Generally speaking you should use application state, unless your working with something very specific like a form, where you would use component state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is a middleware that allows for an async redux. It makes our action-creators return a function.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite is definitely redux. Even though the setup is complicated, creating a more connected app where you can pull state from anywhere is fantastic.
