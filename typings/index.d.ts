declare module "vogzcorp-flexible-jsxerror";

type arg = {
  message: string,
  ERROR_ID: string
}

export function TypeErrorJSX({message, ERROR_ID}: arg): React.JSX.Element;