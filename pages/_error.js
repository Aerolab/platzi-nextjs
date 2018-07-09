import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <Layout title="Oh no :(">
        { statusCode === 404 ?
          <div className="message">
            <h1>Esta página no existe :(</h1>
            <p><Link href="/"><a>Volver a la home</a></Link></p>
          </div>
          :
          <div className="message">
            <h1>Hubo un problema :(</h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
         }
         <style jsx>{`
          .message {
            padding: 100px 30px;
            text-align: center;
          }
          h1 {
            margin-bottom: 2em;
          }
          a {
            color: #8756ca;
          }
         `}</style>
      </Layout>
    )
  }
}