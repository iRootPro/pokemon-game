import React from "react";
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg1 from './assets/bg1.jpg'
import bg3 from './assets/bg3.jpg'


function App() {
    return (
        <div className="App">
            <Header title={'This is title'} descr={'This is Description!'} />
            <Layout title={'Заголовок для Layout 1'} descr={'Описание для layout 1'} id={1} urlBg={bg1} />
            <Layout title={'Заголовок для Layout 2'} descr={'Описание для layout 2'} id={2} colorBg='green'/>
            <Layout title={'Заголовок для Layout 3'} descr={'Описание для layout 3'} id={3} urlBg={bg3}/>
            <Footer />
        </div>
    );
}

export default App;
