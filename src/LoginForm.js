import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css'; 
import {
    Form,
    Input,
    Button,
    Tooltip,
    Icon,
    Alert
} from 'antd';

import AppContext from './AppContext';


const LoginForm = () => {


    const [globalState, setGlobalState] = useContext(AppContext);

    let email, password;

    const [state, setState] = useState(
        {
            registration: '',
            errorMessage: '',
            loading: false
        }
    )

    const submitForm = () => {

        const formData = {
            email: email.input.value,
            password: password.input.value
        }

        fetch(
            `${process.env.REACT_APP_API_URL}/auth/login/`,
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(async (res)=>{
            // Parsing reponse from the backend
            let resJSON = await res.json();
            console.log('resJSON', resJSON);

            // Is res.status is equal to 2xx
            if(res.ok) {
                setGlobalState({
                    ...globalState, //copy the entire globalState
                    loggedIn: true, //override the loggedIn in globalState
                    token: resJSON.token, //create token in the globalState
                    name: resJSON.name
                });
            }
        });
    }

    return (<div className="container">
        <Form className="form">
            <Form.Item label="Email" required>
                <Input ref={comp=>email = comp} placeholder="Email"
                suffix={
                    <Tooltip title="Only Gmails accounts accepted">
                        <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                } />
            </Form.Item>
            <Form.Item label="Password" required>
                <Input.Password 
                    ref={comp=>password = comp} 
                    placeholder="Password" 
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </Form.Item>
            <Form.Item>
                <Button 
                loading={state.loading}
                onClick={submitForm}
                type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>)
}

export default LoginForm;