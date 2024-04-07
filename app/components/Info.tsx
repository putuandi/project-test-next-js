import React from 'react'

export default function Info({ title }: any) {
    return (
        <div className='p-4 bg-green-400 text-center'>
            info component
            <h3>{title}</h3>
        </div>
    )
}
