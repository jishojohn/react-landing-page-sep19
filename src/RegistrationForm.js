import React from 'react';
import 'antd/dist/antd.css'; 
import {
    Form,
    Input,
    Button,
} from 'antd';

const formItemLayout = {
    labelCol: {
        lg: { span: 8 },
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        lg: { span: 8 },
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const RegistrationForm = () => {

    let name, email, occupation, password;

    const submitForm = () => {
        
    }

    return (
        <Form {...formItemLayout}>
            <Form.Item label="Name" required>
                <Input ref={comp=>name = comp} placeholder="Name" />
            </Form.Item>
            <Form.Item label="Email" required>
                <Input ref={comp=>email = comp} placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" required>
                <Input ref={comp=>password = comp} placeholder="Password" />
            </Form.Item>
            <Form.Item label="Occupation" required>
                <Input ref={comp=>occupation = comp} placeholder="Occupation" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button 
                onClick={submitForm}
                type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
         
        </Form>
    )
}

export default RegistrationForm;