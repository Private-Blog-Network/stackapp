import Link from "next/link"
import pls from "./menulist"
import Script from "next/script"

export default function Nav(props){
return (
    <>
<Script id="ads" src="/ad.js"></Script>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href={props.page=='page'?`../`:'.'} prefetch={false}>My Code Helper</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
            pls.obj.map((e,i)=>(
        <li className="nav-item" key={i}>
          <Link className="nav-link active" aria-current="page" href={props.page=='page'?`../${e.toLowerCase()}`:"/"+e.toLowerCase()} prefetch={false}>{e}</Link>
        </li>
            ))
        }
      </ul>
    </div>
  </div>
</nav>
    </>
)
}