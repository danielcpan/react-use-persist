# React-Use-Persist

Persistent State Hooks. Combines the syntax and APIs of `useState` and `useReducer` with localStorage and sessionStorage to make state persistence easy and clean. 

## API Reference

- `useLocalState` | `useSessionState`

  ```typescript
  // localStorage
  const [state, setState, remove] = useLocalState(key, initialState, { writeInit }); 
  // sessionStorage
  const [state, setState, remove] = useSessionState(key, initialState, { writeInit });
  ```

  ##### Options:

  - `key`: string
    - **Required** 
    - Storage unique identifier
  - `initialState`: any
    - Optional initial value
  - `writeInit`
    - By default, state does not persist on initialization. However, if for some reason this is needed, simply mark this true.

- `useLocalReducer`  | `useSessonReducer`

  ```typescript
  // localStorage
  const [state, dispatch, remove] = useLocalReducer(key, reducer, initialState, { writeInit });
  // sessionStorage
  const [state, dispatch, remove] = useSessionReducer(key, reducer, initialState, { writeInit });
  ```

  ##### Options:

  - `key`: string                             
    - **Required** 
    - Storage unique identifier
  - `reducer`
    - **Required**
    - Any reducer function
  - `initialState`: any
    - Optional initial value
  - `writeInit`
    - By default, state does not persist on initialization. However, if for some reason this is needed, simply mark this true.

##### Returns:

- [`state`, `setStateOrDispatch`, `remove`]
  - The first two arguments will be identical to those returned by React's `useState` and `useReducer` hooks.
  - A third argument `remove` is provided. Calling `remove` will clear the state **and** the key from the persistent storage.



## Example

https://codesandbox.io/s/react-use-persist-07elu?file=/src/App.js