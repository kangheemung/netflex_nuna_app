import React,{useState,useEffect}from 'react';
import './MoviePage.style.css';
import { Row, Col, Container, Alert , Spinner} from 'react-bootstrap';
import { useSearchMovieQuery} from '../../hook/useSearchMovie';
import {useDetailsMovieQuery} from '../../hook/useMovieDetail';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Feedback from 'react-bootstrap/esm/Feedback';
// import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
//경로 2가지
//nav 바에서 클릭해서 온 경우 =>popularMovie 보여주기
//keyword입력해서 온경우 =>keyword와 관련된 영화들을 보여줌
//page nation설치
//page state만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page 까지 넣어서 fetch
const MoviePage = ({movie}) => {

  const [query, setQuery] = useSearchParams();
  const [page,setPage] = useState(1);
  const keyword = query.get('q') || '';
  const { data: details = { runtime: 0 } } = useDetailsMovieQuery(movie?.id);
  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword,page});
  // const { data: genreData, isLoading: isGenreLoading, isError: isGenreError } = useMovieGenreQuery();
  const [hasResults, setHasResults] = useState(true);
  const [selectedSort, setSelectedSort] = useState("Most Popular");
  console.log("Moviepage", data);

  const handlePageClick=({selected}) => {
    //console.log("page",page);
    setPage(selected + 1);
  };

  // const filteredMovies = genreId
  //   ? data?.results?.filter((movie) =>
  //       movie.genre_ids.includes(parseInt(genreId, 10))
  //     )
  //   : data?.results;

// 인기순으로 정렬
  // const sortMoviesByPopularity = filteredMovies?.sort((a, b) => {
  //   switch (selectedSort) {
  //     case "Most Popular":
  //       return b.popularity - a.popularity;
  //     case "Least Popular":
  //       return a.popularity - b.popularity;
  //     case "Latest":
  //       return new Date(b.release_date) - new Date(a.release_date);
  //     case "Alphabetical":
  //       return a.title.localeCompare(b.title);
  //     default:
  //       return 0;
  //   }
  // });
  useEffect(() => {
    setHasResults(data?.results.length > 0);
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  if(isLoading){
    return (
        <div className='spinner-area'>
            <Spinner
            animation="border"
            variant="danger"
            style={{width: "5rem", height:"5rem"}}/>
        </div>
    );
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (!hasResults && keyword) {
    return (
      <Container>
        <Row>
          <Col>
            <div className="no-results-message">
              <h3>No search results found for "{keyword}"</h3>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

 return (
        <>
        <div className='sort_button'>
        <DropdownButton variant="outline-danger" id="dropdown-basic-button" title="popularity">
          <Dropdown.Item href="#/action-1" onClick={() => setQuery('sort', 'popularity')}>Most popular</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setQuery('sort', 'popularity')}>Lowest popularity</Dropdown.Item>

        </DropdownButton>
        </div>
          <Container>
          <Row className="justify-content-center">
         { data?.results.map((movie, index) => (

                <Col key={index} lg={4} md={6} sm={8} xs={12} className="movie-card-wrapper" style={{ maxWidth: "210px" }}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="d-flex justify-content-center">

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages}//전체 페이지가 몇개인지
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page - 1}
            />
          </div>
         </>
      );
    };

export default MoviePage
