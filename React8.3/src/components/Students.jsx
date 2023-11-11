import React from 'react';
import Score from './Score';

function Students({props}) {


    return ( 
   <div>
    
      <h1> students name: {studentObjects.name} </h1>
      <h2> student bio: {studentObjects.bio}</h2>
    <div>
      
      
           {/*{console.log(studentObjects)}*/}
           {studentObjects.scores.map((score,index) => (
            <Score ScoreObject={score} key={index} />
        ))}
        
            </div> 
         </div>
)};
        
                   
            
        
        
        


export default Students;