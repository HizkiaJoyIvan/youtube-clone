import React from 'react';
import {categories} from '../utils/constant';
import {Stack} from '@mui/material';

const selectedCategory = 'New';

const SideBar = ({selectedCategory, setSelectedCategory}) => {
    return (
        <Stack
            direction='row'
            sx={
                {
                    overflowY:'auto',
                    height: {sx:'auto', md: '95%'},
                    flexDirection: {md:'column'}
                }
            }>
            
            {categories.map(category => (
                <button
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory && 'FC1503',
                        color: 'white'
                    }}
                    onClick={()=>{setSelectedCategory(category.name)}}
                    key={category.name}>
                    <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                    <span style={{color: category.name === selectedCategory ? 'white' : 'red'}}>{category.name}</span>
                </button>
            ))}

        </Stack>
    )
}

export default SideBar;