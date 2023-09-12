const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const images = document.querySelectorAll('.image');
const navigation = document.querySelector('nav');
const logo = document.querySelector('.logo');
const remoteEl = document.querySelector('.remote');
const remoteEl2 = document.querySelector('.remote2');
const button1 = document.querySelector('.btn1');
const jobListEl = document.querySelector('.job-list')

const ListOfJobs = [
    {
        id: '1',
        logoImgSrc: './images/mtn.png" alt="img',
        title: 'Full Stack Web Developer',
        company: 'MTN',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['FRONTEND', 'BACKEND', 'DESIGNS'],
        salary: 'YEARLY: $250,000-400,000',
        category: 'SOFTWARE DEVELOPMENT',
    },

    {
        id: '2',
        logoImgSrc: './images/Orange_logo.png" alt="img',
        title: 'Senior Data Scientist',
        company: 'Orange',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['SQL', 'Artificial INtelligence'],
        salary: 'YEARLY: $350,000-400,000',
        category: 'DATA SCIENCE'
    },

    {
        id: '3',
        logoImgSrc: './images/ilab.jpeg" alt="img',
        title: 'Staff Software Engineer',
        company: 'iLab Liberia',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['NODE.JS', 'JAVASCRIPT'],
        salary: 'YEARLY: $164,000-220,375',
        category: 'SOFTWARE DEVELOPMENT'
    },

    {
        id: '4',
        logoImgSrc: './images/mtn.png" alt="img',
        title: 'Senior iOS Engineer',
        company: 'Lonestar Cell MTN',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['BLOCKCHAIN', 'PROGRAMMING'],
        salary: 'YEARLY: $183,500-275,300',
        category: 'CYBER SECURITY'
    },

    {
        id: '5',
        logoImgSrc: './images/mtn.png" alt="img',
        title: 'Senior Manager, IT',
        company: 'Innovate Liberia',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['SHELL SCRIPTING', 'WEB SECURITY'],
        salary: 'YEARLY: $250,000-300,000',
        category: 'DATA SCIENCE'
    },

    {
        id: '6',
        logoImgSrc: './images/mtn.png" alt="img',
        title: 'Network Project Manager',
        company: 'MTN',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ["CCNP", "Cisco'S CCNA"],
        salary: 'YEARLY: $200,000-300,000',
        category: 'NETWORK ENGINEERING'
    },

    {
        id: '7',
        logoImgSrc: './images/smart.jpeg" alt="img',
        title: 'Network Consultant',
        company: 'Smart Liberia',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['BSc', 'CS', 'IT'],
        salary: 'YEARLY: $350,000-400,000',
        category: 'NETWORK ENGINEERING'
    },

    {
        id: '8',
        logoImgSrc: './images/tech lib.png" alt="img',
        title: 'Senior iOS Engineer',
        company: 'Tech 231-Liberia Ltd',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['FRONTEND', 'BACKEND', 'DESIGNS'],
        salary: 'YEARLY: $350,000-400,000',
        category: 'SOFTWARE DEVELOPMENT'
    },

    {
        id: '9',
        logoImgSrc: './images/kwagei.png" alt="img',
        title: 'Cybersecurity Analyst',
        company: 'Kwagei Innovation Training',
        location: 'Liberia',
        locationImgSrc: './images/united-lib.svg',
        ratings: ['./images/check.svg', './images/hot.svg'],
        require: ['Firewalls', 'Python'],
        salary: 'YEARLY: $450,000-500,000',
        category: 'CYBER SECURITY'
    }
]

function displayListOfJobs() {
    jobListEl.innerHTML = '';

    ListOfJobs.forEach((ListOfJob) => {
        const logoImg = ListOfJob.logoImgSrc ? `<img src = "${ListOfJob.logoImgSrc}" alt="logo">` : '';
        const locationImg = ListOfJob.locationImgSrc ? `<img src="${ListOfJob.locationImgSrc}" alt="location">` : '';
        const ratingsImgs = ListOfJob.ratings.map((ratingImg) => `<img src="${ratingImg}" alt="rating">`).join('');
        const requirements = ListOfJob.require.map((requirement) => `<b>${requirement}</b>`).join('');

        jobListEl.innerHTML += `<div class="job1">
        <div class="holder">
            <div class="img">
                ${logoImg}
            </div>
            <div class="info">
                <h1>${ListOfJob.title}</h1>
                <p>${ListOfJob.company}</p>
                <div class="location">
                    ${locationImg}
                    <strong>${ListOfJob.location}</strong>
                </div>
            </div>
        </div>
        <div class="ratings">
            ${ratingsImgs}
        </div>
        <div class="require">
            ${requirements}
        </div>
        <div class="role-salary">
            <b>${ListOfJob.category}</b>
            <p>${ListOfJob.salary}</p>
        </div>
    </div>`
    })
}
displayListOfJobs();

jobListEl.style.display = 'grid';
jobListEl.style.gridTemplateColumns = '1fr 1fr 1fr';
jobListEl.style.gap = '9px';
// jobListEl.style.gridColumnGap = '0';
// jobListEl.style.gridRowGap = '0';

openMenu.addEventListener('click', function() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0%';
})

closeMenu.addEventListener('click', function() {
    mainMenu.style.top = '-100%'; 
})


// const images = document.querySelectorAll('.image');
images[0].classList.remove('hidden');

let index = 0;

setInterval(function() {
    images[index].classList.add('hidden')

    index++;

    if(index === images.length) {
        index = 0;
    }

    images[index].classList.remove('hidden')
}, 7000)

window.addEventListener('scroll', function() {
    if(window.scrollY > 100) {
        navigation.style.backgroundColor = 'white';
        logo.style.color = '#212428';
        remoteEl.style.color = '#212428';
        remoteEl2.style.color = '#212428';

        button1.style.backgroundColor = 'black';

        // button1.addEventListener('mouseenter', function() {
        //     button1.style.color = 'white';
        // })
        // remoteEl.addEventListener('mouseenter', function() {
        //     remoteEl.style.color = '#8CA4D5';
        // })

        // remoteEl.addEventListener('mouseleave', function() {
        //     remoteEl.style.color = 'white';
        // })

        // remoteEl2.addEventListener('mouseenter', function() {
        //     remoteEl2.style.color = '#8CA4D5';
        // })

        // remoteEl2.addEventListener('mouseleave', function() {
        //     remoteEl2.style.color = 'white';
        // })
    }

    else {
        navigation.style.backgroundColor = '#1A42BC';
        logo.style.color = 'white';
        remoteEl.style.color = 'white';
        remoteEl2.style.color = 'white';

        remoteEl.addEventListener('mouseenter', function() {
            remoteEl.style.color = '#8CA4D5';
        })

        remoteEl.addEventListener('mouseleave', function() {
            remoteEl.style.color = 'white';
        })

        remoteEl2.addEventListener('mouseenter', function() {
            remoteEl2.style.color = '#8CA4D5';
        })

        remoteEl2.addEventListener('mouseleave', function() {
            remoteEl2.style.color = 'white';
        })

        button1.style.backgroundColor = 'transparent';
        button1.style.color = 'white';

        button1.addEventListener('mouseenter', function() {
            button1.style.backgroundColor = 'white';
            button1.style.color = 'black';
        })

    }
})

