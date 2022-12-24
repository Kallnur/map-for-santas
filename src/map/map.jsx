import axios from 'axios'
import { useEffect, useState } from 'react'
import { checkAllChildren, sliceGifts, sortChildDist, sortGifts } from './utils'

const Map = () => {

    const [data, setData] = useState()
    const reduceSize = 10;

    const getData = async () => {
      await axios.get("https://*********************************************.json")
         .then(data => {
             setData(data.data)
         })
    }

    // if(data?.gifts) console.log(sliceGifts(data.gifts));
    // if(data?.gifts) console.log(sortGifts(data.gifts));
    // if(data?.children) console.log(sortChildDist(data.children));
    // console.log("checko all child: ", checkAllChildren(data.children, data.snowAreas));
    

    // console.log(checkDistChild({x:317,y:317}, {x:317, y:33}));

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