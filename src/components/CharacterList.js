import { useEffect, useState } from "react"

export const CharacterList=()=>{

    // 1.Common case mistake because we make infinity prerender


    // const [ chars, setChars] = useState()

    // fetch(`https://swapi.dev/api/people/1`)
    // .then(res=>res.json())
    // .then(result=>{
    //     setChars(result)
    // })
    // return(
    //     <ul>
    //         <li>{chars?.name || `Loading...`}</li>
    //     </ul>
    // )

    // 2.useEffect: fetch one char -  OK!

    
    // const [ chars, setChars] = useState()

    // useEffect(()=>{

    //     fetch(`https://swapi.dev/api/people/1`)
    //     .then(res=>res.json())
    //     .then(result=>{
    //         setChars(result)
    //     })
    // },[])

    // return(
    //     <ul>
    //         <li>{chars?.name || `Loading...`}</li>
    //     </ul>
    // )


      // 3.useEffect: fetch all chars (changed fetch-url) -  OK!

      const [ chars, setChars] = useState([])

      useEffect(()=>{
  
          fetch(`https://swapi.dev/api/people`)
          .then(res=>res.json())
          .then(result=>{
            console.log(result);
              setChars(result.results)
          })

      },[])
  
      return(
          <ul>
            {/* conditional rendering */}
            {!chars.length && <li>Loading...</li>}
            {chars.map(x=>( <li key={x.name}>{x.name}</li>))}
              
          </ul>
      )

     
}