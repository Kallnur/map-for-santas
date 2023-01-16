import { children } from "../data.js"
import { sortChildByX, sortChildByY, sortChildDist } from "./map/sortChildren.js";
import { sortedGifts } from "./sortedGifts.js"
import { checkChildToInSnow, checkLine, searchPath } from "./utils.js";

export const buildRoute = () => {
    const sortedChildren = sortChildDist();
    const moves = [];
    const moveForMap = [];
    const copyArr = [...sortedGifts]
    let childIn = 0;

    const santa = (arr) => {
        const lastBag = arr.pop();
        const tempArr = [];
        if(lastBag){
            for(let i = 0; i < lastBag.length; i++) {

                const nextStep = {
                    x: sortedChildren[childIn].x,
                    y: sortedChildren[childIn].y
                }

                if(moves[moves.length - 1]) {
                    const obhod = checkLine(moves[moves.length - 1], nextStep)
                    if(obhod.length){
                        moves.push(...obhod, nextStep);
                        tempArr.push(...obhod, nextStep)
                        childIn += 1;
                        continue
                    }
                }


                const snowId = checkChildToInSnow(sortedChildren[childIn])
                if(snowId){
                    const nextStepBySnow = searchPath(sortedChildren[childIn], snowId)  
                    if(nextStepBySnow.x === sortedChildren[childIn].x && nextStepBySnow.y === sortedChildren[childIn].y){
                        moves.push(nextStep);
                        tempArr.push(nextStep)
                        childIn += 1;
                        continue
                    } else {
                        moves.push(nextStepBySnow, nextStep);
                        tempArr.push(nextStepBySnow, nextStep)
                        childIn += 1;
                        continue
                    }
                }
                moves.push(nextStep);
                tempArr.push(nextStep)
                childIn += 1;
            } 

            // if(moves[moves.length - 1]){
            //     const obhod = checkLine(sortedChildren[childIn], {x: 0, y: 0})
            //     if(obhod.length){
            //         moves.push(...obhod);
            //         tempArr.push(...obhod)
            //     }
            //     console.log(obhod);
            // }

            moveForMap.push([...tempArr, {x: 0, y: 0}])
            moves.push( {x: 0, y: 0} );
            santa(arr);
        }
    }


    santa(copyArr)
    return {moves, moveForMap};
}

// console.log(buildRoute());