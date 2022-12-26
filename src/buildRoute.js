import { children } from "../data.js"
import { sortChildByY, sortChildDist } from "./map/sortChildren.js";
import { sortedGifts } from "./sortedGifts.js"
import { checkChildToInSnow, searchPath } from "./utils.js";

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
                const snowId = checkChildToInSnow(sortedChildren[childIn])
                if(snowId){
                    moves.push(sortedChildren[childIn]);
                    tempArr.push(sortedChildren[childIn])
                    childIn += 1;
                    continue
                }
                moves.push(sortedChildren[childIn]);
                tempArr.push(sortedChildren[childIn])
                childIn += 1;
            }
            moveForMap.push([...tempArr, {x: 0, y: 0}])
            moves.push( {x: 0, y: 0} );
            santa(arr);
        }
    }


    santa(copyArr)
    return {moves, moveForMap};
}

// console.log(buildRoute());