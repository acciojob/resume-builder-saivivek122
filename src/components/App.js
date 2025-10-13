import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./resumeSlice";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";
import ResumePreview from "./ResumePreview";

const App = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, 6));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <Provider store={store}>
      <div>
        {page === 1 && <Profile />}
        {page === 2 && <Education />}
        {page === 3 && <Skills />}
        {page === 4 && <Projects />}
        {page === 5 && <SocialMedia />}
        {page === 6 && <ResumePreview />}

        <div style={{ marginTop: 20 }}>
          {page > 1 && <button onClick={prevPage}>Back</button>}
          {page < 6 && <button onClick={nextPage}>Next</button>}
        </div>
      </div>
    </Provider>
  );
};

export default App;
