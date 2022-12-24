export const sliceGifts = (gifts) => {

    let result = [];
    const copyArr = [...gifts]

    // copyArr.sort(() => .5 - Math.random())

    const fillSled = (arr, currentIn) => {
        const sled = {
            weight: 0,
            volume: 0
        }

        for(let i = currentIn; i <= arr.length; i++){
            if(!arr[i]) break
            
            if(sled.volume + arr[i].volume <= 100 && sled.weight + arr[i].weight <= 200){
                sled.volume += Number(arr[i].volume);
                sled.weight += Number(arr[i].weight);
                continue
            }

            if(sled.weight > 188 || sled.volume > 93){
                result = [...result, {
                    count: i - currentIn, 
                    body: arr.slice(currentIn, i),
                    size: sled
                }]
                fillSled(arr, i)
                break 
            }
            else {
                sled.volume += Number(arr[i].volume);
                sled.weight += Number(arr[i].weight)
            }
        }
        // console.log(sled);
    }

    fillSled(copyArr, 0)

    return result;
}

export const sortGifts = (gifts) => {

    let byVolume = {};
    let byWeight = {};

    gifts.forEach(obj => {
        byVolume[obj.volume] ? byVolume[obj.volume] = byVolume[obj.volume] += 1 : byVolume[obj.volume] = 1
        byWeight[obj.weight] ? byWeight[obj.weight] = byWeight[obj.weight] += 1 : byWeight[obj.weight] = 1
    })

    return {byVolume, byWeight};
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
    ctx.beginPath()
    ctx.arc(x, y, r ? r : 1.5, 0, Math.PI*2, true); 
    ctx.fill();
    ctx.closePath();    
}

export const sortChildDist = (children) => {
    const resMap = children.map(obj => {
        const len = Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
        return {obj, len}
    });

    resMap.sort((a, b) => a.len - b.len)
    
    return resMap.map(item => item.obj)
}