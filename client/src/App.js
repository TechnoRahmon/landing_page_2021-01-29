import Form from './Form';
import './App.css';

function App() {


    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
      });


  return (
    <div className="App">


      {/* header */}
      <div className="header ">
          < div className="container">
              {/* logo */}
              <div className="row">
                <div className="col s12 left l1 ">
                    <img  width="100" height="100" src="http://192.168.1.6:3000/image/logo.png" alt=""/>

                </div>
              </div>

              {/* text */}
              <div className="row">
                <div className="col s12 left l8 ">
                    <h1>Become a <span>Web Developer</span></h1>
                    
                    <h4>Get job-ready in just 18 weeks</h4>

                    <p className="header-des">An immersive, online program to prepare you for a successful career in web development.</p>
                </div>
              </div>

               {/* buttons */}              
              <div className="row">
                <div className="col s12 left l8 ">
                    <button className="call-btn waves-effect waves-light btn-large deep-orange" ><b><a href="https://meetings.hubspot.com/sl-melad" className="white-text" target="_blank">Book A Call</a> </b> </button>
                    <button className="Download-brochure-btn waves-effect waves-light btn-large grey lighten-5 deep-orange-text"> <b><a href="#featuerSection" className="deep-orange-text"> Apply Now</a></b></button>
                <p className="green-text header-p-2 "><b>Hurry up, number of seats are limited</b></p>
                
                </div>
              </div>


              
          </div>
      </div>


      {/* featuer section & rollup */}


    <div className=" featuerSection" id="featuerSection">
            <div className="container ">
                <div className="row featureRow">
                {/* form */}
        
                  <Form></Form>


                {/* bootcamp info */}
                    <div className="col s12 left l6 offset-l1 featureBox">
                        <h3 className="white-text left">
                            <span className="deep-orange-text">Full-stack </span>
                          Web Development Bootcamp</h3> 
                      
                        <div className="row rowlist">

                        <div className="col s12 l6 featureList">



                        <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>100% online</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>16 weeks duration</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>Industry mentors</p>  
                                </div>
                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>252 hours of live learning</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>500+ hours of assignments</p>  
                                </div>
                      

                          </div>

                            <div className="col s10 offset-s1 l6 featureList">

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>10 real industry projects</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>1 capstone project</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>Portfolio building</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>100+ global mentors</p>  
                                </div>

                                <div className="box">
                                    <i className="material-icons">check</i>
                                    <p>7500+ career transitions</p>  
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
    </div>


      




        {/* section 2 */}
    <div  className="container section-2">
        <div className="row">
   
                <div className="col s12 l5 offset-l1 section-2-text"> 
                    <h3>Build the most in demand Skills</h3>
                      <p>As a developer, you get to be the person that translates your passion into a functional website or web application to share with the world.</p>
                      <p><br/></p>
                      <p>The technology boom has created a huge demand for skilled tech professionals. By 2020 , 825,000 vacant European ICT jobs are projected. <span >Traditional 4-year degree universities struggle to fill the talent pipeline.</span></p>
                      <p><span ><br/></span></p>
                      <p><span >Our courses were designed with this in mind. Our aim is to produce practically skilled ‘career-ready’ developers in 16 weeks!</span></p>
                  </div>
                  <div className="col s12 l5">
                      <div className="img-box-section2">
                            
                            
                      <div className="video-section col s12 l12 ">
                        <video width="600" height="600" autoPlay muted controls loop={true}>
                                <source src="http://192.168.1.6:3000/image/video2.mp4" type="video/mp4"/>
                            </video>
                        </div>
                            {/* <img className="widget widget-image" data-original="https://images.assets-landingi.com/TAJpx0lL/20611_Converted_.png" src="https://images.assets-landingi.com/ID0m16UaVh9YwRGC/20611_Converted_.png" srcset="https://images.assets-landingi.com/ID0m16UaVh9YwRGC/20611_Converted_.png 1x, https://images.assets-landingi.com/TAJpx0lL/20611_Converted_.png 2x" alt=""/> */}

                      </div>
                  </div>
           
           

            

        </div>
    </div>

 {/* our Partner */}
        
          <div className="container partnerSection">
                <div className="row">
                    <div  className="col s12">
                      <h3 className="ourPartnerH3">Our hiring partners</h3>
                    </div>
                </div>

                <div className="row ">
                    <div className="col s12 l2 offset-l2 ">


                        <img id="VF9fxglVWE7VWP765uGgJgag5stmNu5d" width="180" height="95" className="widget widget-image" data-original="https://images.assets-landingi.com/VBmvJI01/cleeven.jpg" src="https://images.assets-landingi.com/hDCq8DBFx4VdAHTX/cleeven.jpg" srcset="https://images.assets-landingi.com/hDCq8DBFx4VdAHTX/cleeven.jpg 1x, https://images.assets-landingi.com/VBmvJI01/cleeven.jpg 2x" alt=""/>
                    </div>


                    <div className="col s12 l2 ">
                        <img id="D7MmokkDmItRrwBeSDGFDA5M9avxbJw1" width="180" height="57" className="image2" data-original="https://images.assets-landingi.com/FZNgNCQA/accenture.jpg" src="https://images.assets-landingi.com/xKZehpPv8amJKuSA/accenture.jpg" srcset="https://images.assets-landingi.com/xKZehpPv8amJKuSA/accenture.jpg 1x, https://images.assets-landingi.com/FZNgNCQA/accenture.jpg 2x" alt=""/>
                    </div>
                       

                    <div className="col s12 l2 ">

                       <img id="S1FTG9SSVaJBXt20SWT2zKKpgTGAo9Mk" width="148" height="95" className="widget widget-image" data-original="https://images.assets-landingi.com/ydwyG3iy/capgemini.jpg" src="https://images.assets-landingi.com/T3lA5j11bsaS6d6P/capgemini.jpg" srcset="https://images.assets-landingi.com/T3lA5j11bsaS6d6P/capgemini.jpg 1x, https://images.assets-landingi.com/ydwyG3iy/capgemini.jpg 2x" alt=""/>
                    </div>
                    <div className="col s12 l2 ">
                       <img id="Rro57Nmkio7LCzmKBhcTC4Fx49BkTz7P" width="122" height="78" className="widget widget-image" data-original="https://images.assets-landingi.com/CIEna9NV/ey.jpg" src="https://images.assets-landingi.com/uzxK3i7XXlixpv9f/ey.jpg" srcset="https://images.assets-landingi.com/uzxK3i7XXlixpv9f/ey.jpg 1x, https://images.assets-landingi.com/CIEna9NV/ey.jpg 2x" alt=""/>
                      </div>
                          
                         
                  </div>

                  <div className="row">

                    <div className="col s12 l2 offset-l3">
                        <img id="A1zrlTXqxsZW6kHE6l3Wfq1EL2UL0wS5" width="175" height="39" className="widget widget-image" data-original="https://images.assets-landingi.com/pGaCVP3t/barclays.jpg" src="https://images.assets-landingi.com/HDXLYTRojF4Fi5Zz/barclays.jpg" srcset="https://images.assets-landingi.com/HDXLYTRojF4Fi5Zz/barclays.jpg 1x, https://images.assets-landingi.com/pGaCVP3t/barclays.jpg 2x" alt=""/>
                    </div>
               
                    <div className="col s12 l2 ">                   
                        <img id="UvgWKM8aHytEgl4fGndfkSvHFCDAVDLC" width="138" height="57" className="widget widget-image" data-original="https://images.assets-landingi.com/sc9BRpET/nielsen.jpg" src="https://images.assets-landingi.com/SmBL8xnqlIn4tZmi/nielsen.jpg" srcset="https://images.assets-landingi.com/SmBL8xnqlIn4tZmi/nielsen.jpg 1x, https://images.assets-landingi.com/sc9BRpET/nielsen.jpg 2x" alt=""/>
                    </div>
                    <div className="col s12 l2 ">
                        <img id="FLsl2VLrysnTWr4SGdTeNhC1lneRh5ko" width="168" height="53" className="widget widget-image" data-original="https://images.assets-landingi.com/mJTKNzDQ/shortlist.jpg" src="https://images.assets-landingi.com/etx5FCr78bPyK0PG/shortlist.jpg" srcset="https://images.assets-landingi.com/etx5FCr78bPyK0PG/shortlist.jpg 1x, https://images.assets-landingi.com/mJTKNzDQ/shortlist.jpg 2x" alt=""/>
                    </div>






                      </div>
                  

               
   
            </div>
       


   {/* Section3 */}
    
    <div className="container section-3">
      <div className="row">  
        

        <div className="col s12 l2 offset-l1">
          <div className="img-box-s3">
                      <img  width="188" height="188" className="widget widget-image" data-original="https://images.assets-landingi.com/Twi6JSed/idea_1_.svg" src="https://images.assets-landingi.com/O3ckAGxoDL65F13H/idea_1_.svg" srcset="https://images.assets-landingi.com/O3ckAGxoDL65F13H/idea_1_.svg 1x, https://images.assets-landingi.com/Twi6JSed/idea_1_.svg 2x" alt=""/>
          </div>
  
        </div>

              <div  className="col s12 l8 grey lighten-4 section-3-text">
              <h3>What will you be able to do after the program?</h3>
                     <ol>
                       <li>Create responsive web pages for modern browsers using HTML, CSS and JavaScript.</li>
                       <li>Write secure full-stack applications using NodeJS &amp; MongoDB and deploy them to cloud-based services like Heroku.</li>
                       <li>Consume web application programming interfaces (APIs) from third-party sites such as Twitter, Google, or Yelp.</li><li>Build a RESTful API using a technology like Express.</li><li>Build a richly interactive, front-end single-page application using a modern framework library like React.</li><li>Optimise the functionality of apps using React Router and Redux</li><li>Run test cycles on your application using Jest/Enzyme and MochaJS</li><li>Collaborate as a team using Git and GitHub, widely accepted collaboration practices, and an Agile development workflow.</li><li>Implement common data structures encountered in technical interview situations, such as linked lists and trees.</li><li>Solve algorithm challenges and analyze the computational complexity of algorithms using Big O notation.</li>
                      </ol>
                </div>
        </div>
    </div>


    {/* section4 content*/}

    <div className="container">
            
            <div className="row">
                <div className="col s12 ">
                    <h2>What you will learn</h2>
                    <p>You will learn what industry needs - from practioners</p>
                </div>
            </div>

    

            <div className="row sprintContainer">

                <div className="col s12 l5  card sprintCard ">
                   <div className="col s1 l3 m4 sprintNumber">
                        <p>Sprint</p>
                        <span>1</span>
                   </div>
                    <div className="col s8 l9   sprintContent">
                        <h6>Foundations of Web Development</h6>
                        <p>Build your first website and learn how to use the basic building blocks of every website - HTML & CSS</p>  
                    </div>
                </div>

                <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l3 sprintNumber">
                   <p>Sprint</p>
                        <span>2-3</span>
                   </div>
                    <div className="col s7 l9 sprintContent">
                        <h6>Foundations of Web Development</h6>
                        <p>Build your first website and learn how to use the basic building blocks of every website - HTML & CSS</p>  
                    </div>
                </div>
            </div>



            <div className="row sprintContainer">
            <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l3 sprintNumber">
                        <p>Sprint</p>
                        <span>4-6</span>
                   </div>
                    <div className="col s7 l9   sprintContent">
                        <h6>Foundations of JavaScript</h6>
                        <p>Learn Javascript programming to build beautiful and interactive websites</p>  
                    </div>
                </div>

                <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l3 sprintNumber">
                   <p>Sprint</p>
                        <span>7-9</span>
                   </div>
                    <div className="col s7 l9 sprintContent">
                        <h6>React & Advanced React</h6>
                        <p>Familiarise yourself with React JS, the most popular front end library, responsible for the functioning of popular apps like Netflix & Facebook</p>  
                    </div>
                </div>
            </div>



            <div className="row sprintContainer">
                            <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l2 sprintNumber">
                        <p>Sprint</p>
                        <span>10</span>
                   </div>
                    <div className="col s8 l10   sprintContent">
                        <h6>Data Structures & Algorithms</h6>
                        <p>Learn the fundamentals of data structures and algorithms to improve the time and space required for working of web applications.</p>  
                    </div>
                </div>

                <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l3 m5 sprintNumber">
                   <p>Sprint</p>
                        <span className="sprintNumber-small">11-14</span>
                   </div>
                    <div className="col s7 l9 sprintContent">
                        <h6>APIs, Databased & Advanced App Dev</h6>
                        <p>Learn how to use MongoDB and NodeJs to create applications that fetch and store data in real-time.</p>  
                    </div>
                </div>
            </div>

            <div className="row sprintContainer">
            <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l4 m5 sprintNumber">
                        <p>Sprint</p>
                        <span className="sprintNumber-small">15-16</span>
                   </div>
                    <div className="col s7 l8   sprintContent">
                        <h6>Testing Optimization & Scaling</h6>
                        <p>Learn how to test, scale and write optimal code that improves your application’s functionalities and makes it better.</p>  
                    </div>
                </div>

                <div className="col s12 l5  card sprintCard ">
                   <div className="col s3 l4 m5 sprintNumber">
                   <p>Sprint</p>
                        <span className="sprintNumber-small">17-18</span>
                   </div>
                    <div className="col s7 l7 sprintContent">
                        <h6 className="last-sprint">Capstone Project</h6>
                      
                    </div>
                </div>
            </div>

        </div>



 {/* section5 steps*/}


        <div className="container">
                <div className="row">
                    <div className="col s12 ">
                            <h2>Admissions</h2>
                            <p>Here is a quick overview of our admission process</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 l4 ">
                        <h4 className="light-blue-text"><b>Step 1</b></h4>
                        <p>Apply to Codify College - Share your basic profile details</p>
                    </div>

                    <div className="col s12 l4 ">
                        <h4 className="light-blue-text"><b>Step 2</b></h4>
                        <p>Take our Pre-work course and understand the basics of Web Development (8 hrs)</p>
                    </div>

                    <div className="col s12 l4 ">
                    <h4 className="light-blue-text"><b>Step 3</b></h4>
                        <p>Complete the Admissions Process - Choose the start date & pay the tuition fee. You are in!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 apply-box">
                            <p>Ready to Start your Career as a Full Stack Developer?</p>
                            
                            <button className="Download-brochure-btn waves-effect waves-light btn-large grey lighten-5 deep-orange-text"> <b><a href="#featuerSection" className="deep-orange-text"> Apply Now</a></b></button>
                    </div>
                </div>

        </div>
    

 {/* section6 fees */}

 <div className="container section-6">
        <div className="row">
            <div className="col s12">
                <h2 className="section-6-h2">Course schedule & Fees</h2>
            </div>
        </div>
        {/* fullstack bootcamp */}
        <div className="row card fees-section">
            <div className="col s12 l4 fees-section-1 fees ">
                    <p>Aug 3, 2021</p>
                    <span className="red-text">Enrollment deadline: July 15, 2021</span>
            </div>

            <div className="col s12 l3 fees-section-2">
                <span>Full-Stack Developer <br/>Online 16 Week</span>
            </div>

            <div className="col s12 l2 fees-section-3 ">
               <span className="green-text price-1"><b>4,000 €</b>  </span>
                <span><s className="red-text"> 5,000 €</s>  
                </span>
            </div>  

            <div className="col s12 l3">
                <button className="Download-brochure-btn waves-effect waves-light btn-large deep-orange"> <b><a href="#featuerSection" className="white-text"> Apply Now</a></b></button>
            </div>
        </div>

        {/* FrontEnd bootcamp */}
        <div className="row card fees-section">
            <div className="col s12 l4 fees-section-1 ">
                    <p>Aug 3, 2021</p>
                    <span className="red-text">Enrollment deadline: July 15, 2021</span>
            </div>

            <div className="col s12 l3 fees-section-2">
                <span>Front-End Developer <br/>Online 16 Week</span>
            </div>

            <div className="col s12 l2 fees-section-3 ">
               <span className="green-text price-1"><b>2,400 €</b>  </span>
                <span><s className="red-text"> 3,500 €</s>  
                </span>
            </div>  

            <div className="col s12 l3">
                <button className="Download-brochure-btn waves-effect waves-light btn-large deep-orange"> <b><a href="#featuerSection" className="white-text"> Apply Now</a></b></button>
            </div>
        </div>
    </div>


    {/* section about bootcamp */}
    <div className=" clearfix about-bootcamp">
        <div className="row">
            <div className="col s12 l6 background-imge1">
                <h4>Front End Developer </h4>
                <div className="imge-box ">
                    <img src="http://192.168.1.6:3000/image/font-end.jpg" alt=""/>
                </div>
            </div>   
             <div className="col s12 l6  background-imge2">
             <h4>Full-Stack Developer </h4>
             <div className="imge-box ">
                    <img src="http://192.168.1.6:3000/image/full-stack.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>




 {/* section7 FAQs  */}
 <div className=" FAQs-section">
        <h3>FAQs</h3>
 <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">add</i>I dont know how to code, can I still join?</div>
      <div class="collapsible-body"><span>You can join even if you don't know how to code. A basic technical bent of mind is needed</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">add</i>What are my payment options?

</div>
      <div class="collapsible-body"><span>Learn the concepts of testing, optimisation and scale required forfullstack developmentLearn the concepts of testing, optimisation and scale required for full stack developmentLearn the concepts of testing, optimisation and scale required forfullstack development</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">add</i>Will there be career assistance?</div>
      <div class="collapsible-body"><span>At the end of the program, we will be sharing job opportunities with you, based on your performance in the program</span></div>
    </li>
  </ul>
 </div>

    </div>
  );
}

export default App;
