import { useEffect, useState  } from "react";

function MyTimer(props) {

    const[timer, setTimer] = useState(30);

    function myTimer() {
        setTimer(timer - 1);
    }

    useEffect(()=>{
        const tid = setInterval(myTimer, 1000);

        if(timer <= 0) {
            clearInterval(tid); //setInterval 정지
        }

        return ()=>{ clearInterval(tid) } //unmount 시에 tid clear

    }, [timer]);

    return(
        <div>
            <h3>Timer: {timer}</h3>
        </div>
    );
}

export default MyTimer;
