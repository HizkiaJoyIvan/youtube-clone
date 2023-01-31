import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import Videos from './Videos';
import {fetchFromAPI} from '../utils/API';
import ChannelCard from './ChannelCard';

const ChannelDetails = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    
    const {id} = useParams();

    console.log(channelDetail, videos);

    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data.items[0]))
        
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data.items))
        }, [id])

    return (
        <Box height='95vh'>
            <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(97,9,121,1) 9%, rgba(0,212,255,1) 100%)', height:'300px'}}/>
            <ChannelCard channelDetail={channelDetail}/>
        </Box>
    )
}

export default ChannelDetails;