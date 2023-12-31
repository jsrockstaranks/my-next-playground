const usersUrl = `https://api.github.com/users`; // 1M.
// Cost effective - use the datqa from getStaticProps of index.js call.

/*
    10 paths
*/

export const getStaticPaths = async () => {
    // First function to run for the page;
    // To create all pages at build time
    // 1 call.
    const res = await fetch(usersUrl);
    let usersData = await res.json();
    usersData = Object.values(usersData);
    const paths = usersData.map(u => ({params: {user: u.login}}));
    /* e/g/ path will contain 
        paths = [
            {params: {user: 'Anks}},
            {params: {user:'Sushil'}}
        ];
    */
    // paths list of 36 paths
    return {
      paths,
      fallback: true, // false or "blocking"
    }
}


export const getStaticProps = async (context) => {
    // Second function to run for the page;
    // Calls 10 time.
    let repos = [];
    const user = context.params.user;
    const reposUrl = `http://localhost:4000/api/users/${user}`;
    console.log('APIHIT - SSG: API called for user , ' , user , reposUrl);
    const res = await fetch(reposUrl);
    repos = await res.json();
    repos = Object.values(repos);
    // console.log(repos, 'returned ');
    return { props: { repos } }
}

export default function Users ({repos}) {
    // Third function to run. 
    // Creating HTML of each specific User
    // Calls 10 times.
    return <>
        {/* {error handling is missing} */}
        This is SSG user dynamic page! <br/>
        {repos ? repos.map((repo) => <p key={repo.id}> {repo.name} </p>) : <p key="noRepo">No repos available for this user</p>}
    </>
}