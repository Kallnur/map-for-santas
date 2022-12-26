import { gifts } from "../../data";

export const toSliceGifts = () => {
    let result = [];
    const checkById = [];
    let pick = 0;

    const fillBag = () => {
        const bag = {
            weight: 0,
            volume: 0
        }

        const tempBag  = [];

        // arr?.forEach((obj, i) => {
            for(let i = 0; i < gifts.length; i++){
                if(pick == 999) {
                    if(bag.volume + gifts[i].volume <= 100 && bag.weight + gifts[i].weight <= 200){
                        tempBag.push(gifts[i].id)
                        checkById.push(gifts[i].id)
                        pick += 1;
                        bag.volume += gifts[i].volume;
                        bag.weight += gifts[i].weight;
                        result = [...result, tempBag]
                        fillBag()
                        break
                    }

                }

                const check = checkById.find(id => id === gifts[i].id);
                const checkTemp = tempBag.find(tempObj => tempObj.id === gifts[i].id);

                if(i === gifts.length - 1) {
                    if(!check && !checkTemp){ 
                        if(bag.volume + gifts[i].volume <= 100 && bag.weight + gifts[i].weight <= 200){
                            tempBag.push(gifts[i].id)
                            checkById.push(gifts[i].id)
                            pick += 1;
                            bag.volume += gifts[i].volume;
                            bag.weight += gifts[i].weight;
                            result = [...result, tempBag]
                            fillBag()
                            break
                        } else {
                            result = [...result, tempBag];
                            fillBag()
                            break
                        }
                        
                    } else {
                        break
                    }
                }


                if(!check && !checkTemp){ 
                    if(bag.volume + gifts[i].volume <= 100 && bag.weight + gifts[i].weight <= 200){
                        tempBag.push(gifts[i].id)
                        checkById.push(gifts[i].id)
                        pick += 1;
                        bag.volume += gifts[i].volume;
                        bag.weight += gifts[i].weight;
                    }
                    
                }
            }
        // })
        console.log(bag);
    }

    fillBag(gifts)

    console.log(result.length);
    return result;
}

export const sliceGifts = () => {

    let result = [];

    const fillSled = (arr, currentIn) => {
      const sled = {
        weight: 0,
        volume: 0
      }
      
      for(let i = currentIn; i <= arr.length; i++){
        if(!arr[i]) break
        
        if(sled.weight > 188 || sled.volume > 93){
          result = [...result, arr.slice(currentIn, i).map(obj => obj.id)]
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