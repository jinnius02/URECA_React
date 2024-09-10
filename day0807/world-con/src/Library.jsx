import React from "react";
import Book from "./Book";


//Library.jsx


function Library() {
    return (
        <div>
            <Book name="처음 만난 유레카" 
                  numOfPage={450}/>         {/* Book은 html태그이지만, div는 html 태그가 아니다 */}
            <Book name="처음 만난 월드콘" 
                  numOfPage={300}/>
            <Book name="처음 만난 비타500" 
                  numOfPage={360}/>
        </div>
    );
}

export default Library;