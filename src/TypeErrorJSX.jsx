import "./TypeErrorJSX.css"

export function TypeErrorJSX({message, ERROR_ID}) {

  if (!message || message === undefined || typeof message !== "string") throw new Error("Please, set a something in message argument. (Must be a string argument)")
  if (!ERROR_ID || ERROR_ID === undefined || typeof ERROR_ID !== "string") throw new Error("Please, set a something in ERROR_ID argument. (Must be a string argument)")

  return (
    <>
     <div className="typeErrorJSX-Err-bin32-81bits--64bits" onClick={() => document.querySelector(".activePopUp").classList.toggle("active")}>
      <div className="ErrorPopUp">
        1 erreur
        <i className="ri-close-fill"></i>
      </div>
      
     </div>
     <div className="activePopUp">
      <div className="one">
        <h1>Error detected</h1>
        <div className="errorContent">
          <p>TypeErrorJSX: {message}<br /><br /> ERROR_ID: {ERROR_ID}</p>
          {console.error(`TypeErrorJSX: ${message}\n ERROR_ID: ${ERROR_ID}`)}
        </div>
      </div>
      <div className="two">
        <div className="moreInfoAboutJSXError">For more information, you need to see <a href="entreprise/vogzcorpdev/vogzcorp-jsxerror/docs">vogzcorp.fr/pages/entreprise/vogzcorpdev/vogzcorp-jsxerror/docs</a></div>
        <div className="footerPopUp">Boosted by <a href="entreprise/vogzcorpdev/vogzcorp-jsxerror">vogzcorp®️ - vogzcorp-jsxerror</a></div>
      </div>
     </div>
    </>
  )

}