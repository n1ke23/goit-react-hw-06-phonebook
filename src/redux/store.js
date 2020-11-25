import { reduceContacts } from './reduce/reduceContacts';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: reduceContacts,
});
export default store;