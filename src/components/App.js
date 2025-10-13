import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";
import ResumePreview from "./ResumePreview";
import { nextPage, prevPage } from "./actions";

const Form = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.currentPage);

  const renderPage = () => {
    switch (page) {
      case 1: return <Profile />;
      case 2: return <Education />;
      case 3: return <Skills />;
      case 4: return <Projects />;
      case 5: return <SocialMedia />;
      case 6: return <ResumePreview />;
      default: return <Profile />;
    }
  };

  return (
    <div>
      {renderPage()}
      <div style={{ marginTop: "20px" }}>
        {page > 1 && <button onClick={() => dispatch(prevPage())}>Back</button>}
        {page < 6 && <button onClick={() => dispatch(nextPage())}>Next</button>}
      </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

export default App;
