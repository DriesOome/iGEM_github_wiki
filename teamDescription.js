// teamDescription.js
// Variables
// The team members array is a 2D array. Each element of the first dimension is a team member.
// The second dimension consists out of: "teamMemberName", "teamMemberDescription", "teamMemberPictureURL"
let teamMembers = [
    ["Abanish Roy",
     "Lead (De Baas)	Product Design	Biotechnology, Biomedical Engineering",
     "images/teamPictures/Roy.jpg"],
     ["Fopke Marain",	
      "Lead (Het Baasje) Wet Lab	Biomedical Science]",
      "images/teamPictures/Fopke - U.jpg"],
     ["Ismael Bawah",
     "Outreach Head	Finance, Wet Lab	Bio-science Engineering",
     "images/teamPictures/noImage.jpg"],
     ["Robert Madigan",
     "Wet Lab		Biology",
     "images/teamPictures/noImage.jpg"],
     ["Dries Oome",
     "Dry Lab	Product Design	Bioinformatics, Informatics",
     "images/teamPictures/noImage.jpg"],
     ["Sarah Vorsselmans",
     "Outreach	Wet Lab	Biochemistry and Biotechnology",
     "images/teamPictures/noImage.jpg"],
];

// functions
window.onload = function(){
    for (i=0; i<teamMembers.length; i++){
        document.getElementById("teamDescriptionDiv").innerHTML += createTeamMemberDiv(teamMembers[i][0],teamMembers[i][1],teamMembers[i][2]);
    }
}
document.onscroll = function(){
    document.getElementById("teamDescriptionDiv").style.backgroundPositionY += 1000; 
}

/*
This function creates the html 
code to display one team member in the team description page
*/
function createTeamMemberDiv(teamMemberName, teamMemberDescription, teamMemberPictureURL){
    let teamMemberDiv = 
    "<div class='teamMemberDiv'>"
        + "<div class='memberName'>"
            + "<h1 class='memberNameText'>"
            + teamMemberName 
            + "</h1>"
        + "</div>"
        + "<div class='descriptionGrid'>"
            + "<div class='imageCol'>"
                + "<img src='"+teamMemberPictureURL+"' class='memberImage'>"
            + "</div>"
            + "<div class='descriptionCol'>"
                + "<p class='descriptionText'>"+teamMemberDescription+"</p>"
            + "</div>"
        + "</div>"
    +"</div>"
    return teamMemberDiv;
}