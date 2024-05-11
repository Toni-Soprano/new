import React, { useState, useEffect } from "react";
import axios from "axios";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="col-lg-8 col-xl-9 order-1 order-lg-2">
      <div className="row g-5">
        {events.map((event, index) => (
          <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={index}>
            <div className="rbt-card event-grid-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <a href={`event-details.html/${event.id}`}>
                  <img src={event.image} alt="Card image" />
                  <div className="rbt-badge-3 bg-white">
                    <span>{event.date}</span>
                  </div>
                </a>
              </div>
              <div className="rbt-card-body">
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-map-pin" />
                    {event.location}
                  </li>
                  <li>
                    <i className="feather-clock" />
                    {event.time}
                  </li>
                </ul>
                <h4 className="rbt-card-title">
                  <a href={`event-details.html/${event.id}`}>{event.title}</a>
                </h4>
                <div className="read-more-btn">
                  <a
                    className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                    href={`event-details.html/${event.id}`}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Ticket</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
