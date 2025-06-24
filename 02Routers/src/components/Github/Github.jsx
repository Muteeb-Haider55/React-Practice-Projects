// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github  ()  {
const data = useLoaderData()
 
  return (
  <>
    <img src={data.avatar_url} className='rounded-full m-auto' alt="" />
    <div className=' text-center m-4 
      p-4 text-xl'>Github User Name: {data.login}</div>
         <div className=' text-center m-4 
      p-4 text-xl'>Github Followers: {data.followers}</div>
         <div className=' text-center m-4 
      p-4 text-xl'>Github Bio: {data.bio}</div>
     
     </>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response =await fetch('https://api.github.com/users/Muteeb-Haider55')
    return response.json()
     }
