import { Link } from "@remix-run/react"
import {formatearFecha} from "~/utils/helpers"

export default function Post({post}) {
    const {titulo, contenido, url, publishedAt, imagen} = post
    return (
    <article className="post">
        <img className="imagen" src={`${imagen.data.attributes.formats.small.url}`} alt={`entrada-blog-${titulo}`}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">Publicado el: {formatearFecha(publishedAt) }</p>
            <p className="resumen">{contenido}</p>
            <Link to={`/post/${url}`} className="enlace">Leer entrada</Link>

        </div>
    </article>
  )
}
