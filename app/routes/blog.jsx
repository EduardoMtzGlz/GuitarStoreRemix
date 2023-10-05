import { getPosts } from "~/models/post.server"
import { useLoaderData, Outlet } from "@remix-run/react"
import Post from "~/components/post"
import ListadoPost from "../components/listado-post"
import styles from "~/styles/blog.css"

export async function loader(){
  const posts = await getPosts()
  
  return posts.data
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

//Meta de la página

export function meta(){
  return[
    {
      title:"GuitarStore - Blog"
    }, 
    {
      description: "Blog de GuitarStore"
    }
  ]
    
  
}

const Blog = () => {
  const posts = useLoaderData()
  

  return (
    <main className="contenedor">
      <ListadoPost
        posts={posts}
      />

      <Outlet/>
    </main>
  )
}

export default Blog