import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        console.log("Welcome", firstName);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword1("");
        setPassword2("");
    };
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:  </label>
                    <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />
                    { firstName.length === 1 && <p>First Name must be at lease 2 characters</p> }
                </div>
                <br />
                <div>
                    <label>Last Name:  </label>
                    <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value) } />
                    { lastName.length === 1 && <p>Last Name must be at lease 2 characters</p> }
                </div>
                <br />
                <div>
                    <label>Email:  </label> 
                    <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                    { (email.length && email.length < 5) ? (<p>Email must be at lease 5 characters</p>) : "" }
                </div>
                <br />
                <div>
                    <label>Password:  </label>
                    <input type="password" autoComplete="password" value= { password1 } onChange={ (e) => setPassword1(e.target.value) } />
                    { (password1.length && password1.length < 8) ? (<p>Password must be at lease 8 characters</p>) : "" }
                </div>
                <br />
                <div>
                    <label>Confirm Password:  </label>
                    <input type="password" autoComplete="password" value= { password2 } onChange={ (e) => setPassword2(e.target.value) } />
                    { (password2.length && password2 !== password1) ? (<p>Passwords must match</p>) : "" }
                </div>
                <br />
                <input type="submit" value="Create User" />
            </form>
            <h2>Your Form Data</h2>
            <h4>First Name:  {firstName}</h4>
            <h4>Last Name:  {lastName}</h4>
            <h4>Email:  {email}</h4>
            <h4>Password:  {password1}</h4>
            <h4>Confirm Password:  {password2}</h4>
        </>
    );
};
    
export default UserForm;
