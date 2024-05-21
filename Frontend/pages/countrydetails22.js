import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageBanner from '../components/Common/PageBanner';
import FaqWithVideoModal from '../components/Faq/FaqWithVideoModal';
import Services from '../components/Services/Services';

function CountryDetailsPage() {
  const router = useRouter();
  const { countryCode } = router.query;
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countryCode) {
      fetchData();
    }
  }, [countryCode]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/country/${countryCode}`);
      setCountryData(response.data);
    } catch (error) {
      console.error(`Error fetching data for ${countryCode}:`, error);
    }
  };

  return (
    <>
      <Head>
        <title>{countryData ? countryData.countryData.Introduction.Background.text : 'Country Details'} - Travel the Nations</title>
      </Head>
      <PageBanner
        title={countryData ? countryData.countryData.Introduction.Background.text : 'Country Details'}
        content={countryData ? `Learn more about ${countryData.countryData.Introduction.Background.text}` : ''}
      />
      <Services />
      <div className="container mt-5">
        {countryData ? (
          <div>
            <h2>{countryData.countryData.region}</h2>
            <h3>Introduction</h3>
            <p>{countryData.countryData.Introduction.Background.text}</p>
            <h3>Geography</h3>
            <p>Location: {countryData.countryData.Geography.Location.text}</p>
            <p>Area: {countryData.countryData.Geography.Area.total.text}</p>
            {/* Add more sections as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <FaqWithVideoModal />
    </>
  );
}

export default CountryDetailsPage;
