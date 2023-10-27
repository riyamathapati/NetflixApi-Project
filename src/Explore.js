const Explore = ({ opt }) => {
  return (
    <div className="showCard bg-dark text-white  d-flex flex-wrap gap-5 justify-content-center">
      {opt &&
        opt.map((item, key) => (
          <div>
         <div class="card bg-black  text-white  text-start" key={key} >
              <div className="forimgwidth ">
                {item ? <img src={item.imageurl} class="card-img-top" alt="..." /> : <img src="https://static.tvtropes.org/pmwiki/pub/images/slappybook.jpg" alt="dummy image" className="img-fluid" />}
             </div>
              <div class="card-body ">
                <div className="hovereffect"> <h5 class="card-title fw-bold forcolortext h4"> {item.title.substring(0, 60)}</h5>
                </div>
                {/* <p class="card-text fw-bold  "> {item.imdbid}</p> */}
                <p class="card-text fw-bold  "> {item.synopsis.substring(0, 50)}</p>
                <p class="card-text fw-bold  "> {item.type}</p>
                <p class="card-text fw-bold  "> {item.genre}</p>
                {/* <p class="card-text fw-bold t">{item.imdbrating}</p> */}
                <p class="card-text fw-bold  "> {item.released}</p>
                <button class="btn forcolor text-white btn-sm py-1 fw-bold" type="submit">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Explore;