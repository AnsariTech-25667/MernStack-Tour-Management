import React, { useEffect, useState } from "react";
import { apiGet } from "../services/api";

export default function TourList() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiGet("/tours"); // 👈 calls backend /api/tours
        setTours(data);
      } catch (e) {
        setErr(e.message || "API error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Loading tours…</p>;
  if (err) return <p className="text-danger">Error: {err}</p>;
  if (!tours.length) return <p>No tours found.</p>;

  return (
    <div className="row">
      {tours.map((t) => (
        <div className="col-md-4" key={t._id}>
          <div className="card mb-3 shadow-sm">
            {t.photo && (
              <img
                src={t.photo}
                className="card-img-top"
                alt={t.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{t.title}</h5>
              <p className="card-text">{t.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {t.city} — ₹{t.price}
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
