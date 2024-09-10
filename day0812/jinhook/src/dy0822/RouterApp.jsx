// RouterApp.jsx

import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import Product from './Product';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RouterApp(){
   return (
      <div className="App">
          {/* <Header/>
          <Main/>
          <Product/> */}


          <BrowserRouter>
            {/* 화면변경 요소가 아님(고정요소) */}
            <Header/> 

            {/* 화면변경 요소임 */}
            <Routes>
                {/* URL가상경로와 매핑할 컴포넌트 */}
                <Route path="/" element={<Main/>}></Route>
                {/* <Route path="/product" element={<Product/>}></Route> */}
                {/* <Route path="/product/*" element={<Product/>}></Route> */}

                {/* Path Variable 경로변수 설정 */}
                <Route path="/product/:productId" element={<Product/>}></Route>


                {/* 일치하는 path가 존재하지 않을 때 보이는 페이지 설정 */}
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
              
          </BrowserRouter>
      </div>
   );
}

export default RouterApp;