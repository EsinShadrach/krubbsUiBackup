import { useState } from "react";
import Krubbs from "../../assets/images/krubbs.png";

export default function Footer() {
  const [email, setEmail] = useState({
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const stringified = JSON.stringify(email);
    console.log(stringified);
  }

  function handleMailChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div
      className="container mx-auto p-12 mt-[300px] bg-bluee"
      draggable={false}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <div className="max-w-sm font-gilmerMedium text-white leading-[67px] text-[56px]">
            Liberty over your Wears
          </div>
          <p className="mt-[34px] max-w-[300px] font-semibold font-gilmerMedium text-white leading-[24px] text-[20px]">
            Want to get updates from us? Subscribe to our mailing list.
          </p>
        </div>

        {/* social links  */}
        <div className="flex space-y-12 flex-col">
          <div className="flex flex-col space-y-6 ml-[170px]">
            <h4 className="font-semibold font-gilmerMedium text-white text-[24px] leading-[29px]">
              Follow Our Socials:
            </h4>
            <div className="flex space-x-10 justify-end">
              <div className=" fill-white text-white cursor-pointer w-6 h-6">
                <FacebookIcon />
              </div>
              <div className=" fill-white text-white cursor-pointer w-6 h-6">
                <InstagramIcon />
              </div>
              <div className=" fill-white text-white cursor-pointer w-6 h-6">
                <TwitterIcon />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <h3 className="text-white font-gilmerMedium font-semibold text-[24px] leading-[29px]">
              Chat with Kofo from Krubbs here:
            </h3>
            <div className="flex space-x-2 items-center justify-end">
              <div className=" fill-white text-white cursor-pointer w-6 h-6">
                <WhatsappIcon />
              </div>
              <p className="text-white font-gilmerMedium font-semibold text-[24px] leading-[29px] hover:underline cursor-pointer">
                +2348123456789
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* form area */}
      <form action="/" onSubmit={handleSubmit}>
        <div className="mt-[52px] flex ">
          <div className="relative w-[720px]">
            <input
              onChange={handleMailChange}
              type="email text"
              className=" font-gilmerMedium w-full h-[80px] outline-none p-[28px] rounded-[72px]"
              name="Join Mailing List"
              id="mailing"
              placeholder="Kofofromkrubbs@krubbs.com"
            />
            <div className="absolute right-2 top-2">
              <button
                type="submit"
                className="bg-bluee font-gilmerMedium text-white p-[18px] rounded-[72px] font-bold text-[24px] leading-[28.8px]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* footer section */}
      <div>
        <div className="footer-line mt-[20px] w-full"></div>
        <div className="mt-[20px] flex justify-between items-center space-x-6">
          <div className="text-white text-xl  font-extrabold leading-5 w-full md:w-fit flex justify-center items-center translate-x-3 md:translate-x-0">
            <a href="#">
              <img src={Krubbs} className="w-20 h-20" alt="company logo" />
            </a>
          </div>
          <div>
            <h3 className="text-white font-gilmerMedium text-xl font-semibold leading-[28.8px] w-full">
              @2023. All Rights Reserved.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function TwitterIcon() {
  return (
    <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>twitter</title>
      <path
        d="m22.46 6c-0.77 0.35-1.6 0.58-2.46 0.69 0.88-0.53 1.56-1.37 1.88-2.38-0.83 0.5-1.75 0.85-2.72 1.05-0.79-0.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 0.34 0.04 0.67 0.11 0.98-3.56-0.18-6.73-1.89-8.84-4.48-0.37 0.63-0.58 1.37-0.58 2.15 0 1.49 0.75 2.81 1.91 3.56-0.71 0-1.37-0.2-1.95-0.5v0.03c0 2.08 1.48 3.82 3.44 4.21-0.36 0.1-0.74 0.15-1.13 0.15-0.27 0-0.54-0.03-0.8-0.08 0.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-0.34 0-0.68-0.02-1.02-0.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-0.19 0-0.37-0.01-0.56 0.84-0.6 1.56-1.36 2.14-2.23z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>facebook</title>
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>instagram</title>
      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>whatsapp</title>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
    </svg>
  );
}
