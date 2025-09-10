import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../services/api';
import { Container, Typography, Button, TextField } from '@mui/material';

export default function TourDetails({ user }) {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [seats, setSeats] = useState(1);
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchTour(){
      try {
        const res = await api.get(`/tours/${id}`);
        setTour(res.data.tour || res.data);
      } catch(err){
        console.error(err);
      }
    }
    fetchTour();
  }, [id]);

  const book = async () => {
    if (!user) { navigate('/login'); return; }
    try {
      const res = await api.post('/bookings', { tourId: id, seats });
      alert('Booking created');
      navigate('/bookings');
    } catch(err) {
      console.error(err);
      alert(err.response?.data?.message || 'Booking failed');
    }
  };

  if (!tour) return <Container>Loading tour...</Container>;

  return (
    <Container>
      <Typography variant="h4">{tour.title}</Typography>
      <img src={tour.image || '/logo192.png'} alt={tour.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
      <Typography sx={{ mt: 2 }}>{tour.description}</Typography>
      <Typography sx={{ mt: 1 }}><strong>Location:</strong> {tour.location}</Typography>
      <Typography sx={{ mt: 1 }}><strong>Price:</strong> ₹{tour.price}</Typography>

      <div style={{ marginTop: 20 }}>
        <TextField type="number" label="Seats" value={seats} onChange={e=>setSeats(Math.max(1, Number(e.target.value)))} sx={{ mr: 2, width: 120 }} />
        <Button variant="contained" onClick={book}>Book Now</Button>
      </div>
    </Container>
  );
}
