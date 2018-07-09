import 'isomorphic-fetch'
import Layout from '../components/Layout'
import PodcastPlayer from '../components/PodcastPlayer'
import Error from './_error'

export default class extends React.Component {

  static async getInitialProps ({ query, res }) {
    let id = query.id
    try {
      let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)

      if( fetchClip.status >= 400 ) {
        res.statusCode = fetchClip.status
        return { clip: null, statusCode: fetchClip.status }
      }

      let clip = (await fetchClip.json()).body.audio_clip

      return { clip, statusCode: 200 }
    } catch(e) {
      return { clip: null, statusCode: 503 }
    }
  }

  render() {
    const { clip, statusCode } = this.props

    if( statusCode !== 200 ) {
      return <Error statusCode={ statusCode } />
    }

    return <Layout title={clip.title}>
      <PodcastPlayer clip={ clip } />
    </Layout>
  }
}