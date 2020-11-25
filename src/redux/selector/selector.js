
export const contacts = state => state.contacts;
export const items = state => contacts(state).items;
export const notify = state => contacts(state).isNotify;