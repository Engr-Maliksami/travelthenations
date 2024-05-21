import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function PopularCryptoCurrencies() {
    const [news, setNews] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchNews();
    }, []);

// Inside the fetchNews function

const fetchNews = async () => {
    try {
        const response = await axios.post('http://localhost:8000/news', {
            query: 'Geography',
            from_date: '04/02/2024',
            to_date: '05/04/2024',
            location: 'us',
            language: 'en',
            page: 1
        });

        console.log('Response data:', response.data);

        if (response.data && Array.isArray(response.data.news)) {
            // Extracting relevant information from the API response
            const parsedNews = response.data.news.map((item, index) => ({
                id: index + 1,
                title: item.title,
                image: item.top_image,
                description: item.short_description || "", // Use short_description if available, otherwise an empty string
                date: item.date
            }));

            setNews(parsedNews.slice(0, 9)); // Limiting to 6 news items
        } else {
            console.error('Error fetching news: Invalid response format');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};


    const handleNewsClick = (id) => {
        // Navigate to the individual news page or show the full news article
        router.push(`/news/${id}`);
    };

    return (
        <section className="crypto-currencies-wrapper fix section-black section-padding">
            <div className="container">
                <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
                    <div className="block-contents text-white">
                        <div className="section-title wow fadeInUp" data-wow-duration="1s">
                            <h2> Latest Advancements & Discoveries</h2>
                        </div>
                    </div>
                </div>
                <div className="nice-arrow-icon d-none d-lg-block wow fadeInDown" data-wow-duration="1.2s">
                    <img src="img/icons/nice-arrow-down.svg" alt="" />
                </div>

                <div className="row">
                    {Array.isArray(news) && news.map((article, index) => (
                        <div key={index} className="col-md-6 col-xl-4 col-12">
                            <div
                                className="single-crypto-currency-card wow fadeInUp"
                                data-wow-duration="1s"
                                data-wow-delay={`${index * 0.2}s`}
                                onClick={() => handleNewsClick(article.id)}
                            >
                                {/* Render news article details */}
                                <div>
                                    {/* Add an image if available */}
                                    {article.image && (
                                        <div className="icon">
                                            <img src={article.image} alt="no img" />
                                        </div>
                                    )}
                                    <div className="">
                                        <h6>{article.title}</h6>
                                        <span>{article.date}</span>
                                    </div>
                                </div>
                                <div className="">
                                    <p>{article.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
