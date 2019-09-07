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
            "skills": ["HTML5","CSS3", "Javascript", "React", "React Native", "jQuery", "ES7", "Node.js", "Bootstrap", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"]
        },
        {
            "title": "Data Science",
            "iconLink": "icon-bargraph",
            "skills": ["SQL", "R", "Python", "Data Visualization", "Critical Thinking", "Presentation", "SASS", "Tableau"]
        },
        {
            "title": "Psychology",
            "iconLink": "icon-heart",
            "skills": ["Research Statistics", "UnderGrad. Teaching"]
        },
        {
            "title": "Others",
            "iconLink": "icon-lightbulb",
            "skills":["Adobe Premiere Pro", "Adobe After Effect", "Git", "PHP", "Firsbase Database", "Wordpress"]
        }
    ], 
    "Education": [
        {
            "name": "Beijing National Day School",
            "year": "2011 - 2013",
            "facts":["Teacher's Aide", "Qinglong Lake Park Volunteer Coordinator"],
            "graduated": "yes"
        },
        {
            "name": "Saratoga High School",
            "year": "2013 - 2016",
            "facts":["GPA: 3.74/4.0", "Multicultural Club - Activities Coordinator"],
            "graduated": "yes"
        },
        {
            "name": "University of Washington",
            "year": "2016 - 2021",
            "majors": ["Psychology, BS", "Informatics - Human Computer Interaction & Data Science Concentration, BS"],
            "facts": ["GPA: 3.78/4.0", "Annal Deans List 2016-2019"],
            "graduated": "no"
        }
    ],
    "Courses": [
        {
            "type":"Technical",
            "class":"technical",
            "color":"#748392",
            "classes":["Computer Programming I & II", "Web Programming", "Client-side Programming","Databases and Data Modeling","Data Structures and Algorithm", "Research Methods", "Project Management", "Infomation System Analysis & Design", "Population Health Informatics"]
        }, 
        {
            "type":"Design",
            "class":"design",
            "color":"#6895B3",
            "classes":["Mobile Application Design", "Visual Design", "Design Methods", "Thinking Time Design"]
        },
        {
            "type":"Psychology",
            "class":"psych",
            "color":"#6D9599",
            "classes":["BioPsychology", "Developmental Psychology", "Cognitive Psychology", "Stress & Coping", "Learning and Memory", "Psychobiology of Women", "Psychological Research", "Statistics in Psychology"]
        },
        {
            "type":"Other",
            "class":"",
            "color":"#11365C",
            "classes":["Social Problem", "Professional Writing", "Sculpture", "Ceramic", "Identity Development in Classroom", "Asian American History"]
        } 
    ]
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
renderEducationHistory();
renderCourse();

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
    });
}

function renderEducationHistory() {
    let educationCardContainer = $('#education-card-container');
    const educationHistory = personalData["Education"];
    educationHistory.forEach((education) => {
        let container = $('<div class="education-card">');
        // choose icon based on graduate status
        if(education["graduated"] === "yes") {
            $(container).append('<div class="education-icon"><i class="fas fa-graduation-cap"></i></div>');
        } else {
            $(container).append('<div class="education-icon"><i class="fas fa-university"></i></div>');
        }
        let subContainer = $('<div></div>');
        let name = $('<h3>' + education.name + '</h3>' + '<p class="education-year">' + education.year + '</p>');
        // render major content
        let majorContainer = $('<div class="major-container"></div>');
        if(education["majors"] !== undefined) {
            education["majors"].forEach((major) => {
                $(majorContainer).append('<p>' + major + '</p>');
            })
        } 
        // render fact content
        let factContainer = $('<div class="fact-container"></div>');
        let facts = ""
        education["facts"].forEach((fact) => {
            if (facts === "") {
                facts += fact
            } else {
                facts = facts +  ", " + fact;
            }
        });
        $(factContainer).append('<p>' + facts + '</p>');
        $(subContainer).append(name);
        $(subContainer).append(majorContainer);
        $(subContainer).append(factContainer);
        $(container).append(subContainer);
        $(educationCardContainer).prepend(container);
    });
}
 
function renderCourse() {
    let courseCardContainer = $('#course-card-container');
    const courseHistory = personalData["Courses"];
    courseHistory.forEach((course) => {
        course["classes"].forEach((classes) => {
            $(courseCardContainer).append('<span class="' + course.class + '">' + classes + '</span>');
        });
        let courseColorScheme = $('#course-color-scheme-container');
        let scheme = $('<div><div class="course-color-block" style="background-color:'+ course.color + ';"></div><span>' + course.type + '</span></div>');
        $(courseColorScheme).append(scheme);
    })
}


  