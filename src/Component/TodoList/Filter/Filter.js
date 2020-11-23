import React, { useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import actions from "../../../redux/actions/actionsContacts";
const Filter = ({ inputHandlerFilter, filter }) => {

    return (
        <>
            <form>
                <p className="form__text">Find contact by name</p>
                <input className="input__form"
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={inputHandlerFilter}
                />
            </form>

        </>
    );
};

const mapStateToProps = state => ({
    filter: state.contats.filter
})

const mapDispatchToProps = {
    inputHandlerFilter: actions.filter
}

export default connect(mapStateToProps)(Filter);

Filter.propTypes = {
    inputHandlerFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}