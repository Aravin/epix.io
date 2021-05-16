import AppNavbar from './navbar';

function AppLayout({ pageProps }: any) {
  return <div className="app-container">
      <AppNavbar></AppNavbar>
      {pageProps}
      </div>;
}

export default AppLayout;
