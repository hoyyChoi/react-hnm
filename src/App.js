import './App.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './component/ProductAll';
import Login from './component/Login';
import ProductDetail from './component/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState} from 'react';
import PrivateRoute from './routes/PrivateRoute';


//1. 전체 상품페이지, 로그인페이지, 상품디테일페이지
//- 전체 상품페이지에서 전체상품을 볼수있다.  
//- navigation bar - 페이지를 이동하더라도 바뀌지않는 상단에 있는 바

//2. 디테일 상품페이지를 들어가면 로그인을 해야한다.

//3. 로그인페이지에서 로그인을 한다.

//-로그아웃을 하면 로그인 버튼이 보이고, 로그인을 하면 로그아웃버튼이 보인다.
//4. 디테일페이지에서 사이즈를 선택할 수 있다,
// 5. 디테일 페이지에서 로그아웃을 하면 다시 로그인페이지로 이동한다,.
//6.검색창에 검색을 하면 관련 디테일들이 나온다.

function App() {
  let [authenticate,Setauthenticate] = useState(false)

  
  return (
    <div>
      <Navbar authenticate={authenticate} setauthenticate={Setauthenticate}/>

      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login Setauthenticate={Setauthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>

    </div>
  );
}

export default App;
