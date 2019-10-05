import React, { useState } from 'react';
import 'antd/dist/antd.css'; 
import {
    Form,
    Input,
    Button,
    Tooltip,
    Icon,
    Alert
} from 'antd';


const LoginForm = () => {

    let name, email, occupation, password;

    const [state, setState] = useState(
        {
            registration: '',
            errorMessage: '',
            loading: false
        }
    )

    const submitForm = () => {}

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