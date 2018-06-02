const thumbnails = [
	{
		name: 'SmoothieSocial',
		path: '/mywork/smoothiesocial',
		image: '../images/smoothiesocial-home.jpg',
		subtitle: 'Node.js + JavaScript + JQuery + HTML + CSS'
	},
	{
		name: 'Hiking an Adventure',
		path: '/mywork/hikinganadventure',
		image: '../images/hikingadventure-home.jpg',
		subtitle: 'React.js + JavaScript + Node.js + HTML + CSS'
	},
	{
		name: 'Pet + Vet',
		path: '/mywork/petplusvet',
		image: '../images/petvet-home.jpg',
		subtitle: 'JavaScript + JQuery + HTML + CSS'
	},
	{
		name: 'Backcountry Quiz',
		path: '/mywork/backcountryquiz',
		image: '../images/backcountryquiz-home.jpg',
		subtitle: 'JavaScript + JQuery + HTML + CSS'
	},
	{
		name: 'Barsteel',
		path: '/mywork/barsteel',
		image: '../images/barsteel-home.jpg',
		subtitle: 'Webflow'
	},
	{
		name: 'Daleville Community Library',
		path: '/mywork/daleville',
		image: '../images/daleville-home.jpg',
		subtitle: 'Wordpress'
	}
];

const projectDeets = [
  {
    backgroundColor: 'background: linear-gradient(#95D05B, #BFE09C)',
    border: 'border:5px solid #BEDE9C',
    name: 'smoothie social',
    image: '../images/smoothiesocial-home.jpg',
    phoneimages: ['../images/iphone-smoothiesocial-1.png', '../images/iphone-smoothiesocial-2.png', '../images/iphone-smoothiesocial-3.png', '../images/iphone-smoothiesocial-4.png'],
    moreimages: ['../images/smoothiesocial-mysmoothies.jpg', '../images/smoothiesocial-addnew.jpg', '../images/smoothiesocial.gif', '../images/smoothiesocial-2.gif'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `Smoothie Social is a app where users can create, save, view, and edit smoothie recipes. Once a user has logged in they can create a smoothie and view smoothies created by other smoothie social users.

I wanted to create a clean, fresh, fun looking site that reminds people of real smoothies. All of the icons compliment the logo with their clean stroke design.

Users can register to create and save their smoothie recipes. Once users creates a recipe they can edit it or delete it. In addition users can view smoothies created by other members of the smoothie social community.`,
    frontEnd: `<h3>Frontend</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JQuery</li>
                  <li>JavaScript</li>
                </ul>`,
    backEnd: `<h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>`,
    video: '../images/smoothiesocial.gif',
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: '../images/smoothie-social-logo.svg',
      },
      {
        alt: 'blender icon',
        src: '../images/smoothie-social-blender-icon.png'
      },
      {
        alt: 'community icon',
        src: '../images/smoothie-social-community-icon.png'
      },
      {
        alt: 'save icon',
        src: '../images/smoothie-social-save-icon.png',
      },
  ],
    link: 'https://smoothie-social.herokuapp.com/',
    github: 'https://github.com/Rigby33/smoothieSocial'
  },
  {
    name: 'Hiking an Adventure',
    backgroundColor: 'background: linear-gradient(#3E6AA8, #567BAF)',
    border: 'border:5px solid #567BAF',
    image: '../images/hikingadventure-home.jpg',
    phoneimages: ['../images/mobile-hikingadventure-home.png', '../images/mobile-hikingadventure-home-2.png', '../images/mobile-hikingadventure-bear.png', '../images/mobile-hikingadventure-thruhikers.png'],
    moreimages: ['../images/hikingadventure-hike.jpg', '../images/hikingadventure-bear.jpg', '../images/hiking-an-adventure.gif', '../images/hiking-an-adventure-2.gif'],
    heading: 'a trivia game built with react',
    intro: `Hiking an Adventure is a keyboard arrow controlled web app. Users can play as guest hikers or sign up and log in to save their high score and be added to the thru hiker leader board. Throughout the game users can pick up trash to earn points and also answer hiking/backpacking trivia questions.

When hiking an adventure loads the user is greeted with the logo, an option to play as a guest hiker, an option to sign up, an option to log in and lastly an opportunity to learn how to play.

Once a user has clicked either hike as guest or logged in they move to the game screen. The game screen has a hiker game piece that starts at the bottom of the screen at the start of the trail. The goal is to stay on the trail pieces. Every time the hiker moves off of the trail one point is deducted from their current score. Along the way there will be pieces of trash and bears. For every piece of trash the hiker picks up 10 points will be added to the current score. If a hiker hikes over a bear spot a question will pop up. A correct answers adds 100 points to the score while an incorrect answer deducts 100 points. The trail is random and changes every time the hiker gets to the last place on the trail.

If a user is logged in a button between their current score and high score will be seen. The user can click save score at anytime to save their high score and be added to the thru hiker leader board.`,
    frontEnd: `<h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>`,
    backEnd: `<h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>`,
    logosAndIcons: [
      {
        alt: 'hiking an adventure logo',
        src: '../images/hikingadventure-logo.svg'
      },
      {
        alt: 'hiker icon',
        src: '../images/hikingadventure-hiker-icon.svg'
      },
      {
        alt: 'bear icon',
        src: '../images/hikingadventure-bear-icon.svg'
      },
      {
        alt: 'trash icon',
        src: '../images/hikingadventure-trash-icon.svg'
      }
    ],
    link: 'http://hiking-an-adventure.netlify.com/',
    github: 'https://github.com/Rigby33/hiking-adventure-game'
  },
  {
    name: 'pet + vet',
    backgroundColor: 'background: linear-gradient(#DAA95F, #DAA95F)',
    border: 'border:5px solid #DAA95F',
    image: '../images/petvet-home.jpg',
    phoneimages: ['../images/mobile-petvet-home.png', '../images/mobile-petvet-form.png', '../images/mobile-petvet-results.png', '../images/mobile-petvet-vetresults.png'],
    moreimages: ['../images/petvet-form-2.jpg', '../images/petvet-results-3.jpg', '../images/petplusvet.gif', '../images/petplusvet-2.gif'],
    heading: 'smoothie social is a fun smoothie recipe sharing network',
    intro: `Pet Plus Vet is a tool where a user can search for adoptable pets and vets in their area. There's a saying that goes "if you can't afford the vet don't adopt the pet." The goal of this website is to drive home the importance of animal health care when adding a new member (pet) to your family.

This website was made possible by using data pulled from two third party APIs. <a href="http://petfinder.com" target="_blank">http://petfinder.com</a> and <a href="http://maps.google.com" target="_blank">http://maps.google.com</a> (Google Maps Javascript API)`,
    frontEnd: `<h3>Frontend</h3>
                <ul>
                  <li>JQuery</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>`,
    logosAndIcons: [
      {
        alt: 'pet plus vet logo',
        src: '../images/petvet-logo.svg'
      },
      {
        alt: 'pet plus vet logo',
        src: '../images/petvet-frog.svg'
      },
      {
        alt: 'pet plus vet logo',
        src: '../images/petvet-cat.svg'
      },
       {
        alt: 'pet plus vet logo',
        src: '../images/petvet-dog.svg'
      },
      {
        alt: 'pet plus vet logo',
        src: '../images/petvet-mouse.svg'
      },
      {
        alt: 'pet plus vet logo',
        src: '../images/petvet-bird.svg'
      }
    ],
    link: 'https://rigby33.github.io/pet-plus-vet-api-project/',
    github: 'https://github.com/Rigby33/pet-plus-vet-api-project'
  },
  {
    name: 'Backcountry Quiz',
    backgroundColor: 'background: linear-gradient(#E7C658, #E6C557)',
    border: 'border:5px solid #E6C557',
    image: '../images/backcountryquiz-home.jpg',
    phoneimages: ['../images/mobile-backcountryquiz-home.png', '../images/mobile-backcountryquiz-question.png', '../images/mobile-backcountryquiz-response.png', '../images/mobile-backcountryquiz-end.png'],
    moreimages: ['../images/backcountryquiz-question.jpg', '../images/backcountryquiz-results-3.jpg', '../images/backcountryquiz.gif', '../images/backcountryquiz-2.gif'],
    heading: 'quiz made with javascript and jquery',
    intro: `This was one of my first projects that I created with with JavaScript and JQuery. It's a single page app that tests the user's knowledge of backpacking and the backcountry.

A user is greated with the opening screen prompting them to start the quiz. As the move through the questions the user recieves instant feedback on score and number of question they are on. At the end of the quiz the user recieves their final score.`,
    frontEnd: `<h3>Frontend</h3>
                <ul>
                  <li>JQuery</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>`,
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: '../images/quiz-logo.svg'
      },
      {
        alt: 'blender icon',
        src: '../images/quiz-bear.svg'
      },
      {
        alt: 'community icon',
        src: '../images/quiz-water.svg'
      },
      {
        alt: 'save icon',
        src: '../images/quiz-hat.svg'
      }
    ],
    link: 'https://rigby33.github.io/backcountry-quiz-app/'
  },
  {
    name: 'Barsteel',
    backgroundColor: 'background: linear-gradient(#C98724, #D89B3E)',
    border: 'border:5px solid #D89B3E',
    image: '../images/barsteel-home.jpg',
    phoneimages: ['../images/mobile-barsteel-home.png', '../images/mobile-barsteel-menu.png', '../images/mobile-barsteel-icons.png', '../images/mobile-barsteel-contact.png'],
    moreimages: ['../images/barsteel-company-2.jpg', '../images/barsteel-services.jpg'],
    heading: 'website created for Barsteel Corporation',
    intro: `The website for Barsteel Corporation was built in Webflow which is a website building platform. I decided to build the site with a platform instead of hand coding it so that the client could have the opportunityto update their site whenever they want.

The client's previous website was very simple. The majority of the content was just text. I found in my research that most steel websites are dificult to navigate and not visually appealing.

I wanted to create website that was informational, user-friendly, and attrative to the user. I also created all of the icons found throughout the website.`,
    logosAndIcons: [
      {
        alt: 'smoothie social logo',
        src: '../images/barsteel-bringinggap.svg'
      },
      {
        alt: 'blender icon',
        src: '../images/barsteel-accessibility.svg'
      },
      {
        alt: 'community icon',
        src: '../images/barsteel-quality.svg'
      },
      {
        alt: 'save icon',
        src: '../images/barsteel-volume.svg'
      }
    ],
    link: 'http://www.barsteelcorp.com/'
  },
  {
    name: 'Daleville Library',
    backgroundColor: 'background: linear-gradient(#62ACA0, #6EC0B1)',
    border: 'border:5px solid #6EC0B1',
    image: '../images/daleville-home.jpg',
    phoneimages: ['../images/mobile-daleville-home.png', '../images/mobile-daleville-home-2.png', '../images/mobile-daleville-home-3.png', '../images/mobile-daleville-aboutus.png'],
    moreimages: ['../images/daleville-home-2.jpg', '../images/daleville-home-3.jpg'],
    heading: 'a collaborative volunteer project',
    intro: `This website was creating during a event called Website Thru the Nite. The goal of the event was to create and publish a website for a Munciey, Indiana nonprofit organization within 24 hours using Wordpress.

In addition to the challenge of creating a website within 24 hours there was the added challenge of working in collaboration with other designers. Working with other creative people can be tough but my team and I worked well together and created a great looking website. Our team was voted "Most Valuable Geeks" for creating the best website to fit the needs of our non-profit, Daleville Library. We also received the "Geek's Choice Award for Best Design." Both awards were decided upon by a group of local website designers and other Muncie, Indiana community members that felt our website best encompassed the unique needs of our client, while creating a more user-friendly experience.`,
    link: 'http://dalevillelibrary.org/'
  },
];