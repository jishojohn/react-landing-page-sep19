import React from 'react';
import 'antd/dist/antd.css'; 
import {
    Form,
    Input,
    Button,
    Tooltip,
    Icon
} from 'antd';

const RegistrationForm = () => {

    let name, email, occupation, password;

    const submitForm = () => {

        const formData = {
            name: name.input.value,
            email: email.input.value,
            occupation: occupation.input.value,
            password: password.input.value
        }

        // Make a fetch (POST) request
        fetch(
            'http://localhost:5000/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
        // Process the callback
        .then(async res=>{

            // resJSON contains response from backend
            let resJSON = await res.json();
            console.log('resJSON', resJSON)

            if(res.ok) {
                console.log("You have been registered successfully")
            } else {
                console.log("Something went wrong")
            }
        })
    }

    return (
        <div className="container">
            <Form className="form">
                <Form.Item label="Name" required>
                    <Input ref={comp=>name = comp} placeholder="Name" />
                </Form.Item>
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
                <Form.Item label="Occupation" required>
                    <Input ref={comp=>occupation = comp} placeholder="Occupation" />
                </Form.Item>
                <Form.Item>
                    <Button 
                    onClick={submitForm}
                    type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegistrationForm;