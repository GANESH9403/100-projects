import React from 'react'
import './TopNav.css'
import Searchbox from './Searchbox'
function TopNav() {
  return (
    <>
    <nav className=" row mt-0 p-2 pt-3 ps-2 bg-primary">
        <div className=" order-0 col-6 col-md-2 m-0 p-0 d-flex align-items-center justify-content-md-end">
        <button className="ms-2 d-md-none" id="burger"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></button>
        
<div className=" px-3 pt-1 d-flex align-items-center justify-content-center flex-column">
<img width={'75px'} height={'20'} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
<small id='exp' className="text-light">Expoler <strong className='text-warning'>Plus</strong></small>
</div>

</div>
<div className="col-12 col-md-6 order-md-2 order-3 order-md-3">
  <Searchbox/>
</div>
<div className=" order-2 order-md-3 col-6 col-md-4 d-flex justify-content-center align-items-md-center align-items-baseline gap-2 justify-content-md-around">
<button className='nav-btn d-md-none'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
</svg></button>
<button className='nav-btn d-md-none'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#FFFFFF" d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"></path></svg></button>
<a className=" d-none d-md-block btn btn-light text-primary rounded-0 border-0">Login</a>

<a className="d-none d-md-block text-light">Become a Seller</a>
<a className="d-none d-md-block text-light me-2">More</a>
<a className="d-md-none btn border-0 text-light">Login</a>

</div>

    </nav>
    
    </>
  )
}

export default TopNav