
import { useParams } from "react-router-dom"
import { CustomHeader } from "../header";
import { useProduct } from "../../api/services/product-service";
import { Space, Spin } from "antd";
import { BarcodeOutlined } from '@ant-design/icons'
import CustomBreadCrumb from "../breadcrumb";


export default function Product() {

    const { upc = "" } = useParams();

    const { data: product, error, isLoading} = useProduct(upc);


    if (isLoading || !product) {
        return (
            <Space direction={'vertical'}>
                <Spin delay={10000} tip={'Fetching Products'} size={'large'} spinning />
            </Space>
        )
    }

    console.log('product', product)


    return (
        <>
            <CustomHeader icon={<BarcodeOutlined />} text={'Product Page'} />
        </>
    )
}