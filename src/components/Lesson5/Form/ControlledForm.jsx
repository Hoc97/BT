import { useState } from "react";

const ControlForm = (props) => {
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    const handleOnChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSumbit = () => {
        console.log(">>> check form data: ", form);
    }

    console.log(">>> render UnControlledForm")
    return (
        <fieldset>
            <legend>Control Form</legend>
            <label >First name:</label>
            <input
                type="text" name="fname" value={form['fname']}
                onChange={handleOnChange} />
            <br />
            <label >Last name:</label>
            <input type="text" name="lname" value={form['lname']}
                onChange={handleOnChange}
            />
            <br />
            <label >Email:</label>
            <input type="email" name="email" value={form['email']}
                onChange={handleOnChange}
            />
            <br />
            <input type="button" value="Submit"
                onClick={handleSumbit}
            />
        </fieldset>
    )
}

export default ControlForm;