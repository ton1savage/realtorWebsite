import React, { useEffect, useRef, useState } from 'react';
import { FetchApi } from '../utils/fetchAPI'; // Adjust the path if needed

const FetchDataTest = () => {
    const [data, setData] = useState(null);
    const isFetched = useRef(false); // Ref to track if data has been fetched

    useEffect(() => {
        const fetchData = async () => {
            if (isFetched.current) return; // Exit if already fetched

            try {
                const result = await FetchApi.getProperties();
                setData(result);
                isFetched.current = true; // Set flag to true after fetch
                console.log('Fetched Data:', result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once

    return (
        <div>
            {data ? <div>Data fetched. Check console for details.</div> : <div>Loading...</div>}
        </div>
    );
};

export default FetchDataTest;
