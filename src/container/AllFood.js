import React, { useState } from "react";
import restaurantsList from "../assets/restaurants.json";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const AllFood = () => {
  // const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = restaurantsList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="viewall">
      <h2>Vegan Food</h2>
      <div className="all">
        {currentPosts.map((data, index) => {
          return (
            <div>
              {data.category === 0 && (
                <div className="card">
                  <Link to={`/resume/${data.placeId}`}>
                    <img alt={data.thumbnail} src={data.thumbnail} />
                  </Link>
                  <h3>{data.name}</h3>

                  <p>{data.rating}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          postsPerpage={postsPerPage}
          totalPosts={restaurantsList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllFood;
