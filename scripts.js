let projects = {template: `<div class="row" id="mywork">
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
				</div>`};

const smoothiesocial = {
	template: `<div class="projectdetails" style="${projectDeets[0].backgroundColor}">
        <div class="imageAndDeets">
          <h2>${projectDeets[0].name}</h2>
            <a href="${projectDeets[0].link}" target="_blank">Live Link</a>
        <div class="firstprojectimage">
          <img src="${projectDeets[0].image}" style="${projectDeets[0].border}"/>
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
          <h2>${projectDeets[1].name}</h2>
            <a href="${projectDeets[1].link}" target="_blank">Live Link</a>
        <div class="firstprojectimage">
          <img src="${projectDeets[1].image}" style="${projectDeets[1].border}"/>
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
              <img src="${projectDeets[0].logosAndIcons[0].src}" alt="${projectDeets[0].logosAndIcons[0].alt}"/>
              <img src="${projectDeets[0].logosAndIcons[1].src}" alt="${projectDeets[0].logosAndIcons[1].alt}"/>
              <img src="${projectDeets[0].logosAndIcons[2].src}" alt="${projectDeets[0].logosAndIcons[2].alt}"/>
              <img src="${projectDeets[0].logosAndIcons[3].src}" alt="${projectDeets[0].logosAndIcons[3].alt}"/>
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
          <h2>${projectDeets[2].name}</h2>
            <a href="${projectDeets[2].link}" target="_blank">Live Link</a>
        <div class="firstprojectimage">
          <img src="${projectDeets[2].image}" style="${projectDeets[2].border}"/>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[2].frontEnd}
              ${projectDeets[2].backEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[2].heading}</h2>
              <pre>${projectDeets[2].intro}</pre>
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
          <h2>${projectDeets[3].name}</h2>
            <a href="${projectDeets[3].link}" target="_blank">Live Link</a>
        <div class="firstprojectimage">
          <img src="${projectDeets[3].image}" style="${projectDeets[3].border}"/>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[3].frontEnd}
              ${projectDeets[3].backEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[3].heading}</h2>
              <pre>${projectDeets[3].intro}</pre>
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
          <h2>${projectDeets[4].name}</h2>
            <a href="${projectDeets[4].link}" target="_blank">Live Link</a>
        <div class="firstprojectimage">
          <img src="${projectDeets[4].image}" style="${projectDeets[4].border}"/>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[4].frontEnd}
              ${projectDeets[4].backEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[4].heading}</h2>
              <pre>${projectDeets[4].intro}</pre>
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
          <h2>${projectDeets[5].name}</h2>
            <a href="${projectDeets[5].link}" target="_blank">Live Link</a>
        <div class="firstprojectimage">
          <img src="${projectDeets[5].image}" style="${projectDeets[5].border}"/>
        </div>
          <div class="introparagraphwrapper">
            <div class="introwrapperwrapper">
            <div class="sidebar">
              ${projectDeets[5].frontEnd}
              ${projectDeets[5].backEnd}
            </div>
            <div class="introparagraph">
              <h2>${projectDeets[5].heading}</h2>
              <pre>${projectDeets[5].intro}</pre>
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
              <img src="${projectDeets[5].moreimages[0]}"/>
              <img src="${projectDeets[5].moreimages[1]}"/>
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
			</p>I am driven by challenge, problem solving, and collaboration. 
			Which is why I am drawn to a career in web development and web design. 
			My goal is to be part of a team that contributes to the whole life 
			cycle of projects from conceptualization to deployment.</p>
			<p>While working at Yellow Pages Canada I have made it my 
			mission to always be willing and able to take on any task. 
			This has taken me to my current position as senior web designer. 
			As senior web designer I collaborate with colleges on best design 
			practices to improve quality and productivity. Additionally I 
			design websites used internally and by sales to educate 
			themselves and our clients. I also train new and current 
			employees on our processes in the web department at 
			Yellow Pages Canada.</p>
			<p>In my free time you can find outdoors. I love rock climbing, 
			hiking, and just spending time outside. One of my favorite things to 
			do is just to sit and watch nature. If you want to see what I have been 
			up to recently check out my instagram feed below.</p>
			<iframe src="//lightwidget.com/widgets/c7c22a78bfaa5896b49dca025521a739.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
		</div>
	</div>`
}

const contact = {
	template: `<div class="row">
		<div class="contactwrapper">
			<h1>contact me</h1>
			<p>I'm pretty easy to get a hold of. If you are interested in working together or have any questions you can send a message through the contact form below or just send me an email at <a href="mailto:catherineannlynn@gmail.com">catherineannlynn@gmail.com</a></p>
			<form method="post" action="./index.php">
        
    <label>Name</label>
    <input name="name" placeholder="Type Here">
            
    <label>Email</label>
    <input name="email" type="email" placeholder="Type Here">
            
    <label>Message</label>
    <textarea name="message" placeholder="Type Here"></textarea>
            
    <input id="submit" name="submit" type="submit" value="Submit">
        
</form>
		</div>
	</div>`
}

const routes = [
	{
		path: './mywork',
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
		path: './about',
		component: aboutMe
	},
	{
		path: './contact',
		component: contact
	}
];

const router = new VueRouter({
  mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
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
				icon: 'fab fa-linkedin-in ' + iconClassAndSize,
				link: 'http://www.linkedin.com/in/CatherineAnnLynn',
			},
			{
				icon: 'fab fa-twitter ' + iconClassAndSize,
				link: 'https://twitter.com/CatherineALynn',
			},
			{
				icon: 'fab fa-instagram ' + iconClassAndSize,
				link: 'https://www.instagram.com/catherine_annie/',
			}
		],
		skills: [
			{
				icon: './images/developer-icon.svg',
				name: 'developer',
				deets: 'i get a thrill from bringing ideas to live through code. whatever the challenge is i know i can find a solution through code.'
			},
			{
				icon: './images/designer-icon.svg',
				name: 'designer',
				deets: 'i have always had an eye for what looks good. making things that look great and are user friendly is important for the overall experience.'
			},
			{
				icon: './images/problemsolver-icon.svg',
				name: 'problem solver',
				deets: 'disovering solutions to problems through trial and error and collabration goes hand-in-hand with design and development. which is why i\'m drawn to both'
			}
		]
	}
}); 

let followX = 0;
let followY = 0;
let x = 0;
let y = 0;
let friction = 1/50;

const home = document.getElementById('home');

function moveBackground() {
	x += (followX - x) * friction;
	y += (followY - y) * friction;

	translate = `translate(${x}px, ${y}px) scale(1.1)`;
	if(home) {
		let background = document.getElementsByClassName('homewrapper')[0];
		background.setAttribute('style', `transform: ${translate}`);
	}

	window.requestAnimationFrame(moveBackground);
}
if(home) {
	home.addEventListener('mousemove', (e) => {
		let mouseX = Math.max(-100, Math.min(100, window.innerWidth/2 - e.clientX));
		let mouseY = Math.max(-100, Math.min(100, window.innerHeight/2 - e.clientY));
		followX = (20 * mouseX)/100;
		followY = (20 * mouseY)/100;
	});
}

function moveLogo() {
	x += (followX - x) * friction;
	y += (followY - y) * friction;

	translate = `translate(${x}px, ${y}px)`;

	let background = document.getElementsByClassName('herologo')[0];
	background.setAttribute('style', `transform: ${translate}`);

	window.requestAnimationFrame(moveLogo);
}
if(home) {
	moveBackground();
	moveLogo();
}

let downArrow = document.getElementsByClassName('downarrow')[0];
downArrow.onclick = () => {
	document.getElementById('recentwork').scrollIntoView({behavior: 'smooth', block: 'start'});
}