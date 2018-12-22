import React from 'react';

export default function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="card" style={{ width: '18rem', marginBottom: '15px' }}>
      <img className="card-img-top" src={movie.poster_path} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <p>Year: {movie.year}</p>
        <div>
          Rating:
          {movie &&
            movie.rating &&
            movie.rating.map((rate, index) => (
              <div key={index}>
                <span>{rate.Source}</span>
                <span className="badge badge-warning">{rate.Value}</span>
              </div>
            ))}
        </div>

        <div>
          <ul className="list-group list-group-flush">
            {movie.link.map((link, index) =>
              link.size > 200 ? (
                <li key={index} className="list-group-item link-li">
                  <span className="badge badge-secondary">{link.size} MB</span>
                  <div style={{ display: 'flex', flexFlow: 'column' }}>
                    <span
                      className="badge badge-primary"
                      style={{
                        marginBottom: '2px'
                      }}
                    >
                      {link.quality}
                    </span>
                    <span className="badge badge-warning">
                      {link.resolution}
                    </span>
                  </div>

                  {getEncoding(link) ? (
                    <span className="badge badge-success">
                      {getEncoding(link)}
                    </span>
                  ) : null}
                  <a href={link.link} className="btn btn-primary">
                    Watch
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

const getEncoding = link => {
  let encoding = false;
  if (link.group) {
    if (link.group.indexOf('x265') > -1) {
      encoding = 'x265';
    } else if (link.group.indexOf('YIFY') > -1) {
      encoding = 'YIFY';
    } else if (link.group.indexOf('x264') > -1) {
      encoding = 'x264';
    }
  }
  return encoding;
};
