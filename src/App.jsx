import { useState } from "react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Content from "./components/Main/Content";
import Footer from "./components/Footer/Footer";
import Lesson5 from "./components/Lesson5/Lesson5";
import SuperForm from "./components/Lesson5/SuperForm/SuperForm";
import Lesson6 from "./components/Lesson6/Lesson6";
import Lesson7 from "./components/Lesson7/Lesson7";
import Lesson8 from "./components/Lesson8/Lesson8";
import Lesson9 from "./components/Lesson9/Lesson9";
import Lesson10 from "./components/Lesson10/Lesson10";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      {/* <Content count={count} setCount={setCount} /> */}
      {/* <Lesson5 /> */}
      {/* <SuperForm /> */}
      {/* <Lesson6 /> */}
      {/* <Lesson8 /> */}
      {/* <Lesson7 /> */}
      {/* <Lesson9 /> */}
      <Lesson10 />
      <Footer />
    </div>
  );
};

export default App;
