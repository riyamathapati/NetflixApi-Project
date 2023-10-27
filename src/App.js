import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import axios from "axios";
import ShowIMDBData from "./ShowIMDBData";
import './ShowIMDBData.css'
import Explore from "./Explore";
import { useState } from "react";
import './App.css'
import img1 from './Images/Netflix_Logo_PMS.png';
import img2 from './Images/mobile-0819.jpg';

function App() {
  const [data, setData] = useState([]);
  const [IMDBCompVisibilty, setIMDBCompVisibility] = useState(false);
  const [opt, setOpt] = useState([])
  const [exploredata, setExploredata] = useState(false);

  const GetIMDBapi = () => {
    setIMDBCompVisibility(true);
    setExploredata(false);
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: "game of thr" },
      headers: {
        "X-RapidAPI-Key": "833bfe23a9msh2fb102276e2cac8p16687fjsn20b254d53a05",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
      }
    };
    axios.request(options).then((data) => {
      console.log(data.data.d);
      setData(data.data.d);
    });
  };

  const getCrickedData = () => {
    setIMDBCompVisibility(false);
    setExploredata(true);


    const options = {
      method: 'GET',
      url: 'https://ott-details.p.rapidapi.com/advancedsearch',
      params: {
        start_year: '1970',
        end_year: '2020',
        min_imdb: '6',
        max_imdb: '7.8',
        genre: 'action',
        language: 'english',
        type: 'movie',
        sort: 'latest',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '833bfe23a9msh2fb102276e2cac8p16687fjsn20b254d53a05',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    }; axios.request(options).then((opt) => {
   
      // setData(data.data.d);
      console.log(opt.data.results);
      setOpt(opt.data.results);
    });

  };

  return (
    <div className="App">
      <>
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav class="navbar navbar-expand-sm bg-transparent fixed-top 
                 ">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                      <img src={img1} alt="img not found" className="img-fluid ms-lg-5  " /></a>
                    <button class="navbar-toggler forcolor " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon  "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li class="nav-item dropdown ">
                          <a class="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Hindi</a></li>

                          </ul>
                        </li>

                      </ul>
                      <form class="d-flex" role="search">

                        <button class="btn forcolor text-white btn-sm" type="submit">Sign in</button>
                      </form>
                    </div>
                  </div>
                </nav>



              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row d-flex  justify-content-around  align-content-center  " id="netfilxsbgimg">
              <div className="col-12 text-white justify-content-center">
                <h1 className="display-4 fw-bold text-center">Unlimited movies, TV shows and more</h1>
                <h5 className="text-center">Watch anywhere. Cancel anytime.</h5>
                <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>

              </div>
              <div className="col-12 d-flex justify-content-center  ">
                <div className="row">
                  <div className="col-12 col-lg-6 ">
                    <input class="form-control form-control-lg bg-transparent px-5 mb-3" type="text" placeholder="Email address" aria-label=".form-control-lg example" />
                   
                  </div>
                  <div className="col-12 col-lg-6 text-center"> <button className="btn btn-lg forcolor text-white px-5 mb-3 ">Get Started</button></div>
                </div>
              </div>
             </div>
             </div>


          {/* end of main div  */}
        </div>
      {/* </> */}

      <div className="container-fluid bg-black ">
        <div className="row ">
          <div className="col-12 text-center">
            <img src={img2} className="img-fluid" alt="img not found"/>
          </div>
          <div className="col-12  my-auto text-center">
            <h3 className="  pt-5 forcolortext  text-center">Explore New Hollywood Movies ,You Can Explore Our Gallary With Shortly And Widely</h3>
            
       <a type="" className="my-2 p-3 mx-5 btn btn-lg rounded-2 forcolor text-center" onClick={GetIMDBapi}>
        Explore Shortly
      </a>
      <a type="button" className="my-2 p-3 mx-5  btn btn-lg rounded-2 forcolor" onClick={getCrickedData}> Explore More </a>

      {IMDBCompVisibilty && data && <ShowIMDBData data={data} />}
    {exploredata && opt && <Explore opt={opt} />}

          </div>
        </div>
      </div>




      

      


    
      </>
    </div>
  );
}

export default App;









