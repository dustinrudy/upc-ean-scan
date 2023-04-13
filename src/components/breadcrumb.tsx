import { Breadcrumb } from "antd";
import useBreadcrumb from "../hooks/use-bread-crumb";


export default function CustomBreadCrumb() {
    const items = useBreadcrumb()
    console.log('items', items)

    return <Breadcrumb items={items}></Breadcrumb>

}