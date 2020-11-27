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
