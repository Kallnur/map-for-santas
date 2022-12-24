export const sliceGifts = (gifts) => {

    let result = [];

    const fillSled = (arr, currentIn) => {
        const sled = {
            weight: 0,
            volume: 0
        }
        
        for(let i = currentIn; i <= arr.length; i++){
            if(!arr[i]) break
            
            if(sled.weight > 188 || sled.volume > 93){
                result = [...result, arr.slice(currentIn, i)]
                fillSled(arr, i)
                break 
            }
            else {
                sled.volume += Number(arr[i].volume);
                sled.weight += Number(arr[i].weight)
            }
        }
    }

    fillSled(gifts, 0)

    return result;
}

const check_a_point = (childX, childY, snowX, snowY, snowR) => {
    const dist_points = (childX - snowX) * (childX - snowX) + (childY - snowY) * (childY - snowY);

    snowR *= snowR;

    if (dist_points < snowR) {
        return true;
    }
    return false;
  }

export const checkAllChildren = (dataChildren, snowAreas) => {

    const children = [...dataChildren]

    snowAreas.forEach(snow => {
        children.forEach((child, i, ref) => {
            const bool = check_a_point(child.x, child.y, snow.x, snow.y, snow.r)
            if(!ref[i].inSnowArea) ref[i] = {...child, inSnowArea: bool}
        })
    })

    return children;
}

export const drawZoneInCanvas = ({ctx, x, y, r, fillStyle}) => {
    ctx.fillStyle = fillStyle
    ctx.arc(x, y, r ? r : 1.5, 0, Math.PI*2, true); 
    ctx.fill();
    ctx.closePath();    
}