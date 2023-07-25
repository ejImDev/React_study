import React from "react";

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return(
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            /><br/>
            <div style={{color : 'red'}}>{errorMessage}</div>
        </>
    );
};

export default InputField;