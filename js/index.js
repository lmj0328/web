
let personalData = {};
$.getJSON("data/data.json", function(json) {
    personalData = json;
     // this will show the info it in firebug console
}).then(function() {
    renderPage(); 
});

function renderPage() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 50 || $('#home-page').css('display') === 'none') {
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

    renderHomePage();

    $('#filters li.filter').click(function() {
        $(".filter").removeClass("current");
        $(this).addClass("current");
        
        // filterPortfolio
        var filter = $(this).attr('value');
        filterPortfolio(filter);
    });

    // when window scroll, switch navigation bar stylesheet

    var scroll = window.requestAnimationFrame || function(callback) {
        window.setTimeout(callback,1000/60)
    };

    let revealOnScroll = document.querySelectorAll('.revealOnScroll');
    function checkifInView() {
        revealOnScroll.forEach((element) => {
            if(isElementInViewport(element)) {
                $(element).addClass('current');
                $(element).addClass('revealed');
            } else {
                $(element).removeClass('current');
            }
        })
        scroll(checkifInView);
    }

    checkifInView();
}

    /* Render Page */
function renderHomePage() {
    renderSkillSet();
    renderEducationHistory();
    renderCourse();
    renderExperience();
    renderPortfolio();
    $('#about-me-page').hide();
    $('#portfolio-page').hide();
    $('#about-me-button').click(() => {
        $(".nav-item").removeClass("active");
        $('#about-me-button').addClass('active');
        renderAboutMePage();
    })

    $('#portfolio-button').click(() => {
        $(".nav-item").removeClass("active");
        $('#portfolio-button').addClass('active');
        renderPortfolioPage();
    })
}

function renderAboutMePage() {
    $('#home-page').hide();
    $('#about-me-page').show();
    $('#portfolio-page').hide();
    if($('#home-page').css('display') === 'none') {
        $("#navigation-bar nav").addClass("scrolled");
        $("#navigation-bar .navbar-brand span").addClass("scrolled");
        $("#navigation-bar .navbar-nav li a").addClass("scrolled");
        $("#navigation-bar .navbar-nav i").addClass("scrolled");    
    }
}

function renderPortfolioPage() {
    $('#home-page').hide();
    $('#about-me-page').hide();
    $('#portfolio-page').show();

    if($('#home-page').css('display') === 'none') {
        $("#navigation-bar nav").addClass("scrolled");
        $("#navigation-bar .navbar-brand span").addClass("scrolled");
        $("#navigation-bar .navbar-nav li a").addClass("scrolled");
        $("#navigation-bar .navbar-nav i").addClass("scrolled");    
    }
}



/* sub function */
function renderSkillSet() {
    let skillCardContainer = $('#skill-card-container');
    const skillSet = personalData["SkillSet"];
    skillSet.forEach((skillCard) => {
        let container = $('<div class="skill-card revealOnScroll">')
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
        let container = $('<div class="education-card revealOnScroll">');
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
            $(courseCardContainer).append('<span class="revealOnScroll ' + course.class + '">' + classes + '</span>');
        });
        let courseColorScheme = $('#course-color-scheme-container');
        let scheme = $('<div><div class="course-color-block" style="background-color:'+ course.color + ';"></div><span>' + course.type + '</span></div>');
        $(courseColorScheme).append(scheme);
    })
}

function renderExperience() {
    let proContainer = $('#pro-card-container');
    let experiences = personalData["ProfessionalExperience"];
    let colorContainer = $('#pro-color-scheme-container');
    let colors = [["#748392", "Internship"], ["#6D9599", "Volunteer"], ["#6895B3", "School Activity"]];
    colors.forEach((color) => {
        colorContainer.append('<div class="pro-color-block-card"><div class="pro-color-block" style="background-color:'+ color[0] + ';"></div><span>' + color[1]+ '</span></div>')
    })
    experiences.forEach((experience) => {
        let card = $('<div class="pro-card revealOnScroll" style="border-left: 1vw solid ' + experience["categoryC"] + ';">')
        if(experience["link"] !== "") {
            let extlink = $('<a href="' + experience["link"] + '"><div class="pro-external-icon"><span class="icon-attachment" aria-hidden="true"></span></div></a>');
            $(card).append(extlink);
        }
        let cTitle = $('<h3>' + experience["companyN"] + ' | ' + experience["role"] + '</h3>');
        let dateLocation = $('<h4>' + experience["date"] + '     ' + experience["location"] + '</h4>');
        let description = $('<ul></ul>');
        experience["description"].forEach((des) => {
            $(description).append('<li>' + des + '</li>');
        });
        $(card).append(cTitle);
        $(card).append(dateLocation);
        $(card).append(description);
        $(proContainer).append(card);
    })
}

function renderPortfolio() {
    let portfolio = $('#p-grid');
    let projects = personalData["PastProjects"];
    projects.forEach((project) => {
        let categories = ""
        project["categories"].forEach((category) => {
            if(categories === "") {
                categories += category;
            } else {
                categories = categories + " " + category
            }
        })
        let projectContainer = $('<li class="p-item" data-category="' + categories + '"></li>');
        let projectContent = $('<a href="' + project["link"] + '"></a>');
        let imgContainer = $('<div class="p-image"><img src="' +  project["img"] + '" alt="' + project["name"] + '"/></div>')
        let captionContainer =$(`<div class="p-caption">
                                    <div class="p-date">` + project["date"] + `</div>
                                    <h3 class="p-title">` + project["name"] + `</h3>
                                    <div class="p-desc">` + project["sDescription"] + `</div>
                                    <div class="p-role">` + project["role"] + `</div>
                                    <div class="p-browse"><a href="` + project["link"] + `'">>>> See More</a></div>'
                                </div`);
        $(projectContainer).append(imgContainer);
        $(projectContainer).append(captionContainer);
        $(projectContainer).append(projectContent);
        $(portfolio).append(projectContainer);
    })
}

function filterPortfolio(value) {
    var list = $("#p-grid .p-item");
    $(list).hide();
    if (value == "all") {
        $("#p-grid").find(".p-item").each(function (i) {
            $(this).delay(200).fadeIn("fast");
        });
    } else {
        $("#p-grid").find("li[data-category*=" + value + "]").each(function (i) {
            $(this).delay(200).fadeIn("fast");
        });
    }
}


function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
    (rect.top <= 0
        && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
