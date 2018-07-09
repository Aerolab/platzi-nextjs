export default class extends React.Component {
  render() {
    return <div>
      <h1>¡Hola Platzi!</h1>
      <p>Bienvenidos todos al curso de Next.Js</p>

      <img src="/static/platzi-logo.png" alt="Platzi" />

      <style jsx>{`
        h1 {
          color: red;
        }
        :global(div p) {
          color: green;
        }
        img {
          max-width: 50%;
          display: block;
          margin: 0 auto;
        }
      `}</style>

      <style jsx global>{`
        body {
          background: white;
        }
      `}</style>
    </div>
  }
}