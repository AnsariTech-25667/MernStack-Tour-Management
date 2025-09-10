import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(()=>{
    async function fetchBookings(){
      try {
        const res = await api.get('/bookings/me');
        setBookings(res.data.bookings || []);
      } catch(err) {
        console.error(err);
      }
    }
    fetchBookings();
  }, []);

  return (
    <Container>
      <Typography variant="h5" sx={{ mb: 2 }}>My Bookings</Typography>
      <List>
        {bookings.map(b => (
          <ListItem key={b._id}>
            <ListItemText
              primary={b.tour?.title || 'Tour'}
              secondary={`Seats: ${b.seats} — Amount: ₹${b.amount}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
