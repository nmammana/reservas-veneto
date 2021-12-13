import React from 'react'
import Cover from './Cover/Cover'

export default function Layout({children}) {
    return (
            <Cover>
                {children}
            </Cover>
    )
}
