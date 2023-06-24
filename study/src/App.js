import React, { useEffect, useState } from "react";

function App() {

    const [count, setCount] = useState(0);
    const [im, setIm] = useState(0);

    useEffect(() => {
        console.log(count)
    }, [count])
    /*useEffect가 렌더링 될 때 마다 실행 됨*/
    /*[count]를 넣어주면 im이 변경될때는 실행안되고 count가 변경될때만 실행됨*/

    useEffect(() => {
        console.log(im)
    }, [im])

    useEffect(() => {
        console.log('first rendering')
    }, []);
    /*[]를 넣어주면 첫 렌더링때만 실행됨*/

    const increment = () => {
        setCount(count + 1);
    }

    return (
    <div className="App">
        <h1>Text</h1>
        <button onClick={increment}>Click</button>
        <button onClick={() => setIm(im + 1)}>Click1</button>
    </div>
  );
}

export default App;
