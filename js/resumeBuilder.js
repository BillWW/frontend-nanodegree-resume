var bio = {
    "name": "Bill Weidenborner",
    "role": "Scrum Master",
    "contacts": {
        "mobile": "+420 775 893 620",
        "email": "warnerwilliam@gmail.com",
        "github": "BillWW",
        "twitter": "@Bill_W_Prague",
        "location": "Prague"
    },
    "welcomeMessage": "\"Positive disruption, focused innovation, concrete results...\"",
    "skills": [
        "Writing", "Innovating", "Facilitating"
    ],
    "biopic": "images/Me2.jpg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

};

var work = {
    "jobs": [{
        "employer": "CA Technologies",
        "title": "Scrum Master",
        "location": "Prague, Czech Republic",
        "dates": "March 2015 - Present",
        "description": "Working as a facilitator and organizer for a crossfunctional large scale Agile scrum team.",
        "url": "http://www.ca.com/us/default.aspx"
    }, {
        "employer": "CA Technologies",
        "title": "Sr. Technical Writer",
        "location": "Prague, Czech Republic",
        "dates": "July 2014 - Present",
        "description": "Lead writer for a team creating world class product documentation for a SaaS Operating Platform.",
        "url": "http://www.ca.com/us/default.aspx"
    }, {
        "employer": "CA Technologies",
        "title": "Technical Writer",
        "location": "Prague, Czech Republic",
        "dates": "September 2011 - June 2014",
        "description": "Creating world class product documentation for a SaaS Operating Platform.",
        "url": "http://www.ca.com/us/default.aspx"
    }, {
        "employer": "Pokorny, Wagner & spol.",
        "title": "Legal Proofreader",
        "location": "Prague, Czech Republic",
        "dates": "September 2008 - July 2011",
        "description": "Proofreader of legal documentation presented before the European Commsion.",
        "url": "http://www.p-w.cz/en/"
    }, {
        "employer": "MEL Spracheninstitut",
        "title": "Business and Technical English Instructor",
        "location": "Nuremberg, Germany",
        "dates": "September 2006 - June 2008",
        "description": "Teacher of English in various companies and schools in the region of northern Baveria.",
        "url": "http://www.sprachenwelt-mel.de/"
    }]
};

work.display = function() {

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);

        }
    }
};

var education = {
    "schools": [{
        "name": "Hunter College",
        "location": "New York, NY",
        "degree": "Bachelor of Arts",
        "major": ["English Literature"],
        "dates": 2002,
        "url": "http://www.hunter.cuny.edu/"
    }, {
        "name": "Next Level Institue",
        "location": "Prague, Czech Republic",
        "degree": "TEFL Certificate",
        "major": ["TEFL for Business"],
        "dates": 2003,
        "url": "http://www.aboutlanguageschools.com/languageschool/next-level-language-institute319/"
    },  {
        "name": "Montclair High School",
        "location": "Montclair, NJ",
        "degree": "Diploma",
        "major": [],
        "dates": 1996,
        "url": "http://mhs.mpsdnj.us/"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "October 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "November 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "December 2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
    }]
};

education.display = function() {

    for (var school in education.schools) {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);

            var formattedSchoolandDegree = formattedSchool + formattedSchoolDegree;
            $(".education-entry:last").prepend(formattedSchoolandDegree);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            for (var major in education.schools[school].major) {
                if (education.schools[school].major.length > 0) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }
        }
    }

    $("#education").append(HTMLonlineClasses);

    for (var onlineCourse in education.onlineCourses) {
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

            var formattedOnlineCourseSchool = formattedOnlineCourse + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineCourseSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedOnlineURL);

        }
    }
};

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "November 2015",
        "description": "Building of a personalized portfolio in HTML/CSS, using a grid framework.",
        "images": "images/portfoliopic.jpg",
        "url": "https://github.com/BillWW/Projects"
    }]
};

projects.display = function() {

    for (var project in projects.projects) {
        if (projects.projects.length < 8) {
            $("#projects").append(HTMLprojectStart);

            var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
            $(".project-entry:last").append(formattedProTitle);

            var formattedProDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProDate);

            var formattedProDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProDesc);

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);

        }
    }
};

projects.display();

education.display();

work.display();

bio.display();

$("#mapDiv").append(googleMap);