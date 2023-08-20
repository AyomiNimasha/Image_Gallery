import React, { useState } from 'react';

export const ImageSearch = ({searchText}) => {
    const [text,setText]=useState('');

    const onsubmit=(e)=>{
        e.preventDefault();
        searchText(Text);
    }
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form onSubmit={onsubmit} className='w-full max-w-sm'>
            <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
            <input onChange={e=>setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Search Image Term...'/>
            <button className='flex shrink-0 bg-teal-900 hover:bg-teal-500 border-x-teal-950 hover:border-y-teal-900 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>
                Search
            </button>
            </div>
        </form>
    </div>
  )
}
