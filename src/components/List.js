import React from 'react'

function List({title, url, views, created, upvotes, downvotes,comments}) {

  return (
    <div>
      <h1>{title}</h1>
      <p>{views}|uploaded {created}</p>
      <button>{upvotes}</button>
      <button>{downvotes}</button>
      <button>Hide Comments</button>
    </div>
  )
}

export default List
{/* <List  
         id={item["1"]}
         title={item["1"]}
         url={item["1"]}
         views={item["1"]}
         created={item["1"]}
         upvotes={item["1"]}
         downvotes={item["1"]}
         comments={item["1"]}
   />
  )) */}