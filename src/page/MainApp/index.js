import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ArtikelSaya, CreateArtikel, DetailArtikel, Home } from "..";
import { Footer, Header } from "../../components";
import { getArtikel, loadUser } from "../../config/Redux/getApi";
import { Store } from "../../config/Redux/store";
import "./mainapp.scss";

const Index = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(getArtikel());
  }, []);
  return (
    <div className="main-app-wrapper">
      <Router>
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/artikel-saya"
              render={() => {
                return token ? <ArtikelSaya /> : <Redirect to="/" />;
              }}
            />
            <Route
              path="/create-artikel"
              render={() => {
                return token ? <CreateArtikel /> : <Redirect to="/" />;
              }}
            />
            <Route exact path="/detail-artikel/:id" component={DetailArtikel} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default Index;
