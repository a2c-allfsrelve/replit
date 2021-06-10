import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import marked from 'marked';
import { CategoryList } from '../components/CategoryList'

export const DailyDetail = () => {
    const initialState = {
        date: '',
        job: '',
        study: '',
        other: '',
        first_meet: '',
        wanna_do: '',
        summery: '',
    };

    const [detail, setDetail] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getDailyDetail(id)
        .then(d => {
            setDetail(d)
            setLoading(false)
        })
        .chatch(e => {
            throw new Error(e)
        })
    },[])


    //markedはマークダウンをHTMLに変換するライブラリ
    return(
        <div>
            {loading ?
                <h1>loading!!!!!!!!!!!!!!!!!!!!</h1>
                :
                <div>
                    <h1>{detail.date}</h1>
                    <h1>仕事のこと</h1>
                    <div dangerouslySetInnerHTML = {{__html: `${marked(`${detail.job}`)}`}} className="detail-content"></div>
                    <h1>勉強</h1>
                    <div dangerouslySetInnerHTML = {{__html: `${marked(`${detail.study}`)}`}} className="detail-content"></div>
                    <h1>その他</h1>
                    <div dangerouslySetInnerHTML = {{__html: `${marked(`${detail.other}`)}`}} className="detail-content"></div>
                    <h1>はじまま～～～</h1>
                    <div dangerouslySetInnerHTML = {{__html: `${marked(`${detail.first_meet}`)}`}} className="detail-content"></div>
                    <h1>やりたいこと</h1>
                    <div dangerouslySetInnerHTML = {{__html: `${marked(`${detail.wanna_do}`)}`}} className="detail-content"></div>
                    <h1>１日のまとめ</h1>
                    <div dangerouslySetInnerHTML = {{__html: `${marked(`${detail.summery}`)}`}} className="detail-content"></div>

                </div>
         }
         <CategoryList />
        </div>
    )

}