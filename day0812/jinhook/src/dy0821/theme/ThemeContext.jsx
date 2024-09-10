// ThemeContext.jsx

import { createContext } from "react";

const ThemeContext = createContext(); // 공유 공간 만들기!! => 이름 부여
ThemeContext.displayName = "테마Context" // 개발자 도구에서 식별 이름으로 사용할 것임!

export default ThemeContext;