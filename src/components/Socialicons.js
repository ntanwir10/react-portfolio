import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineIcon from 'react-lineicons';

function Socialicons(props) {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul className={props.bordered ? ' socialicons  socialicons-bordered' : ' socialicons'}>

      {!socialLinks.linkedin ? null : <li>
        <a rel='noopener noreferrer' target='_blank' href={socialLinks.linkedin}>
          <LineIcon name='linkedin' />
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel='noopener noreferrer' target='_blank' href={socialLinks.github}>
          <LineIcon name='github' />
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel='noopener noreferrer' target='_blank' href={socialLinks.stackoverflow}>
          <LineIcon name='stackoverflow' />
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel='noopener noreferrer' target='_blank' href={'mailto:' + socialLinks.envelope}>
          <LineIcon name='envelope' />
        </a>
      </li>}
    </ul >
  );
}

export default Socialicons;
