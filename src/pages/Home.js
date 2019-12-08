import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';
import Socialicons from '../components/Socialicons';
import Layout from '../components/Layout';

function Home() {
  const [information, setInformation] = useState('');
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: '#ffffff'
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: 'top',
        out_mode: 'out'
      }
    }
  };
  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setInformation(response.data);
      })
  }, [])
  return (
    <Layout>
      <div className='home-area  padding-section'>
        <Particles className='home-particle' params={paramConfig} />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-12'>
              <div className='home-content'>
                <h1>
                  Hi, I am <span className='color-theme'>{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
                <a href={information.cvfile} className='button cvHome' target='_blank' rel='noopener noreferrer'>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
