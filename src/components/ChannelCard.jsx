import React from 'react'; 
import {Typography, Card, CardContent, CardMedia, Box} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture} from '../utils/constant';

import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail }) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100%', sm: '358px', md: '320px'}
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign:'center'}}>
                    <CardMedia 
                        image={channelDetail?.snippet?.thumbnails?.high?.url}
                        alt={channelDetail?.snippet?.title}
                        sx={{borderRadius: '50%', height: '180px', width: '180px'}}/>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {channelDetail?.snippet?.title}
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant='subtitle2' color='#fff'>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard;