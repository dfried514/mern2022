import React, { useReducer } from  'react';
    
const UserForm = (props) => {
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
    const validateName = (type, name) => {
        if (name.length === 1) { 
            const nameType = type === 'firstName' ? 'First Name' : 'Last Name';
            return `${nameType} must be at least 2 characters`;
        }
        return null;
    }
    const validateEmail = email => {
        const emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(emailformat))
            return 'Invalid email';
        return null;
    }
    const [formState, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'firstName':
                return {
                    ...state,
                    firstName: {
                        value: action.value,
                        error: validateName(action.type, action.value)
                    }
                };
            case 'lastName':
                return {
                    ...state,
                    lastName: {
                        value: action.value,
                        error: validateName(action.type, action.value)
                    }
                };
            case 'email':
                return {
                    ...state,
                    email: {
                        value: action.value,
                        error: validateEmail(action.value)
                    }
                };
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }, initialState);

    const inputHandler = (type, value) => {
        dispatch({
            type,
            value
        })
    };
    
    const createUser = (e) => {
        e.preventDefault();
        console.log("Welcome", formState.firstName);
        dispatch({ type: 'reset' });
    };

    const invalidFormInfo = () => {
        return formState.firstName.value.length === 0
            || formState.lastName.value.length === 0
            || formState.email.value.length === 0 
            || formState.firstName.error 
            || formState.lastName.error 
            || formState.email.error 
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" id="firstName" value={formState.firstName.value} onChange={ (e) => inputHandler(e.target.id, e.target.value) } />
                        {formState.firstName.error && <p>{formState.firstName.error}</p>}
                </div>
                <br />
                <div>
                    <label>Last Name: </label>
                    <input type="text" id="lastName" value={formState.lastName.value} onChange={ (e) => inputHandler(e.target.id, e.target.value) } />
                        {formState.lastName.error && <p>{formState.lastName.error}</p>}
                </div>
                <br />
                <div>
                    <label>Email: </label>
                    <input type="text" id="email" value={formState.email.value} onChange={ (e) => inputHandler(e.target.id, e.target.value) } />
                        {formState.email.error && <p>{formState.email.error}</p>}
                </div>
                <br />
                <input type="submit" disabled={invalidFormInfo()} value="Create User" />
            </form>
        </>
    );
}
    
export default UserForm;
