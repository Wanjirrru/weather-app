import { useEffect, useState } from "react";

function PracticeFetch() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
    <div>
            {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
    );
}

export default PracticeFetch;