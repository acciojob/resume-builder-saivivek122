import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills"; 
import Projects from "./Projects"; 
import SocialMedia from "./SocialMedia";
import ResumePreview from "./ResumePreview";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const App = () => {
  const currentPage = useSelector(state => state.resume.currentPage);

  const renderPage = () => {
    switch(currentPage) {
      case 1: return <Profile />;
      case 2: return <Education />;
      case 3: return <Skills />;
      case 4: return <Projects />;
      case 5: return <SocialMedia />;
      case 6: return <ResumePreview />;
      default: return <Profile />;
    }
  }

  return (
    <Provider store={store}>
      <div>
        {renderPage()}
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
