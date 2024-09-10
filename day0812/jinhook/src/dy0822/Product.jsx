// Product.jsx
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

function Product(props){
   const {productId} = useParams();
   const location = useLocation();
   
   const [searchParams, setSearchParams ] = useSearchParams();
   const keyWords = searchParams;
   const keyWord = searchParams.get("search");
   const userName = searchParams.get("userName");

   const navigate = useNavigate();
   
   return (
      <>
         {/* <h3>상품페이지</h3> */}
         <h3>{productId}번 상품페이지</h3>
          <ul>
             <li><button onClick={()=>navigate(-2)}>이전이전페이지</button></li>
             <li><button onClick={()=>navigate(-1)}>이전페이지</button></li>
             <li><button onClick={()=>navigate(1)}>다음페이지</button></li>
             <li><button onClick={()=>navigate(2)}>다음다음페이지</button></li>
             <li><button onClick={()=>navigate('/')}>첫페이지</button></li>
             <li><button onClick={()=>navigate('/',{replace:true})}>첫페이지(replace)</button></li>
          </ul>
          <hr />
          <ul>
             <li>hash: {location.hash}</li>
             <li>pathname: {location.pathname}</li>
             <li>search: {location.search}</li>
             <li>state: {location.state}</li>
             <li>key: {location.key}</li>\
          </ul>
          <hr />
          <ul>
            <li>KeyWords : {keyWords}</li>
            <li>keyWord : {keyWord}</li>
            <li>userName : {userName}</li>
          </ul>
      </>
   );
}

export default Product;