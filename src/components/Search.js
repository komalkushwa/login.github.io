import React, { useEffect, useState } from 'react'
//import Fooddata from './CourseData'
import coursedata from './CourseData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'
import Nav from 'react-bootstrap/Nav';

const Search = () => {

    const [fdata] = useState(coursedata);

    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);



    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
                
            });

            setCopyData(storedata)
        
        }


        
    }
    




    useEffect(() => {

        setTimeout(() => {
            setCopyData(coursedata);
        }, 3000);

    }, [])


    
        


    

    return (
        <>
     

            

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search here..." />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "linear-gradient(90.04deg, #800080 0.03%, #ffc0cb 99.96%);"}} >Submit</button>
            </Form>


            <section className='iteam_section mt-4 container'>

                <div className='row mt-2 d-flex justify-content-around  align-items-center line'>
                <div className='quiz'>
             <div className='quiz_item'>
                <center><Nav.Link href="all_quiz">Quiz</Nav.Link></center>
                
                
             </div>
             </div>
             <div className='quiz2'>
             <div className='quiz_item'>
             <center><Nav.Link href="paper">Papers</Nav.Link></center>
            </div>
             </div>
             <div className='quiz3'>
             <div className='quiz_item'>
             <center><Nav.Link href="neet">Other</Nav.Link></center>
                
               
                
             </div>
             </div>
             </div>
             

               <center><h2 className='px-4 mt-5 mb-5 quiz_head' style={{ fontWeight: 400 }}>Syllabus</h2></center>

               
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set sdata={fdata} />}
                </div>
                
            </section>

        </>
    )
}

export default Search