// ルーティングの設定
// フックで他ファイルからのインポートができるんだって！



import React from 'react';
import { BrouswerRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from './Header'
import { Top } from './Top'
import { DailyTop } from '.daily/pages/DailyTop'
import { CategoryView } from './daily/pages/DailyTop'
import { DailyDetail } from './daily/pages/DailyDetail'
import { Profile } from './profileProfile'


//他のファイルで読み込むときはメソッドに export をつける必要があるらしい
export const App = () =>{
  return(
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Top} />
            <Route exact path='/daily' component={DailyTop} />
            <Route exact path='/daily/:id' component={DailyDetail} />
            <Route exact path='/daily/category/:cat' component={CategoryView} />
            <Route exact path='/profile' component={Profile} />
            <Route render={ () => <h3>resouse is not found !!</h3> } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
