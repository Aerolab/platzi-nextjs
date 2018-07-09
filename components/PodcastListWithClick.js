import Link from 'next/link'
import slug from '../helpers/slug'

export default class extends React.Component {
  render() {
    const { podcasts, onClickPodcast } = this.props

    return <div>
      { podcasts.map((podcast) => (
        <a href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(podcast.title)}.${podcast.id}`}
          className='podcast' key={podcast.id}
          onClick={ (event) => onClickPodcast(event, podcast) }>
          <h3>{ podcast.title }</h3>
          <div className='meta'>
            { Math.ceil(podcast.duration / 60) } minutes
          </div>
        </a>
      )) }

      <style jsx>{`
        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  }
}