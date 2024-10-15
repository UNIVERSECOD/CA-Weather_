// import axios from "axios";


// export const getData = async () => {

//     const result = await axios(
//         `https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=c518171fb2d14d563926d4899d66f35e&units=metric`
//     );




//     return result.data;


// }

export const getData = async (cityName:string) => {
    const apiKey = 'c518171fb2d14d563926d4899d66f35e'; // API anahtarını buraya ekle
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };
