import { useEffect } from "react";
import "./Testlabs.css";
import { BackToHomePage } from "./BackToHomePage";
import { Header } from "./Header";
import { NoContent } from "./NoContent";
import testLabs from "../data/testlabs/testlabs.json";
import { Content } from "./Content";
export const Testlabs = () => {
  const content = testLabs.filter((t) => t.type != "template");
  useEffect(() => {
    window.document.title = "Public Test Labs™";
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-[url('/testlabs/publictestlabs.png')] bg-center bg-repeat bg-black">
      <Header />
      {content.length == 0 ? <NoContent /> : <Content content={content} />}
      <BackToHomePage />
    </div>
  );
};
