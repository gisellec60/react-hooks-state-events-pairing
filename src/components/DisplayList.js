import React from 'react'
import List from "./List"


function DisplayList( {video} ) {
  
  const displayInfo = Object.entries(video).map ((item) => (
    <List 
         key={item["1"]}
         title={item["1"]}
         url={item["1"]}
         views={item["1"]}
         created={item["1"]}
         upvotes={item["1"]}
         downvotes={item["1"]}
         comments={item["1"]}
    
   />
  ))

  return (
    <div>
       { displayInfo }
    </div>
  )
}

export default DisplayList
// const video = {
//     id: 1,
//     title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
//     embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
//     views: 730707,
//     createdAt: "Oct 26, 2018",
//     upvotes: 9210,
//     downvotes: 185,
//     comments: [
//       {
//         id: 1,
//         user: "duanebot",
//         comment: "first!",
//       },
//       {
//         id: 2,
//         user: "gaeron",
//         comment: "What a great tutorial!",
//       },
//     ],
//   };