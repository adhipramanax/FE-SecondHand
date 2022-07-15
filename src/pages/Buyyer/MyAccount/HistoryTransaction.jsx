import React, {useState, useEffect} from "react";

import { getHistoryTransaction } from "../../../services/historyService";
import ListRectangelCard from '../../../components/ListRectangelCard'
import EmptyState from "../../../components/EmptyState";

const HistoryTransaction = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getHistoryTransaction().then(response => {
            setProducts(response.data.data);
        });
    }, []);

    return (
        <>
            {products === null ? <EmptyState description={"Belum ada transaksi yang dilakukan, Ayo cari barangnya sekarang!"} /> : <ListRectangelCard data={products} />}
        </>
    );
};
export default HistoryTransaction;
