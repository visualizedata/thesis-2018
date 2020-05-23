var fs = require('fs');
var request = require('request'); // use to make HTML calls
var fs = require('fs');
var cheerio = require('cheerio');

var profiles=[];

var cohort = JSON.parse(fs.readFileSync('teacherCohort.json','utf8')); //
var appContent = JSON.parse(fs.readFileSync('app2014.json','utf8')); //
//create object to load content 

cohort.forEach( function(d, i) {
    appContent.forEach( function(e, j) {
        if (e.ContactId===d.ContactID) {
            console.log(e.ContactId, d.ContactID);
            var thesisID = e.ContactId;
            var program = d.ProgramName;
            var cohortYear = d.CohortYear
            var status = d.Status
            var withdrawalDate = d.WithdrawalDate
            var leaveStDate = d.LeaveStartDate
            var leaveEnDate = d.LeaveEndDate
            var leave2StDate = d.Leave2StartDate
            var leave2EnDate = d.Leave2EndDate
            var gender = d.Gender;
            var race = d.raceEthnicity;
            var mfaYears = d.MFAYears
            var mtmYears = d.MTMFAYears
            var yearsteaching = d.YearsTeaching;
            var appText = e._ComPath;
            profiles.push(new enterData(thesisID, program, cohortYear, status, withdrawalDate, leaveStDate, leaveEnDate, leave2StDate, leave2EnDate, gender, race, mfaYears, mtmYears, yearsteaching, appText));
            }
    });
    //where does this go
      
    });

fs.writeFileSync('teacher.json', JSON.stringify(profiles)); 

function enterData(_thesisID, _program, _cohortYear, _status, _withdrawalDate, _leaveStDate, _leaveEnDate, _leave2StDate, _leave2EnDate, _gender, _race, _mfaYears, _mtmYears, _yearsteaching, _appText){
      var private = {}; //I probably could have used this instead of the private name, but its something similar I did for another project so I used it here.  
        private.thesisID= _thesisID;
        private.program= _program;
        private.cohortYear= _cohortYear;
        private.statusA= _status;
        private.withdrawalDate= _withdrawalDate;
        private.leaveStDate= _leaveStDate;
        private.leaveEnDate= _leaveEnDate;
        private.leave2StDate= _leave2StDate;
        private.leave2EnDate= _leave2EnDate;
        private.gender= _gender;
        private.race= _race;
        private.mfaYears= _mfaYears; 
        private.mtmYears= _mtmYears;
        private.yearsteaching= _yearsteaching;
        private.appText = _appText;
         return private;

          //needs to happen outside the function
          }


// "ContactID"
// _ComPath

// "ContactID"
// "ProgramName"
// "CohortYear"
// "Status"
// "WithdrawalDate"
// "LeaveStartDate"
// "LeaveEndDate"
// "Leave2StartDate"
// "Leave2EndDate"
// "Gender"
// "Race/Ethnicity"
// "MFAYears"
// "MTMFAYears"
// "YearsTeaching"
// "Contact#YearsTeaching"

// ContactID, program, cohortYear, status, withdrawalDate, leaveStDate, leaveEnDate, leave2StDate, leave2EnDate, gender, race, mfaYears, mtmYears, yearsteaching


// ContactID
// program
// cohortYear
// status
// withdrawalDate
// leaveStDate
// leaveEnDate
// leave2StDate
// leave2EnDate
// gender
// race
// mfaYears
// mtmYears
// yearsteaching