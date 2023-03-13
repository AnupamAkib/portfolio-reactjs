import React, { useEffect } from 'react'
import Projects from './Projects'
import Title from '../Title'

export default function All_Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container'>
            <div className='padding20'>
                <Title>All Projects</Title>
                <Projects cnt={1000}/>
            </div>
        </div>
    )
}
