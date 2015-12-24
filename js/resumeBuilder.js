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
  "welcomeMessage": "Positive disruption, focused innovation, concrete results",
  "skills": [
  "Writing", "Innovating", "Facilitating"
  ],
  "biopic": "images/Me2.jpg"
}

var work = {
  "jobs": [
   {
    "employer": "CA Technologies",
    "title": "Scrum Master",
    "location": "Prague, Czech Republic",
    "dates": "March 2015 - Present",
    "description": "Working as a facilitator and organizer of a crossfunctional Agile scrum team."
    },
    {
    "employer": "CA Technologies",
    "title": "Sr. Technical Writer",
    "location": "Prague, Czech Republic",
    "dates": "July 2014 - Present",
    "description": "Creating world class product documentation for a SaaS Operating Platform."
    },
    {
    "employer": "CA Technologies",
    "title": "Technical Writer",
    "location": "Prague, Czech Republic",
    "dates": "September 2011 - June 2014",
    "description": "Creating world class product documentation for a SaaS Operating Platform."
    },
    {
    "employer": "Pokorny, Wagner & spol.",
    "title": "Legal Proofreader",
    "location": "Prague, Czech Republic",
    "dates": "September 2008 - July 2011",
    "description": "Proofreader of legal documentation presented before the European Commsion."
    },
    {
    "employer": "MEL Spracheninstitut",
    "title": "Business and Technical English Instructor",
    "location": "Nuremberg, Germany",
    "dates": "September 2006 - June 2008",
    "description": "Teacher of English in various companies and schools in the region of northern Baveria." 
    }
  ]
}

var education = {
  "schools": [
   {
     "name": "Hunter College",
     "location": "New York, NY",
     "degree": "Bachelor of Arts",
     "major": "English Literature",
     "dates": 2001,
     "url": "http://www.hunter.cuny.edu/"
   },
   {
     "name": "Montclair High School",
     "location": "Montclair, NJ",
     "degree": "Diploma",
     "major": "General Curriculum",
     "dates": 1996,
     "url": "http://mhs.mpsdnj.us/"
   },
   {
     "name": "Next Level Institue",
     "location": "Prague, Czech Republic",
     "degree": "TEFL Certificate",
     "major": "TEFL for Business",
     "dates": 2002,
     "url": "http://www.aboutlanguageschools.com/languageschool/next-level-language-institute319/"
   }
  ],
  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
   }
  ]
}

var projects = {
  "projects": [
  {
     "title": "Portfolio Site",
     "dates": "November 2015",
     "description": "Building of a personalized portfolio in HTML/CSS site using a grid framework.",
     "images": "images/portfoliopic.jpg"
  }
 ]
} 


bio.display = function() {


  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#header").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#header").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#header").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#header").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").append(formattedLocation);

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

  }

bio.display();


projects.display = function() {

  for (project in projects.projects) {
  $("#projects").append(HTMLprojectStart);

  var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedProTitle);

  var formattedProDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formattedProDate);

  var formattedProDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedProDesc);

  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
  $(".project-entry:last").append(formattedImage);

  }
}

projects.display();



education.display = function() {

  for (school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

  var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);

  var formattedSchoolandDegree = formattedSchool + formattedSchoolDegree;
  $(".education-entry:last").prepend(formattedSchoolandDegree);
  
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchoolLocation);

  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchoolDates);

  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedSchoolMajor);
  
 }
}


education.display();

$("#mapDiv").append(googleMap);

function displayWork() {

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

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

displayWork();




  
//}

function inName(name) {
  console.log(name);
    var name = bio.name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    var intName = (name[0] +[" "]+ name[1]);

    console.log(intName);

    return intName;
  
   }

//$("#main").append(internationalizeButton);


//if (education.schools[school].major.length > 0) {
  //  for (major in education.schools[school].major) {
    //  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);} else {
      //  display

//if (projects.projects[project].images.length > 0) {
 // for (image in projects.projects[project].images) {
    //var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    //$(".project-entry:last").append(formattedImage);
  
  //for (major in education.school[school].major)
  //if (education.schools[school].major[major] === 0) {
    


    //$(".education-entry:last").hide(formattedSchoolMajor);
