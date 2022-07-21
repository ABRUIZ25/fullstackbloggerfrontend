import React, { Component } from 'react'




const BlogsPage = ({
    message, sortField, sortOrder, filterField, filterValue, limit, page, setSortField, setSortOrder, setFilterField, setFilterValue, setLimit, setPage
}) => {
    return (
        <div className="blogs-page">
            <h1>Blogs Page</h1>
            <div className="SortField">
                <label>Sort Field</label>
                <select value={sortField}
                    onChange={(event) => {
                        const newSortField = event.target.value
                        setSortField = { newSortField }
                    }}
                >
                    <option value='title'> Title</option>
                    <option value='author'> Author</option>
                    <option value='createdAt'> Created At</option>
                    <option value='id'> Id</option>

                </select>
            </div>

            <div className="SortOrder">
                <select
                    value={sortOrder}
                    onChange={(event) => {
                        const newSortOrder = event.target.value
                        setSortOrder = { newSortOrder }
                    }}
                >

                    <option value='ASC' > Ascending</option>
                    <option value='DEC' > Desending</option>

                </select>

                <div className="FilterField">
                    <select value={filterField}
                        onChange={(event) => {
                            const newFilterField = event.target.value
                            setFilterField = { newFilterField }
                        }}
                    >
                        <option value="title" >Title</option>
                        <option value="author" >Author</option>


                    </select>

                </div>

                <div className="Filter Value">
                    <input value={filterValue} onChange={(event) => {
                        const newFilterValue = event.target.value
                        setFilterValue = { newFilterValue }
                    }}>
                    </input>

                    <div className="Limit">
                        <input type='number' value={limit} onChange={(event) => {
                            const newLimit = event.target.value
                            setLimit = { newLimit }
                        }} >
                        </input>
                    </div>
                    <div className="page">
                        <input type="number" value={page} onChange={(event) => {
                            const newPage = event.target.value
                            setPage = { newPage }
                        }}>

                        </input>

                    </div>

                </div>
            </div>
            <h3>Server Message:</h3>
            {message.map((blog) => {
                return (
                    <div>
                        <h3>{blog.title}</h3>
                        <p>{blog.text}</p>
                    </div>
                )
            })}
        </div >
    )
}
export default BlogsPage