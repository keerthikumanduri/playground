import { useState } from "react";

export default function StarPattern() {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Star Rating</h1>
      {stars.map((_, index) => {
        let isHighlighted = false;

        if (hoverValue > 0) {
          isHighlighted = index < hoverValue; // highlight on hover
        } else if (rating > 0) {
          isHighlighted = index < rating; // persist after click
        }

        return (
          <span
            key={index}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              color: isHighlighted ? "gold" : "lightgray",
            }}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            ★
          </span>
        );
      })}
      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
        {rating > 0 ? `You rated ${rating} star(s)` : "No rating yet"}
      </p>
    </div>
  );
}
