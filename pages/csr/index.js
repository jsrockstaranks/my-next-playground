import { useState, useEffect } from "react";

export default function SSR ({dogsBreeds}) {
    const [users, setUsers] = useState([]);
    useEffect(() => async() => {
        // Fetch data from external API
        const res = await fetch(`http://localhost:4000/api/users`);
        const data = await res.json();
        // console.log('data ', data);
        setUsers(data);
    }, []);
    return <>
        this is CSR page 
        {users.map((user, index) => {
            return <>
            {/* {breed[1].length ? <p key ={breed + index}>{`${breed[0]} has found in ${breed[1].length} countries`}</p> : null}</> */}
            {<p key ={user.login}>{user.login}</p>}</>

        })}
    </>
}

