import Banner from "../components/Banner/Banner";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
