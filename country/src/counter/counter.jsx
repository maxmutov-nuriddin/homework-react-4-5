import { Link } from 'react-router-dom';

const Card = (props) => {


  const { data, img, title, id } = props;

  return (
    <>
      <div>
        <img src={img} alt="" className="card__images" />
        <div className="card__text">
          <p className="card__text--date">
            {data}
          </p>
          <h3 className="card__text--h3">{title}</h3>
          <Link to={`/news/${id}`}>
            Read More
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card