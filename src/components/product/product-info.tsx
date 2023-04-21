import { Col, Descriptions, List, Row, Space, Statistic, Tag } from "antd"
import { Product } from "../../api/models/product"
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons"

export const ProductInfo = ({ product }: { product: Product}) => {

    const { asin, brand, category, color, createdAt, currency, description, dimension, ean, elid, model, weight, size, upc, lowest_recorded_price, highest_recorded_price } = product

    return (
        <>
            <Row className={'m-3'} gutter={16} wrap>
                <Col span={4}>
                    <Statistic valueStyle={{color: 'green'}} title={'Lowest Recorded Price'} precision={2} value={lowest_recorded_price} prefix={<><ArrowDownOutlined />$</>} />
                </Col>
                <Col span={4}>
                    <Statistic valueStyle={{color: 'red'}} title={'Highest Recorded Price'} precision={2} value={highest_recorded_price} prefix={<><ArrowUpOutlined />$</>} />
                </Col>
            </Row>
            <Descriptions labelStyle={{fontWeight: 'bold'}} size={'middle'} className={'m-3'} layout={'vertical'} bordered title={'Product Info:'} column={{ xxl: 6, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label={'Brand'}>{brand || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Model'}>{model || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Color'}>{color || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Dimension'}>{dimension || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Weight'}>{weight || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Size'}>{size || 'N/A'}</Descriptions.Item>
                <Descriptions.Item span={5} label={'Description'}>{description || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Categories'}>{category || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Codes'}>
                    <Space size={[0, 8]} wrap>
                        <Tag color={'#00152a'}><strong>UPC:</strong> {upc}</Tag>
                        <Tag color={'#00152a'}><strong>ASIN:</strong> {asin || 'N/A'}</Tag>
                        <Tag color={'#00152a'}><strong>EAN:</strong> {ean || 'N/A'}</Tag>
                        <Tag color={'#00152a'}><strong>ELID:</strong> {elid || 'N/A'}</Tag>
                    </Space>
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}