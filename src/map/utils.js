export const sortGifts = (gifts) => {

    let byVolume = {};
    let byWeight = {};

    gifts.forEach(obj => {
        byVolume[obj.volume] ? byVolume[obj.volume] = byVolume[obj.volume] += 1 : byVolume[obj.volume] = 1
        byWeight[obj.weight] ? byWeight[obj.weight] = byWeight[obj.weight] += 1 : byWeight[obj.weight] = 1
    })

    return {byVolume, byWeight};
}

export const check_a_point = (childX, childY, snowX, snowY, snowR) => {
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

export const drawMoves = async (moves, ctx) => {
    console.log(moves, ctx);
    ctx.lineWidth = 2
    
    moves.forEach(arr => {
        ctx.beginPath();
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
        arr.forEach(obj => {
            ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`
            ctx.lineTo(obj.x / 10, obj.y / 10);
            ctx.stroke();
        })
        ctx.closePath();
    })

}

export const drawRect = (obj, ctx) => {
    ctx.strokeStyle = `rgba(0, 255, 0, .8)`
    obj.forEach(obj => {
        console.log(obj);
        ctx.beginPath()
        obj.arr.forEach(obj => {
            ctx.lineTo(obj.x / 10, obj.y / 10);
            ctx.stroke();
        })
        ctx.closePath();
    })
    ctx.closePath();

}