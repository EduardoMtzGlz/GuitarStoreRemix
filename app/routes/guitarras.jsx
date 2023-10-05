import { useLoaderData, Outlet } from "@remix-run/react"
import {getGuitarras} from "~/models/guitarras.server"
import ListadoGuitarras from "../components/listado-guitarras"
import styles from "~/styles/guitarras.css"

//Loader para cargar información de la api
export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data //Este loader retorna el resultado de las guitarras, se utiliza con un useLoaderData

}

//Datos meta del sitio 
export function meta(){ 
  return[
    {
      title:"GuitarStore - Tienda de Guitarras"      
    },
    {
      description: "GuitarStore - Nuestra selecta colección de guitarras"
    }
  ]
}

//Carga de hojas de estilo propias
export function links(){
  return [
    {
      rel:"stylesheet", 
      href: styles

    }
  ]
}

//HTML

const Tienda = () => {
  const guitarras= useLoaderData() //Se accede a los datos de la api con useLoaderData()
  
  
  return (
    <main className="contenedor">
      <ListadoGuitarras
        guitarras={guitarras}
      />

      <Outlet/>
      
    </main>
  )
}

export default Tienda