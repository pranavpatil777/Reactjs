import React, {useState} from 'react'

export const TextForm = (props) => {

   const handleUpClick = () => {
     console.log("Uppercase was Clicked" + text);
     let newText = text.toUpperCase();
     setText(newText);
   }

   const handleLowClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

   const handleOnChange = (event) => {
    console.log("handleOnChange fun invoked");
    setText(event.target.value);

  }


    const [text, setText] = useState('Enter text here');
  return (
    <>
    <form>
        <h1 className="mb-4">{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={text} onChange={event => handleOnChange(event)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Submit</button>
  <button type="submit" className="btn btn-primary mx-4" onClick={handleLowClick}>Submit</button>
  <button type="submit" className="btn btn-primary mx-3">Submit</button>
  <button type="submit" className="btn btn-primary mx-3">Submit</button>
  <button type="submit" className="btn btn-primary mx-3">Submit</button>
  <button type="submit" className="btn btn-primary mx-3">Submit</button>
</form>

  <div className="container mt-5">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * Math.round(text.split(" ").length)} minutes to read</p>

      <h2>Preview</h2>
      <p>{text}</p>
  </div>
  </>
  )
}
