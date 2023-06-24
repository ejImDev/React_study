import React, {useState} from "react";

const Counter = (props) => {
    /* 자식컴포넌트에서는 props를 사용하여 부모컴포넌트에서 전송한 데이터를 받음
    * 부모컴포넌트에서 속성에 지정한 키를 사용해 값을 호출 가능 */

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 2);
    }

    const clickString = props.click || 'Click';
    /* 전달된 데이터가 없을 경우 디폴트로 사용할 내용을 지정할 수 있음 */

    return (
        /*<button onClick={increment}>{props.click} {count}</button>*/
        /* 바로 전달객체를 사용하려면 {props.전달한 키네임} 으로 작성 */

        <button onClick={increment}>{clickString} {count}</button>
    );
};

export default Counter;