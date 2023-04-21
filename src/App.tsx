import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { BarcodeOutlined, BarsOutlined, ScanOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UPCScan from './components/scan/scan';
import MyProducts from './components/my-products';
import Product from './components/product';
import CustomBreadCrumb from './components/breadcrumb';
import { Error404Page } from './components/error-404';

function App() {
  const [collapsed, setCollapsed] = useState(true)
  const { Header, Sider, Content } = Layout;


  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className={'white-text fs-medium fw-bolder text-decoration-none'}>
          <Link className={'white-text'} to={'/'}>
          <BarcodeOutlined className={'px-2'} />
          UPC Code Scanner
          </Link>
        </Header>
        <Layout>
          <Sider width={250} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
              mode={'inline'}
              style={{ height: '100%', borderRight: 0, fontSize: '1rem' }}
            >
              <Menu.Item icon={<ScanOutlined />} key={'1'}>
                <Link to='/'>Scanner</Link>
              </Menu.Item>
              <Menu.Item icon={<BarsOutlined />} key={'2'}>
                <Link to='/products'>My Products</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            > 
            <CustomBreadCrumb />
              <Routes>
                <Route path="/" Component={UPCScan} />
                <Route path="/products" Component={MyProducts} />
                <Route path='/products/:upc' Component={Product} />
                <Route path="*" Component={Error404Page} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
