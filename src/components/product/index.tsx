
import { useParams } from "react-router-dom"
import { CustomHeader } from "../header";
import { useProduct } from "../../api/services/product-service";
import { Divider, Result, Space, Spin } from "antd";
import { BarcodeOutlined } from '@ant-design/icons'
import CustomBreadCrumb from "../breadcrumb";
import { PhotoCarousel } from "./photo-carousel";
import { ProductInfo } from "./product-info";


export default function Product() {

    const { upc = "" } = useParams();

    const { data: product, error, isLoading} = useProduct(upc);


    if (isLoading) {
        return (
            <Space direction={'vertical'} className={'flex jc-center ai-center t-center'}>
                <Spin tip={'Fetching Product Data...'} size={'large'} spinning />
            </Space>
        )
    }

    console.log('product', product)

    if (!product?.data) {
        return <Result status={'404'} title={'404'} subTitle={`Sorry product ${upc} doesn't exist.`} />
    
    }

    const { data: { title, images } } = product


    return (
        <>
            <CustomHeader icon={<BarcodeOutlined />} text={title} />
            <div>
             <PhotoCarousel images={images} />
            </div>
            <div>
                <ProductInfo product={product?.data} />
            </div>
        </>
    )
}