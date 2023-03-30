import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../counter/counter';
// import Asia from '../serch/serch';



const Home = () => {

  const [data, setData] = useState([]);

  const [searchTitle, setSearchTitle] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setData(response.data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData();

  }, []);


  const filteredData = data.filter((value) => {
    if (searchTitle === '') {
      return value;
    }else if (value.name.common.toLowerCase().includes(searchTitle.toLocaleLowerCase())){
      return value
    }
  }).map((news) => (
    <Card key={news.ccn3} id={news.name.common} data={news.population} title={news.name.common} img={news.flags.png} />
    ));

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {filteredData}
    </div>
  )
}

export default Home