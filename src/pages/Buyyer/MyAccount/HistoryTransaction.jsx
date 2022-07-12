import React, {useState, useEffect} from "react";

import { getHistoryTransaction } from "../../../services/historyService";
import ListRectangelCard from '../../../components/ListRectangelCard'

const HistoryTransaction = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getHistoryTransaction().then(response => {
            setProducts(response.data.data);
        });
    }, []);

    return (
        <>
            <ListRectangelCard data={products}/>
        </>
    );
};
export default HistoryTransaction;
