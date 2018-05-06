const thumbnails = [
	{
		name: 'SmoothieSocial',
		path: '/mywork/smoothiesocial',
		image: './images/smoothiesocial-home.jpg',
		subtitle: 'Node.js + JavaScript + JQuery + HTML + CSS'
	},
	{
		name: 'Hiking an Adventure',
		path: '/mywork/hikinganadventure',
		image: './images/hikingadventure-home.jpg',
		subtitle: 'React + JavaScript + Node.js + HTML + CSS'
	},
	{
		name: 'Pet + Vet',
		path: '/mywork/petplusvet',
		image: './images/petvet-home.jpg',
		subtitle: 'JavaScript + JQuery + HTML + CSS'
	},
	{
		name: 'Backcountry Quiz',
		path: '/mywork/backcountryquiz',
		image: './images/backcountryquiz-home.jpg',
		subtitle: 'JavaScript + JQuery + HTML + CSS'
	},
	{
		name: 'Barsteel',
		path: '/mywork/barsteel',
		image: './images/barsteel-home.jpg',
		subtitle: 'Webflow'
	},
	{
		name: 'Daleville Community Library',
		path: '/mywork/daleville',
		image: './images/daleville-home.jpg',
		subtitle: 'Wordpress'
	}
];

const projectDeets = [
  {
    backgroundColor: 'background: linear-gradient(#95D05B, #BFE09C)',
    border: 'border:5px solid #BEDE9C',
    name: 'smoothie social',
    image: './images/smoothiesocial-home.jpg',
    phoneimages: ['./images/iphone-smoothiesocial-1.png', './images/iphone-smoothiesocial-2.png', './images/iphone-smoothiesocial-3.png', './images/iphone-smoothiesocial-4.png'],
    moreimages: ['./images/smoothiesocial-mysmoothies.jpg', './images/smoothiesocial-addnew.jpg', './images/smoothiesocial.gif', './images/smoothiesocial-2.gif'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `smoothie social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: `<h3>Front End</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JQuery</li>
                  <li>JavaScript</li>
                </ul>`,
    backEnd: `<h3>Back End</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>`,
    video: './images/smoothiesocial.gif',
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: 'https://dl.dropbox.com/s/v2e4vz2qcpdlwzj/logo.svg',
      },
      {
        alt: 'blender icon',
        src: 'https://dl.dropbox.com/s/swup36xmyh9z62k/blender-icon.png'
      },
      {
        alt: 'community icon',
        src: 'https://dl.dropbox.com/s/9kybi80xyki3kbv/community-icon.png'
      },
      {
        alt: 'save icon',
        src: 'https://dl.dropbox.com/s/gixyz9th11cizdu/save-icon.png',
      },
  ],
    link: 'https://smoothie-social.herokuapp.com/'
  },
  {
    name: 'Hiking an Adventure',
    backgroundColor: 'background: linear-gradient(#3E6AA8, #567BAF)',
    border: 'border:5px solid #567BAF',
    image: './images/hikingadventure-home.jpg',
    phoneimages: ['./images/mobile-hikingadventure-home.png', './images/mobile-hikingadventure-home-2.png', './images/mobile-hikingadventure-bear.png', './images/mobile-hikingadventure-thruhikers.png'],
    moreimages: ['./images/hikingadventure-hike.jpg', './images/hikingadventure-bear.jpg', './images/hiking-an-adventure.gif', './images/hiking-an-adventure-2.gif'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `smoothie social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: `<h3>Front End</h3>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>`,
    backEnd: `<h3>Back End</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>`,
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: 'https://dl.dropbox.com/s/v2e4vz2qcpdlwzj/logo.svg'
      },
      {
        alt: 'blender icon',
        src: 'https://dl.dropbox.com/s/swup36xmyh9z62k/blender-icon.png'
      },
      {
        alt: 'community icon',
        src: 'https://dl.dropbox.com/s/9kybi80xyki3kbv/community-icon.png'
      },
      {
        alt: 'save icon',
        src: 'https://dl.dropbox.com/s/gixyz9th11cizdu/save-icon.png'
      }
    ],
    link: 'http://hiking-an-adventure.netlify.com/'
  },
  {
    name: 'pet + vet',
    backgroundColor: 'background: linear-gradient(#DAA95F, #DAA95F)',
    border: 'border:5px solid #DAA95F',
    image: './images/petvet-home.jpg',
    phoneimages: ['./images/mobile-petvet-home.png', './images/mobile-petvet-form.png', './images/mobile-petvet-results.png', './images/mobile-petvet-vetresults.png'],
    moreimages: ['./images/petvet-form-2.jpg', './images/petvet-results-3.jpg', './images/petplusvet.gif', './images/petplusvet-2.gif'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `smoothie social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: ['HTML5', 'CSS3', 'JQuery', 'JavaScript'],
    backEnd: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: 'https://dl.dropbox.com/s/v2e4vz2qcpdlwzj/logo.svg'
      },
      {
        alt: 'blender icon',
        src: 'https://dl.dropbox.com/s/swup36xmyh9z62k/blender-icon.png'
      },
      {
        alt: 'community icon',
        src: 'https://dl.dropbox.com/s/9kybi80xyki3kbv/community-icon.png'
      },
      {
        alt: 'save icon',
        src: 'https://dl.dropbox.com/s/gixyz9th11cizdu/save-icon.png'
      }
    ],
    link: 'https://rigby33.github.io/pet-plus-vet-api-project/'
  },
  {
    name: 'Backcountry Quiz',
    backgroundColor: 'background: linear-gradient(#E7C658, #E6C557)',
    border: 'border:5px solid #E6C557',
    image: './images/backcountryquiz-home.jpg',
    phoneimages: ['./images/mobile-backcountryquiz-home.png', './images/mobile-backcountryquiz-question.png', './images/mobile-backcountryquiz-response.png', './images/mobile-backcountryquiz-end.png'],
    moreimages: ['./images/backcountryquiz-question.jpg', './images/backcountryquiz-results-3.jpg', './images/backcountryquiz.gif', './images/backcountryquiz-2.gif'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `smoothie social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: ['HTML5', 'CSS3', 'JQuery', 'JavaScript'],
    backEnd: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: 'https://dl.dropbox.com/s/v2e4vz2qcpdlwzj/logo.svg'
      },
      {
        alt: 'blender icon',
        src: 'https://dl.dropbox.com/s/swup36xmyh9z62k/blender-icon.png'
      },
      {
        alt: 'community icon',
        src: 'https://dl.dropbox.com/s/9kybi80xyki3kbv/community-icon.png'
      },
      {
        alt: 'save icon',
        src: 'https://dl.dropbox.com/s/gixyz9th11cizdu/save-icon.png'
      }
    ],
    link: 'https://rigby33.github.io/backcountry-quiz-app/'
  },
  {
    name: 'Barsteel',
    backgroundColor: 'background: linear-gradient(#C98724, #D89B3E)',
    border: 'border:5px solid #D89B3E',
    image: './images/barsteel-home.jpg',
    phoneimages: ['./images/mobile-barsteel-home.png', './images/mobile-barsteel-menu.png', './images/mobile-barsteel-icons.png', './images/mobile-barsteel-contact.png'],
    moreimages: ['./images/barsteel-company-2.jpg', './images/barsteel-services.jpg'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `smoothie social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: ['HTML5', 'CSS3', 'JQuery', 'JavaScript'],
    backEnd: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: 'https://dl.dropbox.com/s/v2e4vz2qcpdlwzj/logo.svg'
      },
      {
        alt: 'blender icon',
        src: 'https://dl.dropbox.com/s/swup36xmyh9z62k/blender-icon.png'
      },
      {
        alt: 'community icon',
        src: 'https://dl.dropbox.com/s/9kybi80xyki3kbv/community-icon.png'
      },
      {
        alt: 'save icon',
        src: 'https://dl.dropbox.com/s/gixyz9th11cizdu/save-icon.png'
      }
    ],
    link: 'http://www.barsteelcorp.com/'
  },
  {
    name: 'Daleville Library',
    backgroundColor: 'background: linear-gradient(#62ACA0, #6EC0B1)',
    border: 'border:5px solid #6EC0B1',
    image: './images/daleville-home.jpg',
    phoneimages: ['./images/mobile-daleville-home.png', './images/mobile-daleville-home-2.png', './images/mobile-daleville-home-3.png', './images/mobile-daleville-aboutus.png'],
    moreimages: ['./images/daleville-home-2.jpg', './images/daleville-home-3.jpg'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `smoothie social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: ['HTML5', 'CSS3', 'JQuery', 'JavaScript'],
    backEnd: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: 'https://dl.dropbox.com/s/v2e4vz2qcpdlwzj/logo.svg'
      },
      {
        alt: 'blender icon',
        src: 'https://dl.dropbox.com/s/swup36xmyh9z62k/blender-icon.png'
      },
      {
        alt: 'community icon',
        src: 'https://dl.dropbox.com/s/9kybi80xyki3kbv/community-icon.png'
      },
      {
        alt: 'save icon',
        src: 'https://dl.dropbox.com/s/gixyz9th11cizdu/save-icon.png'
      }
    ],
    link: 'http://dalevillelibrary.org/'
  },
];