import React from 'react';
import { Link } from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constant';

const VideoCard = ({video : {id: {videoId}, snippet}}) => {
    return (
        <Card sx={{width: {xs:'100%', sm: '358px', md: '320px'}, borderRadius: '2px'}}>
            <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width: 360, height: 170}}/>
            </Link>
            <CardContent sx={{backgroundColor: '#1e1e1e', height: '70px'}}>
                <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color='#fff'>
                        {snippet?.title.slice(0,50)}
                    </Typography>
                </Link>
                <Link to={snippet.channelId? `/video/${snippet.channelId}`: demoVideoUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color='gray'>
                        {snippet?.channelTitle.slice(0,50)}
                        <CheckCircle fontSize='12px'/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard;