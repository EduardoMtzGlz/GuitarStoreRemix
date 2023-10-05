import imgNosotros from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"


export function meta(){
  return [
    {
        title: "GuitarStore - Nosotros", 
        
    }, 
    {
      description: "Venta de guitarras, blog de música"
    }
  ]    
}

export function links(){
  return[
    {
      rel: "stylesheet", 
      href: styles
    }, 
    {
      rel:"preload", 
      href:imgNosotros, 
      as:"image"
    }
  ]
}

function Nosotros() {
 

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imgNosotros} alt="imagen-nosotros"/>
        <div>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac pulvinar elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam et aliquet massa. Praesent dapibus laoreet nisi, eu tincidunt massa egestas ut. Donec nec nisi risus. Vivamus tortor leo, pulvinar vel semper sit amet, ultrices at nulla. Aenean eget dolor ac elit blandit pharetra quis vitae ante. Vivamus commodo, dolor sit amet placerat tristique, diam nisl sollicitudin massa, sit amet facilisis neque nulla in quam. Nam aliquam nec diam nec scelerisque. </p>

        </div>
      </div>
    </main>
  )
}

export default Nosotros