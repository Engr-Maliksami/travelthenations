import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import FaqWithVideoModal from './../../components/Faq/FaqWithVideoModal';
import Services from './../../components/Services/Services';
import PageBanner from './../../components/Common/PageBanner';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function CountryDetails({ countryData, error }) {
  const pageTitle = "Explore The Every Nation of the world";
  const pageContent = "Explore";

  // Function to flatten nested objects and return key-value pairs with the final key segment
  const flattenObject = (obj) => {
    const flattened = {};

    const flatten = (nestedObj, prefix = '') => {
      for (let key in nestedObj) {
        if (typeof nestedObj[key] === 'object' && !Array.isArray(nestedObj[key])) {
          flatten(nestedObj[key], `${prefix}${key}.`);
        } else {
          // Use the full path as the key
          flattened[`${prefix}${key}`] = nestedObj[key];
        }
      }
    };

    flatten(obj);
    return flattened;
  };

  // Function to format the key into a proper heading
  const formatKey = (key) => {
    return key.split('.').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join(' ');
  };

  // Group flattened fields by their primary key (e.g., "Area", "Location")
  const groupFields = (flattened) => {
    const grouped = {};

    for (let key in flattened) {
      const primaryKey = key.split('.')[0];
      if (!grouped[primaryKey]) {
        grouped[primaryKey] = [];
      }
      grouped[primaryKey].push({ key, value: flattened[key] });
    }

    return grouped;
  };

  // Render section function
  const renderSection = (sectionName) => {
    const flattenedSection = countryData.countryData[sectionName] ? flattenObject(countryData.countryData[sectionName]) : {};
    const groupedSection = groupFields(flattenedSection);

    return (
      <div key={sectionName}>
        <h3>{sectionName}</h3>
        {countryData.countryData[sectionName] ? (
          <div>
            {/* Display grouped fields */}
            {Object.entries(groupedSection).map(([primaryKey, fields]) => (
              <div key={primaryKey}>
                <h4>{primaryKey}</h4>
                {fields.map(({ key, value }) => (
                  <p key={key}>
                    {formatKey(key)}: {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>{sectionName} data not available</p>
        )}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>{pageTitle} - Travel the Nations</title>
      </Head>
      <PageBanner title={pageTitle} content={pageContent} />
      <Services />
      <div className="container mt-5">
        {error ? (
          <div>
            <p>Error: {error}</p>
          </div>
        ) : (
          <>
            {countryData ? (
              <div>
                <h2>{countryData.countryData.region}</h2>
                <h3>Introduction</h3>
                <p>{countryData.countryData.Introduction.Background.text}</p>
                {/* Render all sections */}
                {Object.keys(countryData.countryData).map(sectionName => renderSection(sectionName))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </>
        )}
      </div>
      <FaqWithVideoModal />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { CountryCode } = params;
  try {
    if (!CountryCode) {
      throw new Error('Country code is missing.');
    }
    
    // Make the API call with the correct country code
    const response = await axios.get(`${API_BASE_URL}/api/country/${CountryCode}`);
    const countryData = response.data;
    
    // Return country data if available
    return {
      props: { countryData, error: null }
    };
  } catch (error) {
    console.error(`Error fetching data for ${CountryCode}:`, error);
    
    // Return error message instead of error object
    return {
      props: { countryData: null, error: error.message }
    };
  }
}

export default CountryDetails;
