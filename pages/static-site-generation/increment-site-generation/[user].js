const usersUrl = `http://localhost:4000/api/users`;
/* 
    The above API returns 36 users, assume 1:10 so 36 will be 360 users
*/
// Cost effective - use the data from getStaticProps of index.js call.

/*
    1K paths
*/

export const getStaticPaths = async () => {
    // First function to run for the page;
    // To create all pages at build time
    // 1 call to get all 1K results, hypothetically API returning 1K users
    const res = await fetch(usersUrl);
    let usersData = await res.json();
    usersData = Object.values(usersData);
    usersData = usersData.slice(0, 10); // scale 1:10.
    const paths = usersData.map(u => ({params: {user: u.login}}));
    /* e/g/ path will contain 
        paths = [
            {params: {user: 'Anks}},
            {params: {user:'Sushil'}}
        ];
    */
    // Generating first 100 paths statically
    return {
      paths,
      fallback: 'blocking', // false or "blocking"
    }
}


export const getStaticProps = async (context) => {
    // Second function to run for the page;
    // Calls 10 time.
    const user = context.params.user;
    const reposUrl = `http://localhost:4000/api/users/${user}`;
    console.log('APIHIT - ISG: API called for user , ' , user , reposUrl);
    const res = await fetch(reposUrl);
    let repos = await res.json();
    repos = Object.values(repos);
    return { props: { repos } }
}

export default function Users ({repos}) {
    // Third function to run. 
    // Creating HTML of each specific User
    // Calls 10 times.
    return <>
    <div>
        {/* {error handling is missing} */}
        This is ISR user dynamic page! <br/>
        {repos ? repos.map((repo) => <p key={`${repo.id}ISR`}> {repo.name} </p>) : <p key="noSSR">No repos available for this user</p>}
    </div></>
}

/*
    - revalidate
    - where next stores pages dynamically generated at user's request in ISR
    - Is there any way to revalidate paths too?

*/