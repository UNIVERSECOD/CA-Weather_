// import CloudIcon from '@mui/icons-material/Cloud';
import { useEffect, useState } from 'react';
import { getData } from './components/services/service';

function App() {
  const [data, setData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && searchTerm) {
      try {
        const result = await getData(searchTerm);
        setData(result);
      } catch (error) {
        console.error('Veri alım hatası:', error);
        setData(null);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialCity = 'Baku'; 
        const result = await getData(initialCity);
        setData(result);
      } catch (error) {
        setData(null);
      }
    };
    fetchData();
  }, []);

  return (

    <div className="flex justify-center items-center flex-col gap-14 bg-image">
      <div className="flex justify-center items-center">
        <input
          className='bg-white px-2 py-1 bg-opacity-80 rounded-lg'
          placeholder="Search Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleSearch}
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-6">
        <h3 className="text-3xl text-white font-bold">{data?.name}</h3>

        <div className=" flex text-3xl text-white font-bold items-center gap-4">
          {/* <CloudIcon className='w-5' /> */}
          <p>{data?.weather[0].main}</p>
        </div>

        <p className="text-3xl text-white font-bold"> {data?.main.temp} </p>

      </div>

      <div className="flex justify-center items-center text-center gap-36">
        <div className='bg-white bg-opacity-20 rounded-xl p-9'>
          <p
            className="text-xl text-white"
          >
            Humidity
          </p>
          <p
            className="text-3xl text-white font-bold"
          >
            {data?.main.humidity}%
          </p>
        </div>
        <div className='bg-white bg-opacity-20 rounded-xl p-9'>
          <p
            className="text-xl text-white "
          >
            Wind
          </p>
          <p
            className="text-3xl text-white font-bold"
          >
            {data?.wind.speed} km\h
          </p>
        </div>
        <div className='bg-white bg-opacity-20 rounded-xl p-9'>
          <p
            className="text-xl text-white "
          >
            Feels like
          </p>
          <p
            className="text-3xl text-white font-bold"
          >
            {data?.main.feels_like}
          </p>
        </div>

      </div>
    </div>

  )
}

export default App
