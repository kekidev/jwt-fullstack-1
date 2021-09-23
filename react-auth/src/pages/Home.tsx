import React, {useEffect, useState} from 'react';

const Home = () => {
    const [name, setName] = useState("")

    useEffect(() =>  {
        (
            async () => {
                const res = await fetch('http://localhost:8000/api/user', {
                    headers: {"Content-Type": "application/json"},
                    credentials: "include"
                })

                const content = await res.json()
                setName(content.name)
            }
        )()
    })

    return (
        <div>
            {name ? <h1>Hello {name}</h1> : <h1>Hello guest</h1>}
        </div>
    );
};

export default Home;