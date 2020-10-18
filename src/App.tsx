import React,{ useState, useEffect } from 'react';
import './App.css';
import logo2 from './assets/animation_200_kgdevlap.gif';
import {  MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function App() {
    const [CollapsedState, setCollaspedState] = useState(false)
    const toggle = () => {
        if (!CollapsedState) {
            setCollaspedState(true)
        } else {
            setCollaspedState(false)
        }
    }

    useEffect(()=>{

    },[CollapsedState])
    return (
        <>
        <Layout className={"freitag-app"}>


                <Sider className="side-menubar" collapsible>
                    <img alt="logo" src={logo2} className="logo freitag__logo"/>
                    <Menu className="freitag__menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item  className="freitag-menu__item" key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item className="freitag-menu__item" key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item className="freitag-menu__item" key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>

        <Layout>
                <Header className="freitag__header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    {React.createElement(CollapsedState ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>

            <Content className="content">
                <Breadcrumb className="freitag__breadcrumb">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
            <div className="content__inner">
            </div>

            </Content>

            <Footer className="freitag__footer">
            </Footer>
        </Layout>
        </Layout>
            </>
    );
}

export default App;
