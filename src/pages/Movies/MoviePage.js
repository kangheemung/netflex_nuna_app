import React,{useState,useEffect}from 'react';
import './MoviePage.style.css';
import { Row, Col, Container, Alert , Spinner} from 'react-bootstrap';
import { useSearchMovieQuery} from '../../hook/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

//경로 2가지
//nav 바에서 클릭해서 온 경우 =>popularMovie 보여주기
//keyword입력해서 온경우 =>keyword와 관련된 영화들을 보여줌
//page nation설치
//page state만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page 까지 넣어서 fetch
const MoviePage = () => {

  const [query, setQuery] = useSearchParams();
  const [page,setPage] = useState(1);
  const keyword = query.get('q') || '';
  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword,page});
  const [hasResults, setHasResults] = useState(true);
  console.log("Moviepage", data);
  const handlePageClick=({selected}) => {
    //console.log("page",page);
    setPage(selected + 1);
  };

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
          <Container>
          <Row className="justify-content-center">
              {data?.results.map((movie, index) => (
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
