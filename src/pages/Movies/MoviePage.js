import React,{useState}from 'react';
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
  const keyword = query.get("q");


  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword,page});
  console.log("Moviepage", data);
  const handlePageClick=({selected}) => {
    //console.log("page",page);
    setPage(selected + 1);
  };

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
  return (
      <Container>
        <Row></Row>
        <Row>
          <Col lg={4} xs={12}>
            {" "}
            필터{" "}
          </Col>
          <Col>
            <Row>
              {data?.results.map((movie, index) => (
                <Col key={index} lg={4} md={6} sm={8} xs={12} >
                   <div className="movie-card-wrapper">
                    <MovieCard movie={movie} />
                   </div>
                </Col>
              ))}
            </Row>
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
                forcePage={page-1}
            />
          </Col>
        </Row>
      </Container>
  );
};

export default MoviePage
