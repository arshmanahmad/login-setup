import { createContext } from "react";
import { useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
    const [data, setData] = useState([]);
    const [content, setContent] = useState('');

    return (
        <Context.Provider value={{ data, setData, content, setContent }}>
            {children}
        </Context.Provider>
    )
}
export default Context;
export { Provider };