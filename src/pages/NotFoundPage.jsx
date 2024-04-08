import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <h1>Not Found</h1>
      <Link to={"/"}>Go to HomePage</Link>
      <p>Comprueba que la ruta es correcta</p>
    </section>
  );
};

export default NotFoundPage;
