import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/post.server"
import { formatearFecha } from "~/utils/helpers"
import styles from "~/styles/blog.css"

export async function loader({params}){
  const {postUrl} = params
  const post= await getPost(postUrl) 
  
  if(post.data.length === 0){
    throw new Response("", {
      status: 404, 
      statusText: "Entrada no encontrada"
    })
  }
  return post

}

export function meta({data}){
  if(data.status === 404 ){
    return[
      {
        title: `Entrada no encontrada`
      }
    ]
  }
  
  return[
    {
      title: `GuitarStore - ${data.data[0].attributes.titulo}`
    },
    {
      description: `Guitarras, blog ${data.data[0].attributes.titulo}`
    }
  ]
}

export function links(){
  return[{
    rel:"stylesheet", 
    href: styles
  }]
}


const Post = () => {
  const post= useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes
  

  return (
    <article className="contenedor post mt-3">
      <img className="imagen" src={`${imagen.data.attributes.url}`} alt={`entrada-blog-${titulo}`}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">Publicado el: {formatearFecha(publishedAt) }</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Post