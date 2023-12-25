import React from "react";

function NewsItem({ news }) {
  const title = news.title;
  const description = news.description;
  const url = news.urlToImage;
  const src = news.url;
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block  my-3 mx-3"
      style={{ maxWidth: "345px", maxHeight: "500px" }}
    >
      <img
        src={url}
        className="card-img-top"
        style={{ width: "345px", height: "190px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Discover the pulse of current events with our up-to-the-minute news coverage. From global affairs to local happenings, we bring you the latest stories that shape our world."}
        </p>
        <a href={src} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
