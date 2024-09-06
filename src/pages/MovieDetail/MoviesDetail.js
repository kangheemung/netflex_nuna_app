import React,{ useState } from "react";


import { Row,Stack , Badge, Col, Container, Alert , Spinner} from 'react-bootstrap';
import './MoviesDetail.style.css';
import {useDetailsMovieQuery} from '../../hook/useMovieDetail';
import { useParams } from 'react-router-dom';

//vercel
//카드를 클릭하면 영화 상세페이지롤 넘어간다.
//상세 페이지 디자인
//필요한 정보 
// 영화 포스터 url을 poster_path앞에 쓰다
// 영화 제목ok
// 장르
// 영화 인기도 
// 영화 줄거리 
// 예산(,)를 붙혀주자
// 개봉일
//========
//리뷰 보여주기
//추천 영화 보여주기
//예고편 보여주기
// 영화를 인기순을 정렬
// 장르별로 필터링
// 에러 핸들링
const MoviesDetail = ({ movie }) => {

  const { id } = useParams();
  //const { data: reviewsData } = useMovierReviewQuery();
  const { data: detailData, isLoading, isError, error } = useDetailsMovieQuery(id);

  console.log("detail",detailData)

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
  if (!id) {
    return <Alert variant="warning">영화 정보를 불러올 수 없습니다.</Alert>;
  }
  console.log("movie :", detailData);
  return (
  <>

 
              <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
              <Col xs={12} md={6} style={{height:"500px"}}>
             <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div 
                  style={{height: "450px",
                      backgroundImage: detailData.poster_path ? `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailData.poster_path})` : 'none'
                  }} 
                  className='MovieCard'
              ></div>
            </Container>
            </Col>
            <Col xs={12} md={6}>
             <Container style={{  justifyContent: 'center', alignItems: 'center' }}>
                <h2>{detailData.title}</h2>
                <Badge pill bg="danger">Genres: {detailData.genres.map(genre => genre.name).join(', ')} </Badge>
                <p>Popularity: {detailData.popularity}</p>
                {detailData.overview}
                <div className="detailData_number">
                <div className="detailData_number_detail"><Badge pill bg="danger">Budget</Badge> ${detailData.budget.toLocaleString()}</div>
                <div className="detailData_number_detail"><Badge pill bg="danger"> Revenue</Badge> ${detailData.revenue.toLocaleString()}</div>
                <div className="detailData_number_detail"><Badge pill bg="danger">Release Date</Badge> {detailData.release_date}</div>
                <div className="detailData_number_detail"><Badge pill bg="danger"> Runtime</Badge> {detailData.runtime}minute</div>
                </div>
              </Container>
              </Col>
              </Row>

         
   
  </>
  );
};


export default MoviesDetail;
