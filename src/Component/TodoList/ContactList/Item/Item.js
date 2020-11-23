import React from "react";
import { connect } from "react-redux";
import actions from "../../../../redux/actions/actionsContacts";
import PropTypes from "prop-types";
import './Item.css'

const Item = ({ id, name, number, deleteContact }) => {
    return (
        <li className="contact-list-item">
            <p className="contact-list-item-text">
                {name}: {number}
            </p>
            <button
                className="contact-list-item-btn"
                type="button"
                onClick={(e) => {
                    deleteContact(id);
                }}
            >
                <p className="contact-list-item-btn-text">x</p>
            </button>
        </li>

    );
};

export default Item;

const mapDispatchToProps = {
    deleteContact: actions.removeContact
}
export default connect(null, mapDispatchToProps)(Item);


Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}