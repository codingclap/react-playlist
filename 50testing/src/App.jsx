// import UserRecords from './components/UserRecords';
import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  // { Fetch Product Record }

  const [data, setData] = useState([]);


  useEffect(() => {
    async function getDate() {
      const respons = await fetch("https://fakestoreapi.com/products")
      const datas = await respons.json()
      if(datas && datas.length) setData(datas);
      
    }

    getDate()
  }, [])




  return (
    <>
      {/* <UserRecords userRecord={userData} /> */}
      <Card records={data} />
    </>
  )

}

export default App
