import React from 'react'
import { GoogleSearch } from '../Components/API_Search/GoogleSearch'
import Timer from '../Components/Timer'
import './MenuLayout/Home.css'


function Home() {
    return (
        <div className='home'>
            <div className='components'>
                <Timer />
                <GoogleSearch/>
            </div>
        </div>
    )
}

export default Home
