"use strict"; 

   let submissions = [
    {
        name: "Jane", 
        score: 95,
        date: "2020-01-24",
        passed: true
    },
   {
        name: "Joe", 
        score: 77,
        date: "2018-05-14",
        passed: true
    },
     {
        name: "Jack", 
        score: 59,
        date: "2019-07-05",
        passed: false
    },
     {
        name: "Jill", 
        score: 88,
        date: "2020-04-22",
        passed: true
    },  
    ];

    console.log(submissions); 

    function addSubmission (array, newName, newScore, newDate) {
        let submission = {
            name: newName,
            score: newScore, 
            date: newDate,  
            passed: newScore >= 60
        }  
       console.log(submissions.push(submission)); 
    }
 
    function deleteSubmissionbyIndex (array, Index) {
        
        
        submissions.splice(Index, 1);
        console.log(submissions); 
         

    }   

    function deleteSubmissionByName (array, name) {
        let index = array.findIndex(student => student.name === name) 
        submissions.splice(index, 1); 
        console.log(submissions);   
    }

    function editSubmission (array, index, score) {
        submissions[index].score = score; 
        submissions[index].passed = score >= 60; 
        console.log(submissions); 
    }

    function findSubmissionByName (array, name) {
        let findobject = array.find (element => element.name === name);  
        console.log(findobject); 
    }

    function findLowestScore (array) {
        let scoreArray = array.map(a => a.score) 
        let lowScore = scoreArray[0]; 
        scoreArray.forEach(function(score){
            if (score <= lowScore) {
                lowScore = score; 
            } 

        }) 
        let lowestScoreObject = array.find (element=>element.score === lowScore); 
        console.log(lowestScoreObject); 
    }

    function findAverageScore (array) {
        let scoreArray = array.map(a => a.score); 
        let total = 0; 
        let finalTotal = 0; 
        for (let score of scoreArray) {
            total += score    
        } 
        finalTotal = total / scoreArray.length; 
        let roundTotal = Math.round(finalTotal * 100) / 100; 
        console.log(roundTotal); 
    }

//filter passing score
   function filterPassing (array) {
    console.log("The passing scores are:");
    console.log(array.filter(element => element.passed === true));
}
// call filter passing scores
filterPassing(submissions);


// 90 and above function
    function filter90AndAbove (array) {
    console.log("These scores are 90 and above:");
    console.log(array.filter(element => element.score >= 90));
}


        
            


    addSubmission(submissions,"John", 86, "2019-07-28"); 
    deleteSubmissionbyIndex(submissions, 1); 
    deleteSubmissionByName(submissions, "Jack"); 
    editSubmission(submissions, 2, 70); 
    findSubmissionByName (submissions, "Jane");  
    findLowestScore (submissions); 
    findAverageScore (submissions); 
    filterPassing (submissions); 
    filter90AndAbove (submissions); 





