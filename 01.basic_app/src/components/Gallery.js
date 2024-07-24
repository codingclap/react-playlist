
export function Profile(img){
     return(
          <img src={'images/'+img.url} alt="" />
     );
}



function Gallery(Name){
     return(
          <section>
               <h2>{Name.userName}</h2> 
          </section>
     )
}

export default Gallery