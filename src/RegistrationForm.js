import React from 'react';
import 'antd/dist/antd.css'; 
import {
    Form,
    Input,
    Button,
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

        fetch(
            'http://localhost:5000/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        ).then(async res=>{
            let ret = await res.json()
            if(res.ok) {

            } else {
                
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
                    <Input ref={comp=>email = comp} placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" required>
                    <Input.Password ref={comp=>password = comp} placeholder="Password" />
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