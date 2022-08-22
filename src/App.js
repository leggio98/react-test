import React, { useState} from "react";
import "./App.css";
import Posts from "./Posts";
import Pagination from "./Pagination";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Post from "./Post";
import useFetch from "./useFetch";

const App = () => {
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const { data, error, loading:dataLoading } = useFetch("https://jsonplaceholder.typicode.com/posts");


  if (error) return <div>An error has occured</div>;

  if (dataLoading) return <div>Loading...</div>;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="text-primary mb-3 text-center">My page </h1>
              <LandingPage />
            </div>
          }
        />

        <Route
         exact path="/posts"
          element={
            <div>
              <Navbar />
              <Posts posts={currentPosts} loading={loading} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
              />
            </div>
          }
        />
        
            <Route exact path='/posts/:id' element={<div>
                <Navbar />
                <Post/>
                </div>
                }/>
      </Routes>
    </div>
  );
};

export default App;
