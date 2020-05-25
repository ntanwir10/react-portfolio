import Mock from '../mock';

const database = {
  information: {
    name: 'Nauman Tanwir',
    aboutContent: 'I am a frontend web developer with over 5 years of experience in front end development. I can provide clean code and pixel perfect design.',
    phone: '(+91)725-914-1631',
    language: 'English, Hindi',
    email: 'ntanwir10@gmail.com',
    address: '192.168.43.227',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/naumantanwir/',
      github: 'https://github.com/ntanwir10',
      stackoverflow: 'https://stackoverflow.com/users/6488504/nauman-tanwir',
      gmail: 'ntanwir10@gmail.com',
    },
    brandImage: '/images/homepage.jpg',
    aboutImage: '/images/about.jpg',
    aboutImageLg: '/images/about.jpg',
    cvfile: '/files/nauman_tanwir_cv.pdf'
  },
  reviews: [
    {
      id: 1,
      content: 'I worked closely with Nauman on the development of a website and blog. He is a very competent developer with all the requisite skills to take a project from inception to completion. He has a good eye for detail and is able to guide both design and technical aspects of a project.',
      author: {
        name: 'Brendan Tobin',
        designation: 'VP of Growth at Ecanvasser'
      }
    },
    {
      id: 2,
      content: 'I dont think i have met someone as courteous and as polite, Nauman was always ready to be available and would work to meet any deadline. I honestly believe he will flourish where ever he ends up and will turn out to be a real asset.',
      author: {
        name: 'Jonathan Duane',
        designation: 'Technical Solutions Manager at iRadio Ireland'
      }
    },
    {
      id: 3,
      content: 'Nauman is a very courteous mannered employee. His time keeping is impeccable and he displays a great passion to learn within an organization. Nauman fit in seamlessly with his fellow employees and would prove a great addition to any organization! Derek Cassells - Creative Director at Orangeye Media',
      author: {
        name: 'Derek Cassells',
        designation: 'Digital Marketing Brain & Creative Director at iRadio solutions'
      }
    }
  ],
  skills: [
    {
      Category: 'Web Technologies',
      Technologies: 'HTML5, CSS3, Sass, BootStrap, JavaScript, TypeScript, Handlebars.js',
    },
    {
      Category: 'JavaScript Framework and libraries',
      Technologies: 'Angular 6, React.js',
    },
    {
      Category: 'Mobile App Development',
      Technologies: 'React Native',
    },
    {
      Category: 'Third party Login',
      Technologies: 'OAuth (Open Authorization) using Google and Facebook.',
    },
    {
      Category: 'Responsive Web Design',
      Technologies: 'Bootstrap',
    },
    {
      Category: 'Third party Libraries',
      Technologies: 'Redux (in association with React.js), Lodash.js, Require.js, underscore.js',
    },
    {
      Category: 'Data visualization',
      Technologies: 'Charts.js',
    },
    {
      Category: 'Version Control',
      Technologies: 'GitHub, SourceTree, Bitbucket.',
    },
    {
      Category: 'Build tools',
      Technologies: 'Gulp, Webpack',
    },
    {
      Category: 'Package managers',
      Technologies: 'Node Package Manager (NPM)',
    },
    {
      Category: 'Unit testing',
      Technologies: 'Karma, Jasmine',
    },
    {
      Category: 'Project Management tools',
      Technologies: 'JIRA, Teamwork, Asana',
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: 'April 2019 to March 2020',
        position: 'Frontend Web Developer',
        company: 'Koch Technology Centre (KTC). ',
        details: 'It is the Global IT division of Koch Industries Inc, providing all kinds of software and IT solutions to all its businesses',
        location: 'Bangalore, India',
      },
      {
        id: 2,
        year: 'August 2017 to March 2019',
        position: 'Frontend Web Developer',
        company: 'Globant Pvt. Ltd.',
        location: 'Bangalore, India',
      },
      {
        id: 3,
        year: 'June 2016 to Dec 2016',
        position: 'Web Developer',
        company: 'Ecanvasser Pvt. Ltd.',
        location: 'Cork, Ireland',
        details: 'A Campaign management application for election campaigns. It was initially built in PHP which got converted to a Single Page Application (SPA) in AngularJS.'
      },
      {
        id: 4,
        year: 'September 2015 to April 2016',
        position: 'Web Developer',
        company: 'iRadio Pvt. Ltd.',
        location: 'Athone, Ireland',
        details: 'Build fully responsive WordPress e-commerce websites and integrated PayPal and WooCommerce for payment checkout. Also, build WordPress themes for promotional websites and provided support post-launch for the duration of the event.'
      },
      {
        id: 5,
        year: 'June 2013 – August 2014',
        position: 'PHP Developer',
        location: 'Lucknow, India',
        company: 'Infranix Technologies Pvt. Ltd.',
      }
    ],
    educationExperience: [
      {
        id: 1,
        university: 'University College Cork',
        location: 'Cork, Ireland',
        year: '2014 – 2015',
        course: 'Master of Science in Computing Science',
      },
      {
        id: 2,
        university: 'Integral University',
        location: 'Lucknow, India',
        year: '2009 –2013',
        course: 'Bachelor of Technology in Information Technology',
      },
    ]
  },

  contactInfo: {
    phoneNumber: '(+91)725-914-1631',
    emailAddress: ['ntanwir10@gmail.com', 'reachout@naumantanwir.me'],
    address: '192.168.43.227'
  }
}


Mock.onGet('/api/information').reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply(config => {
  const response = database.contactInfo;
  return [200, response];
});