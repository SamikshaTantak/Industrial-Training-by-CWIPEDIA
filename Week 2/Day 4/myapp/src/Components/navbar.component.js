const Navbar = () => {
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src="https://cwipedia.com/static/media/logo-tran.b1608c34.png" alt="" width="30" height="24"></img>
    <a className="navbar-brand" href="#">CWIPEDIA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Register Here</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}
export default Navbar;
