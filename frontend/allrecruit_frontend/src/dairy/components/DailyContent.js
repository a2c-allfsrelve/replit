
import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/daily/icon.jpg';
import img1 from '../../images/daily/icon1.jpg';
import img1 from '../../images/daily/icon2.jpg';
import img1 from '../../images/daily/icon3.jpg';

export const DailyContent = (daily) => {
   
    let eva;
    if(daily.evaluation === 'perfect'){
        eva = img1;
    }else if(daily.evaluation === 'good'){
        eva = img2;
    }else if (daily.evaluation === 'soso'){
        eva = img3;
    }else{
        eva = img4;
    }


    return(
        <div>
            {/* daily.idがクエリパラメータっていう感じになってる */}
            <Link to={`daily/${daily.id}`}><h1>{daily.date}</h1></Link>
            <img src={eva} />
        </div>
    )
}