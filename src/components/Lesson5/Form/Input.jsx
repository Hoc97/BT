function Input({ fnameRef, lnameRef, emailRef }) {
    return (
        <>
            <label >First name:</label>
            <input type="text" name="fname" ref={fnameRef} />
            <br />
            <label>Last name:</label>
            <input type="text" name="lname" ref={lnameRef} />
            <br />
            <label>Email:</label>
            <input type="email" name="email" ref={emailRef} />
            <br />
        </>
    );
}

export default Input;