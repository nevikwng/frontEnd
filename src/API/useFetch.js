import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [Data, SetData] = useState({ rows: [] })
    useEffect(() => {
        const FetchData = async () => {
            const res = await fetch(url)
            const resArray = await res.json();
            SetData(resArray);
        }
        FetchData();
    }, [])
    return Data;
}

export default useFetch;