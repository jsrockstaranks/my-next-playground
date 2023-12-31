import Link from "next/link";
const usersUrl = `http://localhost:4000/api/users`;
   
export const getStaticProps = async () => {
    const res = await fetch(usersUrl);
    let users = await res.json();
    users = Object.values(users);
    return { props: { users } }
}

export default function Users ({users}) {
  // creating HTML page.
    return <>
    <div>
      <h1>Users</h1>
        {users.map(user => <Link href={`static-site-generation/${user.login}`}>
          <p key={user.login}> {user.login}</p>
        </Link>)}
    </div></>
}