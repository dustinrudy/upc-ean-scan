import { BarsOutlined } from "@ant-design/icons"
import { CustomHeader } from "../header"
import { useAllProducts } from "../../api/services/product-service"
import {Space, Spin, Row, Divider} from 'antd'
import { ProductCard } from "./card"
import { Product } from "../../api/models/product"


export default function MyProducts({}) {

    const { data: productData, error, isLoading } = useAllProducts()


    if (isLoading || !productData) {
        return (
            <Space direction={'vertical'}>
                <Spin delay={10000} tip={'Fetching Products'} size={'large'} spinning />
            </Space>
        )
    }

    return (
    <>
        <CustomHeader text={'My Products'} icon={<BarsOutlined />} />
        <Divider />
        <Row gutter={[16, 16]}>
            {productData?.data?.map((product: Product) => {
                return <ProductCard product={product} />
            })}
        </Row>
    </>
    )

}