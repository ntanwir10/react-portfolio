import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';

function About() {
  const [information, setInformation] = useState('');
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setInformation(response.data)
      })
    axios.get('/api/reviews')
      .then(response => {
        setReviews(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className=' about-area  section  padding-top'>
        <div className='container'>
          <Sectiontitle title='About Me' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className=' about-image'>
                <img
                  src={information.aboutImage}
                  alt='about'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className=' about-content'>
                <h3>
                  I am <span className='color-theme'>{information.name}</span>
                </h3>
                <p>
                  I am a frontend web developer with over 4 Years of work experience in front-end developement. I can provide clean code and pixel perfect design.
                </p>
                <ul>
                  {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>}
                  {!information.email ? null : <li>
                    <b>Email</b> {information.email}
                  </li>}
                  {!information.age ? null : <li>
                    <b>Age</b> {information.age} Years
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.address ? null : <li>
                    <b>Address</b> {information.address}
                  </li>}
                  {!information.language ? null : <li>
                    <b>Languages</b> {information.language}
                  </li>}
                </ul>
                <a href={information.cvfile} className='button' target='_blank' rel='noopener noreferrer'>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='review-area  section  padding-top  padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Recommenadations' />
          <div className='row justify-content-center'>
            <div className='col-12'>
              <Slider className=' testimonial-slider' {...sliderSettings}>
                {reviews.map(review => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
