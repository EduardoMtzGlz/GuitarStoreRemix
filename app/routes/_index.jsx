import { useLoaderData } from "@remix-run/react"
import {getGuitarras} from "~/models/guitarras.server"

import {getPosts} from "~/models/post.server"
import { getCurso } from "~/models/curso.server"

import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPost from "../components/listado-post"
import Curso from "~/components/curso"

import stylesGuitarras from "~/styles/guitarras.css"
import stylesPosts from "~/styles/blog.css"
import stylesCurso from "~/styles/curso.css"



// export function meta(){

//   return{}
// }

export function links(){

  return[
    {
      rel:"stylesheet", 
      href:stylesGuitarras
    },
    {
      rel:"stylesheet", 
      href:stylesPosts
    },
    {
      rel:"stylesheet", 
      href:stylesCurso
    }
  ]
}

export async function loader(){

  //Ejecuta ambas consultas al mismo tiempo, ya que tanto los posts como las guitarras se mostraran en la página de inicio

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(), 
    getPosts(), 
    getCurso()
  ])
  // const guitarras= await getGuitarras()
  // const posts = await getPosts()

  /*const data = {
    guitarras, 
    posts
  }*/ 


  return {
    guitarras:guitarras.data, //Acceder al data 
    posts: posts.data,
    curso: curso.data    
  }
}

const Index = () => {
  const {guitarras, posts, curso} = useLoaderData()  
  return (   
    
    <>
      {console.log(curso.attributes.titulo)}
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />       
      </main>
      
      <Curso
        curso={curso}
      />
      
      <main className="contenedor">
        <ListadoPost
          posts={posts}
        />
      </main>
    </>
  )
}

export default Index