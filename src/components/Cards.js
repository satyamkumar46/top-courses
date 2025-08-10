import React, { useState } from 'react'
import Card from './Card'

const Cards=(props) => {

    let courses=props.courses;
    let category=props.category;
    const [likedCourses,setLikedCourses]=useState([])

   // console.log(courses);

    const getCourses=()=>{

        if(category==="All"){

         let allCourses=[];

         Object.values(courses).forEach(array =>{
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
         })
         console.log(courses)

         return allCourses;
        }
        else{
            return courses[category];
        }

    }
     
    return (
        
        <div className='flex flex-wrap justify-center gap-5 mb-4'>
            {
                getCourses().map( (course) =>(
                    <Card 
                    key={course.id} 
                    course={course} 
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards
