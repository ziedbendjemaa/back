import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-light text-center text-white">
 
  <div class="container p-4 pb-0">
    
    <section class="mb-4">
     
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="https://www.facebook.com/zied.zaydoun.3511"
        role="button"
        ><i class="fab fa-facebook-f">FaceBook</i
      ></a>

      
     

      
      

      
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="https://www.instagram.com/zied_ben_djemaa/?hl=fr"
        role="button"
        ><i class="fab fa-instagram">Instagram</i
      ></a>

     
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="https://www.linkedin.com/in/zied-ben-djemaa-782050229/"
        role="button"
        ><i class="fab fa-linkedin-in">LinkedIn</i
      ></a>
    
      <a
              style={{backgroundColor: "#333333"}}

        class="btn btn-primary btn-floating m-1"
        
        href="https://github.com/ziedbendjemaa"
        role="button"
        ><i class="fab fa-github">GitHub</i></a>
    </section>
   
  </div>
  


  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:Zied Ben Djemaa
    
  </div>
  
</footer>
    </div>
  )
}

export default Footer