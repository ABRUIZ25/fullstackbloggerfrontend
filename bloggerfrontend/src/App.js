import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import BlogsPage from "./Pages/Blogs";
import PostBlogPage from "./Pages/PostBlogPage";
import BlogManager from "./Pages/BlogManager";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverJSON, setServerJSON] = useState({ message: [] });

  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValueField] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // const [editTitle, setEditTitle] = useState('')
  // const [editAuthor, setEditAuthor] = useState('')
  // const [editText, setEditText] = useState('')
  // const [editBlogId, setEditBlogId] = useState()

  //editTitle, editAuthor, editText, and editBlogId

  const [adminBlogList, setAdminBlogList] = useState([]);
  const [adminBlogsLoading, setAdminBlogsLoading] = useState(false);

  useEffect(() => {
    const fetchAdminBlogList = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/admin/blog-list`);
      const json = await apiResponse.json();
      setAdminBlogList(json);
      return json;
    };
    fetchAdminBlogList();
  }, [adminBlogsLoading]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);

  const blogSubmit = async (blog) => {
    const url = `${urlEndpoint}/blogs/blog-submit`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const responseJSON = await response.json();
  };

  const fetchSingleBlog = async (blogId) => {
    const url = `${urlEndpoint}/blogs/single-blog/${blogId}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/blogs"
            element={
              <BlogsPage
                message={serverJSON.message}
                sortField={setSortField}
                sortOrder={setSortOrder}
                filterField={setFilterField}
                filterValue={setFilterValueField}
                limit={setLimit}
                page={setPage}
              />
            }
          ></Route>

          <Route
            path="/blog-manager"
            element={
              <BlogManager
                adminBlogList={adminBlogList}
                adminBlogsLoading={adminBlogsLoading}
                fetchSingleBlog={fetchSingleBlog}
                urlEndpoint={urlEndpoint}
              />
            }
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
