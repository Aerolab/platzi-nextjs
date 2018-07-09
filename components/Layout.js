import { Link } from '../routes'
import Head from 'next/head'

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props

    return <div>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="width=device-width"/>
      </Head>

      <header><Link route="home"><a>Podcasts</a></Link></header>

      { children }

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }
        header a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </div>
  }
}