import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import images from './image/img.jpg';
import { HiPencilAlt } from "react-icons/hi";
import MyModal from "./ShowModal";
import { FaCheck } from "react-icons/fa";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const closeApp = () => setShowModal(false);
  const openSuccessModal = () => {
    setShowModal(false);
    setShowSuccessModal(true);
  };
  const closeSuccessModal = () => setShowSuccessModal(false);


  return (
    <>
      <div className="w-full ">
        <div className="max-w-full mx-auto p-4 border-0   ">
          <div className="flex justify-between items-center mx-2">
            <button className="flex items-center text-primary border border-sky-400 hover:text-primary-foreground">
              <GoArrowLeft className="text-blue-500 ml-2 mr-2" />
              <span className="ml-2 mr-2">Previous</span>
            </button>

            <div className="flex space-x-2">
              <div className="w-6 h-2 bg-black"></div>
              <div className="w-6 h-2 bg-black"></div>
              <div className="w-6 h-2 bg-black"></div>
              <div className="w-6 h-2 bg-black"></div>
              <div className="w-6 h-2 bg-black"></div>
            </div>
            <button
              className="flex items-center text-primary border border-sky-400 hover:text-primary-foreground bg-sky-500"
              onClick={() => setShowModal(true)}
            >
              <span className="ml-2 mr-2 text-white">Submit</span>
              <GoArrowRight className="text-white ml-2 mr-2" />
            </button>
          </div>

          {showModal && <MyModal closeApp={closeApp} openSuccessModal={openSuccessModal} />}
          {showSuccessModal && (
            <div className="flex w-1/2 h-1/2 flex-col items-center justify-center fixed bg-background text-foreground  border-2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <button className="bg-primary text-primary-foreground px-8 py-8 mb-8 bg-green-600 rounded hover:bg-primary/80"
                onClick={closeSuccessModal}
              ><FaCheck className="text-white font-bold text-6xl" /></button>
              <p className="text-lg font-semibold text-primary mb-4 text-green-600">YOUR REQUEST HAS BEEN SUCCESSFULLY RAISED!</p>
            </div>
          )}


          <div className="p-2 text-muted-foreground">Preview</div>
          <div className="border flex flex-col justify-center text-white items-start border-border rounded-lg overflow-hidden mb-4 [background-image:url('/img.jpg')] bg-cover h-72">
            <p className="px-2 text-muted-foreground [size:8px]">2,900 Sqft</p>
            <p className="px-2 text-xl font-bold">Rohini Bagh</p>
            <p className="px-2 text-xxl font-thin">New Delhi, DL, India</p>
            {/* <img src={images} alt="Property preview" className="w-full h-auto" /> */}
          </div>

        </div>
        <div className="border-t border-dashed border-1 "></div>
        <div className="grid grid-cols-12 max-w-full mx-auto p-4   ">

          <div className=" col-span-8  pt-4">
            <div className=" flex gap-4 ">
              <h2 className="text-lg font-semibold">Fund details </h2>
              <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="py-2">Name of opportunity: <span className="font-semibold">Green Steps X</span></p>
                <p className="py-2">Type: <span className="font-semibold">Agricultural</span></p>
                <p className="py-2">Area: <span className="font-semibold">2000 Sq Ft</span></p>
                <p className="py-2">Type: <span className="font-semibold">Agricultural</span></p>
                <p className="py-2">Tags:</p>
                <div className="flex pt-2">
                  <span className="py-1 rounded bg-gray-500 text-xs text-white  text-justify  px-2 ">Fractional Ownership</span>
                  <span className="py-1 rounded bg-gray-300 text-xs text-white  text-justify  px-2 mx-2">Tag 1</span>
                  <span className="py-1 rounded bg-gray-300 text-xs text-white  text-justify  px-2 mx-2">Tag 2</span>
                  <span className="py-1 rounded bg-gray-300 text-xs text-white  text-justify  px-2 mx-2 ">Tag 3</span>
                </div>
              </div>
              <div>
                <p className="py-2">Term: <span className="font-semibold">2.5 years</span></p>
                <p className="py-2">Residency Restriction: <span className="font-semibold">NRI</span></p>
                <p className="py-2">Starting Date: <span className="font-semibold">01/02/2024</span></p>
                <p className="py-2">Closing Date: <span className="font-semibold">01/06/2024</span></p>
              </div>
            </div>
          </div>

          <div className=" col-span-4  pt-4">
            <div className=" flex w-full  gap-4  ">
              <h2 className="text-lg font-semibold">Contribution</h2>
              <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1" />
            </div>
            <div>
              <p>Token Fee:<br></br> <span className="font-semibold text-primary text-indigo-600 py-2">Rs 10000</span></p>
              <p className="py-2">Maximum contribution: <br></br><span className="font-semibold text-primary text-indigo-600 py-2">Rs 100000</span></p>
              <p className="py-2">Minimum contribution:<br></br> <span className="font-semibold text-primary text-indigo-600 py-2">Rs 1000000</span></p>
            </div>
          </div>

        </div>
        <div className="border-t border-dashed border-muted-foreground border-1"></div>




        {/*2nd pages */}

        <div className="">
          <div className=" mb-3 grid grid-cols-12 max-w-full  h-full mx-auto p-4">
            <div className="col-span-6  pt-4  ">
              <div className="flex col-span-8  pt-1">
                <h2 className="text-xl font-semibold mr-2">Area Details</h2>
                <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1" />
              </div>
              <div>
                <p className="text-zinc-400 mb-4 mt-16">Google map link: <a href="#" className="text-black">Link</a></p>
              </div>
            </div>
            <div className="flex items-center justify-center text-muted-foreground col-span-6 h-full w-full">
              <div className="flex items-center justify-center bg-yellow-50 h-full w-full top-1/2 left-1/2 bottom-1/2 right-1/2">Google Map embedded link
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-muted-foreground"></div>


        <div className="w-full mx-auto bg-white p-4">
          <div className="flex justify-between items-start">

            <div className="w-1/2 pr-6">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-4">Bank Details</h2>
                <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1" />
              </div>
              <p className="mb-2"><span className="font-semibold">Bank Name:</span><span className="text-gray-400"><br></br>Indian Overseas Bank </span> </p>
              <p className="mb-2"><span className="font-semibold">Account Number:</span><span className="text-gray-400"><br></br> 61000209020901010 </span></p>
              <p className="mb-2"><span className="font-semibold">Account Holder Name:</span> <span className="text-gray-400"><br></br>Sidharth Muraly Nair</span></p>
              <p className="mb-2"><span className="font-semibold">IFSC Code:</span><span className="text-gray-400"><br></br> IOB000001212</span></p>
              <p className="mb-2"><span className="font-semibold">Bank Address:</span><span className="text-gray-400"><br></br> Perumbavoor address</span></p>
            </div>

            <div className="w-1/2 pl-6">
              <div className="flex justify-between w-3/4">
                <h2 className="text-xl font-bold mb-4">Installments</h2>
                <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1" />
              </div>
              <div className="mb-6">

                <h3 className=" ">Installment 1</h3>
                <div className=" grid grid-cols-12 border-2 p-2 mr-8 w-2/3">
                  <div className="col-span-8">
                    <p>Due Date:<span className="text-blue-600 pl-2">01/02/2024</span></p>
                    <p><span className="">Penalty amount:</span><span className="text-blue-600 pl-2"> Rs 10000</span></p>
                    <p><span className="">Cure Period:</span> <span className="text-blue-600 pl-2">10 days</span></p>
                  </div>
                  <div className="col-span-4  justify-center ">
                    <p className="text-right pt-4">Amount:<br></br><span className="text-4xl text-blue-600">40%</span></p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="">Installment 2</h3>
                <div className=" grid grid-cols-12 border-2 p-2 mr-8 w-2/3">
                  <div className="col-span-8">
                    <p>Due Date:<span className="text-blue-600 pl-2">01/02/2024</span></p>
                    <p><span className="">Penalty amount:</span><span className="text-blue-600 pl-2"> Rs 10000</span></p>
                    <p><span className="">Cure Period:</span> <span className="text-blue-600 pl-2">10 days</span></p>
                  </div>
                  <div className="col-span-4  justify-center ">
                    <p className="text-right pt-4">Amount:<br></br><span className="text-4xl text-blue-600">60%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-muted-foreground border-1"></div>

        {/* 3rd pages*/}
        <div className="flex justify-between">
          <div className="text-2xl font-bold pt-2 mt-4 pl-4">Content</div><div className="text-2xl font-bold mb-4"><HiPencilAlt className="text-3xl font-bold mb-4 text-blue-500 ml-2 mr-6 mt-4 pt-2" /></div>
        </div>
        <div className="grid grid-cols-12 p-6 gap-4">
          <div className="col-span-6 ">

            <div className="mb-8">
              <div className="flex items-start justify-between mb-2">
                <h3 className=" flex text-xl font-bold text-blue-600">Title 1  <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1 pt-1" /></h3>
              </div>
              <p className="text-sm mb-4">
                A description that describes this title in the best and quite possibly the most fruitful way. Fruitful being used here in redundancy as this description truly serves no purpose other than to
                consume space. Though upon further contemplation it has the exceptional functional capability to showcase the many ways in which something can be shown to the final user. It also has a lot of
                grammatically error.
              </p>
              <div className="border-t border-muted-foreground"></div>
            </div>
            <div className="mb-8">
              <div className="flex items-start justify-between mb-2">
                <h3 className="flex text-xl font-bold text-blue-600">Title 2 <HiPencilAlt className="text-lg text-blue-500 ml-2 mr-2 mt-1 pt-1" /></h3>
              </div>
              <p className="text-sm mb-4">
                A description that describes this title in the best and quite possibly the most fruitful way. Fruitful being used here in redundancy as this description truly serves no purpose other than to
                consume space. Though upon further contemplation it has the exceptional functional capability to showcase the many ways in which something can be shown to the final user. It also has a lot of
                grammatically error.
              </p>

            </div>
          </div>
          <div className="col-span-6 mt-0 pt-0">
            <div className="max-w-2xl mx-auto bg-white p-6 ">

              <div className="divide-y divide-gray-300">
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-500">Name of land mark</span>
                  <span className="text-gray-500">2 KM</span>
                  <p className=" [background-image:url('/Airport.jpg')] bg-cover w-6 h-6 "></p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-500">Name of land mark</span>
                  <span className="text-gray-500">2 KM</span>
                  <p className=" [background-image:url('/Gate.jpg')] bg-cover w-6 h-6 "></p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-500">Name of land mark</span>
                  <span className="text-gray-500">2 KM</span>
                  <p className=" [background-image:url('/HouseFence.jpg')] bg-cover w-6 h-6 "></p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-500">Name of land mark</span>
                  <span className="text-gray-500">2 KM</span>
                  <p className=" [background-image:url('/SecurityConfiguration.jpg')] bg-cover w-6 h-6 "></p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-500">Name of land mark</span>
                  <span className="text-gray-500">2 KM</span>
                  <p className=" [background-image:url('/LightningBolt.jpg')] bg-cover w-6 h-6 "></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-muted-foreground border-1"></div>

        {/*4th pages */}
        <div className="m-4">

          <h2 className="text-2xl font-bold mb-4 p-6">Files</h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 h-28">


              <div className="mt-2 h-28">
                <h4 className="flex text-2xl font-semibold text-gray-400 mb-2">Sale deed <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" /></h4>
                <ul className="space-y-1 border-2 mb-4 rounded-md">
                  <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 m-2">
                    <span className="text-muted-foreground">Template</span>
                    <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 mx-2 mb-4">
                    <span className="text-muted-foreground">Older</span>
                    <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
                  </li>
                  <li className="p-2 mx-2 mb-4"></li>
                  <li></li>
                </ul>
              </div>

            </div>

            <div className="col-span-4 mt-2">
              <h4 className="flex text-2xl font-semibold text-gray-400 mb-2">
                Power Attorney
                <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
              </h4>
              <ul className="space-y-1 border-2 mb-4 rounded-md">
                <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 m-2">
                  <span className="text-muted-foreground">Supporting docs</span>
                  <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
                </li>

                <li className="p-2 mx-2 mb-4"></li>
                <li className="p-2 mx-2 mb-4"></li>
                <li></li>
                <li className="p-2 mx-2 mb-4"></li>

              </ul>
            </div>

            <div className="col-span-4 mt-2">
              <h4 className="flex text-2xl font-semibold text-gray-400 mb-2">
                Registry of Land
                <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
              </h4>
              <div className="border-2 h-28 mt-2 rounded-md">
                <div className="flex justify-center mt-10 text-gray-200">Not applicable</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 h-56 m-4">
          <div className="col-span-6 h-56">
            <h4 className="flex text-2xl font-semibold text-gray-400 mb-2">
              Jamabandi
              <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
            </h4>
            <ul className="space-y-1 border-2 mb-4 rounded-md h-72">
              <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 m-2">
                <span className="text-muted-foreground">file.pdf</span>
                <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
              </li>
              <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 mx-2 mb-4">
                <span className="text-muted-foreground">file.pdf</span>
                <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
              </li>
              <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 m-2">
                <span className="text-muted-foreground">file.pdf</span>
                <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
              </li>
              <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 mx-2 mb-4">
                <span className="text-muted-foreground">file.pdf</span>
                <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
              </li>
              <li className="p-2 mx-2 mb-4"></li>
              <li></li>
            </ul>
          </div>
          <div className="h-72 col-span-6 ">

            <div className="col-span-6 h-24">
              <h4 className="flex text-2xl font-semibold text-gray-400 mb-2">
                Khata Certificate and Extract
                <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
              </h4>
              <ul className="space-y-1 border-2 mb-4 rounded-md w-2/3">
                <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 m-2">
                  <span className="text-muted-foreground">Khata Certificate</span>
                  <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
                </li>
                <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 mx-2 mb-4">
                  <span className="text-gray-400 justify-between">Extract not available</span>
                  <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
                </li>
                <li className="p-2 mx-2 mb-4"></li>
                <li></li>
              </ul>
            </div>

            <div className="col-span-6 h-24 mt-20 mb-4">
              <h4 className="flex text-2xl font-semibold text-gray-400 mb-2">
                Encumbrance Certificates
                <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
              </h4>
              <ul className="space-y-1 border-2 mb-1 rounded-md w-2/3">
                <li className="flex justify-between items-center bg-gray-200 rounded-md p-2 m-2">
                  <span className="text-muted-foreground">Undertaking form</span>
                  <a href="#" className=" [background-image:url('/Down.jpg')] bg-cover w-8 h-6 bg-gray-200 items-center pr-4" title="Download Template"></a>
                </li>

                <li className="p-2 mx-2 mb-4"></li>
                <li></li>
                <li className="p-2 mx-2 mb-4"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m-4 pt-16">
          <div className="mt-8">
            <h3 className="flex text-2xl font-semibold text-gray-400 mb-2">
              Legal Description of land
              <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
            </h3>
            <p className="mt-2 text-muted-foreground w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="border-t border-dashed border-muted-foreground border-1"></div>

        {/* 5th pages*/}

        <div className="m-4 w-full">
          <div className="flex mb-4">
            <h1 className="flex text-2xl font-bold">Power of attorney</h1>
            <HiPencilAlt className="text-2xl text-blue-500 ml-2 mr-2 mt-1 pt-1" />
          </div>
          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <p className="text-gray-400">Full name: <span className="text-black">Advaith Nair</span></p>
              </div>
              <div className="col-span-4">
                <p className="text-gray-400">Email ID: <span className="text-black">adhu@gmail.com</span></p>
              </div>
              <div className="col-span-4">
                <p className="text-gray-400">Phone number: <span className="text-black">0091 12345 12345</span></p>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-8">
              <div className="col-span-4">
                <p className="text-gray-400">Aadhar Card: <span className="text-black">12312312312</span></p>
              </div>
              <div className="col-span-4">
                <p className="text-gray-400">Address: <span className="text-black">S/O Muraly Nair, xyz, Kerala, India</span></p>
              </div>
              <div className="col-span-4"></div>
            </div>

          </div>
          <div className="mb-4 mt-4">
            <h2 className="text-gray-400">Nature of relationship between issuer and representative</h2>
            <p className="text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="border-t border-dashed border-muted-foreground border-1"></div>

        <div className="m-4">
          <div className="flex items-start ">
            <FaCheck className="text-white bg-green-600 font-bold text-lg" />
            <label className="ml-2 text-foreground">I agree that all the land information provided are true</label>
          </div>
          <div className="flex items-start mb-2">
            <FaCheck className="text-white bg-green-600 font-bold text-lg" />
            <label className="ml-2 text-foreground">I agree that all the documents provided are true</label>
          </div>
          <div className="flex items-start mb-2">
            <FaCheck className="text-white bg-green-600 font-bold text-lg" />
            <label className="ml-2 text-foreground">I agree all the terms and conditions</label>
          </div>
        </div>
        <div className="text-right mr-4 mb-4 ">
          <button className="border-2 bg-blue-600 text-white p-2">Finish</button>
        </div>
      </div>

    </>
  )
}

export default App;
