function App() {

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

    return (
    <div className="App">
        <button onClick={()=>alert('hello')}>Summit</button>
        <button onClick={alert('hello2')}>Summit2</button> {/*렌더링할때 바로실행되고 버튼누르면 동작안함*/}
        <button onClick={onSubmit}>Summit3</button>
        <button onClick={onSubmit2()}>Summit4</button> {/*렌더링할때 바로실행되고 버튼누르면 동작안함*/}

        <input onKeyUp={onKeyUp}/>
    </div>
  );
}

export default App;
