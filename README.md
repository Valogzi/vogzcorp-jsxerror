# Flexible-jsxerror by VogzCorp

## The package is open source, you have right to work with it.

Its an addon for help your project if you init an auto db project with a dashboard for exemple. They are created for help the visibility of the error on your code if, for exemple, somethings is injected.

```node
npm i vogzcorp-flexible-jsxerror
```
```npm
npm i vogzcorp-flexible-jsxerror@latest
```  
  
  
```js

import { TypeErrorJSX } from "vogzcorp-flexible-jsxerror"

export function Header() {
  return (
    <TypeErrorJSX message={"Error message"} ERROR_ID={"Error id"} />  
  )
}
```
