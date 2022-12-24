import axios from 'axios'
import { useEffect, useState } from 'react'
import { checkAllChildren, sliceGifts } from './utils'

const Map = () => {

    const [data, setData] = useState()
    const reduceSize = 10;

    const getData = async () => {
      await axios.get("https://datsanta.dats.team/json/map/faf7ef78-41b3-4a36-8423-688a61929c08.json")
         .then(data => {
             setData(data.data)
         })
    }

    // if(data?.gifts) console.log(sliceGifts(data.gifts));
    // console.log("checko all child: ", checkAllChildren(data.children, data.snowAreas));

    

    useEffect(() => {
        getData()
    }, []);

  return (
    <div className='filed'>
      {
        data?.snowAreas?.length && data.snowAreas.map(obj => (
          <div data-data={JSON.stringify(obj)} key={JSON.stringify(obj)} className='snowAreas' style={{
            top: (obj.y / reduceSize) - (obj.r / reduceSize),
            left: (obj.x / reduceSize) - (obj.r / reduceSize),
            width: (obj.r / reduceSize) * 2,
            height: (obj.r / reduceSize) * 2
          }}></div>
        ))
      }
      {
        data?.children?.length && data.children.map(obj => (
          <div data-data={JSON.stringify(obj)} key={JSON.stringify(obj)} className='dot' style={{top: obj.y / reduceSize, left: obj.x / reduceSize}}></div>
        ))
      }
    </div>
  )
}

export default Map