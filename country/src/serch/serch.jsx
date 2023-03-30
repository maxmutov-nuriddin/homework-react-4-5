//                                      THIS PAGE CARD!!! NOT SEARCH
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const SingleArticle = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="article">
        <div className="article__header">
          <img src={data.flags} />
        </div>
        <div className="article__container">
          <div className="article__section">
            <h3 className="article__section--h3">{data.population}</h3>
          </div>
          <Link to="/" className="article__btn">
            <span>Back to homepage
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle