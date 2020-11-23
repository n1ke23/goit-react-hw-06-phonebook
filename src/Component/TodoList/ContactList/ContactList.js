import React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions/actionsContacts";
import Item from './Item/Item';
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup, } from "react-transition-group"
import './ContactList.css'
const ContactList = (filter) => {
    return (
        <TransitionGroup component='ul' className='list-item'>

            {filter.map(el => <CSSTransition key={el.id} timeout={250} classNames='items'><Item {...el} /></CSSTransition>)}

        </TransitionGroup>

    );
};


const mapDispatchToProps = (state) => {
    const { items, filter } = state.contacts
    const filters = items.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))

    return { filter: filters }
}
export default connect(null, mapDispatchToProps)(ContactList);


ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    filter: PropTypes.array.isRequired,
}