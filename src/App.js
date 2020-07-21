import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.util';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  fireBaseListener = null;

  componentDidMount() {
    this.fireBaseListener = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            this.setState(
              {
                currentUser: { id: snapShot.id, ...snapShot.data() },
              },
              () => {
                console.log('DidMount:', this.state.currentUser);
              },
            );
          });
        }
        this.setState({ currentUser: userAuth });
      },
    );
  }

  componentWillMount() {
    this.fireBaseListener && this.fireBaseListener();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
