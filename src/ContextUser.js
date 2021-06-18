import React from 'react';

//const ContextUser = React.createContext();
const ContextUser = React.createContext('Code Evolution'); // craete conext with default value

const UserProvider = ContextUser.Provider
const UserConsumer = ContextUser.Consumer

export { UserProvider, UserConsumer }
export default ContextUser ;