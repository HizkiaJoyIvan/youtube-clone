import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {useParams} from 'react-router-dom';
import { fetchFromAPI } from "../utils/API";
import Videos from "./Videos";


const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, []);

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>

  );
};

export default SearchFeed;
