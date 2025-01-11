import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostList.styles.css";

const PostList = ({ posts }) => {
  const defaultPosts = [
    {
      type: "Article",
      icon: "✍️",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description: "I have worked in UX for the better part of a decade. From now on, I plan to rei…",
      image: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2V",
      author: {
        name: "Sarthak Kamra",
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2W",
      },
      views: "1.4k",
    },
    {
      type: "Education",
      icon: "🔬️",
      title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description: "I have worked in UX for the better part of a decade. From now on, I plan to rei…",
      image: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2X",
      author: {
        name: "Sarah West",
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2Y",
      },
      views: "1.4k",
    },
    {
      type: "Meetup",
      icon: "🗓️",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      location: "Ahmedabad, India",
      date: "Fri, 12 Oct, 2018",
      image: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2Z",
      author: {
        name: "Ronal Jones",
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2a",
      },
      views: "1.4k",
    },
    {
      type: "Job",
      icon: "💼️",
      title: "Software Developer",
      company: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      author: {
        name: "Joseph Gray",
        avatar: "https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2b",
      },
      views: "1.4k",
    },
  ];

  const renderPosts = posts.length > 0 ? posts : defaultPosts;

  return (
    <div className="post-list container mt-4">
      <div className="row">
        {renderPosts.map((post, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <article className="post border rounded shadow-sm">
              {post.image && (
                <div className="post-image-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image img-fluid rounded-top"
                  />
                </div>
              )}
              <div className="post-content p-3">
                <div className="post-type d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold">
                    {post.icon} {post.type}
                  </span>
                  <button className="btn btn-sm p-0">
                    <img
                      src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2c"
                      alt="more"
                      className="more-btn-icon"
                    />
                  </button>
                </div>
                <h2 className="post-title h5 fw-bold">{post.title}</h2>
                {post.description && (
                  <p className="post-description text-muted small mb-3">
                    {post.description}
                  </p>
                )}

                {post.type === "Meetup" && (
                  <div>
                    <div className="event-details mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2d"
                          alt=""
                          className="icon"
                        />
                        <span>{post.date}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2e"
                          alt=""
                          className="icon"
                        />
                        <span>{post.location}</span>
                      </div>
                    </div>
                    <button className="btn btn-outline-danger btn-sm w-100">
                      Visit Website
                    </button>
                  </div>
                )}

                {post.type === "Job" && (
                  <div>
                    <div className="job-details mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2f"
                          alt=""
                          className="icon"
                        />
                        <span>{post.company}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2g"
                          alt=""
                          className="icon"
                        />
                        <span>{post.location}</span>
                      </div>
                    </div>
                    <button className="btn btn-outline-success btn-sm w-100">
                      Apply on Timesjobs
                    </button>
                  </div>
                )}

                <div className="post-footer d-flex justify-content-between align-items-center mt-3">
                  <div className="user-info d-flex align-items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="user-avatar rounded-circle"
                    />
                    <span className="user-name small">{post.author.name}</span>
                  </div>
                  <div className="post-stats d-flex align-items-center gap-3">
                    <div className="views d-flex align-items-center gap-1">
                      <img
                        src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2h"
                        alt="views"
                        className="icon"
                      />
                      <span className="small">{post.views} views</span>
                    </div>
                    <button className="btn btn-link p-0">
                      <img
                        src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2i"
                        alt="share"
                        className="share-btn-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
