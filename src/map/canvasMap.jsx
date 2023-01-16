import { useEffect, useRef, useState } from 'react'
// import { children, snowAreas } from '../../data'
import { children } from '../children'
import { snowAreas } from '../snowAreas'
import { buildRoute } from '../buildRoute'
import { checkAllChildren, drawMoves, drawRect, drawZoneInCanvas } from './utils'
import { moves } from './moves'
import { movesForMap } from '../movesForMap'
import { wrappSnow } from '../inSnow'
import { areasWrap } from '../areasWrap'
import { toSliceGifts } from './sort'

const CanvasMap = () => {

    const [ren, setRen] = useState(false)
    const canvasRef = useRef(null);
    const reduceSize = 10;

    if(canvasRef.current){
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      children?.forEach(obj => {
        drawZoneInCanvas({
          ctx: ctx,
          x: obj.x / reduceSize,
          y: obj.y / reduceSize,
          fillStyle: "black"
        })
      })

      snowAreas?.forEach(obj => {
        drawZoneInCanvas({
          ctx: ctx,
          x: obj.x / reduceSize,
          y: obj.y / reduceSize,
          r: obj.r / reduceSize,
          fillStyle: "rgba(255, 0, 0, .4)"
        })
      })

      drawMoves(movesForMap, ctx)

      drawRect(areasWrap, ctx)
    }

    // console.log(toSliceGifts());
    // const {moves, moveForMap} = buildRoute()

    // console.log("Moves: ", moves);
    // console.log("Moves for map: ", moveForMap);

    // console.log(wrappSnow());

    useEffect(() => {
      setRen(true)
    }, [])

  return (
    <>
      <canvas width={1000} height={1000} ref={canvasRef} className='filed'></canvas>
      {/* <Form/> */}
    </>
    
  )
}

export default CanvasMap