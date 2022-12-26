import axios from 'axios'
import React from 'react'
import { moves } from '../map/moves'
import { sortedGifts } from '../sortedGifts'

const Form = () => {
    const data = {
        mapID: "faf7ef78-41b3-4a36-8423-688a61929c08",
        moves: [...moves],
        stackOfBags: [...sortedGifts]
    }
    
    const option = {
        method: 'POST',
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            "X-API-Key": "fc55dc61-d1e9-42fe-8e80-df33d8bc6eff"
        },
        data: JSON.stringify(data),
        url: "https://datsanta.dats.team/api/round",
    };

    console.log(JSON.stringify(data));

    const sendMap = async () => {
        console.log(data);
        await axios(option).then(res => {
            console.log(res);
        })
    }

  return (
    <div>
        <button onClick={sendMap} className='button'>Send</button>
    </div>
  )
}

export default Form