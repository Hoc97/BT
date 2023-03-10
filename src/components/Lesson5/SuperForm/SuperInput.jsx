import React, { memo } from 'react';
const SuperInput = (props) => {
    const { index, handleChangeInput, valueInput } = props;
    console.log(">>> render child", valueInput);
    return (
        <>
            <label>Field {index + 1}</label>
            <input
                type={'text'}
                name={`field-${index + 1}`}
                value={valueInput}
                onChange={handleChangeInput}
            />
        </>
    );
};


const areEqual = (prevProps, nextProps) => {
    console.log(prevProps.valueInput === nextProps.valueInput);
    if (prevProps.valueInput === nextProps.valueInput) {
        return true;
    }
    return false;
};
export default React.memo(SuperInput, areEqual);
// export default SuperInput;