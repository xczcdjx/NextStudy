"use client"
import type {FormProps} from 'antd';
import {Button, Checkbox, Form, Input, message} from 'antd';
import {useRouter} from "next/navigation";

const Page = () => {
    const router=useRouter()
    const [messageApi,contextHolder]=message.useMessage()
    const onFinish: FormProps<LoginFieldType>['onFinish'] = async (values) => {
        console.log('Success:', values);
        const r=await fetch('/api/user/login',{
            headers:{
                'Content-type':'application/json'
            },
            method:'post',
            body:JSON.stringify(values)
        })
        const data=await r.json()
        console.log(data)
        messageApi.open({
            type:'success',
            content:data.msg
        })
        setTimeout(()=>router.replace('/info'),1500)
    };

    const onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={'flex justify-center flex-col items-center'}>
            {contextHolder}
            <h2 className={'text-2xl text-center my-3'}>登录</h2>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{username:'admin',password:'123456'}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<LoginFieldType>
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<LoginFieldType>
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Page;
