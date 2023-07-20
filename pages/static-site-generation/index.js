import Link from "next/link";
const usersUrl = `https://api.github.com/users`;
   
export const getStaticProps = async () => {
    const res = await fetch(usersUrl);
    const users = await res.json()
    return { props: { users } }
}

export default function Users ({users}) {
    return <>
    <div>
      <h1>Users</h1>
        {users.map(user => <Link href={`static-site-generation/${user.login}`}>
          <p key={user.login}> {user.login}</p>
        </Link>)}
    </div></>
}