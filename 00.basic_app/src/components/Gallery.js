 
export function Profile(image){
     return(
          <img src={image.firstImage} alt="" />
     );
}



function Gallery(profile){
     return(
          <>
          <section>
               <h2>{profile.name}</h2> 
          </section>

          
          </>
     )
}

export default Gallery