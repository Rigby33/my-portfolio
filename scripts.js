let projects = {template: `<div class="row" id="mywork">
<div class="projectwrapper">
					<div class="projects">
						<div class="project">
							<router-link class="projecthover" to="${thumbnails[0].path}" style="background-image: url(${thumbnails[0].image})">
								<div class="projectinfo">
									<div class="projectname">${thumbnails[0].name}</div>
									<div class="projectsub">${thumbnails[0].subtitle}</div>
								</div>
							</router-link>
						</div>
						<div class="project">
							<router-link class="projecthover" to="${thumbnails[1].path}" style="background-image: url(${thumbnails[1].image})">
								<div class="projectinfo">
									<div class="projectname">${thumbnails[1].name}</div>
									<div class="projectsub">${thumbnails[1].subtitle}</div>
								</div>
							</router-link>
						</div>
						<div class="project">
							<router-link class="projecthover" to="${thumbnails[2].path}" style="background-image: url(${thumbnails[2].image})">
								<div class="projectinfo">
									<div class="projectname">${thumbnails[2].name}</div>
									<div class="projectsub">${thumbnails[2].subtitle}</div>
								</div>
							</router-link>
						</div>
						<div class="project">
							<router-link class="projecthover" to="${thumbnails[3].path}" style="background-image: url(${thumbnails[3].image})">
								<div class="projectinfo">
									<div class="projectname">${thumbnails[3].name}</div>
									<div class="projectsub">${thumbnails[3].subtitle}</div>
								</div>
							</router-link>
						</div>
						<div class="project">
							<router-link class="projecthover" to="${thumbnails[4].path}" style="background-image: url(${thumbnails[4].image})">
								<div class="projectinfo">
									<div class="projectname">${thumbnails[4].name}</div>
									<div class="projectsub">${thumbnails[4].subtitle}</div>
								</div>
							</router-link>
						</div>
						<div class="project">
							<router-link class="projecthover" to="${thumbnails[5].path}" style="background-image: url(${thumbnails[5].image})">
								<div class="projectinfo">
									<div class="projectname">${thumbnails[5].name}</div>
									<div class="projectsub">${thumbnails[5].subtitle}</div>
								</div>
							</router-link>
						</div>
					</div>
          </div>
				</div>`};

const smoothiesocial = {
	template: `<div class="projectdetails" style="${projectDeets[0].backgroundColor}">
        <div class="imageAndDeets">
        <div class="backtowork">
          <router-link to="/mywork">
            <img src="./images/close.svg"/>
          </router-link>
        </div>
        <div class="firstimagewrapper">
        <div class="back">
          <router-link to="${thumbnails[5].path}">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="firstlinksandimagewrapper">
          <h2>${projectDeets[0].name}</h2>
          <div class="livelinks">
            <a href="${projectDeets[0].link}" target="_blank">Live Link</a>
            <a href="${projectDeets[0].github}" target="_blank">github</a>
          </div>
        <div class="firstprojectimage">
          <img src="${projectDeets[0].image}" style="${projectDeets[0].border}"/>
        </div>
        </div>
        <div class="next">
          <router-link to="${thumbnails[1].path}">
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[0].frontEnd}
              ${projectDeets[0].backEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[0].heading}</h2>
              <pre>${projectDeets[0].intro}</pre>
            </div>
            </div>
          </div>
          <div class="moreprojectimages">
            <div class="logoAndIcons">
              <img src="${projectDeets[0].logosAndIcons[0].src}" alt="${projectDeets[0].logosAndIcons[0].alt}"/>
              <img src="${projectDeets[0].logosAndIcons[1].src}" alt="${projectDeets[0].logosAndIcons[1].alt}"/>
              <img src="${projectDeets[0].logosAndIcons[2].src}" alt="${projectDeets[0].logosAndIcons[2].alt}"/>
              <img src="${projectDeets[0].logosAndIcons[3].src}" alt="${projectDeets[0].logosAndIcons[3].alt}"/>
            </div>
            <div class="moreimages">
              <img src="${projectDeets[0].moreimages[0]}"/>
              <img src="${projectDeets[0].moreimages[1]}"/>
              <img src="${projectDeets[0].moreimages[2]}" alt="${projectDeets[0].name}">
              <img src="${projectDeets[0].moreimages[3]}" alt="${projectDeets[0].name}">
            </div>
            <div class="phonemockups">
              <img src="${projectDeets[0].phoneimages[0]}"/>
              <img src="${projectDeets[0].phoneimages[1]}"/>
              <img src="${projectDeets[0].phoneimages[2]}"/>
              <img src="${projectDeets[0].phoneimages[3]}"/>
            </div>
          </div>
        </div>
      </div>`
  };

const hikingAnAdvenutre = {
	template: `<div class="projectdetails" style="${projectDeets[1].backgroundColor}">
        <div class="imageAndDeets">
        <div class="backtowork">
          <router-link to="/mywork">
            <img src="./images/close.svg"/>
          </router-link>
        </div>
        <div class="firstimagewrapper">
        <div class="back">
          <router-link to="${thumbnails[0].path}">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="firstlinksandimagewrapper">
          <h2>${projectDeets[1].name}</h2>
          <div class="livelinks">
            <a href="${projectDeets[1].link}" target="_blank">Live Link</a>
            <a href="${projectDeets[1].github}" target="_blank">github</a>
          </div>
        <div class="firstprojectimage">
          <img src="${projectDeets[1].image}" style="${projectDeets[1].border}"/>
        </div>
        </div>
        <div class="next">
          <router-link to="${thumbnails[2].path}">
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[1].frontEnd}
              ${projectDeets[1].backEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[1].heading}</h2>
              <pre>${projectDeets[1].intro}</pre>
            </div>
            </div>
          </div>
          <div class="moreprojectimages">
            <div class="logoAndIcons">
              <img src="${projectDeets[1].logosAndIcons[0].src}" alt="${projectDeets[1].logosAndIcons[0].alt}"/>
              <img src="${projectDeets[1].logosAndIcons[1].src}" alt="${projectDeets[1].logosAndIcons[1].alt}"/>
              <img src="${projectDeets[1].logosAndIcons[2].src}" alt="${projectDeets[1].logosAndIcons[2].alt}"/>
              <img src="${projectDeets[1].logosAndIcons[3].src}" alt="${projectDeets[1].logosAndIcons[3].alt}"/>
            </div>
            <div class="moreimages">
              <img src="${projectDeets[1].moreimages[0]}"/>
              <img src="${projectDeets[1].moreimages[1]}"/>
              <img src="${projectDeets[1].moreimages[2]}" alt="${projectDeets[1].name}">
              <img src="${projectDeets[1].moreimages[3]}" alt="${projectDeets[1].name}">
            </div>
            <div class="phonemockups">
              <img src="${projectDeets[1].phoneimages[0]}"/>
              <img src="${projectDeets[1].phoneimages[1]}"/>
              <img src="${projectDeets[1].phoneimages[2]}"/>
              <img src="${projectDeets[1].phoneimages[3]}"/>
            </div>
          </div>
        </div>
      </div>`
  };

const petPlusVet = {
	template: `<div class="projectdetails" style="${projectDeets[2].backgroundColor}">
        <div class="imageAndDeets">
        <div class="backtowork">
          <router-link to="/mywork">
            <img src="./images/close.svg"/>
          </router-link>
        </div>
        <div class="firstimagewrapper">
        <div class="back">
          <router-link to="${thumbnails[1].path}">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="firstlinksandimagewrapper">
          <h2>${projectDeets[2].name}</h2>
          <div class="livelinks">
            <a href="${projectDeets[2].link}" target="_blank">Live Link</a>
            <a href="${projectDeets[2].github}" target="_blank">github</a>
          </div>
        <div class="firstprojectimage">
          <img src="${projectDeets[2].image}" style="${projectDeets[2].border}"/>
        </div>
        </div>
        <div class="next">
          <router-link to="${thumbnails[3].path}">
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[2].frontEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[2].heading}</h2>
              <pre>${projectDeets[2].intro}</pre>
            </div>
            </div>
          </div>
          <div class="moreprojectimages">
            <div class="logoAndIcons">
              <img style="width: 20%" src="${projectDeets[2].logosAndIcons[0].src}" alt="${projectDeets[2].logosAndIcons[0].alt}"/>
              <img style="width: 15%" src="${projectDeets[2].logosAndIcons[1].src}" alt="${projectDeets[2].logosAndIcons[1].alt}"/>
              <img style="width: 15%" src="${projectDeets[2].logosAndIcons[2].src}" alt="${projectDeets[2].logosAndIcons[2].alt}"/>
              <img style="width: 15%" src="${projectDeets[2].logosAndIcons[3].src}" alt="${projectDeets[2].logosAndIcons[3].alt}"/>
              <img style="width: 15%" src="${projectDeets[2].logosAndIcons[4].src}" alt="${projectDeets[2].logosAndIcons[4].alt}"/>
              <img style="width: 15%" src="${projectDeets[2].logosAndIcons[5].src}" alt="${projectDeets[2].logosAndIcons[5].alt}"/>
            </div>
            <div class="moreimages">
              <img src="${projectDeets[2].moreimages[0]}"/>
              <img src="${projectDeets[2].moreimages[1]}" style="border: 1px solid LightGray"/>
              <img src="${projectDeets[2].moreimages[2]}" alt="${projectDeets[2].name}">
              <img src="${projectDeets[2].moreimages[3]}" alt="${projectDeets[2].name}">
            </div>
            <div class="phonemockups">
              <img src="${projectDeets[2].phoneimages[0]}"/>
              <img src="${projectDeets[2].phoneimages[1]}"/>
              <img src="${projectDeets[2].phoneimages[2]}"/>
              <img src="${projectDeets[2].phoneimages[3]}"/>
            </div>
          </div>
        </div>
      </div>`
  };

const backcountryQuiz = {
	template: `<div class="projectdetails" style="${projectDeets[3].backgroundColor}">
        <div class="imageAndDeets">
        <div class="backtowork">
          <router-link to="/mywork">
            <img src="./images/close.svg"/>
          </router-link>
        </div>
        <div class="firstimagewrapper">
        <div class="back">
          <router-link to="${thumbnails[2].path}">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="firstlinksandimagewrapper">
          <h2>${projectDeets[3].name}</h2>
          <div class="livelinks">
            <a href="${projectDeets[3].link}" target="_blank">Live Link</a>
          </div>
        <div class="firstprojectimage">
          <img src="${projectDeets[3].image}" style="${projectDeets[3].border}"/>
        </div>
        </div>
        <div class="next">
          <router-link to="${thumbnails[4].path}">
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[3].frontEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[3].heading}</h2>
              <pre>${projectDeets[3].intro}</pre>
            </div>
            </div>
          </div>
          <div class="moreprojectimages">
            <div class="logoAndIcons">
              <img style="width: 25%" src="${projectDeets[3].logosAndIcons[0].src}" alt="${projectDeets[3].logosAndIcons[0].alt}"/>
              <img style="width: 25%" src="${projectDeets[3].logosAndIcons[1].src}" alt="${projectDeets[3].logosAndIcons[1].alt}"/>
              <img style="width: 25%" src="${projectDeets[3].logosAndIcons[2].src}" alt="${projectDeets[3].logosAndIcons[2].alt}"/>
              <img style="width: 25%" src="${projectDeets[3].logosAndIcons[3].src}" alt="${projectDeets[3].logosAndIcons[3].alt}"/>
            </div>
            <div class="moreimages">
              <img src="${projectDeets[3].moreimages[0]}"/>
              <img src="${projectDeets[3].moreimages[1]}"/>
              <img src="${projectDeets[3].moreimages[2]}" alt="${projectDeets[3].name}">
              <img src="${projectDeets[3].moreimages[3]}" alt="${projectDeets[3].name}">
            </div>
            <div class="phonemockups">
              <img src="${projectDeets[3].phoneimages[0]}"/>
              <img src="${projectDeets[3].phoneimages[1]}"/>
              <img src="${projectDeets[3].phoneimages[2]}"/>
              <img src="${projectDeets[3].phoneimages[3]}"/>
            </div>
          </div>
        </div>
      </div>`
  };

const barsteelCorp = {
	template: `<div class="projectdetails" style="${projectDeets[4].backgroundColor}">
        <div class="imageAndDeets">
        <div class="backtowork">
          <router-link to="/mywork">
            <img src="./images/close.svg"/>
          </router-link>
        </div>
        <div class="firstimagewrapper">
        <div class="back">
          <router-link to="${thumbnails[3].path}">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="firstlinksandimagewrapper">
          <h2>${projectDeets[4].name}</h2>
          <div class="livelinks">
            <a href="${projectDeets[4].link}" target="_blank">Live Link</a>
          </div>
        <div class="firstprojectimage">
          <img src="${projectDeets[4].image}" style="${projectDeets[4].border}"/>
        </div>
        </div>
        <div class="next">
          <router-link to="${thumbnails[5].path}">
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="introparagraph" style="width: 100%">
              <h2>${projectDeets[4].heading}</h2>
              <pre>${projectDeets[4].intro}</pre>
            </div>
            </div>
          </div>
          <div class="moreprojectimages">
            <div class="logoAndIcons">
              <img style="width: 25%" src="${projectDeets[4].logosAndIcons[0].src}" alt="${projectDeets[4].logosAndIcons[0].alt}"/>
              <img style="width: 25%" src="${projectDeets[4].logosAndIcons[1].src}" alt="${projectDeets[4].logosAndIcons[1].alt}"/>
              <img style="width: 25%" src="${projectDeets[4].logosAndIcons[2].src}" alt="${projectDeets[4].logosAndIcons[2].alt}"/>
              <img style="width: 25%" src="${projectDeets[4].logosAndIcons[3].src}" alt="${projectDeets[4].logosAndIcons[3].alt}"/>
            </div>
            <div class="moreimages">
              <img src="${projectDeets[4].moreimages[0]}"/>
              <img src="${projectDeets[4].moreimages[1]}"/>
            </div>
            <div class="phonemockups">
              <img src="${projectDeets[4].phoneimages[0]}"/>
              <img src="${projectDeets[4].phoneimages[1]}"/>
              <img src="${projectDeets[4].phoneimages[2]}"/>
              <img src="${projectDeets[4].phoneimages[3]}"/>
            </div>
          </div>
        </div>
      </div>`
  };

const dalevilleLibrary = {
	template: `<div class="projectdetails" style="${projectDeets[5].backgroundColor}">
        <div class="imageAndDeets">
        <div class="backtowork">
          <router-link to="/mywork">
            <img src="./images/close.svg"/>
          </router-link>
        </div>
        <div class="firstimagewrapper">
        <div class="back">
          <router-link to="${thumbnails[4].path}">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="firstlinksandimagewrapper">
          <h2>${projectDeets[5].name}</h2>
          <div class="livelinks">
            <a href="${projectDeets[5].link}" target="_blank">Live Link</a>
          </div>
        <div class="firstprojectimage">
          <img src="${projectDeets[5].image}" style="${projectDeets[5].border}"/>
        </div>
        </div>
        <div class="next">
          <router-link to="${thumbnails[0].path}">
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="introparagraph" style="width: 100%">
              <h2>${projectDeets[5].heading}</h2>
              <pre>${projectDeets[5].intro}</pre>
            </div>
            </div>
          </div>
          <div class="moreprojectimages">
            <div class="moreimages">
              <img src="${projectDeets[5].moreimages[0]}" style="border: 1px solid LightGray"/>
              <img src="${projectDeets[5].moreimages[1]}" style="border: 1px solid LightGray"/>
            </div>
            <div class="phonemockups">
              <img src="${projectDeets[5].phoneimages[0]}"/>
              <img src="${projectDeets[5].phoneimages[1]}"/>
              <img src="${projectDeets[5].phoneimages[2]}"/>
              <img src="${projectDeets[5].phoneimages[3]}"/>
            </div>
          </div>
        </div>
      </div>`
  };

const aboutMe = {
	template: `<div id="about" class="row">
		<div class="aboutwrapper">
			<h1>About me</h1>
			<p>I am driven by challenge, problem-solving, and collaboration. 
			Which is why I am drawn to a career in web development and web design. 
			My goal is to be part of a team that contributes to the whole life 
			cycle of projects from conceptualization to deployment.</p>
			<p>While working at Yellow Pages Canada I have made it my 
			mission to always be willing and able to take on any task. 
			This has taken me to my current position as senior web designer. 
			As a senior web designer I collaborate with colleagues on best design 
			practices to improve quality and productivity. Additionally, I 
			design websites used internally and by sales to educate 
			themselves and our clients. I also train new and current 
			employees on our processes in the web department at 
			Yellow Pages Canada.</p>
			<p>In my free time, you can find me outdoors. I love rock climbing, 
			hiking, and just spending time outside. One of my favorite things to 
			do is just to sit and watch nature. If you want to see what I have been 
			up to recently, check out my Instagram feed below.</p>
			<iframe src="//lightwidget.com/widgets/c7c22a78bfaa5896b49dca025521a739.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
		</div>
	</div>`
}

function submitForm(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  const formResponse = document.getElementById('js-form-response');
  const data = {};
  const formElements = Array.from(form);
  formElements.map(input => (data[input.name] = input.value));
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send(JSON.stringify(data));
  xhr.onloadend = response => {
      if (response.target.status === 200) {
        form.reset();
        formResponse.style.display = "inline-block";
        formResponse.innerHTML = `Thanks for the message!`;
      } else {
        formResponse.style.display = "inline-block";
        formResponse.innerHTML = `Something went wrong`;
        console.error(JSON.parse(response.target.response).message);
      }
    };
}

const contact = {
	template: `<div id="contact" class="row">
		<div class="contactwrapper">
			<h1>contact me</h1>
			<p>I'm pretty easy to get a hold of. If you are interested in working together or have any questions send me an email at <a href="mailto:catherineannlynn@gmail.com">catherineannlynn@gmail.com</a></p>
      <form action="https://x9goou2wye.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer" onsubmit="submitForm(event)" method="POST">
        <div class="inputwrapper">
        <label>Name<input type="text" name="name" required></label>
        <label>Email<input type="email" name="reply_to" required></label>
        <label>Message:<textarea name="message" required></textarea></label>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p id="js-form-response"></p>
      </div>
	</div>`
}

let skills = [
      {
        // icon: './images/developer-icon.svg',
        name: 'developer',
        deets: 'I get a thrill from bringing ideas to life through code. Whatever the challenge is I know I can find a solution through code.'
      },
      {
        // icon: './images/designer-icon.svg',
        name: 'designer',
        deets: 'I have always had an eye for what looks good. Making things that look great and are user-friendly is important for the overall experience.'
      },
      {
        // icon: './images/problemsolver-icon.svg',
        name: 'problem solver',
        deets: 'Discovering solutions to problems through trial and error and collaboration goes hand-in-hand with design and development, which is why I\'m drawn to both.'
      }
    ]

const home = {
  template: `<div>
  <div id="home">
      <div class="homewrapper">
        <div class="herosection">
          <div class="herocontainer">
            <img src="./images/white-logo.svg" class="herologo"/>
            <h1><span>web designer</span> + <span>developer</span> fueled by <span>challenge, problem&#8209;solving</span> +&nbsp;<span>collaboration</span></h1>
          </div>
        </div>
      </div>
      <div class="downarrow" onclick="scrollDown()">
        <img src="./images/downarrow.svg" class="downarrowimage"/>
      </div>
    </div>
    <div id="recentwork" class="row">
      <div class="recentworkwrapper">
        <div class="recentworkintro">
          <div>
            <h2>featured work</h2>
            <p>Check out what I've built lately below. Interested in seeing other examples? Click view more to see more.</p>
          </div>
        </div>
        <div class="recentworkimageswrapper">
        <router-link class="recentworkimages projecthover" style="background-image: url(${thumbnails[1].image})" to="${thumbnails[1].path}">
          <div class="projectinfo">
            <div class="projectname">${thumbnails[1].name}</div>
            <div class="projectsub">${thumbnails[1].subtitle}</div>
          </div>
        </router-link>
        <router-link class="recentworkimages projecthover" style="background-image: url(${thumbnails[0].image})" to="${thumbnails[1].path}">
          <div class="projectinfo">
            <div class="projectname">${thumbnails[0].name}</div>
            <div class="projectsub">${thumbnails[0].subtitle}</div>
          </div>
        </router-link>
        <router-link class="recentworkimages projecthover" style="background-image: url(${thumbnails[2].image})" to="${thumbnails[1].path}">
          <div class="projectinfo">
            <div class="projectname">${thumbnails[2].name}</div>
            <div class="projectsub">${thumbnails[2].subtitle}</div>
          </div>
        </router-link>
      </div>
      <router-link class="viewmore" to="/mywork">view more</router-link>
      </div>
    </div>
    <div id="skills" class="row">
      <div class="skillswrapper">
        <div>
          <h2>catherine lynn is a</h2>
        </div>
        <div class="skillwrapper">
          <div class="skill">
            <h3>${skills[0].name}</h3>
            <p>${skills[0].deets}</p>
          </div>
          <div class="skill">
            <h3>${skills[1].name}</h3>
            <p>${skills[1].deets}</p>
          </div>
          <div class="skill">
            <h3>${skills[2].name}</h3>
            <p>${skills[2].deets}</p>
          </div>
        </div>
          <router-link class="viewmore" to="/about">learn more</router-link>
      </div>
    </div>
    </div>`
}


const routes = [
  {
    path: '/',
    component: home,

  },
	{
		path: '/mywork',
		component: projects
	},
	{
		path: thumbnails[0].path,
		component: smoothiesocial
	},
	{
		path: thumbnails[1].path,
		component: hikingAnAdvenutre
	},
	{
		path: thumbnails[2].path,
		component: petPlusVet
	},
	{
		path: thumbnails[3].path,
		component: backcountryQuiz
	},
	{
		path: thumbnails[4].path,
		component: barsteelCorp
	},
	{
		path: thumbnails[5].path,
		component: dalevilleLibrary
	},
	{
		path: '/about',
		component: aboutMe
	},
	{
		path: '/contact',
		component: contact
	}
];

const router = new VueRouter({
	routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

const iconClassAndSize = 'fa-lg icon'

let app = new Vue({
	router,
	name: 'My Portfolio',
	el: '#app',
	data: {
		recentWorks: [
			{
				name: thumbnails[1].name,
				path: thumbnails[1].path,
				image: thumbnails[1].image,
				subtitle: thumbnails[1].subtitle
			},
			{
				name: thumbnails[0].name,
				path: thumbnails[0].path,
				image: thumbnails[0].image,
				subtitle: thumbnails[0].subtitle
			},
			{
				name: thumbnails[2].name,
				path: thumbnails[2].path,
				image: thumbnails[2].image,
				subtitle: thumbnails[2].subtitle
			}
		],
		icons: [
      {
        icon: 'fab fa-dribbble ' + iconClassAndSize,
        link: 'https://dribbble.com/CatherineLynn',
      },
			{
				icon: 'fab fa-linkedin-in ' + iconClassAndSize,
				link: 'http://www.linkedin.com/in/CatherineAnnLynn',
			},
			{
				icon: 'fab fa-twitter ' + iconClassAndSize,
				link: 'https://twitter.com/CatherineALynn',
			},
      {
        icon: 'fab fa-github ' + iconClassAndSize,
        link: 'https://github.com/Rigby33'
      }
		],
		skills: [
			{
				// icon: './images/developer-icon.svg',
				name: 'developer',
				deets: 'I get a thrill from bringing ideas to life through code. Whatever the challenge is I know I can find a solution through code.'
			},
			{
				// icon: './images/designer-icon.svg',
				name: 'designer',
				deets: 'I have always had an eye for what looks good. Making things that look great and are user-friendly is important for the overall experience.'
			},
			{
				// icon: './images/problemsolver-icon.svg',
				name: 'problem solver',
				deets: 'Discovering solutions to problems through trial and error and collaboration goes hand-in-hand with design and development, which is why I\'m drawn to both.'
			}
		],
    projects: [
      {
        name: 'Hiking an Adventure',
        path: '/mywork/hikinganadventure',
        image: '../images/hikingadventure-home.jpg',
        subtitle: 'React.js + JavaScript + Node.js + HTML + CSS'
      },
      {
        name: 'SmoothieSocial',
        path: '/mywork/smoothiesocial',
        image: '../images/smoothiesocial-home.jpg',
        subtitle: 'Node.js + JavaScript + JQuery + HTML + CSS'
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
    ]
	}
}).$mount('#app'); 

// window.isMobile = function() {
// var check = false;
// (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
// return check; }

// if(!isMobile()) {

// let followX = 0;
// let followY = 0;
// let x = 0;
// let y = 0;
// let friction = 1/50;

// const home = document.getElementById('home');

// function moveBackground() {
// 	x += (followX - x) * friction;
// 	y += (followY - y) * friction;

// 	translate = `translate(${x}px, ${y}px) scale(1.1)`;
// 	if(home) {
// 		let background = document.getElementsByClassName('homewrapper')[0];
// 		background.setAttribute('style', `transform: ${translate}`);
// 	}

// 	window.requestAnimationFrame(moveBackground);
// }
// if(home) {
// 	home.addEventListener('mousemove', (e) => {
// 		let mouseX = Math.max(-100, Math.min(100, window.innerWidth/2 - e.clientX));
// 		let mouseY = Math.max(-100, Math.min(100, window.innerHeight/2 - e.clientY));
// 		followX = (20 * mouseX)/100;
// 		followY = (20 * mouseY)/100;
// 	});
// }

// function moveLogo() {
// 	x += (followX - x) * friction;
// 	y += (followY - y) * friction;

// 	translate = `translate(${x}px, ${y}px)`;

// 	let background = document.getElementsByClassName('herologo')[0];
// 	background.setAttribute('style', `transform: ${translate}`);

// 	window.requestAnimationFrame(moveLogo);
// }
// if(home) {
// 	moveBackground();
// 	moveLogo();
// }
// }


function scrollDown() {
	document.getElementById('recentwork').scrollIntoView({behavior: 'smooth', block: 'start'});
}

// document.getElementById('myworklink').onclick = () => {
//   document.getElementById('mywork').scrollIntoView({behavior: 'smooth', block: 'start'});
// }

let lastScrollTop = 0;   

window.addEventListener('scroll', () => {
  const header = document.getElementsByTagName('header')[0];
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if(st > lastScrollTop) {
    header.style.top = '-100%';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = st;
}, false);