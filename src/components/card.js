import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("localhost:8080/course");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="inner">
        <div className="container">
          <div className="rbt-course-grid-column">
            {cards.map((card, index) => (
              <div className="course-grid-3" key={index}>
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href={`course-details.html/${card.id}`}>
                      <img src={card.image} alt="Card image" />
                      <div className="rbt-badge-3 bg-white">
                        <span>{card.discount}</span>
                        <span>Off</span>
                      </div>
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="#">
                          <i className="feather-bookmark" />
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href={`course-details.html/${card.id}`}>
                        {card.title}
                      </a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book" />
                        {card.lessons} Lessons
                      </li>
                      <li>
                        <i className="feather-users" />
                        {card.students} Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">{card.description}</p>
                    <div className="rbt-author-meta mb--10">
                      <div className="rbt-avater">
                        <a href="#">
                          <img src={card.authorAvatar} alt={card.authorName} />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        by <a href="#">{card.authorName}</a> In{" "}
                        <a href="#">{card.category}</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">${card.price}</span>
                        <span className="off-price">
                          ${card.discountedPrice}
                        </span>
                      </div>
                      <a
                        className="rbt-btn-link"
                        href={`course-details.html/${card.id}`}
                      >
                        Learn More
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
