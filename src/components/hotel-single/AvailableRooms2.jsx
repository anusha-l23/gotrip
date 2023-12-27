import {useState} from "react";

const AvailableRooms2 = ({ event }) => {
  const demoContent = [
    {
      id: 1,
      marginTop: "mt-0",
      items: [
        { id: 1, marginTop: "mt-0" },
        // { id: 2, marginTop: "mt-20" },
        // { id: 3, marginTop: "mt-20" },
      ],
    },
    // {
    //   id: 2,
    //   marginTop: "mt-30",
    //   items: [
    //     { id: 1, marginTop: "mt-0" },
    //     { id: 2, marginTop: "mt-20" },
    //     { id: 3, marginTop: "mt-20" },
    //   ],
    // },
  ];
  const buttonStyle = {
    border:"1px solid lightgray",
    borderRadius:"50%",
    backgroundColor:"white",
    paddingLeft:"0.7em",
    paddingRight:"0.7em",
    
  }
const box = {
  border:"1px solid lightgray",
padding:"0.2em 1em"
}


  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState({});

const handleIncrement = (categoryName, amount) => {
  setCategoryCounts((prevCounts) => ({
    ...prevCounts,
    [categoryName]: (prevCounts[categoryName] || 0) + 1,
  }));

  setTotalCount((prevTotalCount) => prevTotalCount + 1);
  setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
};


const handleDecrement = (categoryName, amount) => {
  if (categoryCounts[categoryName] > 0) {
    setCategoryCounts((prevCounts) => ({
      ...prevCounts,
      [categoryName]: prevCounts[categoryName] - 1,
    }));

    setTotalCount((prevTotalCount) => prevTotalCount - 1);
    setTotalAmount((prevTotalAmount) => prevTotalAmount - amount);
  }
}

  return (
    <>
      {demoContent.map((item) => (
        <div
          className={`bg-blue-2 rounded-4 px-30 py-30 sm:px-20 sm:py-20 ${item.marginTop}`}
          key={item.id}
        >
          <div className="row y-gap-30">
            <div className="col-xl-auto">
              <div className="ratio ratio-1:1 col-12 col-md-4 col-xl-12">
                 <img className="img-ratio rounded-4"
                        src={`http://localhost:3001/${event?.eventPicture.replace(/\\/g, '/')}`} width="100%" height="100%"/>
              </div>
              {/* image */}

              <div>
                <div className="text-18 fw-500 mt-10">{event?.eventName}</div>
                           </div>
            </div>
    

            <div className="col-xl">
              {item.items.map((singleItem) => (
                <div
                  className={`bg-white rounded-4 px-30 py-30 ${singleItem.marginTop}`}
                  key={singleItem.id}
                >
                  <div className="row y-gap-30">
                    <div className="col-lg col-md-6">
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-5">
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">Pay at the hotel</div>
                        </div>
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">
                            Pay nothing until March 30, 2022
                          </div>
                        </div>
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">
                            Free cancellation before April 1, 2022
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .col */}

                    {/* <div className="col-lg-auto col-md-6 border-left-light lg:border-none">
                      <div className="px-40 lg:px-0">
                        <div className="text-15 fw-500 mb-20">Sleeps</div>
                        <div className="d-flex items-center text-light-1">
                          <div className="icon-man text-24" />
                          <div className="icon-man text-24" />
                        </div>
                      </div>
                    </div> */}
                    {/* End .col */}

                    <div className="col-lg-auto col-md-6 border-left-light lg:border-none">
                      <div className="px-40 lg:px-0">
                        <div className="text-15 fw-500 mb-20">Select Participants</div>
                        <div className="dropdown js-dropdown js-price-1-active">
                          {/* <select
                            style={{ minWidth: "160px" }}
                            className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14"
                          >
                            <option value="1" defaultValue>
                              1 (US$ 3,120)
                            </option>
                            <option value="2">2 (US$ 3,120)</option>
                            <option value="3"> 3 (US$ 3,120)</option>
                            <option value="4"> 4 (US$ 3,120)</option>
                            <option value="5"> 5 (US$ 3,120)</option>
                          </select> */}


<table className="table table-bordered" style={{borderBottom:"1px solid lightgray"}}>
  <thead className="thead-light">
    <tr>
      <th scope="col">event</th>
      <th scope="col">Amount (INR)</th>
      <th scope="col">Selected<br/> <span style={{textAlign:"center", color:"red"}}>{totalCount}</span></th>
      <th scope="col" className="text-center">Total Amount <br/> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> <span style={{textAlign:"center", color:"red"}}>{totalAmount}</span></th>
    </tr>
  </thead>
  <tbody>
    {event?.categoryDetails.map((item)=>{
      return (
        <tr key={item.id}>
        <td>{item?.name}</td>
          <td>{item?.amount}</td>
         
<td>
  <div className="d-flex flex-inline gap-4">     <button style={buttonStyle} onClick={() => handleDecrement(item.name, Number(item.amount))}>&#x2012;</button>
              <div style={box}>{categoryCounts[item.name] || 0}</div>
              <button style={buttonStyle} onClick={() => handleIncrement(item.name, Number(item.amount))}>+</button>
              </div>

          </td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> {categoryCounts[item.name] ? categoryCounts[item.name] * Number(item.amount) : 0}</td>
        </tr>
      )
    })}
  </tbody>
</table>

                        </div>
                      </div>
                    </div>

                    {/* <div className="col-lg-auto col-md-6 border-left-light lg:border-none text-right lg:text-left">
                      <div className="pl-40 lg:pl-0">
                        <div className="text-14 lh-14 text-light-1 mb-5">
                          3 rooms for
                        </div>
                        <div className="text-20 lh-14 fw-500">
                          US${hotel?.price}
                        </div>
                        <a
                          href="#"
                          className="button h-50 px-35 -dark-1 bg-blue-1 text-white mt-10"
                        >
                          Reserve <div className="icon-arrow-top-right ml-15" />
                        </a>
                      </div>
                    </div> */}
           
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AvailableRooms2;
