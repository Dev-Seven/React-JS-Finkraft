import ITRClients from "./../assets/svg/itr-clients.svg";
import ITRFiling from "./../assets/svg/itr-filling.svg";
import AckVendors from "./../assets/svg/ack-vendors.svg";
import LinkITR from "./../assets/svg/link-itr.svg";
import VendorEligibility from "./../assets/svg/vendor-eligibility.svg";
import EInvoices from "./../assets/svg/einvoice.svg";
import VendorScore from "./../assets/svg/vendor-score.svg";
import Reconciliation from "./../assets/svg/reconciliation.svg";
import sImage from "./../assets/images/slider-image.png";
import Navbar from "../Routing/navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="grid grid-rows-1 mx-5 sm:mx-4 lg:mx-9 mt-5">
        <div className="md:grid grid-cols-12 font-sans">
          <div className="col-span-8 grid-cols-1 grid-flow-cols lg:col-span-8 md:col-span-12 sm:col-span-6">
            <div className="md:grid grid-cols-12 bg-white box-shadow-border rounded mr-0 items-center">
              <div className="col-span-5 m-10 md:m-10 lg:ml-10 xl:ml-10">
                <div className="text-left font-bold text-2xl mb-4 lg:text-2xl xl:text-2xl">
                  ITR Acknowledgment
                </div>
                <div className="text-left text-1xl">
                  Ensure you are not making double the TDS amounts by bringing
                  all the ITR transactions over here and share acknowledgments
                </div>
              </div>
              <div className="col-span-7 grid grid-cols-1 gap-4 m-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="md:grid grid-cols-1 grid-flow-cols bg-white box-shadow-border rounded items-center p-4 break-words">
                  <Link to="/itrAddFiling">
                    <img
                      src={ITRFiling}
                      alt=""
                     
                      className="m-2"
                    />
                      <div className="m-2">
                    <txt className="text-left text-1xl">
                    View or update your ITR Filings
                    </txt>
                    </div>
                   
                  </Link>
                </div>
                <div className="md:grid grid-cols-1 grid-flow-cols gap-4 bg-white box-shadow-border rounded items-center p-4 break-words">
                <Link to="/clients">
                  <img
                      src={ITRClients}
                      alt=""
                      
                      className="m-2"
                    />
                    <div className="m-2">
                    <txt className="text-left text-1xl">
                      Share ITR Acknowledgments with Clients
                    </txt>
                    </div>
                    </Link>
                  </div>
               
             
                  <div className="md:grid grid-cols-1 grid-flow-cols gap-4 bg-white box-shadow-border rounded items-center p-4 break-words">
                  <Link to="/vendors"> <img
                      src={AckVendors}
                      alt=""
                  
                      className="m-2"
                    />
                       <div className="m-2">
                    <txt className="text-left text-1xl">
                    Get acknowledgements from Vendors
                    </txt>
                    </div>
                   
                  </Link>
                  </div>
                <div className="md:grid grid-cols-1 grid-flow-cols gap-4 bg-white box-shadow-border rounded items-center p-4 ">
                <Link to=""><img
                    src={LinkITR}
                   
                    className="m-2"
                    alt=""
                  />
                     <div className="m-2">
                    <txt className="text-left text-1xl">
                    Link your ITR, GSTR1 and GST2A
                    </txt>
                  
                    </div>
                    </Link>
                 
                </div>
              </div>
            </div>

            <div className="md:grid grid-cols-12 bg-white box-shadow-border rounded mr-0 mt-9 items-center mb-0 md:mb-0 lg:mb-10 xl:mb-10">
            <div className="col-span-5 m-10 md:m-10 lg:ml-10 xl:ml-10">
              <div className="text-left font-bold text-2xl mb-4 lg:text-2xl xl:text-2xl">
                  Vendor E-Invoice Validation
                </div>
                <div className="text-left text-1xl">
                  Real time identification of vendors eligibility for invoices
                  and GSTR1, GSTR 3B filing records before making a payment.
                </div>
              </div>
              <div className="col-span-7 grid grid-cols-1 gap-4 m-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="md:grid grid-cols-1 grid-flow-cols bg-white box-shadow-border rounded items-center p-4 break-words">
                  <img
                    src={VendorEligibility}
                   
                    className="m-2"
                    alt=""
                  />
                  <div className="m-2">
                    <txt className="text-left text-1xl">
                    Check Vendor Eligibility
                  </txt>
                  </div>
                </div>
                <div className="md:grid grid-cols-1 grid-flow-cols bg-white box-shadow-border rounded items-center p-4 break-words">
                  <img
                    src={EInvoices}
                  
                    className="m-2"
                    alt=""
                  />
                 <div className="m-2">
                    <txt className="text-left text-1xl">
                    Validate E-Invoices
                  </txt>
                  </div>
                </div>
                <div className="md:grid grid-cols-1 grid-flow-cols bg-white box-shadow-border rounded items-center p-4 break-words">
                  <img
                    src={VendorScore}
                  
                    className="m-2"
                    alt=""
                  />
                  <div className="m-2">
                    <txt className="text-left text-1xl">
                    Check your Vendor Score
                  </txt>
                  </div>
                </div>
                <div className="md:grid grid-cols-1 grid-flow-cols bg-white box-shadow-border rounded items-center p-4 break-words">
                  <img
                    src={Reconciliation}
                   
                    className="m-2"
                    alt=""
                  />
                 <div className="m-2">
                    <txt className="text-left text-1xl">
                    3- Way reconciliation with GST2A and PR
                  </txt>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 lg:col-span-4 md:col-span-12 sm:col-span-6 mb-10 md:mb-10 lg:mb-0 xl:mb-0">
            <div className="bg-white box-shadow-border rounded ml-0 p-4 sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4 sm:mr-0 md:mr-0">
              <div className="items-center">
                
                <div className="text-left font-bold text-2xl p-10 lg:text-2xl xl:text-2xl">
                  Avoid paying double the TDS amount by informing clients on
                  time.
                </div>
                <div className="text-center w-full">
                <img
                  width="351"
                  height="351"
                  className="inline-block"
                  src={sImage}
                  alt=""
                ></img>
                </div>
                <div className="flex-colself-end p-4 grid-cols-1 grid-flow-cols">
                  <div className="m-4">
                    <txt className="text-base text-gray-400 ">
                      Starting from July, some taxpayers may have to pay Tax
                      Deducted At Source (TDS) at higher rates.
                    </txt>
                  </div>
                  <div className="m-4">
                    <txt className="text-base text-gray-400 ">
                      Ensure you are not making double the TDS amounts by
                      bringing all the ITR transactions over here and share
                      acknowledgments
                    </txt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
