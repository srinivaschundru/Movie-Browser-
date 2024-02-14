import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="welcome to react 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
                Lorem ipsum To add React Router in your application, run this in the terminal from the root directory of the application
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
