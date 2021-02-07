import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import BoardListPage from '../components/pages/boards/list';
import BoardDetailPage from '../components/pages/boards/detail';
import BoardEditPage from '../components/pages/boards/edit';
import BoardWritePage from '../components/pages/boards/write';


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Link to="/board">심플 게시판</Link>}/>
        <Route exact path="/board" component={BoardListPage}/>
        <Route exact path="/board/write" component={BoardWritePage}/>
        <Route exact path="/board/detail/:id" component={BoardDetailPage}/>
        <Route exact path="/board/edit/:id" component={BoardEditPage}/>
      </Switch>
    </div>
  )
}


export default Routes 