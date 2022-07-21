import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';


function PostBlogPage(props) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    // * The Submit button should call props.blogSubmit(blogData) onClick and then programatically redirect to the home page.

    return (
        <div>
            <input type='text' value={title} onChange={(event) => {
                const newText = event.target.value
                setText = { newText }
            }} >title</input>

            <input type='text' value={author} onChange={(event) => {
                const newTitle = event.target.value
                setTitle = { newTitle }
            }}>author</input>

            <input type='text area' value={text} onChange={(event) => {
                const newAuthor = event.target.value
                setAuthor = { newAuthor }
            }}>text</input>

            <button >Submit</button>


        </div>
    )

}

export default PostBlogPage