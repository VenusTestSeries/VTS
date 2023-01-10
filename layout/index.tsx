import React from "react";
import Header from "./header";
import Footer from "./footer";
import NextProgress from "./nextprogress";

const Main = (props: React.ComponentPropsWithRef<"main">) => (
  <main {...props} />
);
interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      {/* <NextProgress/> */}
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
