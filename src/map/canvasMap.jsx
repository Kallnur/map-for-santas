import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { checkAllChildren, drawZoneInCanvas, sliceGifts } from './utils'

const CanvasMap = () => {

    const [data, setData] = useState()
    const canvasRef = useRef(null);
    const reduceSize = 10;

    const getData = async () => {
      await axios.get("https://datsanta.dats.team/json/map/faf7ef78-41b3-4a36-8423-688a61929c08.json")
         .then(data => {
             setData(data.data)
         })
    }

    if(canvasRef.current){
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      data.children?.forEach(obj => {
        drawZoneInCanvas({
          ctx: ctx,
          x: obj.x / reduceSize,
          y: obj.y / reduceSize,
          fillStyle: "black"
        })
      })

      data.snowAreas?.forEach(obj => {
        drawZoneInCanvas({
          ctx: ctx,
          x: obj.x / reduceSize,
          y: obj.y / reduceSize,
          r: obj.r / reduceSize,
          fillStyle: "rgba(255, 0, 0, .4)"
        })
      })
    }

    // if(data?.gifts) console.log(sliceGifts(data.gifts));
    // console.log("checko all child: ", checkAllChildren(data.children, data.snowAreas));



    useEffect(() => {
        getData()
    }, []);

  return (
    <canvas width={1000} height={1000} ref={canvasRef} className='filed'></canvas>
  )
}

export default CanvasMap