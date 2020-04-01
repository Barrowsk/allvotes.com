var registerMapping = {
  "alabama" : "https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote",
  "alaska" : "https://voterregistration.alaska.gov/",
  "arizona" : "https://servicearizona.com/voterRegistration?popularclick",
  "arkansas" : "https://www.sos.arkansas.gov/elections/voter-information",
  "california" : "registertovote.ca.gov",
  "colorado" : "https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml",
  "connecticut" : "https://portal.ct.gov/SOTS/Election-Services/V5-Side-Navigation/ELE--Voter-Information",
  "dc" : "https://www.vote4dc.com/ApplyInstructions/Register",
  "delaware" : "ivote.de.gov/voterlogin.aspx",
  "florida" : "https://registertovoteflorida.gov/",
  "georgia" : "registertovote.sos.ga.gov/GALVR",
  "hawaii" : "https://olvr.hawaii.gov/",
  "idaho" : "https://apps.idahovotes.gov/OnlineVoterRegistration",
  "illinois" : "https://ova.elections.il.gov/",
  "indiana" : "https://www.in.gov/sos/elections/2403.htm",
  "iowa" : "https://sos.iowa.gov/elections/voterinformation/voterregistration.html",
  "kansas" : "https://www.kdor.ks.gov/apps/voterreg/secure/default.aspx",
  "kentucky" : "https://elect.ky.gov/registertovote/Pages/default.aspx",
  "louisiana" : "https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx",
  "maine" : "https://www.maine.gov/sos/cec/elec/voter-info/votreg.html",
  "maryland" : "https://elections.maryland.gov/voter_registration/application.html",
  "massachusetts" : "https://www.sec.state.ma.us/ovr/",
  "michigan" : "https://mvic.sos.state.mi.us/RegisterVoter",
  "minnesota" : "https://www.sos.state.mn.us/elections-voting/register-to-vote/",
  "mississippi" : "https://www.ms.gov/sos/voter_registration/Documents/Voter_Registration_Application.pdf",
  "missouri" : "https://www.sos.mo.gov/elections/goVoteMissouri/register",
  "montana" : "https://sosmt.gov/elections/vote/",
  "nebraska" : "https://www.nebraska.gov/apps-sos-voter-registration/",
  "nevada" : "https://nvsos.gov/sosvoterservices/Registration/step1.aspx",
  "new hampshire" : "https://sos.nh.gov/HowRegVote.aspx",
  "new jersey" : "https://www.state.nj.us/state/elections/voter-registration.shtml",
  "new mexico" : "https://portal.sos.state.nm.us/ovr/webpages/instructionsstep1.aspx",
  "new york" : "https://www.ny.gov/services/register-vote",
  "north carolina" : "https://www.ncsbe.gov/Voters/Registering-to-Vote",
  "north dakota" : "https://vote.nd.gov/",
  "ohio" : "https://olvr.ohiosos.gov/",
  "oklahoma" : "https://www.ok.gov/elections/Online_Voter_Registration.html",
  "oregon" : "https://sos.oregon.gov/voting/Pages/registration.aspx",
  "pennsylvania" : "https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx",
  "rhode island" : "https://vote.sos.ri.gov/Home/RegistertoVote?ActiveFlag=1",
  "south carolina" : "https://info.scvotes.sc.gov/eng/ovr/start.aspx",
  "south dakota" : "https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx",
  "tennessee" : "https://sos.tn.gov/products/elections/online-voter-registration",
  "texas" : "https://www.votetexas.gov/register-to-vote/",
  "utah" : "https://secure.utah.gov/voterreg/index.html",
  "vermont" : "https://olvr.sec.state.vt.us/",
  "virginia" : "https://vote.elections.virginia.gov/",
  "washington" : "https://www.sos.wa.gov/elections/register.aspx",
  "west virginia" : "https://ovr.sos.wv.gov/",
  "wisconsin" : "http://myvote.wi.gov/RegisterOnline",
  "wyoming" : "https://soswy.state.wy.us/Elections/RegisteringToVote.aspx",
}

var absenteeMapping = {
  "alabama" : "https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting",
  "alaska" : "http://www.elections.alaska.gov/doc/forms/C06%20Fillable.pdf",
  "arizona" : "https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information",
  "arkansas" : "https://www.sos.arkansas.gov/elections/voter-information/absentee-voting",
  "california" : "https://www.sos.ca.gov/elections/voter-registration/vote-mail/",
  "colorado" : "https://www.colorado.gov/pacific/atom/11406",
  "connecticut" : "https://portal.ct.gov/SOTS/Election-Services/Absentee-Ballot-Application/Absentee-Ballot-Application-English-and-Spanish",
  "dc" : "https://www.vote4dc.com/ApplyInstructions/Absentee",
  "delaware" : "https://elections.delaware.gov/voter/absenteeballot.shtml",
  "florida" : "https://dos.myflorida.com/elections/for-voters/voting/vote-by-mail/",
  "georgia" : "https://sos.ga.gov/index.php/Elections/absentee_voting_in_georgia",
  "hawaii" : "https://elections.hawaii.gov/frequently-asked-questions/voting-by-mail/",
  "idaho" : "https://idahovotes.gov/absentee-voter-information/",
  "illinois" : "https://www.fvap.gov/illinois",
  "indiana" : "https://www.in.gov/sos/elections/2402.htm",
  "iowa" : "https://sos.iowa.gov/elections/electioninfo/absenteeinfo.html",
  "kansas" : "https://sos.kansas.gov/elections/registration-voting/",
  "kentucky" : "https://elect.ky.gov/Voters/Pages/Absentee-Voting.aspx",
  "louisiana" : "https://www.sos.la.gov/ElectionsAndVoting/Vote/VoteByMail/Pages/default.aspx",
  "maine" : "https://www.maine.gov/sos/cec/elec/voter-info/absent.html",
  "maryland" : "https://elections.maryland.gov/voting/absentee.html",
  "massachusetts" : "https://www.sec.state.ma.us/ele/eleabsentee/absidx.htm",
  "michigan" : "https://www.michigan.gov/sos/0,4670,7-127-1633_8716_8728-21037--,00.html",
  "minnesota" : "https://mnvotes.sos.state.mn.us/ABRegistration/ABRegistrationStep1.aspx",
  "mississippi" : "https://www.sos.ms.gov/elections-voting/documents/voterinformationguide.pdf",
  "missouri" : "https://www.sos.mo.gov/elections/goVoteMissouri/howtovote#Absentee",
  "montana" : "https://sosmt.gov/elections/absentee/",
  "nebraska" : "https://sos.nebraska.gov/elections/early-voting",
  "nevada" : "https://nvsos.gov/sos/elections/voters/absentee-voting",
  "new hampshire" : "https://sos.nh.gov/ElecForms2.aspx",
  "new jersey" : "https://www.state.nj.us/state/elections/vote-by-mail.shtml",
  "new mexico" : "https://www.sos.state.nm.us/voting-and-elections/voter-information/absentee-and-early-voting/",
  "new york" : "https://www.elections.ny.gov/votingabsentee.html",
  "north carolina" : "https://www.ncsbe.gov/Voting-Options/Absentee-Voting",
  "north dakota" : "https://vip.sos.nd.gov/absentee",
  "ohio" : "https://www.ohiosos.gov/elections/voters/absentee-ballot/",
  "oklahoma" : "https://www.ok.gov/elections/Voter_Info/Absentee_Voting/",
  "oregon" : "https://sos.oregon.gov/voting/pages/voteinor.aspx",
  "pennsylvania" : "https://www.pavoterservices.pa.gov/OnlineAbsenteeApplication/",
  "rhode island" : "https://vote.sos.ri.gov/Voter/VotebyMail",
  "south carolina" : "https://www.scvotes.org/absentee-voting",
  "south dakota" : "https://sdsos.gov/elections-voting/voting/absentee-voting.aspx",
  "tennessee" : "https://sos.tn.gov/products/elections/absentee-voting",
  "texas" : "https://www.sos.texas.gov/elections/voter/reqabbm.shtml",
  "utah" : "http://www.utahcounty.gov/Dept/ClerkAud/Elections/Absentee.asp",
  "vermont" : "https://sos.vermont.gov/elections/voters/early-absentee-voting/",
  "virginia" : "https://www.elections.virginia.gov/casting-a-ballot/absentee-voting/",
  "washington" : "https://www.sos.wa.gov/elections/faq_vote_by_mail.aspx",
  "west virginia" : "https://sos.wv.gov/elections/Pages/AbsenteeVotingInformation.aspx",
  "wisconsin" : "http://myvote.wi.gov/en-US/RequestAnAbsenteeBallot",
  "wyoming" : "https://soswy.state.wy.us/Elections/MOVE_Absentee_Request.aspx",
}

$("#register").click(function(){
  var input = $("input").val().trim().toLowerCase();
  if (registerMapping.hasOwnProperty(input)){
      window.location = registerMapping[input];
  }
  else {
      //if url not found, redirect to default url
      window.location = "./default.html";
  }
});

$("#absentee").click(function(){
  var input = $("input").val().trim().toLowerCase();
  if (absenteeMapping.hasOwnProperty(input)){
      window.location = absenteeMapping[input];
  }
  else {
      //if url not found, redirect to default url
      window.location = "./default.html";
  }
});