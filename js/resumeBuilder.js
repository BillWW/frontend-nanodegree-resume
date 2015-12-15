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

var bio = {
	"name": "Bill Weidenborner",
	"role": "Scrum Master",
	"welcomMessage": "The unexamined life is not worth living",
	"contacts": {
	  "email": "warnerwilliam@gmail.com",
	  "mobile": "775 893 620",
	  "github": "BillWW",
	  "twitter": "@Bill_W_Prague",
	  "location": "Prague"
	},
	"skills": [
	"Writing", "Talking", "Thinking"
	]
}

var education = {
  "schools": [
   {
     "name": "Hunter College",
     "city": "New York, NY",
     "degree": "Bachelor of Arts",
     "major": "English Literature",
     "dates": "January 1998 - June 2001"
   },
   {
  	 "name": "Montclair High School",
  	 "city": "Montclair, NJ",
  	 "degree": "diploma",
  	 "dates": "September 1992 - June 1996"
   },
   {
  	 "name": "Next Level Institue",
  	 "city": "Prague, Czech Republic",
  	 "degree": "TEFL Certificate",
  	 "dates": "January 2002"
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
	   "description": "Building of a personalized portfolio in HTML/CSS site using a grid framework."
	}
  ]
}	

projects.display = function() {

for (project in projects.projects) {
$("#projects").append(HTMLprojectStart);

var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
$(".project-entry:last").append(formattedProTitle);

var formattedProDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
$(".project-entry:last").append(formattedProDate);

var formattedProDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedProDesc);

   }
}

projects.display();



education.display = function() {

  for (school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
  $(".education-entry:last").append(formattedSchool);

  var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
  $(".education-entry:last").append(formattedSchoolCity);

  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchoolDates);

  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchoolDegree);

  if (education.schools[school].major > 0) {
    for (major in education.schools[schoo].major) {
  	  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedSchoolMajor);
   }
  }
 }
}


education.display();


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


if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

function inName(name) {
	console.log(name);
    var name = bio.name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    var intName = (name[0] +[" "]+ name[1]);

    console.log(intName);

    return intName;
  
   }

$("#main").append(internationalizeButton);


//displayWork();

//$(document).click(function(loc) {
	//var x = loc.pageX;
//	var y = loc.pageY;
	//logClicks(x,y);});

//work.company = "CA Technologies";
//work.position = "Scrum Master";

//education["University"] = "Hunter College";
//education["Years"] = "1998 - 2002";
//education["City"] = "New York, New York";

//$("#main").append(work.company).append(work.position);
//$("#main").append(work.company);
//$("#main").append(education["City"]);

//$("#main").append("Bill Weidenborner");



var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", work.jobs[0].title);

//var Intbutton = HTMLheaderName.replace("%data%", GintName);

//$("#header").prepend(Intbutton);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




//$("#main").append(bio.contacts);

//function inName(name) {
   // name = bio.name.split(" ");
  //  console.log(name);
  //  name[1] = name[1].toUpperCase();
 //   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

 //   return name[0] +[" "]+name[1];
//   }

//$("#main").append(internationalizeButton);