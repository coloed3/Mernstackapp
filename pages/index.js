import React, { useEffect } from 'react';
import axios from 'axios';
function Home(props) {
  console.log(props);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = 'http://localhost:3000/api/products';
    const response = await axios.get(url);
    console.log(response.data);
  }
  return (
    <>
      <h1>test</h1>
    </>
  );
}

Home.getInitialProps = () => {
  // fetch data on server
  //return reponmse data as an object
  return {
    hello: 'world'
  };
  // note: this object will be merged with existent prop
};

export default Home;
