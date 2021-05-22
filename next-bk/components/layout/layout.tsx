import AppNavbar from "./navbar";
import React, { useState } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

export const siteTitle = 'epix.io - All Service. One Place.'

function AppLayout({ Component, pageProps }: any) {
  return (
    <div className="app-container">
      <Head>
        <title>{ siteTitle }</title>
        <meta name="title" content="{siteTitle}"></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta
          name="description"
          content="epix.io is a free and open source project that provide many difference.
          Some of the services are emi calculation, hash generation, password generation etc.."
        ></meta>
        <link rel="icon" href="/images/favicon_green.png" />
      </Head>
      <AppNavbar></AppNavbar>

      <div>
      {Component}
      </div>

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
}

export default AppLayout;
