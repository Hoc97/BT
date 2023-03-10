import ControlledForm from "./ControlledForm";
import UnControlledForm from "./UnControlledForm";

const Form = (props) => {
    return (
        <div className='lesson5-container'>
            <div className='control'>
                <ControlledForm />
            </div>
            <div className='uncontrol'>
                <UnControlledForm />
            </div>
        </div>
    )
}

export default Form;