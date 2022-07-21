import('./card.css')

function BlogMangerCard(props) {
    const blog = props.blog
    console.log(blog)

    return (
        <div className="page" >
            <div className='blog-card'>
                <h1>Blog Manger Card</h1>
                <h4>{blog.title}</h4>
                <h4>{blog.id}</h4>
                <h4>{blog.author}</h4>
                <h4>{blog.createdAt}</h4>
                <button onClick={() => {
                    props.deleteBlog(props.blog.id)
                }}>Delete</button>
            </div>
        </div>
    )
}

export default BlogMangerCard