import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid"

const addContat = createAction('contact/add', (contact) => ({
    payload: {
        contacts: {
            id: uuidv4(),
            ...contact
        }
    }
}))

const removeContact = createAction('contact/remove')

const changeFilter = createAction('contact/changeFilter')

export default { addContat, removeContact, changeFilter }