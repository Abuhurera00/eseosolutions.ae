import React from 'react'
import Home from './Pages/Home'
import Abouteseo from './Pages/Abouteseo';
import Seo from './Pages/Seo';
import Guestposting from './Pages/Guestposting';
import Career from './Pages/Career';
import Pricing from './Pages/Pricing';
import Navbar from './Components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Searchengine from './Pages/Searchengine';
import Socialmedia from './Pages/Socialmedia';
import Mobileapp from './Pages/Mobileapp';
import Content from './Pages/Content';
import Footer from './Components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><Abouteseo /><Footer /></>,
    },
    {
      path: "/search-engine-optimization-dubai",
      element: <><Navbar /><Seo /><Footer />
      </>,
    },
    {
      path: "/guest-blogging-services-dubai",
      element: <><Navbar /><Guestposting /><Footer />
      </>,
    },
    {
      path: "/careers",
      element: <><Navbar /><Career /><Footer />
     </>,
    },
    {
      path: "/search-engine-maketing-dubai",
      element: <><Navbar /><Searchengine /><Footer />
     </>,
    },
    {
      path: "/social-media-optimization-dubai",
      element: <><Navbar /><Socialmedia /><Footer />
     </>,
    },
    {
      path: "/mobile-app-marketing-dubai",
      element: <><Navbar /><Mobileapp /><Footer />
     </>,
    },
    {
      path: "/content-writing-services-dubai",
      element: <><Navbar /><Content /><Footer />
     </>,
    },
    {
      path: "/digital-marketing-pricing",
      element: <><Navbar /><Pricing /><Footer />
      </>,
    },
  ]);

  return (
    <React.Fragment>
    <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
