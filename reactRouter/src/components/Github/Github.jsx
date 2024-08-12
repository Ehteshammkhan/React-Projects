import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ehteshammkhan')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    return (
        <>
            <a className='block px-4 py-2 bg-orange-700 text-white rounded-md text-center' href={data.html_url} target='_blank'>Click here to visit the GitHub account</a>
            <img className='github-img' src={data.avatar_url} style={{ width: '200px', height: '200px', margin: '0 auto' }} alt="" />
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ehteshammkhan')
    return response.json()
} 