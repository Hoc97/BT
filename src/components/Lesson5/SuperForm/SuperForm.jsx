import { useState, memo } from 'react';
import './SuperForm.scss';
import SuperInput from './SuperInput';

const SuperForm = (props) => {
    const abc = () => {
        let initForm = {};
        for (let i = 1; i <= 200; i++) {
            initForm[`field-${i}`] = "";
        }
        return initForm;
    };

    const [form, setForm] = useState(abc());

    const handleChangeInput = (event) => {
        console.log(event.target.name);
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };
    console.log(">>> render form: ", form);
    return (
        <div className="super-form-container">
            {[...Array(200)].map((e, index) => {
                return (
                    <div className='input-group' key={`index-${index}`}>
                        <SuperInput
                            index={index}
                            handleChangeInput={handleChangeInput}
                            valueInput={form[`field-${index + 1}`]}
                        />
                    </div>
                );
            })}

        </div>
    );
};



export default SuperForm;