import './App.css';
import {Routes,Route} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MoviesDetail from './pages/MovieDetail/MoviesDetail';
import Notfoundpage from './pages/Notfound/Notfoundpage';



function App() {
  //homepage /
  //moviefullpage /movies
   //moviedetailpage /movies/:id
//추천 영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews
  return (
 
    <div className="App">
         <AppLayout/>
     <Routes>
     <Route path="/" elements={ AppLayout}/>   {/*//user 화면 */}
      <Route index  elements={ Homepage}/>
      <Route path="movies">{/*//Moviegroup 화면 */}
        <Route index elements={MoviePage}/>
        <Route path=":id" index elements={ MoviesDetail}/>
      </Route>
    
    
    <Route path="*" elements={ Notfoundpage}/>   {/*/Notfoundpage 화면 */}


      {/* <Route path="/admin" elements={ AppLayout}> //admin 화면 */}


     </Routes>

    </div>
  );
}

export default App;
