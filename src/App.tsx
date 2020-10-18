import React from 'react';
import './App.css';
import logo2 from './assets/animation_200_kgdevlap.gif';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
function App() {
    return (
        <Layout className={"freitag-app--freitag"}>
            <Header className="freitag__header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu className="freitag__menu" theme={"dark"} mode="horizontal">
                    <img alt="logo" src={logo2} className="logo freitag__logo"/>
                    <Menu.Item className="freitag-menu__item">test</Menu.Item>
                    <Menu.Item className="freitag-menu__item">test 2</Menu.Item>
                    <Menu.Item className="freitag-menu__item">test 3</Menu.Item>

                </Menu>
            </Header>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Content>
            </Content>
            </div>
            <Footer>
x
            </Footer>
        </Layout>
    );
}

export default App;
