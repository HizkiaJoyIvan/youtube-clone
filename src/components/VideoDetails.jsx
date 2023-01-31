import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Typography, Box, Stack} from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/API';

const VideoDetails = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        console.log(videoDetail);
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data)=>setVideoDetail(data.items[0]))
    },[id]);

    if (!videoDetail?.snippet) return 'Loading....';
    
    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs:'column', md:'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', padding: '20px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}></ReactPlayer>
                        <Typography variant='h5' color='#fff' fontWeight='bold' p={2}>
                            {videoDetail.snippet.title}
                        </Typography>
                        <Stack>
                            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                                <Typography color='gray' variant="subtitle1">
                                    {videoDetail.snippet.channelTitle}
                                </Typography>
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetails;