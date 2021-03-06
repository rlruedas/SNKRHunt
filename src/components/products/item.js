import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


import { getShoeData } from '../../database/fetch'

function Item() {
  const [data, setData] = useState([])
  const params = useParams();

  // const getProductData = async () => {
  //   await axios.get(`http://localhost:5000/api/get-shoe-data/${params.id}`)
  //     .then(function (response) {

  //       setData(response.data);
  //       // sendDataToDB(response.data);

  //     }).catch(function (err) {
  //       console.warn('Something went wrong.', err);
  //     });
  // }

  useEffect(() => {
    getShoeData(params.id).then(data => setData(data.data))
    
    console.log(data);
  }, [])



  return (
    <>
      <div className='flex w-screen h-screen bg-black font-Montserrat justify-center items-center'>
        <section className='w-screen h-screen items-center flex flex-col ' >
          <h1 className='w-[80%] text-white font-extrabold text-[30px] ' >{data.name}</h1>
          <section className='flex flex-row overflow-x-scroll w-screen h-screen no-scrollbar items-center gap-6 before:shrink-0 before:w-[5vw] ' >
            {
              data?.productTemplateExternalPictures?.length > 0 ? data.productTemplateExternalPictures.map((item, index) => (
                <section key={index} className="shrink-0 ">
                  <img src={item} alt="shoeImage" />
                </section>
              )) : <></>
            }
          </section>
        </section>
      </div>

    </>
  )
}

export default Item