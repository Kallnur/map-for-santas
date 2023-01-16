import { sortedGifts } from "../sortedGifts.js";
import { children } from "../children.js";
import { moves } from "./moves.js";
import { result } from "../buyGifForChildren/result.js";

const allId = [];

for(let i = 0; i < sortedGifts.length; i++) {
    for(let j = 0; j < sortedGifts[i].length; j++){
        allId.push(sortedGifts[i][j])
    }
}

// for(let i = 0; i < result.length; i++) {
//     allId.push(result[i].giftID);
// }

console.log(allId.length);

const duplicates = allId.filter((id, index, arr) => {
    return arr.indexOf(id) !== index;
});

console.log(duplicates);

// const skiplys = children.filter(obj => {
//     const check = moves.find(obj2 => {
//         if(obj2.x === obj.x && obj2.y === obj.y) return obj2
//     })
//     if(!check) return obj 
// })

// console.log(skiplys);