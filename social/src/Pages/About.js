import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import './About.css';
export default function About() {
  return (
    <div>
        <Navbar/>
          <div className='text-center mx-auto w-80'>
            <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649315522/Sahyog__2_-removebg-preview_hp3d2v.png' alt='...' className='my-5 major_logo'></img>
            <h1 className='mt-5'>About Us</h1>
            <div className='mx-auto w-75'>
            <p className='h4'>Sahyog is India's leading non-profit non-govermental organization which is constantly making efforts to do welfare for the needful. We try to reach every needy citizen. We are trying to create an ecosystem or platform where other NGO's and donor's can collaborate and thus increase their reach to more and more people and most of the needful can get benefit from this programme.</p>
            <br></br>
            <p className='h5'>We accept any kind of donation whether it be old books, old clothes, food or eatables as donation either for stray animals or poor people , or money donation which can be spent for welfare of the society.</p>
            <div className='row mt-5'>
                <div className='card mx-auto w-80'>
                    <div className='card-body'>
                      <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649912859/idea_abjujl.png' alt='..' className='img_pos'></img>
                        <h2 className='mt-4'>Education:</h2>
                        <p className='h5'>Every child deserves access to education. Therfore, through several campaigns we are trying to educate childrens and spread awareness among them about it's importance and give them the eternal gift of education.</p>
                        <h2>
                          Come, Join our mission to educate every last child!!
                        </h2>
                    </div>
                </div>
                <div className='card mx-auto w-80'>
                    <div className='card-body'>
                    <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649913493/schedule_udzaxr.png' alt='..' className='img_pos1'></img>
                        <h2 className='mt-4'>Health and Nutrition:</h2>
                        <p className='h5'>Every citizen deserves access to healthy and nutritious food. Therfore, several food distribution campaigns and distribution of food products we are trying to remove hunger and also awaring them about the good practices of health and hygiene through our workshops.</p>
                        <h2>
                        Come, join our mission to guarantee good Health & Nutrition to Everyone!!
                        </h2>
                    </div>
                </div>
                <div className='card mx-auto w-80'>
                    <div className='card-body'>
                    <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649913858/33120749_xscxja.jpg' alt='..' className='img_pos1'></img>
                        <h2 className='mt-4'>Disaster Relief:</h2>
                        <p className='h5'>Every individual deserves help and support during any crisis situation like Covid-19,socio-economic conditions,unplanned urbanization etc, because the poor individuals are most vulnerable. Therfore, we have several releif campaigns and programmes to reach out them and help them.</p>
                        <h2>
                        Come, join our mission to ensure Provision of Humanitarian Relief to Every Individual!
                        </h2>
                    </div>
                </div>
                <div className='card mx-auto w-80'>
                    <div className='card-body'>
                    <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649914001/animal-care_qm73wi.png' alt='..' className='img_pos1'></img>
                        <h2 className='mt-4'>Animals:</h2>
                        <p className='h5'>Stray animals also deserves better living. Atleast their basic necessities like food and warmth during winters must be fulfilled. Therfore, we try to our full potential to cater their needs.</p>
                        <h2>
                          Come, Join our mission to provide basic amenities to the animals!!
                        </h2>
                    </div>
                </div>
                <div className='card mx-auto w-80'>
                    <div className='card-body'>
                    <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649914094/elderly_y5sxp2.png' alt='..' className='img_pos1'></img>
                        <h2 className='mt-4'>Elderly Citizens:</h2>
                        <p className='h5'>Every elderly citizen deserves love and care but unfortunately we know some of elderly citizen are homeless. We try to take care of their needs to the full of their potential. And help them to settle in the Vridhashrams.</p>
                        <h2>
                          Come, Join our mission to cater the needs of Elderly people!!
                        </h2>
                    </div>
                </div>
                <div className='card mx-auto w-80'>
                    <div className='card-body'>
                    <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649914187/partnership_z3yohh.png' alt='..' className='img_pos1'></img>
                        <h2 className='mt-4'>Physically Challenged :</h2>                        
                        <p className='h5'>Physically Challenged persons are most vulnerable and therfore they need very much care and support. If their disease is curable we raise funds to cure them, else we try give them any kind support they need.</p>
                        <h2>
                          Come, Join our mission to help every Physically Challenged Individual!!
                        </h2>
                    </div>
                </div>
            </div>

            </div>
          </div>
        <Footer />
    </div>
  )
}
