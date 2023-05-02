import {Link, Redirect, useLocation} from 'react-router-dom'
import "./Breadcrumbs.css";

function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/"
       className={location.pathname.startsWith("/") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <span className={location.pathname === '/postings' || location.pathname === '/submission-portal' ? "breadcrumb-arrow-active" : "breadcrumb-arrow-not-active"}>&gt;</span>
      <Link to="/postings"
        className={location.pathname.startsWith("/postings") || location.pathname.startsWith("/submission-portal") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
       Postings
      </Link>
      <span className={location.pathname === '/submission-portal' ? "breadcrumb-arrow-active" : "breadcrumb-arrow-not-active"}>&gt;</span>
      <Link to="/submission-portal"
        className={location.pathname === "/submission-portal" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
       Submission Portal
      </Link>
    </nav>
  );
}

export default Breadcrumbs;





/*
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min"

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink =+ `/${crumb}`
       
        return (
        <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
        </div>
    )
})

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}
*/