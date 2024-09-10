// TemperatureInput.jsx
const scaleNames={
    c:"섭씨",
    f:"화씨"
}

// TemperatureInputFahrenheit.jsx
function TemperatureInput(props){
    // const [temperature, setTemperature] = useState("");
    // ==> 부모 컴포넌트에서 state 관리

    const handleChange = (event) =>{
        // setTemperature(event.target.value);
        // ==> 부모 컴포넌트에서 state 변경
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{ scaleNames[props.scale] }):
            </legend>
            <input type="text" value={props.temperature} 
                onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;