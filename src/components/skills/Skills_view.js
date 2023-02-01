import React from 'react'
import Skills from './Skills'
import Title from '../Title'
import { useEffect } from 'react'

export default function Skills_view() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container'>
            <div className='formatText'>
                <Title>All skills</Title>
                <Skills size={1000}/>
            </div>
        </div>
    )
}
