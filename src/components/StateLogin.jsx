import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteresValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit , setDidEdit] =  useState({
    email : false , 
    password : false
  })

  const emailInvalid =  didEdit.email && !enteredValues.email.includes("@")  ;


  function handleInputsValues(identifier, value) {
    setEnteresValues((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));

    setDidEdit(prevEdit => ({
      ...prevEdit , 
      [identifier] : false
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValues);
  }

  function handleInputBlur (identifier) {

    setDidEdit(prevState => ({
      ...prevState , 
      [identifier] : true
    }))

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onBlur={()=>handleInputBlur("email")}
            name="email"
            onChange={(e) => handleInputsValues("email", e.target.value)}
            value={enteredValues.email}
          />
  
       <div className="control-error">{emailInvalid && <p>Please enter a valid email address</p>}</div>   

        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputsValues("password", e.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
