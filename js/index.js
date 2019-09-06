const personalData = 
{
    "ProfessionalExperience": [
        {
            "Name": "Supported Living Services",
            "details": "FCSN Supported Living Services (SLS) Program assists individual participants to live on their own with support. 24/7 services can be provided if needed and approved by the regional center.",
            "img": "img/photo-3.jpg",
            "imglg": "img/photo-3-xl.png",
            "description": "FCSN Supported Living Services (SLS) Program assists individual participants to live on their own with support. 24/7 services can be provided if needed and approved by the regional center.",
            "longDescription": "FCSN Supported Living Services (SLS) Program assists individual participants to live on their own with support. 24/7 services can be provided if needed and approved by the regional center.",
            "trainingAreas": [
                "Pre-Vocational Training: FCSN ADP offers prevocational training for clients to increase job readiness through prevocational training, soft skills building, and various volunteer opportunities in the community.",
                "Healthy Lifestyle & Independent Living Skills: FCSN ADP emphasizes on healthy lifestyle practices and living skill training to promote optimal health and grow independence.",
                "Life Enrichment: FCSN ADP empowers participants to explore interests, increase creativity, develop self-confidence and discover potential through Music, Visual Arts, Drama, Dance, and Science.",
                "Community Integration: Participants are assisted in exploring, accessing local resources, integrating into community, and practicing community safety.",
                "Communication & Socialization: Through training and support, participants work on social skills, build friendships, sharpen communication skills, and learn effective conflict resolution."
            ],
            "organizer": "FCSN",
            "publisher":"Organizer of Supported Living Services",
            "fav": false,
            "link": "#",
            "QAQuestions": {
                "What is the price for this program?":"Our price varies depend on how many parts of program you would like to choose. Plese state the specific program in your contact email.",
                "Who should I contact if I would like to volunteer for this program?":"Please Email the contact for your corresponding location. We would direct you from there."
            }
        }
       
    ],
    "PersonalProjects": [
        {
            "month": "FEB",
            "date": "14",
            "year": "2019",
            "eventTitle":"Ceramic Class with Mrs.Tsu",
            "eventDescription":"Join Mrs.Tsu for our lovely ceramic class",
            "location": "Convention Center Theater, San Jose, CA",
            "dmyTime": "Wed, Feb 14, 2019 11:00am",
            "organizer": "FCSN",
            "img": "img/event-ceramic.jpg"
        }
    ],
    "VolunteerExperience": [
        {
            "orgName": "ROOTS Young Adult Shelter",
            "title": ["Dinner Meal Team Member"],
            "startDate": "2018 Jan",
            "endDate": "2018 Jun",
            "link": "http://www.rootsinfo.org/",
            "details": ["Organize, prepare, and serve food for homeless people around U District twice a week."]
        },
        {
            "orgName": "AI NEXTCon",
            "title": ["Technology Support", "Front Desk Communicator", "Section Host"],
            "startDate": "2018 Jan",
            "endDate": "2018 Jan",
            "link": "http://aisea18.xnextcon.com/",
            "details": ["Provide necessary technology support", "Guide and communicate with guests", "Host section"]
        },
        {
            "orgName": "Rick's Cafe - UW House and Food Services",
            "title": ["Student Volunteer"],
            "startDate": "2016 Dec",
            "endDate": "2017 Jun",
            "link": "https://rickscafeuw.wordpress.com/",
            "details": ["Make and sale ice cream and shakes to students at low price"]
        },
        {
            "orgName": "FCSN Friends of Children with Special Needs",
            "title": ["Chinese Class - Teacher", "Art Class - Assisstant", "Life Skill Class - Assisstant"],
            "startDate": "2013 Aug",
            "endDate": "2016 Jun",
            "link": "https://fcsn1996.org/",
            "details": ["Help special students learn skills in classroom settings.", "Comfort and guide them if needed."]
        }
    ], 
    "SkillSet": [
        {
            "title": "Web Development",
            "iconLink": "icon-browser",
            "skills": ["HTML5","CSS3", "Javascript", "React", "React Native", "jQuery", "ES7", "Node.js", "Bootstrap"]
        },
        {
            "title": "Data Science",
            "iconLink": "icon-bargraph",
            "skills": ["SQL", "R", "Python", "Data Visualization", "Critical Thinking", "Presentation", "SASS"]
        },
        {
            "title": "Psychology",
            "iconLink": "icon-heart",
            "skills": ["Developmental P.", "Cognitive P.", "Stress & Coping", "Research Statistics", "Learning and Memory", "UnderGrad. Teaching", "Psychobiology of Women"]
        },
        {
            "title": "Others",
            "iconLink": "icon-lightbulb",
            "skills":["Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Git", "PHP", "Firsbase Database", "Wordpress"]
        }
    ], 
    "Education": {
        "BNDS": {
            "name": "Beijing National Day School",
            "year": "2011 - 2013"
        },
        "SHS": {
            "name": "Saratoga High School",
            "year": "2013 - 2016"
        },
        "UW": {
            "name": "University of Washington",
            "year": "2016 - 2020",
            "major": ["Psychology, BS", "Computer and Information Science, BS"]
        }
    }
}



// render navigation bar item




// when window scroll, switch navigation bar stylesheet
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $("#navigation-bar nav").addClass("scrolled");
        $("#navigation-bar .navbar-brand span").addClass("scrolled");
        $("#navigation-bar .navbar-nav li a").addClass("scrolled");
        $("#navigation-bar .navbar-nav i").addClass("scrolled");    
    
    } else {
        $("#navigation-bar nav").removeClass("scrolled");
        $("#navigation-bar .navbar-brand span").removeClass("scrolled");
        $("#navigation-bar .navbar-nav li a").removeClass("scrolled");
        $("#navigation-bar .navbar-nav i").removeClass("scrolled");    
    } 
});
console.log(personalData["SkillSet"]);

renderSkillSet();

function renderSkillSet() {
    let skillCardContainer = $('#skill-card-container');
    const skillSet = personalData["SkillSet"];
    skillSet.forEach((skillCard) => {
        let container = $('<div class="skill-card">')
        let subContainer = $('<div></div>');
        let skillCategory = $(`<h3>` + skillCard.title + `</h3>`);
        let skillContainer = $('<div class="skill-container"></div>');
        skillCard.skills.forEach((skill) => {
            skillContainer.append('<span>' + skill + '</span>');
        });
        $(subContainer).append(skillCategory);
        $(subContainer).append(skillContainer);

        $(container).append(`<div class="icon-container"><span class="` + skillCard.iconLink + `"></span></div>`);
        $(container).append(subContainer);
        $(skillCardContainer).append(container);
    })
}

function renderEducationHistory() {

}
  


  