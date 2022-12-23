import axios from 'axios'
import { useEffect, useState } from 'react'

const Map = () => {

    // const [data, setData] = useState()

    // const getData = async () => {
    //   await axios.get("https://********************************************************** */.json")
    //      .then(data => {
    //          setData(data.data)
    //      })
    // }

    // const sliceGifts = () => {

    //   let result = [];

    //   const fillSled = (arr, currentIn) => {
    //     const sled = {
    //       weight: 0,
    //       volume: 0
    //     }
        
    //     for(let i = currentIn; i <= arr.length; i++){
    //       if(!arr[i]) break
          
    //       if(sled.weight > 188 || sled.volume > 93){
    //         result = [...result, arr.slice(currentIn, i)]
    //         fillSled(arr, i)
    //         break 
    //       }
    //       else {
    //         sled.volume += Number(arr[i].volume);
    //         sled.weight += Number(arr[i].weight)
    //       }
    //     }
    //   }

    //   fillSled(data.gifts, 0)

    //   return result;
    // }

    // if(data?.gifts) console.log(sliceGifts());

//  {"x":1057,"y":2620}   true   {"r":698,"x":961,"y":2715}
//  {"x":2266,"y":1741}  false
//  {"x":1350,"y":2347}  true

  // const check_a_point = (childX, childY, snowX, snowY, snowR) => {
  //   const dist_points = (childX - snowX) * (childX - snowX) + (childY - snowY) * (childY - snowY);
  //   snowR *= snowR;
  //   if (dist_points < snowR) {
  //     return true;
  //   }
  //   return false;
  // }

  // const checkAllChildren = () => {

  //   const children = [...data.children]

  //   data.snowAreas.forEach(snow => {
  //     children.forEach((child, i, ref) => {
  //       const bool = check_a_point(child.x, child.y, snow.x, snow.y, snow.r)
  //       if(!ref[i].inSnowArea) ref[i] = {...child, inSnowArea: bool}
  //     })
  //   })

  //   return children;
  // }

  //   console.log("checko all child: ", checkAllChildren());

  //   useEffect(() => {
  //       getData()
  //   }, []);

  return (
    <div className='filed'>
      {
        data?.snowAreas?.length && data.snowAreas.map(obj => (
          <div data-data={JSON.stringify(obj)} key={JSON.stringify(obj)} className='snowAreas' style={{
            top: (obj.y / 10) - (obj.r / 10),
            left: (obj.x / 10) - (obj.r / 10),
            width: (obj.r / 10) * 2,
            height: (obj.r / 10) * 2
          }}></div>
        ))
      }
      {
        data?.children?.length && data.children.map(obj => (
          <div data-data={JSON.stringify(obj)} key={JSON.stringify(obj)} className='dot' style={{top: obj.y / 10, left: obj.x / 10}}></div>
        ))
      }
    </div>
  )
}

export default Map