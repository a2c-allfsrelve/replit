
import React, { useState, useEffect } from 'react'
import { getDaily } from '../api/getDaily'
import { DailyContent } from '../components/DailyContent'
import { CategoryList } from '../components/CategoryList'


export const DailyTop = () => {
    const initialState = {
        id: '',
        date: '',
        evaluation: '',
   }
   
   //stateとセットする関数を同時に宣言するってことかな
   const[daily, setDaily] = useState(initialState);
   const[loading, setLoading] = useState(state);

    useEffect(() => {
        getDaily()
        .then(d => {
            setDaily(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    return(
        <div>
            {
                loading ?
                <h1>loadng...</h1>
                :
                <div>
                    {daily.map( d => <DailyContent {...d} /> )}
                </div>
            }
            <CategoryList />

        </div>
    )

}