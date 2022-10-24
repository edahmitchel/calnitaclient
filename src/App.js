import "./App.css";
import Header from "./components/header";
import { RightChoices } from "./components/rightchoices";
import Earn from "./components/earn";
import Sales from "./components/sales";
import Features from "./components/features";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useRef } from "react";
import { useIsInViewport } from "./customHook/useIsInViewport";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("thank you for joining our waitlist!");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const ref5 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  // const isInViewport5 = useIsInViewport(ref5);

  console.log("this is in view", isInViewport1);
  console.log("this is in view 2", isInViewport2);
  return (
    <>
      <>
        <ToastContainer />
        <Header notify={notify} />
        <section
          ref={ref1}
          className={
            isInViewport1
              ? "section right_choices"
              : "section__hidden right__choices"
          }
          id="right-choices"
        >
          <RightChoices />
        </section>
        <Earn />
        <section
          ref={ref2}
          className={
            isInViewport2
              ? "section sales__section"
              : "section__hidden sales__section"
          }
          id="sales"
        >
          <Sales />
        </section>
        <section
          ref={ref3}
          className={
            isInViewport3
              ? "features__section section"
              : "section__hidden features__section"
          }
          id="features-section"
        >
          <Features />
        </section>
        <section
          // ref={ref4}
          className={"contact__section section"}
          id="contact-section"
        >
          <Contact notify={notify} />
        </section>

        <footer ref={ref5} className={"footer section"} id="footer">
          <Footer />
        </footer>

        {/* <!-- CUSTOM JAVASCRIPT LINK --> */}
      </>
    </>
  );
}

export default App;
