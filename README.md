# Vogzcorp-jsxerror

```npm
npm i vogzcorp-jsxerror
```  
```npm
npm i vogzcorp-jsxerror@latest
```

## This package is open-source.

He's created for help your client to use the dashboard with a db system for, for exemple, update something in the web-site. You can impose constraints in the code for signal him with an error in interface users if he have update somting whoch doesn't correspond to constraints given.

### How to use it

```js
import { TypeErrorJSX } from "vogzcorp-jsxerror"
import { useState } from "react";

let [isCounter, setCounter] = useState(0);

export default const f = () => {
  
  return (
    <div onClick={() => setCounter(newValue => newValue = 1)}>Click to make an error!</div>
    <div onClick={() => setCounter(newValue => newValue = 0)}>Click to remove the error!</div>
    {isCounter === 1 ? <TypeErrorJSX message={"This is error message."} ERROR_ID={"ID_OF_THE_ERROR"}/> : null}
  )

};

```