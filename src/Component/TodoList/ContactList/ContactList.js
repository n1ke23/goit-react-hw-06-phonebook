import React from "react";
import { connect } from "react-redux";
import { deleteContact, removeFilterArr } from './../../../redux/actions/actionsContacts';
import Item from './Item/Item';
// import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup, } from "react-transition-group"
import './ContactList.css'

export function ContactList({ arr, deleteContact, removeFilterArr }) {

    const removeContact = (id) => {
        deleteContact(id);
        removeFilterArr();
    };

    return (
        <TransitionGroup component='ul' className='list-item'>
            {arr.map(el => (<CSSTransition key={el.id} timeout={250} classNames='items'><Item {...el} removeContact={removeContact} /></CSSTransition>))}
        </TransitionGroup>

    );
};

const mapStateToProps = state => ({
    arr: state.contacts.filterItems
        ? state.contacts.filterItems
        : state.contacts.items,
});

const mapDispatchToProps = { deleteContact, removeFilterArr };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

