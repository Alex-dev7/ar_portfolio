import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './blogContent.scss'

function BlogContent({data}) {
  return (
    <div className='bog-content-container'>
        <h1>{data.title}</h1>
        {data.tags.map((tag) => (
            <span> {tag } </span>
        ))}
        <p className='dotted-line'></p>
        <Markdown rehypePlugins={rehypeRaw}>{data.content}</Markdown>
        <p className='dotted-line'></p>

        {/* <img className='bottom-image' src={data.images[2]} alt={`image of ${data.title}`}/> */}
        <div className='code-block'>
          <Markdown rehypePlugins={rehypeRaw}>
            {data.code}
          </Markdown>
        </div>
        <p style={{}}>Posted on: {data.date}</p>
    </div>
  )
}

export default BlogContent