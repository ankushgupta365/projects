import styled from "styled-components"
import Box from "./Box"
import { useEffect, useState } from "react"

const ColumnContainer = styled.div`
    /* width: 10vw;
    height: 60vh; */
    width: 10vw;
    height: 100%;
    margin: 8px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const Column = ({ item, unavailableStudios }) => {
  const [studioUnavailable, setStudioUnavailable] = useState(false)

  // useEffect(() => {
  //   if (unavailableStudios.length > 0 && item.type == 'numerical') {
  //     setStudioUnavailable(!unavailableStudios.filter((i) => {
  //       if (item.studioNo.includes(i._id)) {
  //         return item
  //       }
  //     })[0]?.activeStatus)
  //   } else if (unavailableStudios.length > 0 && item.type == 'theory') {
  //    const noOfStudiosUnavailable= unavailableStudios.filter((i) => {
  //       if (!i.activeStatus && item.studioNo.includes(i._id)) {
  //         return item
  //       }
  //     })
  //     if(noOfStudiosUnavailable.length === 3){
  //       setStudioUnavailable(true)
  //     }
  //   }
  // }, [unavailableStudios])

  useEffect(()=>{
    if(unavailableStudios.length >0){
      setStudioUnavailable(!unavailableStudios.filter((i)=>{
        if(i._id === item.number){
          return item
        }
      })[0].activeStatus)
    }
  }, [unavailableStudios])

  return (
    <ColumnContainer>
      {item.slots.map(slot => {
        return <Box slot={slot} studioUnavailable={studioUnavailable}  key={slot.id}/>
      })}
    </ColumnContainer>
  )
}

export default Column