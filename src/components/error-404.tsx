import { Result, Button } from "antd"
export const Error404Page = () => {
    return (
        <Result status={'404'} title={'404'} subTitle={'The page you visited does not exist!'} extra={<Button type={'primary'}>Scan a Code</Button>} />
    )
}