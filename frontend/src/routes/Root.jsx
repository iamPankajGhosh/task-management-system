import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
