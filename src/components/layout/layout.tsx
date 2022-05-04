import React, { memo, ReactNode, useEffect } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import "./layout.style.scss";

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `LA Rules - ${title}`;
  }, [title]);

  return (
    <section className="root-layout">
      <Header />
      <main className="content-restriction">{children}</main>
      <Footer />
    </section>
  );
};

export default memo(Layout);
