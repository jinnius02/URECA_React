// Main.jsx

import { Link } from "react-router-dom";

function Main(props){
   // <form>
   //     <input type="text" name="name"  value="홍길동"/>
   //     <input type="text" name="age"  value="13"/>
   // </form>
   return (
      <>
         <h3>메인페이지</h3>
         <ul>
            {/* <li><Link to="/product/1?name=홍길동&age=13#ureca">1번상품</Link></li> */}
            <li><Link to="/product/1?search=productName&q=demo&userName=이효린#ureca">1번상품</Link></li>

            <li><Link to="/product/2">2번상품</Link></li>
            {/* <li><Link to="/pro/3">3번상품</Link></li> */}
            <li><Link to="/product/3">3번상품</Link></li>
         </ul>
      </>
   );
}

export default Main;