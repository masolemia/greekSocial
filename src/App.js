import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Dialogues from "./components/Dialogues/Dialogues";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  let state = props.state;
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu sidebar={state.sidebar} />
        <section className="app-section">
          <Routes>
            <Route path="/profile" element={<Profile profileState={state.profilePage} dispatch={props.dispatch} />} />
            <Route
              path="/messages"
              element={<Dialogues dialoguesState={state.dialoguesPage} dispatch={props.dispatch} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
