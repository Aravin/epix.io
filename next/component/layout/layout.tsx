import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import AppNavbar from "./navbar";

type LayoutProps = {
  title?: string;
  subTitle?: string;
};

const bodyStyle = {
  margin: 10,
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
  subTitle,
}) => (
  <div>
    <Head>
      <title>{title ?? "Home - epix.io - All Service. One Place"}</title>
      <meta
        name="title"
        content={title ?? "Home - epix.io - All Service. One Place"}
      ></meta>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta
        name="description"
        content="epix.io is a free and open source project that provide many difference.
          Some of the services are emi calculation, hash generation, password generation etc.."
      ></meta>
      <link rel="icon" href="/images/favicon_green.png" />
    </Head>
    <AppNavbar></AppNavbar>

    <div className="m-3">
      {title && (
        <div>
          <h2 className="text-2xl text-green-700 inline m-2 p-2">{title}</h2>
          <span className="text-xl ml-4">/</span>
          <h3 className="text-xl text-gray-700 ml-4 inline">{subTitle}</h3>
        </div>
      )}

      <div className="m-2 p-2">{children}</div>
    </div>

    <div className="flex-auto bg-gray-700 p-5 text-center mt-10">
      <span className="text-white text-sm">
        The epix.io is developed / maintained by{" "}
        <a
          href="https://aravin.net"
          rel="noopener"
          target="_blank"
          className="text-green-300"
        >
          Aravind Appadurai
        </a>
        . This source code is licensed MIT.
      </span>
    </div>
  </div>
);
export default Layout;
