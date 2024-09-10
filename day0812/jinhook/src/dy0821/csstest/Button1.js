import React from 'react';

import './Button1.css';
export default function Button({size}) {
    if (size==='big') {
        return <button className='button big'>큰 버튼</button>
    } else {
        return <button className='button small'>작은 버튼</button>
    }
}

// import style from  './Button1.module.css';

// export default function Button({size}) {
//     if (size==='big') {
//         return <button className={ style.button +" "+style.big}>큰 버튼</button>
//         // return <button className={ `${style.button} ${style.big}`}>큰 버튼</button>
//     } else {
//         return <button className={ style.button +" "+style.small}>작은 버튼</button>
//         // return <button className={ `${style.button} ${style.small}`}>작은 버튼</button>
//     }
// }