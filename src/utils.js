import { check_a_point } from "./map/utils";
import { snowAreas } from "./snowAreas";
import { areasWrap } from "./areasWrap";

export const checkChildToInSnow = (child) => {
    let snowId = false;
    if(child){
        snowAreas.forEach(snow => {
            const bool = check_a_point(child.x, child.y, snow.x, snow.y, snow.r)
            if(bool) snowId = snow.id;
        })
    }

    return snowId
}

const sqr = function(x) { return x * x; };

export const searchPath = (child, snowId) => {
    const areaWrap = areasWrap.find(obj => obj.id ? obj.id === snowId : false);
    let target = null;
    let len = null;

    if(areaWrap) {
        areaWrap.arr.forEach(obj => {
            const thisLen = sqr(obj.x - child.x) + sqr(obj.y - child.y);
            if(len === null || len > thisLen) {
                len = thisLen;
                target = obj
            }
        })
    }


    return target
}

export const checkLine = (lastStep, currStep) => {

}