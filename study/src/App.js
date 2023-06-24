import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {

    /*
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const increment2 = () => {
        setCount2(count2 + 1);
    }
    const increment3 = () => {
        setCount3(count3 + 1);
    }
    */
    /*
    위처럼 구현하는 경우 각각
    다른 버튼으로 사용해서 기능을 구현할수는 있으나
    불필요하게 반복되는 코드들이 길어짐.
    또 똑같은 내용으로 수정하려할때 하나하나 찾아서 바꿔줘야함.
    따라서 컴포넌트를 사용
    */

    return (
    <div className="App">
        <h1>Text</h1>
        {/*
        <button onClick={increment}>Click {count}</button>
        <button onClick={increment2}>Click {count2}</button>
        <button onClick={increment3}>Click {count3}</button>
        */}
        {/* 각각으로 받아오던거 지우고 컴포넌트를 호출 */}
        <Counter />
        <Counter />
        <Counter />
        {/* 컴포넌트 호출을 하면 각각의 상태로 관리 됨 */}
    </div>
  );
}

export default App;
