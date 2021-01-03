Router:

Components: 
- BrowserRouter as Router
- Route
- Link

match props:
- url - basic url to route user
- path - same as url
- isExact - boolean. returns true if path matches the route
- params = {} object. Accepts dynamicly changing value: /pots/:postId. props.match.params.prostId

history - used to acces history and can be used instead of Link to go to another page.
```js
// Usage: 
onClick={() => props.history.push('/topics')}
```
location props:
- pathName - returns the full path name

## higher-order component is a function that takes a component and returns a new component.
withRouter - highest level component, which modifies components and retruns it


# Redux - Flux Pattern
reducer - contains initial state and function to update that state
action - has type to be matched on execution 

Action -> Middleware -> Root Reducer -> Store -> DOM Changes
Middleware:
- redux-logger 

Provider - component that has store

connect - HOC function component which gives access to values wihout passing props

window.localStorage.setItem('myItem',  JSON.strigify(passobject));

const retrievedObject = window.localStorage.sgetItem('myItem');

JSON.parse(retrievedObject)