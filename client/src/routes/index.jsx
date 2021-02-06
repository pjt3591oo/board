import {
  Switch,
  Route,
} from "react-router-dom";

import BoardsPage from '../components/pages/boards';
import BoardDetail from '../components/pages/boards/detail';
import BoardEdit from '../components/pages/boards/edit';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/board" component={BoardsPage}/>
        <Route exact path="/board/detail/:id" component={BoardDetail}/>
        <Route exact path="/board/edit/:id" component={BoardEdit}/>
      </Switch>
    </div>
  )
}


export default Routes 