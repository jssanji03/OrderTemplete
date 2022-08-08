const sidebarArea = document.querySelector('#navMenu-wrapper')
const sidebar = () => {
  let template = `
  <nav class="main-header navbar navbar-expand-md navbar-light navbar-white fixed-top">
        <div class="container-fluid">
          <a href="./index.html" class="navbar-brand">
            <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
              style="opacity: .8">
            <span class="brand-text font-weight-light">Soetek</span>
          </a>
          <button class="navbar-toggler order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <!-- Left navbar links -->
            <ul class="navbar-nav me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="./index.html" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="./products.html" class="nav-link">Products</a>
              </li>
              <li class="nav-item">
                <a href="./favorite.html" class="nav-link">WishList</a>
              </li>
            </ul>
          </div>
          <!-- Right navbar links -->
          <ul class="order-md-3 d-flex navbar-no-expand ml-auto order-1">
            <!-- Messages Dropdown Menu -->
            <li class="nav-item mr-2">
              <div id="cart" class="cart">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge badge-info navbar-badge" data-totalitems="0">0</span>
              </div>
            </li>
            <li class="nav-item ">
              <a class="nav-link px-2" href="./pendingOrder.html" role="button">
                會員中心
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#" role="button">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
  `
    sidebarArea.innerHTML = template
}
sidebar()

