import Link from "next/link";
const usersUrl = `http://localhost:4000/api/users`;
   
export const getStaticProps = async () => {
    const res = await fetch(usersUrl);
    let users = await res.json();
    users = Object.values(users);
    // console.log(users, ' users');

    return { props: { users } }
}

export default function Users ({users}) {
  // creating HTML page.
    return <>
    <div>
      <h1>Users</h1>
        {users.map((user, index) => <Link key={user.login} href={`increment-site-generation/${user.login}`}>
          <>{index === 0 ? <h2 key="generate1">Generated at build time</h2> : null}
            {index === 10 ? <h2 key="generated2">Will generate on request</h2> : null}
            <p > {user.login}</p>
          </>
        </Link>)}
    </div></>
}