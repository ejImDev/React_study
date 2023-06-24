import React, { useState } from "react";
import Counter from "./components/Counter";
/*
다른 컴포넌트를 호출해서 사용하는 컴포넌트 = 부모 컴포넌트
호출되어지는 컴포넌트를 자식 컴포넌트라고 함

여기서는 App이 부모, Counter가 자식 컴포넌트가 되는 것
*/

function App() {

    const [buttonName, setButtonName] = useState('클릭');
    /*상태를 보내는 것도 가능함*/
    const clickButton = () => {
        setButtonName('click')
    };
    /* state가 변경되면 자식컴포넌트로 전달되는 데이터도 변경됨*/

    return (
    <div className="App">
        <h1>Text</h1>
        <Counter click="click1" />
        <Counter click={buttonName}/>
        <Counter />
        {/* 컴포넌트를 호출하면서 속성으로 데이터를 전송해줄수 있음.
        여기서는 click이라는 이름으로 각 값을 컴포넌트에 전송한것이 됨 */}

        <br />
        <button onClick={clickButton}>상태 변경</button>

    </div>
  );
}

export default App;
