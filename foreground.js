console.log("Chrome extension go!!");

javascript: 
var bbdocs = ["https://support.cci.drexel.edu/bb-learn/",
"https://support.cci.drexel.edu/bb-learn/tests/very-important-notes/",
"https://support.cci.drexel.edu/bb-learn/assignments/troubleshooting/",
"https://support.cci.drexel.edu/bb-learn/kaltura-drexel-streams/",
"https://support.cci.drexel.edu/bb-learn/tests/creating/",
"https://support.cci.drexel.edu/bb-learn/announcement/",
"https://support.cci.drexel.edu/echo360/troubleshooting/",
"https://support.cci.drexel.edu/bb-learn/bb-collaborate-ultra/",
"https://support.cci.drexel.edu/bb-learn/grade-center/",
"https://support.cci.drexel.edu/bb-learn/discussion-boards/",
"https://support.cci.drexel.edu/bb-learn/advanced-topics/bb-learn-blogs/",
"https://support.cci.drexel.edu/bb-learn/tests/editing/",
"https://support.cci.drexel.edu/bb-learn/content-areas/adding-and-editing-items-or-folders/",
"https://support.cci.drexel.edu/bb-learn/advanced-topics/wikis/",
"https://support.cci.drexel.edu/bb-learn/managing-contacts/",
"https://support.cci.drexel.edu/bb-learn/advanced-topics/bb-learn-journals/",
"https://support.cci.drexel.edu/bb-learn/course-reserves/",
"https://support.cci.drexel.edu/bb-learn/voicethread/voicethread-important-notes/",
"https://support.cci.drexel.edu/bb-learn/groups/",
"https://support.cci.drexel.edu/bb-learn/groups/group-sets-or-creating-multiple-groups/",
"https://support.cci.drexel.edu/bb-learn/email/",
"https://support.cci.drexel.edu/bb-learn/turnitin-direct/",
"https://support.cci.drexel.edu/bb-learn/voicethread/",
"https://support.cci.drexel.edu/bb-learn/advanced-topics/bb-learn-self-and-peer-assessments-students/",
"https://support.cci.drexel.edu/bb-learn/tests/respondus/respondus-lockdown-browser-or-webcam-monitor/",
"https://support.cci.drexel.edu/bb-learn/advanced-topics/bb-learn-adaptive-release/",
"https://support.cci.drexel.edu/bb-learn/date-management/",
"https://support.cci.drexel.edu/bb-learn/grade-center/submit-final-grades-through-bb-learn/",
"https://support.cci.drexel.edu/bb-learn/grade-center/adding-and-editing-weighted-column/",
"https://support.cci.drexel.edu/bb-learn/grade-center/adding-editing-and-grading-column-skip-end-metadata/",
"https://support.cci.drexel.edu/bb-learn/content-areas/adding-web-links/",
"https://support.cci.drexel.edu/bb-learn/content-areas/course-links/",
"https://support.cci.drexel.edu/bb-learn/grade-center/advanced-topics/practice-out-date/",
"https://support.cci.drexel.edu/bb-learn/content-areas/adding-and-editing-learning-modules/",
"https://support.cci.drexel.edu/bb-learn/content-areas/moving-content/",
"https://support.cci.drexel.edu/bb-learn/content-areas/copying-content/",
"https://support.cci.drexel.edu/bb-learn/assignments/how-students-can-view-feedback/",
"https://support.cci.drexel.edu/bb-learn/grade-center/advanced-topics/bb-learn-tracking/"
];
var no_error = 0;
/* Use try and catch (repeated and nested below too) cuz some pages have different or no page headings. */
try
{
	try
	{
		/* if in normal Bb Learn iframe, grab BbPageTitle within iframe */
		var iframe = document.getElementsByClassName("classic-learn-iframe");
		var BbPageTitle = iframe[0].contentWindow.document.getElementById("pageTitleText").textContent;
	}
	catch(err)
	{
		/* if NOT in normal Bb Learn iframe, grab BbPageTitle within webpage without iframe. */
		var BbPageTitle = document.getElementById("pageTitleText").textContent;
	}
	if (BbPageTitle.match(/Create Link/gi))
	{
		BbPageTitle = BbPageTitle.replace(/(\r|\r\n|\n)/mg,"").trim();
	}
	else
	{
		BbPageTitle = BbPageTitle.replace(/(\r|\r\n|\n|:.+)/mg,"").trim();
	}

	/*finds page title of content areas, removes line breaks and whitespace before and after title */
	if (BbPageTitle=="Test Options")
	{
		/* alert("DEBUG: Found TEST OPTIONS! See "+bbdocs[1]+"Click OK. This Very IMPORTANT NOTES page will open in 2 seconds."); */
		setTimeout(window.open(bbdocs[1], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Assignments")||(BbPageTitle=="Edit Assignment")||(BbPageTitle=="Create Assignment")||(BbPageTitle.match(/^Assignment/)=="Assignment"))
	{
		/* alert("DEBUG: Found Edit Assignment or Assignment Content Area! See "+bbdocs[2]+"Click OK."); */
		setTimeout(window.open(bbdocs[2], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Create Test")
	{
		/* alert("DEBUG: Found Create Test! See "+bbdocs[4]+"Click OK."); */
		setTimeout(window.open(bbdocs[4], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Announcements"||(BbPageTitle=="Create Link: Announcements"))
	{
		/* alert("DEBUG: Found Announcements! See "+bbdocs[5]+"Click OK."); */
		setTimeout(window.open(bbdocs[5], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="echo360 Class Recordings")
	{
		/* alert("DEBUG: Found Echo360 Class Recordings! See "+bbdocs[6]+"Click OK."); */
		setTimeout(window.open(bbdocs[6], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Blackboard Collaborate Ultra")
	{
		/* alert("DEBUG: Found Blackboard Collaborate Ultra! See "+bbdocs[7]+"Click OK."); */
		setTimeout(window.open(bbdocs[7], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Grade Center")|| (BbPageTitle=="Create Total Column"))
	{
		/* alert("DEBUG: Found Grade Center! See "+bbdocs[8]+"Click OK."); */
		setTimeout(window.open(bbdocs[8], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Discussion Board"||(BbPageTitle=="Create Link: Discussion Board"))
	{
		/* alert("DEBUG: Found Discussion Boards! See "+bbdocs[9]+"Click OK."); */
		setTimeout(window.open(bbdocs[9], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Blogs"||(BbPageTitle=="Create Link: Blog"))
	{
		/* alert("DEBUG: Found Blogs! See "+bbdocs[10]+"Click OK."); */
		setTimeout(window.open(bbdocs[10], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Test Canvas")
	{
		/* alert("DEBUG: Found Test Canvas! See "+bbdocs[11]+"Click OK."); */
		setTimeout(window.open(bbdocs[11], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Create Item")||(BbPageTitle=="Edit Item")||(BbPageTitle=="Create Content Folder")||(BbPageTitle=="Edit Content Folder")||(BbPageTitle=="START HERE")||(BbPageTitle=="Start Here"))
	{
		/* alert("DEBUG: Create or Edit Item or Folder! See "+bbdocs[12]+"Click OK."); */
		setTimeout(window.open(bbdocs[12], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Wikis")||(BbPageTitle=="Create Link: Wiki"))
	{
		/* alert("DEBUG: Found Wikis! See "+bbdocs[13]+"Click OK."); */
		setTimeout(window.open(bbdocs[13], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Contacts")
	{
		/* alert("DEBUG: Found Contacts! See "+bbdocs[14]+"Click OK."); */
		setTimeout(window.open(bbdocs[14], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Journals"||(BbPageTitle=="Create Link: Journal"))
	{
		/* alert("DEBUG: Found Journals! See "+bbdocs[15]+"Click OK."); */
		setTimeout(window.open(bbdocs[15], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Reserves")||(BbPageTitle=="Course Reserves")||(BbPageTitle=="Create ARES Course Reserves"))
	{
		/* alert("DEBUG: Found Course Reserves! See "+bbdocs[16]+"Click OK."); */
		setTimeout(window.open(bbdocs[16], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Groups")||(BbPageTitle=="Create Self-Enrollment Group")||(BbPageTitle=="Create Group")||(BbPageTitle=="Create Link: Group"))
	{
		/* alert("DEBUG: Found Groups or Create Group pages! See "+bbdocs[18]+"Click OK."); */
		setTimeout(window.open(bbdocs[18], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Create Self-Enrollment Group Set")||(BbPageTitle=="Create Random Enrollment Group Set")||(BbPageTitle=="Create Group Set"))
	{
		/* alert("DEBUG: Found Group Set Pages! See "+bbdocs[19]+"Click OK."); */
		setTimeout(window.open(bbdocs[19], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Send Email")
	{
		/* alert("DEBUG: Found Send Email! See "+bbdocs[20]+"Click OK."); */
		setTimeout(window.open(bbdocs[20], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Turnitin Direct Assignment")
	{
		/* alert("DEBUG: Found Turnitin Direct Assignment! See "+bbdocs[21]+"Click OK."); */
		setTimeout(window.open(bbdocs[21], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Edit VoiceThread Presentation")
	{
		/* alert("DEBUG: Found VoiceThread Presentation Bb Learn link edit! See "+bbdocs[22]+"Click OK."); */
		setTimeout(window.open(bbdocs[22], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Edit")||(BbPageTitle=="Properties")||(BbPageTitle=="Assessment Canvas")||(BbPageTitle=="Create Self and Peer Assessment"))
	{
		/* alert("DEBUG: Found Bb Self and Peer Eval pages! See "+bbdocs[23]+"Click OK."); */
		setTimeout(window.open(bbdocs[23], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Respondus LockDown Browser Dashboard")
	{
		/* alert("DEBUG: Found Respondus Dashboard! See "+bbdocs[24]+"Click OK."); */
		setTimeout(window.open(bbdocs[24], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Adaptive Release")
	{
		/* alert("DEBUG: Found Respondus Dashboard! See "+bbdocs[25]+"Click OK."); */
		setTimeout(window.open(bbdocs[25], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Date Management Review")
	{
		/* alert("DEBUG: Date Management Review! See "+bbdocs[26]+"Click OK."); */
		setTimeout(window.open(bbdocs[26], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Grade Submit Tool")
	{
		/* alert("DEBUG: Grade Submit Tool! See "+bbdocs[27]+"Click OK."); */
		setTimeout(window.open(bbdocs[27], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Edit Weighted Column")
	{
		/* alert("DEBUG: Edit Weighted Column! See "+bbdocs[28]+"Click OK."); */
		setTimeout(window.open(bbdocs[28], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Create Grade Column")
	{
		/* alert("DEBUG: Create Total Column! See "+bbdocs[29]+"Click OK."); */
		setTimeout(window.open(bbdocs[29], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Create Web Link")||(BbPageTitle=="Edit Web Link"))
	{
		/* alert("DEBUG: Create or Edit Item! See "+bbdocs[30]+"Click OK."); */
		setTimeout(window.open(bbdocs[30], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Create Course Link")||(BbPageTitle=="Edit Course Link"))
	{
		/* alert("DEBUG: Create or Edit Item! See "+bbdocs[31]+"Click OK."); */
		setTimeout(window.open(bbdocs[31], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Create Practice (formerly ApprenNet")||(BbPageTitle=="Edit Practice (formerly ApprenNet)"))
	{
		/* alert("DEBUG: Create or Edit Item! See "+bbdocs[32]+"Click OK."); */
		setTimeout(window.open(bbdocs[32], "_blank"),2000).preventDefault;
	}
	else if((BbPageTitle=="Create Learning Module")||(BbPageTitle=="Edit Learning Module"))
	{
		/* alert("DEBUG: Create or Edit Item! See "+bbdocs[33]+"Click OK."); */
		setTimeout(window.open(bbdocs[33], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Move")
	{
		/* alert("DEBUG: Move something! See "+bbdocs[34]+"Click OK."); */
		setTimeout(window.open(bbdocs[34], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Copy")
	{
		/* alert("DEBUG: Copy something! See "+bbdocs[35]+"Click OK."); */
		setTimeout(window.open(bbdocs[35], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="My Grades")
	{
		/* alert("DEBUG: Copy My Grades or View Feedback! See "+bbdocs[36]+"Click OK."); */
		setTimeout(window.open(bbdocs[36], "_blank"),2000).preventDefault;
	}
	else if(BbPageTitle=="Retention Center"||(BbPageTitle=="Course Analytics")||(BbPageTitle=="Course Reports")||(BbPageTitle=="Performance Dashboard"))
	{
		/* alert("DEBUG: Retention Center or General Tracking! See "+bbdocs[37]+"Click OK."); */
		setTimeout(window.open(bbdocs[37], "_blank"),2000).preventDefault;
	}
	else
	{
		/* No known Bb Page Title. Try to detect content area action button. */
		try
		{
			var BbContAreaActBtn = iframe[0].contentWindow.document.getElementById("bcMenu_actionButton").textContent;
			BbContAreaActBtn = BbContAreaActBtn.replace(/(\r|\r\n|\n|:.+)/mg,"").trim();

			if(BbContAreaActBtn=="Build Content")
			{
				/* bbdocs[12] is ALSO used for Create or Edit Item above */
				no_error = 1;
				/* alert("DEBUG: Found Content Area! See "+bbdocs[12]+"Click OK."); */
				setTimeout(window.open(bbdocs[12], "_blank"),2000).preventDefault;
			}
			else
			{
				alert("Could not identify your page (No Bb Content Area button).\n\nCCI Bb Learn Doc Home Page will open instead.");
				setTimeout(window.open(bbdocs[0], "_blank"),2000).preventDefault;
			}
		}
		catch(err)
		{
			/* No content area button. Look at Bb Page Bread Crumb Trail 4th link. */
			try
			{
				var BbPageCrumb4 = iframe[0].contentWindow.document.getElementById("crumb_4").textContent;
				BbPageCrumb4 = BbPageCrumb4.replace(/(\r|\r\n|\n)/mg,"").trim();

				if(BbPageCrumb4=="Turnitin Direct Configuration")
				{
					no_error = 1;
					/* alert("DEBUG: Found Turnitin Direct Configuration! See "+bbdocs[21]+"Click OK."); */
					setTimeout(window.open(bbdocs[21], "_blank"),2000).preventDefault;
				}
				else
				{
					alert("Inner Bb Learn page (*4* Bread crumb links).\n\nNo documents set for this.\n\nCCI Bb Learn Doc Home Page will open instead.");
					setTimeout(window.open(bbdocs[0], "_blank"),2000).preventDefault;
				}
			}
			catch(err)
			{
				no_error = 1;
				alert("No recognized Bb Content Area or bread crumb trail.\n\nCCI Bb Learn Doc Home Page will open instead.");
				setTimeout(window.open(bbdocs[0], "_blank"),2000).preventDefault;
			}

		}

	}
}
catch(err)
{
		/* No Bread Crumb Trail 4th link. Look for a 3rd link.*/
		try
		{
			var BbPageCrumb3 = iframe[0].contentWindow.document.getElementById("crumb_3").textContent;
			BbPageCrumb3 = BbPageCrumb3.replace(/(\r|\r\n|\n)/mg,"").trim();

			if(BbPageCrumb3=="Mashup Gallery")
			{
				no_error = 1;
				/* alert("DEBUG: Found Kaltura My Media page in Bb Learn! See "+bbdocs[3]+"Click OK. This Very IMPORTANT NOTES page will open in 2 seconds."); */
				setTimeout(window.open(bbdocs[3], "_blank"),2000).preventDefault;
			}
			else
			{
				alert("Inner Bb Learn page (*3* Bread crumb links).\n\nNo documents set for this.\n\nCCI Bb Learn Doc Home Page will open instead.");
				setTimeout(window.open(bbdocs[0], "_blank"),2000).preventDefault;
			}
		}
		catch(err)
		{
			/* No Bread Crumb Trail 3rd link in usual iframe. Try a couple known nested iframes.*/
			try
			{
				var BbPageCrumb3iFrame = iframe[0].contentWindow.document.getElementById("orientationFrame").contentWindow.document.getElementById("crumb_3").textContent;
				BbPageCrumb3iFrame = BbPageCrumb3iFrame.replace(/(\r|\r\n|\n)/mg,"").trim();

				if(BbPageCrumb3iFrame=="Course Reserves")
				{
					no_error = 1;
					/* alert("DEBUG: Found Course Reserves LTI page in Bb Learn! See "+bbdocs[16]+"Click OK. This Very IMPORTANT NOTES page will open in 2 seconds."); */
					setTimeout(window.open(bbdocs[16], "_blank"),2000).preventDefault;
				}
				else
				{
					try
					{
						var VTH3iFrame = iframe[0].contentWindow.document.getElementById("contentFrame").contentWindow.document.getElementsByTagName("H3")[0].textContent;
						VTH3iFrame = VTH3iFrame.replace(/(\r|\r\n|\n)/mg,"").trim();
		
						if(VTH3iFrame=="VoiceThread Setup")
						{
							no_error = 1;
							/* alert("DEBUG: Found VOICE THREAD LTI page in Bb Learn! See "+bbdocs[17]+"Click OK. This Very IMPORTANT NOTES page will open in 2 seconds."); */
							setTimeout(window.open(bbdocs[17], "_blank"),2000).preventDefault;
						}
					}
					catch (err)
					{
						no_error = 1;
						/* alert("VoiceThread doesn't allow iFrame access, but exact error is:\n\n"+err_msg+"\n\n"+err); */
						alert("Our best guess? You are using VoiceThread.\n\nWe'll open a new tab for help with VoiceThread.");
						setTimeout(window.open(bbdocs[17], "_blank"),2000).preventDefault;
						/* Practice LTI Link pages could go here too, but probably cannot access iFrame. */
					}
				}
			}
			catch (err)
			{
				no_error = 1;
				alert("Not in a Bb Learn course section?\n\nCCI Bb Learn Doc Home Page will open instead.");
				setTimeout(window.open(bbdocs[0], "_blank"),2000).preventDefault;
			}
		}
		/* Undefined error. */
		if(no_error==0)
		{
			alert("No documents set for this.\n\nCCI Bb Learn Doc Home Page will open instead.");
			setTimeout(window.open(bbdocs[0], "_blank"),2000).preventDefault;
		}
}

