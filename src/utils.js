// import { check_a_point } from "./map/utils";
// import { snowAreas } from "./snowAreas";
// import { areasWrap } from "./areasWrap";

// export const checkChildToInSnow = (child) => {
//     let snowId = false;
//     if(child){
//         snowAreas.forEach((snow, i) => {
//             const bool = check_a_point(child.x, child.y, snow.x, snow.y, snow.r)
//             if(bool) snowId = i + 1;
//         })
//     }

//     return snowId
// }

// const sqr = function(x) { return x * x; };

// export const searchPath = (child, snowId) => {
//     const areaWrap = areasWrap.find(obj => obj.id ? obj.id === snowId : false);
//     let target = null;
//     let len = null;

//     if(areaWrap) {
//         for(let i = 0; i < areaWrap.arr.length; i++) {
//             const thisLen = sqr(areaWrap.arr[i].x - child.x) + sqr(areaWrap.arr[i].y - child.y);
//             if(areaWrap.arr[i].x > 9990 || areaWrap.arr[i].y > 9990 || areaWrap.arr[i].y < 1 || areaWrap.arr[i].x < 1 ) continue
//             if(len === null || len > thisLen) {
//                 len = thisLen;
//                 target = areaWrap.arr[i]
//             }
//         }
//     }

//     if(target) {
//         target.x = Math.floor(target.x)
//         target.y = Math.floor(target.y)
//         return target
//     }
//     return child
// }

// export const obhodSnowIn = (nextPos, snowId) => {
//     const areaWrap = areasWrap.find(obj => obj.id ? obj.id === snowId : false);
//     let target = null;
//     let len = null;
//     const path = [];

//     // console.log("in obhod");

//     if(areaWrap) {
//         for(let i = 0; i < areaWrap.arr.length; i++) {
//             const thisLen = sqr(areaWrap.arr[i].x - nextPos.x) + sqr(areaWrap.arr[i].y - nextPos.y);
//             if(areaWrap.arr[i].x > 9990 || areaWrap.arr[i].y > 9990 || areaWrap.arr[i].y < 1 || areaWrap.arr[i].x < 1 ) continue
//             if(len === null || len > thisLen) {
//                 len = thisLen;
//                 target = areaWrap.arr[i]
//             }
//         }
//     }

//     if(target) {
//         target.x = Math.floor(target.x)
//         target.y = Math.floor(target.y)
//     }
//     if(target) {
//         areaWrap.arr.forEach((obj, i) => {
//             if(obj.x != target.x && obj.y != target.y) {
//                 path.push(obj)
//             } else {
//                 path.push(target)
//             }
//         })
//     }

//     return path
// }

// export const checkLine = (currStep, nextStep) => {
//     const copyCurr = {...currStep};
//     const obhod = [];
//     if(copyCurr.x < nextStep.x || copyCurr.y < nextStep.y ){
//         while(copyCurr.x <= nextStep.x && copyCurr.y <= nextStep.y){
//             const snowId = checkChildToInSnow(copyCurr);
//             if(snowId) {
//                 const nextStep = searchPath(copyCurr, snowId)
//                 obhod.push(nextStep);

//                 const path = obhodSnowIn(nextStep, snowId)
//                 const lastCheck = path.pop();

//                 if(path.length) obhod.push(...path)

//                 copyCurr.x = lastCheck.x;
//                 copyCurr.y = lastCheck.y;
//             } else{
//                 if(copyCurr.x <= nextStep.x) copyCurr.x += 30;
//                 if(copyCurr.y <= nextStep.y) copyCurr.y += 30;
//             }
//         }
//     }
//     else if(copyCurr.x > nextStep.x || copyCurr.y > nextStep.y ){
//         while(copyCurr.x >= nextStep.x && copyCurr.y >= nextStep.y){
//             const snowId = checkChildToInSnow(copyCurr);
//             if(snowId) {
//                 const nextStep = searchPath(copyCurr, snowId)
//                 obhod.push(nextStep);

//                 const path = obhodSnowIn(nextStep, snowId)
//                 const lastCheck = path.pop();

//                 if(path.length) obhod.push(...path)

//                 copyCurr.x = lastCheck.x;
//                 copyCurr.y = lastCheck.y;
//             } else{
//                 if(copyCurr.x > nextStep.x) copyCurr.x -= 30;
//                 if(copyCurr.y > nextStep.y) copyCurr.y -= 30;
//             }
//         }
//     }
//     else if(copyCurr.x > nextStep.x && copyCurr.y < nextStep.y ){
//         while(copyCurr.x >= nextStep.x || copyCurr.y >= nextStep.y){
//             const snowId = checkChildToInSnow(copyCurr);
//             if(snowId) {
//                 const nextStep = searchPath(copyCurr, snowId)
//                 obhod.push(nextStep);

//                 const path = obhodSnowIn(nextStep, snowId)
//                 const lastCheck = path.pop();

//                 if(path.length) obhod.push(...path)

//                 copyCurr.x = lastCheck.x;
//                 copyCurr.y = lastCheck.y;
//             } else{
//                 if(copyCurr.x > nextStep.x )copyCurr.x -= 30;
//                 if(copyCurr.y < nextStep.y )copyCurr.y += 30;
//             }
//         }
//     }
//     else if(copyCurr.x < nextStep.x && copyCurr.y > nextStep.y ){
//         while(copyCurr.x <= nextStep.x || copyCurr.y >= nextStep.y){
//             const snowId = checkChildToInSnow(copyCurr);
//             if(snowId) {
//                 const nextStep = searchPath(copyCurr, snowId)
//                 obhod.push(nextStep);

//                 const path = obhodSnowIn(nextStep, snowId)
//                 const lastCheck = path[path.length - 1];

//                 if(path.length) obhod.push(...path)

//                 copyCurr.x = lastCheck.x;
//                 copyCurr.y = lastCheck.y;
//             } else{
//                 if(copyCurr.x < nextStep.x)copyCurr.x += 30;
//                 if(copyCurr.y > nextStep.y)copyCurr.y -= 30;
//             }
//         }
//     }

//     return obhod;
// }