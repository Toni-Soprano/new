import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Studentquiz = () => {
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizAttempts = async () => {
      try {
        const response = await axios.get("/api/student/quiz-attempts"); // Adjust the URL to your API endpoint
        setQuizAttempts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchQuizAttempts();
  }, []);

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Quiz Attempts - Online Courses &amp; Education Bootstrap5
        Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Favicon */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/favicon.png"
      />
      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image  */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image  */}
      </div>
      {/* Start Card Style */}
     
                <div className="col-lg-9">
                  {/* Start Enrole Course  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">My Quiz Attempts</h4>
                      </div>
                      {loading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p>Error fetching data</p>
                      ) : (
                        <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                          {quizAttempts.length > 0 ? (
                            <table className="rbt-table table table-borderless">
                              <thead>
                                <tr>
                                  <th>Quiz</th>
                                  <th>Result</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                {quizAttempts.map((attempt) => (
                                  <tr key={attempt.id}>
                                    <td>{attempt.quizTitle}</td>
                                    <td>{attempt.result}</td>
                                    <td>
                                      <Link to={`/quiz-details/${attempt.id}`}>
                                        View Details
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p>No quiz attempts found.</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* End Enrole Course  */}
                </div>
              </div>
         
    
     
  );
};

export default Studentquiz;
