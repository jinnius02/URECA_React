import React from 'react'

import './Box1.css';
export default function ({size}) {
    if (size === 'big'){
        return <div className='box big'>큰 박스</div>;
    }else {
        return <div className='box small'>작은 박스</div>;
    }
}

// import sty from './Box1.module.css'
// export default function ({size}) {
//     if (size === 'big'){
//         // return <div className='box big'>큰 박스</div>;
//         return <div className={ `${sty.box} ${sty.big}`}>큰 박스</div>;
//     }else {
//         return <div className={ `${sty.box} ${sty.small}`}>작은 박스</div>;
//     }
// }