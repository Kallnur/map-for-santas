// import { snowAreas } from "./snowAreas.js"

// export const wrappSnow = () => {
//     const res = snowAreas.map((obj, i) => {
//         const {x, y, r, id} = obj;
//         const radRect = r / 10;
//         const tempObj = {
//             id: null,
//             arr: []
//         };

//         for(let i = 0; i < 10; i ++){
//             const xi = x + (r + r / 10) * Math.cos(2*Math.PI*i/10);
//             const yi = y + (r + r / 10) * Math.sin(2*Math.PI*i/10);
//             tempObj.arr.push({x: xi, y: yi});
//         }

//         tempObj.id = i + 1;

//         return tempObj
//     })
//     return res
// }

// // console.log(wrappSnow());