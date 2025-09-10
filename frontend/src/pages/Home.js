import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TourCard from '../components/TourCard';
import { Container, Grid, Typography } from '@mui/material';

export default function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function fetchTours(){
      try {
        const res = await api.get('/tours'); // existing backend route
        setTours(res.data.tours || res.data);
      } catch(err){
        console.error(err);
      } finally { setLoading(false); }
    }
    fetchTours();
  },[]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>Browse Tours</Typography>
      {loading ? <div>Loading...</div> :
        <Grid container spacing={2}>
          {tours.map(t => (
            <Grid item key={t._id} xs={12} sm={6} md={4}>
              <TourCard tour={t} />
            </Grid>
          ))}
        </Grid>
      }
    </Container>
  );
}
