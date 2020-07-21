# React-Use-Persist

Persistent State Hooks. Combines the syntax and APIs of `useState` and `useReducer` with localStorage and sessionStorage to make state persistence easy and clean. 

## API Reference

- `useLocalState` | `useSessionState`

  ```typescript
  // localStorage
  const [state, setState, remove] = useLocalState(key, initialState); 
  // sessionStorage
  const [state, setState, remove] = useSessionState(key, initialState);
  ```

  ##### Options:

  - `key`: string
    - **Required** 
    - Storage unique identifier
  - `initialState`: any
    - Optional initial value

- `useLocalReducer` (localStorage) | `useSessonReducer` (sessionStorage)

  ```typescript
  // localStorage
  const [state, dispatch, remove] = useLocalReducer(key, reducer, initialState);
  // sessionStorage
  const [state, dispatch, remove] = useSessionReducer(key, reducer, initialState);
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

##### Returns:

- [`state`, `setStateOrDispatch`, `remove`]
  - The first two arguments will be identical to those returned by React's `useState` and `useReducer` hooks.
  - A third argument `remove` is provided. Invocation of it clears the key from the persistent storage.

