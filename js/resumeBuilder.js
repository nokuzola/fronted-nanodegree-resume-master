var name = "Nokuzola Madara";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio ={
			"Fullname": "Nokuzola Madara",
		  "role":"Web Developer",
			"contact": {
				"mobile": "076 10-763-01",
				"email": "madaranokuzola@gmail.com",
				"github":"madaranokuzola",
				"twitter":"@zola",
				"location":"cape town"
			},
			"bioPic": "images/fry.png",
			"WellcomeMessage": "Hellow world",
			"skills": [
				"java","C++","HTML","Java Script"
			]

	};
//var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contact);

var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(formattedEmail);
var formattedGithub= HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
$("#topContacts").append(formattedLocation);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedPic);
var formattedMessg = HTMLWelcomeMsg.replace("%data%",bio.WellcomeMessage);
$("#header").append(formattedMessg);



/*$("#bio").append(formattedMobile);

$("#bio").append(formattedEmail);

$("#bio").append(formattedGithub);

$("#bio").append(formattedTwitter);

$("#bio").append(formattedLocation);
$("#bio").append(formattedMessg);
$("#bio").append(formattedPic);*/
// $("#bio").append('<img src="'+bio.bioPic+'">');


if(bio.skills.length > 0){


$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
var formattedRole = HTMLheaderRole.replace("%data%",skills);
formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);

}
/*** WORK EXPERIENCE ***/
var work ={
	"jobs":[
		{
			"employer": "Edgars",
			"title"		:"Service Center Operator",
			"location":"Canal Walk",
			"dates"    :"Dec 2012-Jan 2015",
			"description":"i was a part time Casual who was working at the service center responsible for customer sevice, cash sales,exchange,credits and returned, replenish the floor"

		},
    {
		"employer": "hamonate Consulting",
		"title"   : "Intern",
		"location":"Atlantis",
		"dates"		:"Nov 2014-March 2015",
		"description": "MCSE training installing and Configuring window server 2012 R2,Administering Windows Server 2012,configuring Advanced Windows Server 2012 Services,Monitoring and Operating a Private Cloud with System Center 2012 Configuring and Deploying a Private Cloud with System Center 2012"
	}
  ]
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);


		var formattedlocation = HTMLworkLocation .replace("%data%",work.jobs[job].location );
		$(".work-entry:last").append(formattedlocation);

	var formattedDescription = HTMLworkDescription .replace("%data%",work.jobs[job].description );
	$(".work-entry:last").append(formattedDescription);
}


/** Project **/
var projects = {
	"project":[
		{
			"title":"Profile Application",
			"dates": "2015",
			"description" :"My first Application using HTML and CSS was to design my profile App",
			"images":["images/profile.png","images/mug.png"]

		}
]

}


 projects.displayProject = function()

{
	for (proj in projects.project){

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
		$(".project-entry:last").append(formattedTitle);


		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[proj].dates);
		$(".project-entry:last").append(formattedDates);


		var formattedDescription = HTMLprojectDescription .replace("%data%",projects.project[proj].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.project[proj].images.length > 0){

			for(image in projects.project[proj].images){
		//	var formattedImage = HTMLprojectImage.replace("%data%",projects.project[proj].image[0]);
			//var formattedImage = HTMLprojectImage.replace("%data%",projects.project[proj].image[1]);
		  //$(".project-entry:last").append(formattedImage);
			//$(".project-entry:last").append(formattedImage);
				var formattedImage = HTMLprojectImage.replace("%data%",projects.project[proj].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}


	}
}
projects.displayProject();

var education = {
	"schools": [
		{
			"name": "Cape Penninsula University of Technology",
			"diploma":"National Diploma",
			"dates": "2012-2014",
			"location": "Western Cape, Cape town",
			"Majors":["DS,IS,S"],
			"url": "http://www.cput.ac.za"
		}
],
	"onlineCourse": [
		{
			"title": "JavaScript Crash course",
			"school": "Udacity",
			"date": "2014-2015",
			"urls": "http://www.udacity.com/course/ud804"
		}
	]
	}



	education.displayeducation = function(){
		for( edu in education.schools){

			$("#education").append(HTMLschoolStart);


			var formattedName = HTMLschoolName.replace("%data%",education.schools[edu].name);
			$(".education-entry:last").append(formattedName);


			var formattedLoc = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
			$(".education-entry:last").append(formattedLoc);

			var formattedQual = HTMLschoolDegree.replace("%data%",education.schools[edu].diploma);
			$(".education-entry:last").append(formattedQual);

			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
			$(".education-entry:last").append(formattedDates);

			if(education.schools[edu].Majors.length > 0){

				for(major in education.schools[edu].Majors){

					var formattedMajor= HTMLschoolMajor.replace("%data%",education.schools[edu].Majors[major]);

					$(".education-entry:last").append(formattedMajor);


				}
			}
			var formattedUrl= HTMLonlineURL.replace("%data%",education.schools[edu].url);
			$(".education-entry:last").append(formattedUrl);


		}

	for (onlineTest in education.onlineCourse){
		$(".education-entry:last").append(HTMLonlineClasses);


					var formattedTit = HTMLonlineTitle.replace("%data%",education.onlineCourse[onlineTest].title);
					$(".education-entry:last").append(formattedTit);


					var formattedSchul= HTMLonlineSchool.replace("%data%",education.onlineCourse[onlineTest].school);
					$(".education-entry:last").append(formattedSchul);

					var onlinedate = HTMLonlineDates.replace("%data%",education.onlineCourse[onlineTest].date);
					$(".education-entry:last").append(onlinedate);

					var onlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourse[onlineTest].urls);
					$(".education-entry:last").append(onlineUrl);
	}
	}
	education.displayeducation();


	function inName(name){
		name = name.trim().split("");
		name[1]= name[0].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase()+ name[0].sslice[1].toLoweCase();
		return name[0] + " " + name[1];

	}
	$("#main").append(internationalizeButton);

	$("#mapDiv").append(googleMap);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub= HTMLgithub.replace("%data%",bio.contact.github);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
	$("#footerContacts").append(formattedLocation);
