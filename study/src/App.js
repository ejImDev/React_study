import React, { useState} from "react";

function App() {

    const [text2, setText] = useState('Kossie');

    const onSubmit = () => {
        alert('hello3');
    }

    const onKeyUp = (event) => {
        console.log('key up');
        if(event.keyCode === 13) {
            onSubmit();
        }
    }

    function onSubmit2() {
        alert('hello4');
    }

    let text1 = 'Kossie';

    const updateText1 = () => {
        text1 = 'Corder';
        console.log(text1)
        document.getElementById('text1').innerText = text1;
    }

    const updateText2 = () => {
        setText('Coder')
        console.log(text2)
    }

    console.log(text2) /*Kossie로 2번 출력되는 이유는 index.js가 StrictMode 라서. useState상태에선 버튼을 누르면 일단 Kossie가 뜨고 다시 렌더링 되면서 Coder가 출력됨  */

    return (
    <div className="App">
        <button onClick={()=>alert('hello')}>Summit</button>
        {/*<button onClick={alert('hello2')}>Summit2</button>*/} {/*렌더링할때 바로실행되고 버튼누르면 동작안함*/}
        <button onClick={onSubmit}>Summit3</button>
        {/*<button onClick={onSubmit2()}>Summit4</button>*/} {/*렌더링할때 바로실행되고 버튼누르면 동작안함*/}

        <input onKeyUp={onKeyUp}/>
        <br /><br />

        <span id='text1'>{text1}</span> {/*클래스를 따로 만들어서 작업*/}
        <button onClick={updateText1}>Update</button>

        <span id='text2'>{text2}</span> {/*useState로 작업*/}
        <button onClick={updateText2}>Update</button>
    </div>
  );
}

export default App;
