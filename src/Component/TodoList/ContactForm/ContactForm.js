import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import './ContactForm.css'
import { v4 as uuidv4 } from 'uuid';
import { addContat, setIsNotify } from './../../../redux/actions/actionsContacts';
import { connect } from 'react-redux';

function ContactForm({ addContat, items, isNotifi, setIsNotify }) {
    const [objForm, setObjForm] = useState({ name: '', number: '' });
    const inputHandler = ({ target }) => {
        if (isNotifi) {
            setIsNotify(false)
        };
        const { value, name } = target;
        setObjForm(prev => ({ ...prev, [name]: value }));
    };
    const onHandelSubmit = (e) => {
        e.preventDefault();
        if (items.some((el) => el.name === objForm.name)) {
            setIsNotify(true);
            setTimeout(function () {
                if (isNotifi) {
                    setIsNotify(false)
                };
            }, 3000);
        } else {
            addContat(objForm);
        }

        setObjForm({ name: '', number: '' });
    };

    // const contacts = useSelector(state => state.contacts.items);
    // const dispatch = useDispatch();


    // const inputHandler = ({ target }) => {
    //     if (isNotifi) {
    //         setIsNotify(false)
    //     };
    //     const { value, name } = target;
    //     setObjForm(prev => ({ ...prev, [name]: value }));
    // };

    // const onHandelSubmit = (e) => {
    //     e.preventDefault();
    //     if (contacts.every((contact) => !contact.name.includes(name))) {
    //         dispatch(addContact(...objForm, uuidv4()));
    //     } else {
    //         setIsNotify(true);
    //         setTimeout(function () {
    //             if (isNotifi) {
    //                 setIsNotify(false)
    //             };
    //         }, 3000);
    //     }

    //     setObjForm({ name: '', number: '' });
    // };

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

const mapStateToProps = state => ({ items: state.contacts.items });
const mapDispatchToProps = { addContat, setIsNotify };
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);



