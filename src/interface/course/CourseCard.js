import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, price, description, imageUrl }) => {
  return (
    <div className="course-card">
       <Link to={`/coursedetails/${id}`} className="btn btn-primary"><img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
     
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
