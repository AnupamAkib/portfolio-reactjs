import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import resumeLink from '../../json/resume.json'

export default function DownloadResume() {
    const navigate= useNavigate();

    useEffect(() => {
        window.open(resumeLink.link)
        navigate("/")
    }, [])
    
    return (
        <div className='padding20'>
            You are redirecting to Google Drive...
        </div>
    )
}
