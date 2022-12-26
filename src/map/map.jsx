import axios from 'axios'
import { children, gifts } from '../../data'
import { useEffect, useState } from 'react'
import { sliceGifts, toSliceGifts } from './sort'
import { checkAllChildren, sortGifts } from './utils'
import { sortedGifts } from '../sortedGifts'
import { snowAreas } from '../snowAreas'

const Map = () => {

    const reduceSize = 10;

    // const [locData, setData] = useState(data)
    // const getData = async () => {
    //   await axios.get("")
    //      .then(data => {
    //          console.log(data.data.children)
    //      })
    // }

    // if(data?.gifts) console.log(sliceGifts(data.gifts));
    // if(data?.gifts) console.log(sortGifts(data.gifts));
    // if(data?.children) console.log(sortChildDist(data.children));
    // console.log("checko all child: ", checkAllChildren(data.children, data.snowAreas));

    // console.log(toSliceGifts());

    // console.log(checkDistChild({x:317,y:317}, {x:317, y:33}));

    console.log(snowAreas);

    useEffect(() => {
      getData()
    }, [])

  return (
    <div className='filed'>
      {
        snowAreas?.length && snowAreas.map(obj => (
          <div data-data={JSON.stringify(obj)} key={JSON.stringify(obj)} className='snowAreas' style={{
            top: (obj.y / reduceSize) - (obj.r / reduceSize),
            left: (obj.x / reduceSize) - (obj.r / reduceSize),
            width: (obj.r / reduceSize) * 2,
            height: (obj.r / reduceSize) * 2
          }}></div>
        ))
      }
      {
        children?.length && children.map(obj => (
          <div data-data={JSON.stringify(obj)} key={JSON.stringify(obj)} className='dot' style={{top: obj.y / reduceSize, left: obj.x / reduceSize}}></div>
        ))
      }
    </div>
  )
}

export default Map