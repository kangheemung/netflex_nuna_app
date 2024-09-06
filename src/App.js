import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MoviesDetail from './pages/MovieDetail/MoviesDetail';
import Notfoundpage from './pages/Notfound/Notfoundpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //homepage /
  //moviefullpage /movies
   //moviedetailpage /movies/:id
//추천 영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          {/* Movie Pages */}
          <Route path = "movies">
            <Route index element={<MoviePage />}/>  {/*//Moviegroup 화면 */}
          </Route>
          <Route path="/movie/:id" element={<MoviesDetail />} />
             {/* Not Found Page */}
          <Route path="*" element={<Notfoundpage />}/>   {/*/Notfoundpage 화면 */}
          {/* <Route path="/admin" elements={ AppLayout}> //admin 화면 */}
        </Route>
      </Routes>

    </div>
  );
}


export default App;
