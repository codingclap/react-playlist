import firstImage from '../assets/images/image-5.jpg';
import secondImage from '../assets/images/image-7.jpg';
import thirdImage from '../assets/images/image-6.jpg';

export default function MainContent() {
     return (
          <>
          <div class="container py-5">
                     
                     <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                          <div class="container-fluid py-5">
                               <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                               <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                               <button class="btn btn-primary btn-lg" type="button">Example button</button>
                          </div>
                     </div>
 
                     <div class="row align-items-md-stretch py-5">
                          <div class="col-md-6">
                               <div class="h-100 p-5 text-bg-dark rounded-3">
                                    <h2>Change the background</h2>
                                    <p>keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                                    <button class="btn btn-outline-light" type="button">Example button</button>
                               </div>
                          </div>
                          <div class="col-md-6">
                               <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                                    <h2>Add borders</h2>
                                    <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                                    <button class="btn btn-outline-secondary" type="button">Example button</button>
                               </div>
                          </div>
                     </div>
  
                </div>


               <div className="container pb-5" >
                    <div className="row row-gap-5">
                         <div className="col-lg-4">
                              <div class="card">
                                   <img src={thirdImage} class="card-img-top" alt="..." />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-4">
                              <div class="card">
                                   <img src={thirdImage} class="card-img-top" alt="..." />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-4">
                              <div class="card">
                                   <img src={thirdImage} class="card-img-top" alt="..." />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               
          </>
     );
}