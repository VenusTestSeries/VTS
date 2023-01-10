import PerPageLayout from "layout/perpage";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1>Landing Page</h1>
    </div>
  );
}

export default Home;

Home.perpage = PerPageLayout;
