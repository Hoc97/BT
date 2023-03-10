import { useRef } from 'react';
const SuperInputV2 = (props) => {
    const { index } = props;
    const formRef = useRef([]);
    console.log(">>> render formRef", index, formRef);
    return (
        <>
            <label>Field {index + 1}</label>
            <input
                type={'text'}
                name={`field-${index + 1}`}
                ref={el => formRef.current[index] = el}

            />
        </>
    );
};

export default SuperInputV2;