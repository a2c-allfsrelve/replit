import React from 'react'
import { Link } from 'react-router-dom';


export　const CategoryList = () => {
    return (
        <div>
            <ul>
                <li><Link to='/daily/category/job'>仕事</Link></li>
                <li><Link to='/daily/category/study'>勉強</Link></li>
                <li><Link to='/daily/category/other'>その他</Link></li>
                <li><Link to='/daily/category/first_meet'>はじめま～</Link></li>
                <li><Link to='/daily/category/wanna_do'>やりたいこと</Link></li>
                <li><Link to='/daily/category/summary'>一日のまとめ</Link></li>
            </ul>
        </div>
    )
}
