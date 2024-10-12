import Header from "./Movies/Header";
import MoviesContainerPage from "./Movies/MoviesContainerPage";

const Home = () => {
  return (
    <>
      <Header />

      <section className="pt-20 w-full bg-black text-white overflow-x-hidden"> {/* Added pt-20 to adjust for fixed header */}
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;
