const usersUrl = `https://api.github.com/users`;

export const getStaticPaths = async () => {
    const res = await fetch(usersUrl);
    const usersData = await res.json();
    const paths = usersData.map(u => ({params: {user: u.login}}));
    return {
      paths,
      fallback: true, // false or "blocking"
    }
}

   
export const getStaticProps = async (context) => {
    const user = context.params.user;
    const reposUrl = `https://api.github.com/users/${user}/repos`;
    console.log('user , ' , user , reposUrl);
    const res = await fetch(reposUrl);
    const repos = await res.json();
    return { props: { repos } }
}

export default function Users ({repos}) {
    return <>
    <div>
        This is SSG user dynamic page! <br/>
        {repos.map((repo) => <p key={repo.id}> {repo.name} </p>)}
    </div></>
}