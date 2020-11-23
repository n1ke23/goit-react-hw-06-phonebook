import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";
import './ContactForm.css'
import { connect } from "react-redux";
import actions from "../../../redux/actions/actionsContacts";

const ContactForm = ({ addContact, isNotifi, setIsNotifi }) => {

    const [objForm, setObjForm] = useState({ name: '', number: '' });
    const inputHandler = ({ target }) => {
        if (isNotifi) {
            setIsNotifi(false)
        };
        const { value, name } = target;
        setObjForm(prev => ({ ...prev, [name]: value }));
    };

    const onHandelSubmit = (e) => {
        e.preventDefault();
        addContact({ ...objForm })
        setObjForm({ name: '', number: '' });
    };

    return (
        <>
            <form className="form" onSubmit={onHandelSubmit}>
                <p className="form-text">Name</p>
                <input className="input-form"
                    type="text"
                    name="name"
                    value={objForm.name}
                    onChange={inputHandler}
                />
                <p className="form-text">Number</p>
                <input className="input-form"
                    type="tel"
                    name="number"
                    value={objForm.number}
                    onChange={inputHandler}
                />
                <button className="contact-form-btn" type='submit'>Add contact</button>
            </form>
        </>
    );
};

const mapDispatchToProps = {
    addContact: actions.addContat
}

export default connect(null, mapDispatchToProps)(ContactForm);


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}