import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
  return (
    <Card sx={{ maxWidth: 360, m: 1 }}>
      <CardMedia
        component="img"
        height="180"
        image={tour.photo || '/logo192.png'}
        alt={tour.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">{tour.title}</Typography>
        <Typography variant="body2" color="text.secondary">{tour.description}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}><strong>{tour.location}</strong> — ₹{tour.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/tour/${tour._id}`}>View</Button>
      </CardActions>
    </Card>
  );
}
