import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section>
      <h1>Ops, página no encontrada</h1>
      <p>Escribiste algo mal en la barra de direcciones</p>
      <Link to="/selected">Ir a la seleccion</Link>
    </section>
  )
}

export { NotFound }