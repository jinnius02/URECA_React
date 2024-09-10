// Header.jsx
import { Link } from "react-router-dom";

function Header(props){
   return (
      <>
         <h1><Link to="/">기본 헤더</Link></h1>
      </>
   );
}

export default Header;