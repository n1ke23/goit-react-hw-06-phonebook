import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";


const items = createReducer([], {
    [tasksActions.addContat]: (start, action) => [...state, action.payload.contacts],
    [tasksActions.remuveContact]: (start, action) => state.filter((contact) => contact.id !== action.payload),
})

const filter = createReducer('', {
    [tasksActions.remuveContact]: (start, action) => action.payload,
})

export default combineReducers({ items, filter })




    // const state = {
    //     contacts: [
    //         // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //         // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //         // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //         // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    //     ],
    //     filter: "",
    // }

    // const [obj, setObj] = useState({ ...state })
    // const addContact = async (user) => {
    //     if (obj.contacts.some((el) => el.name === user.name)) {
    //         reversNotifi()
    //         // alert(`${user.name} уже записанно, введите другое имя!`)
    //     } else {
    //         setObj((prev) => ({ ...prev, contacts: [...prev.contacts, { id: uuidv4(), ...user }] }))
    //         localStorage.setItem("contacts", JSON.stringify(obj.contacts))
    //     }
    // }
    // const delContact = (id) => {
    //     const contacts = obj.contacts.filter((el) => el.id !== id)
    //     setObj((prev) => ({ ...prev, contacts }))
    // }
    // const inputFilter = ({ target }) => {
    //     const { value, name } = target
    //     setObj((prev) => ({ ...prev, [name]: value }))
    // }