const ShowIMDBData = ({ data }) => {
    return (
      <div className="showCard bg-black  d-flex flex-wrap gap-5 justify-content-center  ">
        {data &&
          data.map((item, key) => (
            <div className="card1">
              {/* <ul className="" key={key}>
                <li > {item.l} </li>
                
                <li > {item.id} </li>
                <li > {item.q} </li>
                <li > {item.qid} </li>
                <li > {item.rank} </li>
                <li > {item.s} </li>
                <li > {item.y} </li>
                <li > {item.yr} </li> */}
                {/* <li > {item.i} </li> */}
                {/* <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                    <li > {item.l} </li>
                
                <li > {item.id} </li>
                <li > {item.q} </li>
                <li > {item.qid} </li>
                <li > {item.rank} </li>
                <li > {item.s} </li>
                <li > {item.y} </li>
                <li > {item.yr} </li> 

                    </div>
                  </div>
                </div> */}
                

                


              {/* </ul> */}
              {/* {item.i ? <img src={item?.i?.imageUrl} alt={item.l} />:<img src="https://tse1.explicit.bing.net/th?id=OIP.O06dQ9eFRAS_hbG3YfpL3AHaHa&pid=Api&P=0&h=220" alt="dummy image"/>} */}



              <div class="card text-start bg-black  text-white " key={key} >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
 <div className="forimgwidth"> {item.i ? <img src={item?.i?.imageUrl} alt={item.l} className="img-fluid forimgwidth" />:<img src="https://static.tvtropes.org/pmwiki/pub/images/slappybook.jpg" alt="dummy image" className="img-fluid"/>}</div>
  <div class="card-body">
    <h5 class="card-title fw-bold forcolortext h4"> {item.l}</h5>
    {/* <p class="card-text fw-bold">Id:- {item.id}</p> */}
    <p  class="card-text fw-bold"> {item.q}</p>
    <p  class="card-text fw-bold">{item.s}</p>
    <p  class="card-text fw-bold">  {item.rank}</p>
    <p  class="card-text fw-bold"> {item.qid}</p>
    <button class="btn forcolor text-white py-1 btn-sm" type="submit">Watch Now</button>
  </div>
</div>

            </div>
          ))}
      </div>
    );
  };
  
  export default ShowIMDBData;