import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifCategory } from './components/GifCategory';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Interestelar']);
    
    return (
        <>
            <h2>Gif Expert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>  
            <ol>
                {
                    categories.map (category => (
                        <GifCategory 
                        key={category}
                        category={category} />
                        
                    ))
                }
            </ol>
        </>
    )
}




 