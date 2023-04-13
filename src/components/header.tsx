import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { ReactElement } from "react";

interface CustomerHeaderProps {
    text: string;
    icon?: ReactElement;
}

export const CustomHeader = ({text, icon}: CustomerHeaderProps) => {
    return (
        <div className={'inline-flex ai-center fs-x-large'}>
            {icon ? icon : null}
            <div className={'m-2'}>{text}</div>
        </div>
    )
}