import { useRef } from "react";
import Input from './Input';

const UnControlledForm = (props) => {
    const fnameRef = useRef('');
    const lnameRef = useRef('');
    const emailRef = useRef('');
    console.log('fnameRef', fnameRef.current);
    console.log('lnameRef', lnameRef.current);
    console.log('emailRef', emailRef.current);
    const handleSubmit = () => {
        const form = {
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            email: emailRef.current.value
        };
        console.log(">>> check form data: ", form);
    };
    console.log(">>> render UnControlledForm");
    return (
        <fieldset>
            <legend>Un-Control Form</legend>
            <Input fnameRef={fnameRef} lnameRef={lnameRef} emailRef={emailRef} />

            <input type="button" value="Submit"
                onClick={handleSubmit}
            />
        </fieldset>
    );
};

export default UnControlledForm;