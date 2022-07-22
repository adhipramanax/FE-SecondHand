import React, { useState, useEffect } from 'react';
import { getHistoryTransaction } from '../services/historyService';

// service
const historyTransactionContext = React.createContext()

const HistoryTransactionProvider = (props) => {
    const [historyTransaction, setHistoryTransaction] = useState([]);

    useEffect(() => {
        getHistoryTransaction().then(res => setHistoryTransaction(res.data.data))
    }, []);

    return (
        <historyTransactionContext.Provider
        value={{
            historyTransaction,
            setHistoryTransaction            
        }}
        >
            {props.children}
        </historyTransactionContext.Provider>
    )
}

export { historyTransactionContext, HistoryTransactionProvider }

