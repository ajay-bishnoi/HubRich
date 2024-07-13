import Layer2 from "../assets/img/png/slider-bg-layer.webp";
import ProfilePic from "../assets/img/svg/girl-profile.svg";

export const MainHeading = ({
  Content1,
  Content2,
  Content3,
  clsValue,
  clsValue2,
  clsValue3,
}) => {
  return (
    <h1
      className={`font-Helvetica font-normal sm:text-6xl text-[44px] sm:leading-[77px] leading-[50px] text-black ${clsValue}`}
    >
      {Content1}
      <span className={`${clsValue2}`}>
        {Content2} <span className={`${clsValue3}`}>{Content3}</span>
      </span>
    </h1>
  );
};
export const Heading2 = ({
  Content1,
  Content2,
  Content3,
  clsValue,
  clsValue2,
  clsValue3,
}) => {
  return (
    <h2
      className={`font-Helvetica font-normal xl:text-[52px] lg:text-5xl md:text-[44px] sm:text-[46px] text-[38px] leading-[48px]  sm:leading-[60px] md:leading-[55px] lg:leading-[60px] xl:leading-[66px] capitalize text-black ${clsValue}`}
    >
      {Content1}{" "}
      <span className={`${clsValue2}`}>
        {" "}
        {Content2} <span className={`${clsValue3}`}>{Content3}</span>{" "}
      </span>
    </h2>
  );
};
export const PhoneIcon = () => {
  return (
    <a href="tel:+914234709">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.286 16.2289H33.8144C33.8144 7.17855 26.9817 0.352844 17.9189 0.352844V3.88125C25.0851 3.88125 30.286 9.0733 30.286 16.2289Z"
          fill="url(#paint0_linear_4017_56)"
        />
        <path
          d="M17.9375 10.9381C21.6476 10.9381 23.2301 12.5206 23.2301 16.2307H26.7585C26.7585 10.5412 23.627 7.40972 17.9375 7.40972V10.9381ZM23.9746 20.5407C23.6356 20.2326 23.1901 20.0682 22.7322 20.0824C22.2743 20.0966 21.8399 20.2881 21.5206 20.6165L17.2988 24.9583C16.2826 24.7642 14.2397 24.1273 12.1368 22.0297C10.0338 19.925 9.39694 17.8767 9.20818 16.8676L13.5464 12.6441C13.8752 12.325 14.067 11.8905 14.0812 11.4325C14.0953 10.9745 13.9307 10.5289 13.6222 10.1901L7.10348 3.02215C6.79482 2.68228 6.36583 2.47613 5.90762 2.44747C5.44941 2.41882 4.99808 2.56991 4.64947 2.86866L0.821152 6.15184C0.516141 6.45796 0.33409 6.86538 0.309533 7.29681C0.28307 7.73786 -0.221492 18.1855 7.87973 26.2902C14.9471 33.3559 23.7999 33.8728 26.238 33.8728C26.5944 33.8728 26.8132 33.8622 26.8714 33.8587C27.3028 33.8345 27.7099 33.6516 28.0146 33.3453L31.296 29.5152C31.595 29.1668 31.7464 28.7156 31.718 28.2574C31.6897 27.7992 31.4839 27.3701 31.1443 27.0612L23.9746 20.5407Z"
          fill="url(#paint1_linear_4017_56)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4017_56"
            x1="16.2071"
            y1="6.45902"
            x2="33.8104"
            y2="12.1503"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0C5FD1" />
            <stop offset="1" stop-color="#8703C5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_4017_56"
            x1="-3.08947"
            y1="14.532"
            x2="31.7219"
            y2="25.7724"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0C5FD1" />
            <stop offset="1" stop-color="#8703C5" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};
export const PrevArrow = ({ onClick, className, style }) => {
  return (
    <div
      className={`absolute z-30 left-6 bottom-6 cursor-pointer max-md:!hidden ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span>
        <svg
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 1L2 18L20 35" stroke="#9800B0" stroke-width="1.5" />
        </svg>
      </span>
    </div>
  );
};
export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`absolute z-30 left-24 bottom-6 cursor-pointer max-md:!hidden ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span>
        <svg
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L19 18L1 35" stroke="white" stroke-width="1.5" />
        </svg>
      </span>
    </div>
  );
};
export const FbIcon = () => {
  return (
    <a href="https://www.facebook.com/" target="_blank" className="social-icon">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3635)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 14.9208C0 22.3251 5.37756 28.482 12.4107 29.7305V18.9742H8.6875V14.8377H12.4107V11.5277C12.4107 7.80453 14.8097 5.7369 18.2028 5.7369C19.2776 5.7369 20.4367 5.90197 21.5115 6.06703V9.8734H19.6089C17.7883 9.8734 17.375 10.7831 17.375 11.9423V14.8377H21.3464L20.6849 18.9742H17.375V29.7305C24.4082 28.482 29.7857 22.3263 29.7857 14.9208C29.7857 6.68384 23.0839 -0.0551758 14.8929 -0.0551758C6.70179 -0.0551758 0 6.68384 0 14.9208Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_3635">
            <rect width="29.7857" height="29.7857" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
export const MailIcon = () => {
  return (
    <a href="mailto:MarcJoachimHubrich" className="social-icon">
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3639)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7893 30.3018C23.0144 30.3018 29.6822 23.6341 29.6822 15.409C29.6822 7.18387 23.0144 0.516113 14.7893 0.516113C6.56424 0.516113 -0.103516 7.18387 -0.103516 15.409C-0.103516 23.6341 6.56424 30.3018 14.7893 30.3018ZM7.50774 7.13525H22.0696C23.0708 7.13525 23.8899 7.97298 23.8899 8.99686V20.1665C23.8899 21.1904 23.0708 22.0281 22.0696 22.0281H7.50774C6.50661 22.0281 5.6875 21.1904 5.6875 20.1665L5.6966 8.99686C5.6966 7.97298 6.50661 7.13525 7.50774 7.13525ZM15.2711 15.2053L21.7056 11.0912C21.7969 11.0388 21.8768 10.968 21.9405 10.8831C22.0042 10.7982 22.0505 10.701 22.0764 10.5973C22.1023 10.4936 22.1074 10.3856 22.0913 10.2798C22.0753 10.174 22.0384 10.0727 21.9829 9.98193C21.9275 9.89117 21.8546 9.81286 21.7686 9.75174C21.6827 9.69062 21.5856 9.64797 21.4831 9.62636C21.3806 9.60476 21.2749 9.60464 21.1723 9.62604C21.0698 9.64743 20.9725 9.68988 20.8865 9.75081L14.7887 13.6509L8.69089 9.75081C8.60485 9.68988 8.50762 9.64743 8.40507 9.62604C8.30253 9.60464 8.19681 9.60476 8.09431 9.62636C7.9918 9.64797 7.89466 9.69062 7.80874 9.75174C7.72282 9.81286 7.64992 9.89117 7.59446 9.98193C7.53899 10.0727 7.5021 10.174 7.48604 10.2798C7.46997 10.3856 7.47505 10.4936 7.50098 10.5973C7.52691 10.701 7.57314 10.7982 7.63687 10.8831C7.70061 10.968 7.78053 11.0388 7.87179 11.0912L14.3063 15.2053C14.5976 15.3915 14.9798 15.3915 15.2711 15.2053Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_3639">
            <rect
              width="29.7857"
              height="29.7857"
              fill="white"
              transform="translate(0 0.571289)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
export const InstaIcon = () => {
  return (
    <a
      href="https://www.instagram.com/"
      target="_blank"
      className="social-icon"
    >
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3643)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7386 30.0875C22.9637 30.0875 29.6314 23.4197 29.6314 15.1946C29.6314 6.96952 22.9637 0.301758 14.7386 0.301758C6.51346 0.301758 -0.154297 6.96952 -0.154297 15.1946C-0.154297 23.4197 6.51346 30.0875 14.7386 30.0875ZM11.1439 15.0501C11.1439 13.1523 12.6927 11.6036 14.5905 11.6036C16.4883 11.6036 18.0371 13.1523 18.0371 15.0501C18.0371 16.9479 16.4883 18.4967 14.5905 18.4967C12.6927 18.4967 11.1439 16.9479 11.1439 15.0501ZM24.928 14.528C24.9278 14.7019 24.9276 14.8759 24.9276 15.0501C24.9276 15.2449 24.9279 15.4395 24.9282 15.6339C24.93 16.8636 24.9318 18.0861 24.8604 19.3163C24.7802 20.9711 24.4053 22.4371 23.1927 23.6497C21.9826 24.8598 20.514 25.2372 18.8593 25.3174C17.6085 25.3878 16.3657 25.3864 15.1152 25.385C14.9413 25.3848 14.7673 25.3846 14.5931 25.3846C14.4192 25.3846 14.2455 25.3848 14.072 25.385C12.8231 25.3864 11.58 25.3878 10.3269 25.3174C8.67214 25.2372 7.20613 24.8623 5.9935 23.6497C4.78345 22.4397 4.40596 20.9711 4.32581 19.3163C4.25543 18.0655 4.25681 16.8206 4.2582 15.5713C4.25839 15.3977 4.25858 15.2239 4.25858 15.0501C4.25858 14.8763 4.25839 14.7026 4.2582 14.529C4.25681 13.2801 4.25543 12.037 4.32581 10.7839C4.40596 9.12917 4.78087 7.66316 5.9935 6.45053C7.20354 5.24048 8.67214 4.86299 10.3269 4.78284C11.5777 4.71247 12.8204 4.71384 14.071 4.71523C14.2449 4.71542 14.4189 4.71561 14.5931 4.71561C14.7669 4.71561 14.9406 4.71542 15.1142 4.71523C16.3631 4.71384 17.6062 4.71247 18.8593 4.78284C20.514 4.86299 21.98 5.2379 23.1927 6.45053C24.4027 7.66057 24.7802 9.12917 24.8604 10.7839C24.9307 12.0347 24.9294 13.2775 24.928 14.528ZM9.28751 15.0501C9.28751 17.9847 11.6559 20.3531 14.5905 20.3531C17.5251 20.3531 19.8935 17.9847 19.8935 15.0501C19.8935 12.1155 17.5251 9.74712 14.5905 9.74712C11.6559 9.74712 9.28751 12.1155 9.28751 15.0501ZM18.8722 9.52994C18.8722 10.2151 19.4255 10.7684 20.1107 10.7684C20.2734 10.7686 20.4345 10.7367 20.5849 10.6746C20.7352 10.6124 20.8718 10.5212 20.9869 10.4061C21.1019 10.2911 21.1931 10.1545 21.2553 10.0041C21.3175 9.85377 21.3494 9.69263 21.3492 9.52994C21.3492 8.84476 20.7959 8.29145 20.1107 8.29145C19.4255 8.29145 18.8722 8.84476 18.8722 9.52994Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_3643">
            <rect
              width="29.7857"
              height="29.7857"
              fill="white"
              transform="translate(0 0.356934)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
export const TwitIcon = () => {
  return (
    <a href="https://x.com" target="_blank" className="social-icon">
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3637)">
          <path
            d="M14.8421 0.730469C6.61776 0.730469 -0.0507812 7.39901 -0.0507812 15.6233C-0.0507812 23.8476 6.61776 30.5162 14.8421 30.5162C23.0664 30.5162 29.7349 23.8476 29.7349 15.6233C29.7349 7.39901 23.0664 0.730469 14.8421 0.730469ZM21.9993 11.9566C22.0093 12.1129 22.0093 12.2758 22.0093 12.4353C22.0093 17.3154 18.2927 22.9368 11.5012 22.9368C9.40685 22.9368 7.46546 22.3284 5.8299 21.2813C6.12909 21.3145 6.41498 21.3278 6.72082 21.3278C8.44945 21.3278 10.0385 20.7427 11.305 19.7521C9.68277 19.7189 8.3198 18.6551 7.8544 17.1924C8.42286 17.2755 8.9348 17.2755 9.51987 17.1259C8.68457 16.9562 7.93377 16.5025 7.39504 15.842C6.85631 15.1815 6.56287 14.3548 6.56457 13.5024V13.4559C7.05324 13.7318 7.62835 13.9013 8.23005 13.9246C7.72423 13.5875 7.30941 13.1308 7.02237 12.595C6.73532 12.0592 6.58493 11.4608 6.58452 10.853C6.58452 10.1648 6.76403 9.53654 7.08649 8.99135C8.01364 10.1327 9.17059 11.0662 10.4821 11.7311C11.7937 12.3961 13.2305 12.7776 14.6991 12.8509C14.1772 10.341 16.0521 8.30987 18.306 8.30987C19.3698 8.30987 20.3272 8.75533 21.002 9.47337C21.8364 9.31713 22.6342 9.00465 23.3456 8.58579C23.0697 9.44013 22.4913 10.1615 21.7234 10.6169C22.468 10.5371 23.1861 10.331 23.8509 10.0418C23.349 10.7798 22.7207 11.4347 21.9993 11.9566Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_3637">
            <rect
              width="29.7857"
              height="29.7857"
              fill="white"
              transform="translate(0 0.785645)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
export const RightArrow = () => {
  return (
    <span>
      <svg
        width="41"
        height="14"
        viewBox="0 0 41 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.101 7.60104C40.433 7.2691 40.433 6.73091 40.101 6.39896L34.6917 0.989595C34.3597 0.65765 33.8215 0.65765 33.4896 0.989595C33.1576 1.32154 33.1576 1.85973 33.4896 2.19168L38.2979 7L33.4896 11.8083C33.1576 12.1403 33.1576 12.6785 33.4896 13.0104C33.8215 13.3424 34.3597 13.3424 34.6917 13.0104L40.101 7.60104ZM0.5 7.85L39.5 7.85L39.5 6.15L0.5 6.15L0.5 7.85Z"
          fill="url(#paint0_linear_2884_55)"
          className="group-hover:fill-white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2884_55"
            x1="-3.7"
            y1="7.38462"
            x2="-3.4011"
            y2="11.1488"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0C5FD1" />
            <stop offset="1" stop-color="#8703C5" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};
export const Paragraphs = ({ clsValue, Content1 }) => {
  return (
    <p
      className={`font-Poppins font-normal text-base  leading-[25px] text-black ${clsValue}`}
    >
      {Content1}
    </p>
  );
};
export const BlueCard = ({ class1, textContent, class2 }) => {
  return (
    <div
      className={`min-w-[248px] lg:max-w-[250px] w-full flex justify-center min-h-[162px] pt-[42px] ${class1} backdrop-blur-sm  bg-lightBlue duration-500 ease-linear hover:bg-darkBlue`}
    >
      {textContent.map((text, index) => (
        <Paragraphs
          Content1={`${text}`}
          key={index}
          clsValue={`!text-white w-[173px] ${class2}`}
        />
      ))}
    </div>
  );
};
export const SixCard = ({ class1, textContent, class2, commonBtn }) => {
  return (
    <div className="w-full h-fit sm:w-6/12 lg:w-4/12 max-sm:px-0 max-xl:px-3 2xl:flex 2xl:justify-center">
      <div
        className={`lg:max-w-[380px] 2xl:max-w-full w-full flex xl:justify-center cursor-pointer justify-center sm:justify-start sm:text-start text-center  sm:min-h-[190px] lg:min-h-[230px] md:pt-12 sm:py-6 py-4 lg:pt-[63px]  duration-500 ease-linear group/item  ${class1}`}
      >
        {textContent.map((text, index) =>
          text ? (
            <Paragraphs
              Content1={`${text}`}
              key={index}
              clsValue={`opacity-70 xl:w-[283px] max-sm:w-[320px] group-hover/item:text-darkBlue capitalize duration-500 ease-linear ${class2}`}
            />
          ) : null
        )}
        {commonBtn && <div className="h-fit">{commonBtn}</div>}
      </div>
    </div>
  );
};
export const RequestCard = ({ class1, textContent, class2 }) => {
  return (
    <div
      className={`min-w-[240px] lg:max-w-[250px] w-full flex justify-center min-h-[200px] pt-[61px] ${class1} lg:backdrop-blur-[2px] opacity-1 bg-lightBlue3 duration-500 ease-linear hover:bg-darkBlue`}
    >
      {textContent.map((text, index) => (
        <Paragraphs
          Content1={`${text}`}
          key={index}
          clsValue={`!text-white w-[173px] ${class2}`}
        />
      ))}
    </div>
  );
};
export const FourthCard = ({ textContent }) => {
  return (
    <>
      <div className="xl:min-h-[448px] px-3 sm:px-0 lg:min-h-[410px] sm:min-h-[370px] min-h-[340px] bg-darkBlue relative z-10 !flex  !justify-center !items-center">
        {textContent.map((text, index) => (
          <div
            key={index}
            className="text-center max-w-[364px] min-h-[182px] w-full "
          >
            <h5 className=" text-white font-semibold sm:text-xl text-lg leading-7 sm:leading-8 font-Poppins sm:mb-4 mb-2 capitalize">
              {text.data1}
              <span className=" block"> {text.data2}</span>
            </h5>
            <Paragraphs clsValue="text-white" Content1={`${text.data3}`} />
          </div>
        ))}
        <img
          src={Layer2}
          alt="bg-layer"
          className=" absolute right-0 bottom-0 w-[382px] h-[250px] -z-10"
        />
      </div>
    </>
  );
};
export const UpArrow = () => {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8.12305L10 2.12305L18 8.12305"
        stroke="white"
        stroke-width="2.62342"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
//
