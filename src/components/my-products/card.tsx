import { Card, Col } from 'antd'
import { Product } from '../../api/models/product'
import NoImageFound from '../../assets/no-image-found.jpg'
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

type ProductCard = Pick<Product, "_id" | "images" | "title" | "upc" | "createdAt" | "updatedAt">



export const ProductCard = ({ product }: { product: ProductCard}) => {

    const {images, title, upc, _id} = product;

    const [imageURL] = images;

    const navigate = useNavigate();

    const onImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = NoImageFound
    }


   return ( 
    <Col onClick={() => navigate(`/products/${upc}`)} key={_id} span={4}>
        <Card hoverable cover={<img onError={onImageError} src={imageURL || NoImageFound} alt={title} />}>
            <Meta title={title} description={`UPC #${upc}`} />
        </Card>
    </Col>
   )
}