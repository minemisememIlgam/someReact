 
function Button({ onClick, text }) {
  return <button onClick={onClick}> "Click me" </button>;
 

function Button ({onClick, text}) {
    return <button onClick={onClick}> {text}  </button>
 
}

export default Button;
