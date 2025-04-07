import React from 'react'
import "../footer/Footer.css"
import logo from "../../images/buxpxti.png"
import locations from "../../images/location.png"
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Zoom from "react-reveal/Zoom";




const Footer = () => {
    const { t } = useTranslation();

  return (
      <div className='footer pb-0'>

          <div className={"f-block block items-center "}>
              <div>

                  <div className='flex flex-wrap  p-2 col-end-3 gap-4 justify-center'>

                          <div className={" xl:w-1/3 border-r border-white p-2  md:w-75"}>

                              <div className='flex   gap-1 '>
                                  <CiLocationOn className='text-white my-2 text-[20px]'/>
                                  <p className='text-white '>{t('footer.adress2')}</p>
                              </div>
                              <div className='flex items-center text-center gap-1 mx-2'>
                                  <CiPhone className='text-white text-[20px]'/>

                                  <a className='text-white' href="">+998 55 309-99-99</a>
                              </div>
                              <div>
                                  <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8958577959097!2d64.42846967583635!3d39.80932777154381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009003f1c477b%3A0x920d498788a13e58!2sBuxoro%20psixologiya%20va%20xorijiy%20tillar%20instituti!5e0!3m2!1sru!2s!4v1728054121217!5m2!1sru!2s"
                                      width="360" height="200" allowFullScreen="" loading="lazy"
                                      className={"my-2"}
                                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                          </div>


                          <div className={"border-r border-white p-2 xl:w-1/3 md:w-75"}>
                              <div className='flex   gap-1 items-center '>
                                  <CiLocationOn className='text-white my-2 text-[20px]'/>
                                  <p className='text-white  '>{t('footer.adress1')}</p>
                              </div>
                              <div className='flex items-center text-center '>
                                  <CiPhone className='text-white text-[20px]'/>
                                  <a className='text-white' href="">+998 55 305-55-55</a>
                              </div>
                              <div>

                                  <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19946.77748909167!2d64.50137016920861!3d39.80150096920902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f501b37c5f08b1d%3A0xf1d1690431b464ac!2sBuxoro%20psixologiya%20va%20xorijiy%20tillar%20instituti!5e0!3m2!1sru!2s!4v1728054406842!5m2!1sru!2s"
                                      width="360" height="200" allowFullScreen="" loading="lazy"
                                      className={"my-2"}
                                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                          </div>


                          <div className=''>

                              <div className='mx-8 lg:mx-2 xl:mx-2 my-2'>
                                  <p className={"text-white text-lg"}>{t('footer.title')}</p>
                                  <a  target="_blank" className={"text-white   no-underline my-1 flex gap-2"}
                                     href="https://t.me/BuxPXTI_uz">
                                      <BsTelegram className='text-white text-[30px] '/>
                                      t.me/buxpxti_uz
                                  </a>
                                  <a className={"text-white   no-underline my-1 flex gap-2"}
                                     href="https://www.instagram.com/buxpxti.uz/">
                                      <BsInstagram className='text-white text-[30px] '/>
                                      instagram.com/buxpxti.uz
                                  </a>
                                  <a  target="_blank" className={"text-white   no-underline my-1 flex gap-2"}
                                     href="https://youtube.com/@buxpxti">
                                      <FaYoutube className='text-white text-[30px] '/>
                                      youtube.com/@buxpxti
                                  </a>
                                  <a  target="_blank" className={"text-white   no-underline my-1 flex gap-2"}
                                     href="https://facebook.com/buxpxti.uz">
                                      <FaFacebook className='text-white text-[30px] '/>
                                      facebook.com/buxpxti.uz
                                  </a>
                                  <a  target="_blank" className='text-white   no-underline my-1 flex gap-2' href=""> <MdOutlineEmail
                                      className='  text-[30px]'/> buxpxti@gmail.com</a>

                              </div>
                              <br/>

                          </div>



                  </div>
              </div>


          </div>
          <div className='mt-3 pb-0'>
              <div className='w-[90%] bg-white  '></div>
              <p className='text-center text-white pb-4 m-0 w-75'>{t('footer.copyright')}</p>
          </div>

      </div>
  )
}

export default Footer