import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';

import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import NewPoll from '../poll/NewPoll';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';

import {Layout, notification} from 'antd';
import MainPage from "../page/MainPage";
import Header from "../common/Header";
import TopLine from "../common/TopLine";
import Footer from "../common/Footer";
import CoursePage from "../page/CoursePage";
import UpButton from "../common/UpButton";

const {Content} = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false,
            scrollYRatio: 0,
            scrollY: 0,
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.setScrollY = this.setScrollY.bind(this);

        notification.config({
            placement: 'topRight',
            top: 70,
            duration: 3,
        });
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.loadCurrentUser();
        this.setScrollY();
    }

    handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

        notification[notificationType]({
            message: 'Polling App',
            description: description,
        });
    }

    handleLogin() {
        notification.success({
            message: 'Polling App',
            description: "You're successfully logged in.",
        });
        this.loadCurrentUser();
        this.props.history.push("/");
    }

    setScrollY() {
        window.addEventListener('scroll', () => {
            const val = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
            this.setState({
                scrollYRatio: val,
                scrollY: window.scrollY,
            });
        });
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }
        return (
            <div>
                {/*<AppHeader isAuthenticated={this.state.isAuthenticated}*/}
                {/*  currentUser={this.state.currentUser}*/}
                {/*  onLogout={this.handleLogout} />*/}
                <TopLine/>
                <Header isAuthenticated={this.state.isAuthenticated}
                        currentUser={this.state.currentUser}
                        onLogout={this.handleLogout}/>

                <Content className="app-content">
                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={() => <MainPage scrollY={this.state.scrollYRatio} />} />
                            <Route path="/login"
                                   render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                            <Route path="/signup" component={Signup} />
                            <Route path="/course" component={CoursePage} />
                            <Route path="/users/:username"
                                   render={(props) => <Profile isAuthenticated={this.state.isAuthenticated}
                                                               currentUser={this.state.currentUser} {...props}  />}>
                            </Route>
                            <PrivateRoute authenticated={this.state.isAuthenticated} path="/poll/new"
                                          component={NewPoll} handleLogout={this.handleLogout}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Content>
                <UpButton scrollY={this.state.scrollY} />
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
