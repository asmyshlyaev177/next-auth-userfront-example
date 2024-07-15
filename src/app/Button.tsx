import React from 'react'

export const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {

    return <button className='border border-black dark:border-white rounded-md px-2 py-1'{...props} />
}