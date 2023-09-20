import React from "react"

declare module "vogzcorp-jsxerror";

type arg = {
  message: string | null,
  ERROR_ID: string | null
}

export function TypeErrorJSX({message, ERROR_ID}: arg): React.JSX.Element;