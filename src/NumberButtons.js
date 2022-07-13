import React, {useRef} from 'react';

export default function NumberButtons({number}){

    const button = useRef();
    React.useEffect(() => {
        button.current.addEventListener("click",function(){
            console.log("hello");
        });
    });

    return(
        <button ref={button}>{number}</button>
        
    )
}

