import { useEffect } from "react";

export default function SSR ({dogsBreeds}) {
    return <>
        this is SSR page 
        {dogsBreeds.map((breed, index) => {
            return <>
            {/* {breed[1].length ? <p key ={breed + index}>{`${breed[0]} has found in ${breed[1].length} countries`}</p> : null}</> */}
            {<p key ={breed + index}>{`${breed[0]} has found in ${breed[1].length} countries`}</p>}</>

        })}
    </>
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const data = await res.json();
    const dogsBreeds = Object.entries(data.message);
    console.log('checking on server ');
    // Pass data to the page via props
    return { props: { dogsBreeds } }
  }