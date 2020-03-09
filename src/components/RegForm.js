import React, { useState } from "react";

const RegForm = props => {
    const [ formState, setFormState] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="fName" onChange={onChangeHandler}/>
                <br/>
                <label>Last Name</label>
                <input type="text" name="lName" onChange={onChangeHandler}/>
                <br/>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>
                <label>Confirm Password</label>
                <input type="password" name="confirmpassword" onChange={onChangeHandler}/>
                <br/>
                <input type="submit" />
            </form>
            <div>
                <p>First Name: { formState.fName }</p>
                <p>Last Name: { formState.lName }</p>
                <p>Email: { formState.email }</p>
                <p>Password: { formState.password }</p>
            </div>
        </div>
    )
}

export default RegForm;