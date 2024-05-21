import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import Services from "../components/Services/Services";
import Link from 'next/link'
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Manually define the list of countries with their country codes
  const manualCountries = [
    { name: "Afghanistan", code: "af" },
    { name: "Albania", code: "al" },
    { name: "Algeria", code: "ag" },
    { name: "Andorra", code: "an" },
    { name: "Angola", code: "ao" },
    { name: "Antigua and Barbuda", code: "ac" },
    { name: "Argentina", code: "ar" },
    { name: "Armenia", code: "am" },
    { name: "Australia", code: "as" },
    { name: "Austria", code: "au" },
    { name: "Azerbaijan", code: "aj" },
    { name: "The Bahamas", code: "bf" },
    { name: "Bahrain", code: "ba" },
    { name: "Bangladesh", code: "bg" },
    { name: "Barbados", code: "bb" },
    { name: "Belarus", code: "bo" },
    { name: "Belgium", code: "be" },
    { name: "Belize", code: "bh" },
    { name: "Benin", code: "bn" },
    { name: "Bhutan", code: "bt" },
    { name: "Bolivia", code: "bl" },
    { name: "Bosnia and Herzegovina", code: "bk" },
    { name: "Botswana", code: "bc" },
    { name: "Brazil", code: "br" },
    { name: "Brunei", code: "bx" },
    { name: "Bulgaria", code: "bu" },
    { name: "Burkina Faso", code: "uv" },
    { name: "Burma", code: "bm" },
    { name: "Burundi", code: "by" },
    { name: "Cambodia", code: "cb" },
    { name: "Cameroon", code: "cm" },
    { name: "Canada", code: "ca" },
    { name: "Cape Verde", code: "cv" },
    { name: "Central African Republic", code: "ct" },
    { name: "Chad", code: "cd" },
    { name: "Chile", code: "ci" },
    { name: "China", code: "ch" },
    { name: "Colombia", code: "co" },
    { name: "Comoros", code: "cn" },
    { name: "Congo DR", code: "cg" },
    { name: "Congo", code: "cf" },
    { name: "Costa Rica", code: "cs" },
    { name: "Cote d'Ivoire", code: "iv" },
    { name: "Croatia", code: "hr" },
    { name: "Cuba", code: "cu" },
    { name: "Cyprus", code: "cy" },
    { name: "Czechia", code: "ez" },
    { name: "Denmark", code: "da" },
    { name: "Djibouti", code: "dj" },
    { name: "Dominica", code: "do" },
    { name: "Dominican Republic", code: "dr" },
    { name: "Ecuador", code: "ec" },
    { name: "Egypt", code: "eg" },
    { name: "El Salvador", code: "es" },
    { name: "Equatorial Guinea", code: "ek" },
    { name: "Eritrea", code: "er" },
    { name: "Estonia", code: "en" },
    { name: "Eswatini", code: "wz" },
    { name: "Ethiopia", code: "et" },
    { name: "Fiji", code: "fj" },
    { name: "Finland", code: "fi" },
    { name: "France", code: "fr" },
    { name: "Gabon", code: "gb" },
    { name: "The Gambia", code: "ga" },
    { name: "Georgia", code: "gg" },
    { name: "Germany", code: "gm" },
    { name: "Ghana", code: "gh" },
    { name: "Greece", code: "gr" },
    { name: "Grenada", code: "gj" },
    { name: "Guatemala", code: "gt" },
    { name: "Guinea", code: "gv" },
    { name: "Guinea-Bissau", code: "gy" },
    { name: "Haiti", code: "ha" },
    { name: "Honduras", code: "ho" },
    { name: "Hungary", code: "hu" },
    { name: "Iceland", code: "ic" },
    { name: "India", code: "in" },
    { name: "Indonesia", code: "id" },
    { name: "Iran", code: "ir" },
    { name: "Iraq", code: "iz" },
    { name: "Ireland", code: "ei" },
    { name: "Israel", code: "is" },
    { name: "Italy", code: "it" },
    { name: "Jamaica", code: "jm" },
    { name: "Japan", code: "ja" },
    { name: "Jordan", code: "jo" },
    { name: "Kazakhstan", code: "kz" },
    { name: "Kenya", code: "ke" },
    { name: "Kiribati", code: "kr" },
    { name: "North Korea", code: "kn" },
    { name: "South Korea", code: "ks" },
    { name: "Kosovo", code: "kv" },
    { name: "Kuwait", code: "ku" },
    { name: "Kyrgyzstan", code: "kg" },
    { name: "Laos", code: "L" },
    { name: "Latvia", code: "lg" },
    { name: "Lebanon", code: "le" },
    { name: "Lesotho", code: "lt" },
    { name: "Liberia", code: "li" },
    { name: "Libya", code: "ly" },
    { name: "Liechtenstein", code: "ls" },
    { name: "Lithuania", code: "lh" },
    { name: "Luxembourg", code: "lu" },
    { name: "Madagascar", code: "M" },
    { name: "Malawi", code: "ma" },
    { name: "Malaysia", code: "mi" },
    { name: "Maldives", code: "my" },
    { name: "Mali", code: "mv" },
    { name: "Malta", code: "mt" },
    { name: "Marshall Islands", code: "rm" },
    { name: "Mauritania", code: "mr" },
    { name: "Mauritius", code: "mp" },
    { name: "Mexico", code: "mx" },
    { name: "Micronesia", code: "fm" },
    { name: "Moldova", code: "md" },
    { name: "Monaco", code: "mn" },
    { name: "Mongolia", code: "mg" },
    { name: "Montenegro", code: "mj" },
    { name: "Morocco", code: "mo" },
    { name: "Mozambique", code: "mz" },
    { name: "Namibia", code: "N" },
    { name: "Nauru", code: "na" },
    { name: "Nepal", code: "np" },
    { name: "Netherlands", code: "nl" },
    { name: "New Zealand", code: "nz" },
    { name: "Nicaragua", code: "nu" },
    { name: "Niger", code: "ng" },
    { name: "Nigeria", code: "ni" },
    { name: "Norway", code: "no" },
    { name: "North Macedonia", code: "mk" },
    { name: "Oman", code: "mu" },
    { name: "Pakistan", code: "pk" },
    { name: "Palau", code: "ps" },
    { name: "Panama", code: "pm" },
    { name: "Papua New Guinea", code: "pp" },
    { name: "Paraguay", code: "pa" },
    { name: "Peru", code: "pe" },
    { name: "Philippines", code: "rp" },
    { name: "Poland", code: "pl" },
    { name: "Portugal", code: "po" },
    { name: "Qatar", code: "Q" },
    { name: "Romania", code: "ro" },
    { name: "Russia", code: "rs" },
    { name: "Rwanda", code: "rw" },
    { name: "Saint Kitts and Nevis", code: "S" },
    { name: "Saint Lucia", code: "sc" },
    { name: "Saint Vincent and the Grenadines", code: "st" },
    { name: "Samoa", code: "ws" },
    { name: "San Marino", code: "sm" },
    { name: "Sao Tome and Principe", code: "tp" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Senegal", code: "sg" },
    { name: "Serbia", code: "ri" },
    { name: "Seychelles", code: "se" },
    { name: "Sierra Leone", code: "sl" },
    { name: "Singapore", code: "sn" },
    { name: "Slovakia", code: "lo" },
    { name: "Slovenia", code: "si" },
    { name: "Solomon Islands", code: "bp" },
    { name: "Somalia", code: "so" },
    { name: "South Africa", code: "sf" },
    { name: "South Sudan", code: "od" },
    { name: "Spain", code: "sp" },
    { name: "Sri Lanka", code: "ce" },
    { name: "Sudan", code: "su" },
    { name: "Suriname", code: "ns" },
    { name: "Sweden", code: "sw" },
    { name: "Switzerland", code: "sz" },
    { name: "Syria", code: "sy" },
    { name: "Tajikistan", code: "T" },
    { name: "Tanzania", code: "tz" },
    { name: "Thailand", code: "th" },
    { name: "Timor-Leste", code: "tt" },
    { name: "Togo", code: "to" },
    { name: "Tonga", code: "tn" },
    { name: "Trinidad and Tobago", code: "td" },
    { name: "Tunisia", code: "ts" },
    { name: "Turkey", code: "tu" },
    { name: "Turkmenistan", code: "tx" },
    { name: "Tuvalu", code: "tv" },
    { name: "Uganda", code: "U" },
    { name: "Ukraine", code: "ug" },
    { name: "United Arab Emirates", code: "up" },
    { name: "United Kingdom", code: "uk" },
    { name: "United States", code: "us" },
    { name: "Uruguay", code: "uy" },
    { name: "Uzbekistan", code: "uz" },
    { name: "Vanuatu", code: "V" },
    { name: "Vatican City (Holy See)", code: "nh" },
    { name: "Venezuela", code: "ve" },
    { name: "Vietnam", code: "vm" },
    { name: "Yemen", code: "ym" },
    { name: "Zambia", code: "za" },
    { name: "Zimbabwe", code: "zi" },
    { name: "Taiwan", code: "tw" },
    { name: "European Union", code: "ee" }
];


  useEffect(() => {
    // Set the countries state with the manually defined list
    setCountries(manualCountries);
    setFilteredCountries(manualCountries);
  }, []);

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(results);
  }, [searchTerm, countries]);

  const handleClickCountry = async (countryCode) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/country/${countryCode}`);
      console.log(response.data); // Log the country data
      // Update state or navigate to a new page to display the country data
    } catch (error) {
      console.error(`Error fetching data for ${countryCode}:`, error);
    }
  };
  
  return (
    <>
      <Head>
        <title>Countries Page</title>
      </Head>
      <PageBanner
        title="Explore the World with Travel the Nations" 
        content="We believe in celebrating the diversity of our world. Learn about the languages spoken, traditions observed, and customs practiced in every corner of the globe."
      />  
      <Services />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <input
              type="text"
              placeholder="Search countries you want to know about"
              className="form-control mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="row">
          {filteredCountries.map((country, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card country-card" onClick={() => handleClickCountry(country.code)}>
                <div className="card-body">
                  <h5 className="card-title country-content text-center">{country.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div> */}


<div className="row">
  {filteredCountries.map((country, index) => (
    <div className="col-md-4 mb-4" key={index}>



      <Link href={`/countrydetails/${country.code}`} passHref>
  <div className="card country-card" style={{ cursor: "pointer" }}>
    <div className="card-body">
      <h5 className="card-title country-content text-center">{country.name}</h5>
    </div>
  </div>
</Link>

    </div>
  ))}
</div>

      </div>
      <FaqWithVideoModal />
    </>
  );
}

export default CountriesPage;
