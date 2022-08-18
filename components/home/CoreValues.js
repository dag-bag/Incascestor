/** @format */

import Image from "next/image";
import React from "react";
const svgStyle = "w-10 h-10";
const CoreData = [
  {
    svg: (
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgStyle}
        preserveAspectRatio="none"
      >
        <path
          d="M21.7132 24.262C21.6723 23.4811 21.6723 22.6982 21.7132 21.9173C21.7572 21.3612 21.9022 20.8201 22.1399 20.3252C23.8044 17.2801 26.0952 14.6943 28.8332 12.7699C31.2332 10.9173 33.7399 9.18043 36.0599 7.21201C37.5983 5.83225 39.0421 4.33265 40.3799 2.72516C40.9399 2.11726 41.4198 1.94359 41.9265 2.55148C43.7006 4.36796 44.9818 6.67786 45.6307 9.22981C46.2795 11.7818 46.2712 14.478 45.6065 17.0252C44.9647 19.465 43.7197 21.6674 42.0065 23.3936C41.1813 24.0648 40.2863 24.6283 39.3398 25.0725L38.6732 25.4488L39.1532 25.6515C39.8999 25.912 40.1665 26.5199 39.7132 27.2146C37.4999 30.6883 35.3132 34.191 32.9932 37.6067C31.7014 39.6279 30.0175 41.3175 28.0599 42.5567C27.0058 43.1233 25.8967 43.5602 24.7532 43.8594C24.5792 43.8813 24.4152 43.9592 24.2821 44.083C24.1491 44.2067 24.0531 44.3708 24.0065 44.5541L21.0465 54.0778C20.6999 55.2357 20.1666 55.7278 19.4199 55.5831C18.6732 55.4383 18.4332 54.8015 18.4332 53.5857C18.5461 50.47 19.0394 47.3843 19.8999 44.4094C19.8846 44.2748 19.8846 44.1387 19.8999 44.0041C20.0699 43.6734 20.1256 43.2877 20.0572 42.9163C19.9888 42.5449 19.8006 42.2122 19.5265 41.9778C18.1989 40.3806 17.4175 38.3366 17.3132 36.1883C16.8916 32.1675 17.6772 28.1064 19.5532 24.6094C20.2732 23.3068 20.6999 23.2489 21.7132 24.262ZM41.2332 4.75149C40.2617 5.86092 39.2286 6.90495 38.1399 7.87779C35.4732 9.99094 32.8065 11.9594 30.2999 13.9857C27.7485 15.7644 25.5758 18.1131 23.9265 20.8752C23.6334 21.3669 23.4762 21.9395 23.4732 22.5252C23.4732 24.812 23.7399 27.1278 23.8999 29.4146C23.8999 29.9936 23.8999 30.4857 23.3132 30.6594C22.7266 30.8331 22.4332 30.4857 22.2199 29.9357C21.7399 28.8357 21.2332 27.7357 20.6732 26.4909C20.5409 26.7324 20.4252 26.9839 20.3266 27.2436C19.9459 28.3049 19.6165 29.3871 19.3398 30.4857C18.7026 33.1309 18.8047 35.9221 19.6332 38.5041C19.9338 39.5476 20.5084 40.4732 21.2865 41.1673C22.2199 41.9488 22.2999 42.1225 21.9532 43.3094C21.9532 43.5989 21.7665 43.8594 21.6865 44.1489L20.6999 48.1725H20.8599L21.0998 47.3909L22.5399 42.9331C22.597 42.6139 22.7575 42.3276 22.9923 42.1258C23.2271 41.924 23.5207 41.8202 23.8199 41.8331C24.9763 41.9226 26.1233 41.5522 27.0465 40.791C28.3965 39.7524 29.6393 38.5586 30.7532 37.2304C32.7266 34.6252 34.4865 31.8462 36.2999 29.0962C36.6732 28.5752 36.9399 27.9673 37.3132 27.3304H35.2332C34.5932 27.3304 33.8999 27.562 33.6332 26.6646C33.3665 25.7673 33.6332 25.7094 34.7532 25.1883C36.2732 24.3778 37.7399 23.5094 39.2865 22.7567C40.5111 22.1355 41.5338 21.1263 42.2199 19.862L42.6732 19.1094C43.9187 16.8822 44.4599 14.2743 44.2144 11.6825C43.9689 9.0907 42.9502 6.65692 41.3132 4.75149H41.2332Z"
          fill="white"
        />
        <path
          d="M11.3666 35.6668C11.3159 38.1109 11.7356 40.5395 12.5989 42.7975C13.4621 45.0555 14.7499 47.0931 16.38 48.78L16.62 49.0405C16.7108 49.1274 16.7835 49.2343 16.8333 49.3541C16.8831 49.4739 16.9089 49.6038 16.9089 49.7352C16.9089 49.8666 16.8831 49.9966 16.8333 50.1163C16.7835 50.2361 16.7108 50.343 16.62 50.43C16.5373 50.534 16.435 50.6176 16.32 50.6748C16.2049 50.7321 16.0799 50.7617 15.9533 50.7617C15.8267 50.7617 15.7016 50.7321 15.5866 50.6748C15.4715 50.6176 15.3692 50.534 15.2866 50.43C14.7266 49.8221 14.14 49.1852 13.6333 48.5194C10.9617 45.0536 9.49851 40.678 9.5 36.1589C9.56641 29.5964 11.1725 23.1605 14.1667 17.4589C17.3433 11.1527 21.5025 5.49174 26.46 0.727343C27.42 -0.22792 27.66 -0.256867 28.5667 0.727343C30.14 2.3484 31.6333 4.02734 33.1799 5.67734L33.3133 5.85102C33.74 6.42997 33.74 6.97996 33.3133 7.35627C32.8866 7.73259 32.4333 7.61681 31.98 7.09576L29.1799 3.91155L28.22 2.92733C27.5533 2.23259 27.5266 2.23259 26.8866 2.92733C24.0755 5.76439 21.5298 8.89631 19.2866 12.2773C16.0215 17.0107 13.6144 22.3741 12.1933 28.0826C11.6451 30.5668 11.3677 33.1123 11.3666 35.6668Z"
          fill="white"
        />
        <path
          d="M45.7132 35.6667C45.759 38.4502 45.2578 41.2124 44.2432 43.7692C43.2285 46.3261 41.7237 48.6189 39.8289 50.4951C37.9341 52.3712 35.6927 53.7875 33.2542 54.6498C30.8156 55.512 28.2358 55.8004 25.6866 55.4956C25.1266 55.4956 24.5665 55.3219 24.0065 55.2061C23.4465 55.0904 22.9932 54.5982 23.0999 54.0482C23.2065 53.4982 23.6866 53.1798 24.4066 53.3246C27.3596 53.9946 30.4264 53.7539 33.2599 52.6298C36.6427 51.2676 39.5193 48.7362 41.4466 45.4253C43.374 42.1143 44.2453 38.2074 43.9265 34.3061C43.72 31.5506 43.2554 28.8252 42.5399 26.1719C42.3532 25.4482 42.5399 24.9561 43.0999 24.7824C43.6599 24.6088 44.0333 24.7824 44.2466 25.6509C45.1597 28.8998 45.6533 32.2705 45.7132 35.6667Z"
          fill="white"
        />
        <path
          d="M33.8466 48.3461C33.5532 48.0567 33.1799 47.9119 33.0999 47.6225C33.0681 47.2685 33.1139 46.9115 33.2333 46.5804C33.2333 46.5804 33.4732 46.3777 33.6066 46.2909C34.8778 45.4481 35.9747 44.329 36.8282 43.0039C37.6818 41.6787 38.2737 40.1763 38.5666 38.5909C38.7266 37.7225 39.4199 37.3172 39.9265 37.8093C40.0573 37.9692 40.1539 38.1585 40.2093 38.3638C40.2646 38.569 40.2773 38.7849 40.2466 38.9961C39.6836 42.3592 37.9201 45.3449 35.3399 47.304C34.8865 47.6514 34.4066 48.0277 33.8466 48.3461Z"
          fill="white"
        />
        <path
          d="M40.3798 33.8436C40.3932 33.988 40.3932 34.1335 40.3798 34.2779C40.3798 34.9436 40.0598 35.4068 39.5532 35.3779C39.0465 35.3489 38.6998 34.9726 38.6465 34.3647C38.5932 33.7568 38.6465 33.6121 38.6465 33.2357C38.6465 32.8594 39.0199 32.1936 39.4999 32.2226C39.9799 32.2515 40.3532 32.6278 40.4065 33.2068C40.4198 33.4188 40.4198 33.6316 40.4065 33.8436H40.3798Z"
          fill="white"
        />
        <path
          d="M24.0065 38.9087C23.8547 38.9259 23.7016 38.8985 23.5628 38.8295C23.4241 38.7605 23.3049 38.6523 23.2178 38.5164C23.1306 38.3804 23.0787 38.2215 23.0673 38.0563C23.0559 37.8911 23.0857 37.7257 23.1532 37.5771C23.8732 35.5798 24.5399 33.5824 25.4199 31.7877C27.8174 27.0865 30.806 22.7705 34.2999 18.964C36.0911 16.9727 37.6577 14.7571 38.9666 12.364C39.0173 12.2446 39.0903 12.138 39.1808 12.0506C39.2714 11.9633 39.3775 11.8971 39.4926 11.8564C39.6077 11.8156 39.7294 11.8011 39.8499 11.8137C39.9705 11.8264 40.0874 11.8659 40.1932 11.9298C40.3073 11.9931 40.4067 12.0834 40.4842 12.1942C40.5617 12.3049 40.6153 12.4331 40.6409 12.5694C40.6665 12.7056 40.6636 12.8464 40.6322 12.9812C40.6009 13.116 40.542 13.2414 40.4599 13.3482C39.3932 15.0561 38.3266 16.764 37.1266 18.3561C34.7532 21.5114 32.1932 24.4929 29.8732 27.6772C27.6584 30.7835 25.97 34.2925 24.8866 38.0403C24.7266 38.4456 24.5398 38.8508 24.0065 38.9087Z"
          fill="white"
        />
      </svg>
    ),
    title: "Hipoalérgicos",
  },
  {
    svg: (
      <svg
        width={56}
        height={55}
        viewBox="0 0 56 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgStyle}
        preserveAspectRatio="none"
      >
        <path
          d="M28 55C22.4622 55 17.0486 53.3872 12.4441 50.3654C7.83952 47.3437 4.25062 43.0488 2.13138 38.0238C0.0121287 32.9988 -0.542359 27.4695 0.538024 22.135C1.61841 16.8006 4.28528 11.9005 8.20114 8.05458C12.117 4.20864 17.106 1.58951 22.5374 0.528418C27.9689 -0.532675 33.5987 0.0119121 38.7151 2.09332C43.8314 4.17473 48.2045 7.69949 51.2811 12.2218C54.3578 16.7442 56 22.061 56 27.5C55.9926 34.7912 53.0402 41.7818 47.7908 46.9375C42.5414 52.0932 35.4238 54.9928 28 55V55ZM28 1.88245C22.8413 1.88245 17.7983 3.38491 13.509 6.1998C9.2196 9.01469 5.87642 13.0156 3.90224 17.6966C1.92806 22.3776 1.41147 27.5284 2.4179 32.4977C3.42433 37.4671 5.90847 42.0317 9.55628 45.6143C13.2041 49.197 17.8518 51.6369 22.9114 52.6253C27.9711 53.6138 33.2155 53.1065 37.9816 51.1675C42.7477 49.2286 46.8214 45.9451 49.6875 41.7324C52.5535 37.5196 54.0833 32.5667 54.0833 27.5C54.076 20.708 51.3254 14.1963 46.4355 9.39363C41.5455 4.59097 34.9155 1.88967 28 1.88245V1.88245Z"
          fill="white"
        />
        <path
          d="M31.8612 42.8596C28.5884 42.4709 25.3725 41.7111 22.2778 40.5952V40.5952C21.3056 40.5952 18.8057 39.2311 11.3612 26.9543C10.5337 25.2556 10.1608 23.3776 10.2779 21.498C10.2851 21.2423 10.3936 20.9994 10.5803 20.8211C10.7671 20.6427 11.0173 20.543 11.2778 20.5431C11.5259 20.5571 11.7592 20.6638 11.9297 20.8414C12.1002 21.0189 12.1949 21.2539 12.1945 21.498C12.099 23.0461 12.365 24.5951 12.9722 26.0267C19.3055 36.5575 21.7777 38.4672 22.3333 38.7946H22.639C25.5585 39.7993 28.5601 40.5568 31.6111 41.059L40.6389 38.3308C40.6389 38.1671 40.1111 37.8943 38.9445 37.7852C36.3561 37.7727 33.79 38.2546 31.3888 39.2038L30.8889 39.3948L30.4723 39.0947C25.2501 35.4117 23.3056 33.8566 23.5001 32.2197C23.5614 31.8406 23.7329 31.487 23.9941 31.2014C24.2553 30.9158 24.595 30.7105 24.9722 30.6101C27.6111 29.5734 29.4722 30.9375 32.0555 32.8199L33.0834 33.5565C35.3334 35.1661 36.9722 35.6572 37.5278 35.4117C37.5278 35.4117 37.7221 35.4117 37.7777 34.9479C37.9999 33.6384 36.5278 32.6289 33.8889 31.374C32.3574 30.7068 31.0896 29.5669 30.2778 28.1274V28.1274C29.8346 27.1075 29.1495 26.2065 28.2798 25.4994C27.41 24.7923 26.3807 24.2996 25.2777 24.0625C22.7777 23.7351 21.4723 23.2167 21.0556 22.371C20.9519 22.0795 20.9519 21.7621 21.0556 21.4707L21.3889 17.433C21.4102 17.1845 21.5297 16.954 21.7218 16.7909C21.9138 16.6277 22.1632 16.5449 22.4167 16.56V16.56C22.6697 16.5809 22.9043 16.6982 23.0705 16.8869C23.2366 17.0755 23.321 17.3205 23.3056 17.5694L22.9723 21.5525C23.8514 21.9268 24.7929 22.1395 25.7501 22.18C27.1903 22.4466 28.5396 23.0631 29.6749 23.9733C30.8103 24.8835 31.6956 26.0584 32.2499 27.3908C32.8998 28.4418 33.8724 29.2633 35.0277 29.7371C37.1944 30.7738 40.5833 32.4652 39.9722 35.1934C39.9403 35.4374 39.8748 35.676 39.7778 35.9027C40.3283 35.9205 40.8669 36.0657 41.3496 36.3264C41.8323 36.5871 42.2454 36.9561 42.5555 37.4032C42.7332 37.7357 42.8259 38.1054 42.8259 38.4809C42.8259 38.8563 42.7332 39.2261 42.5555 39.5585L42.3889 39.8586L33.1945 42.5868C33.021 42.7511 32.8038 42.8639 32.5678 42.9122C32.3319 42.9605 32.087 42.9422 31.8612 42.8596V42.8596ZM25.3889 32.3834C27.0474 34.2526 28.9863 35.8625 31.1389 37.1577C32.0438 36.8128 32.9719 36.5302 33.9167 36.312C33.1797 35.9047 32.4656 35.4584 31.7778 34.9752L30.75 34.2113C28.1945 32.3561 27.0833 31.4831 25.5278 32.247L25.3889 32.3834Z"
          fill="white"
        />
        <path
          d="M12.3333 40.4863C11.3526 40.444 10.398 40.1627 9.55551 39.6678C9.41615 39.5875 9.29692 39.4776 9.20642 39.3461C9.11592 39.2147 9.05644 39.065 9.03247 38.908C9.0085 38.7511 9.02066 38.5909 9.06791 38.4391C9.11515 38.2873 9.1962 38.1479 9.30543 38.0309L9.11114 38.2219C9.28434 38.038 9.51527 37.9166 9.7671 37.877C10.0189 37.8375 10.2771 37.8821 10.5 38.0037C11.1661 38.4311 11.9564 38.6323 12.75 38.5766C13.9805 38.3199 15.1744 37.9168 16.3055 37.3762C17.3754 36.7708 18.5732 36.4161 19.8055 36.3395L19.5 38.1946C18.6606 38.4261 17.8428 38.7272 17.0555 39.0949C15.7577 39.7151 14.3858 40.1733 12.9721 40.459L12.3333 40.4863Z"
          fill="white"
        />
        <path
          d="M46.9722 39.6133C46.7992 39.7506 46.5834 39.8255 46.361 39.8255C46.1385 39.8255 45.9229 39.7506 45.7499 39.6133C43.9835 38.3083 41.8208 37.626 39.611 37.6763H39.4443V35.7939H39.611C42.2397 35.7562 44.8076 36.5713 46.9165 38.1128C47.0223 38.2024 47.1073 38.3134 47.1654 38.4382C47.2236 38.5629 47.2536 38.6985 47.2536 38.8358C47.2536 38.973 47.2236 39.1086 47.1654 39.2334C47.1073 39.3581 47.0223 39.4691 46.9165 39.5587L46.9722 39.6133Z"
          fill="white"
        />
      </svg>
    ),
    title: "Esponjoso",
  },
  {
    svg: (
      <svg
        width={56}
        height={55}
        viewBox="0 0 56 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgStyle}
        preserveAspectRatio="none"
      >
        <path
          d="M3.34303 27.0412C1.65904 24.6305 0.610986 21.8089 0.301562 18.8534C-0.0590966 15.6326 0.484286 12.3727 1.86698 9.46189C3.24968 6.55113 5.41337 4.11225 8.10032 2.43586C10.7873 0.759465 13.8841 -0.083783 17.022 0.00656957C20.1599 0.0969222 23.2065 1.11707 25.7988 2.94548C26.4136 3.37993 26.7696 3.14599 27.2549 2.94548C29.0833 1.68705 31.1381 0.821574 33.2971 0.400606C35.4561 -0.020362 37.675 0.0117912 39.8217 0.495151C41.9684 0.97851 43.999 1.90318 45.7924 3.21409C47.5859 4.525 49.1055 6.19534 50.2608 8.12558C51.9135 10.8072 52.7914 13.92 52.7914 17.0988C52.7914 20.2776 51.9135 23.3905 50.2608 26.0721L49.5813 27.2418C51.2639 28.9128 52.8171 30.5838 54.4996 32.2548C55.1192 32.8903 55.5698 33.6801 55.8077 34.5479C56.0457 35.4156 56.0631 36.3322 55.8582 37.2089C55.6533 38.0856 55.233 38.893 54.638 39.5531C54.0429 40.2132 53.2932 40.7037 52.4611 40.9774C51.7816 40.9774 51.0697 41.1779 50.3578 41.2781C49.5166 45.1883 47.8017 46.5585 44.0807 46.2577C43.9951 47.0544 43.735 47.8206 43.3201 48.4981C42.9053 49.1755 42.3465 49.7466 41.6862 50.1678C41.0101 50.5505 40.2666 50.7892 39.4995 50.8695C38.7325 50.9499 37.9576 50.8704 37.2209 50.6357C37.0254 51.851 36.4089 52.9516 35.4863 53.7324C34.5637 54.5132 33.3977 54.921 32.2056 54.8801C29.5199 54.8801 28.0962 52.9417 26.2195 51.1036C25.6694 51.7386 25.2488 52.3736 24.7311 52.9083C24.1394 53.7047 23.3425 54.3129 22.4317 54.6634C21.5209 55.014 20.533 55.0926 19.581 54.8904C18.629 54.6881 17.7514 54.2132 17.0485 53.5199C16.3456 52.8266 15.8458 51.9429 15.6064 50.9699C10.2351 51.4378 8.48786 49.9005 8.55257 44.7538C4.73444 43.2499 4.21671 42.4813 4.18435 38.0698C3.04012 37.9029 1.99107 37.3198 1.22592 36.4254C0.460776 35.5309 0.0297196 34.3839 0.0102616 33.1905C-0.151524 30.2496 1.62811 28.7122 3.34303 27.0412ZM24.2134 4.95067C21.5406 2.96628 18.2698 2.03267 14.9897 2.31793C11.7097 2.6032 8.63595 4.0886 6.3221 6.50667C4.00825 8.92474 2.60629 12.1166 2.36861 15.5075C2.13093 18.8984 3.07316 22.2655 5.02566 25.0026C5.96402 24 6.90233 22.9974 7.80832 21.9614C8.43146 21.2688 9.21935 20.7568 10.0936 20.4763C10.9678 20.1959 11.898 20.1568 12.7914 20.363C13.6848 20.5692 14.5104 21.0134 15.1859 21.6515C15.8615 22.2896 16.3634 23.0993 16.6418 24C16.6934 24.1401 16.7584 24.2744 16.836 24.4011C18.3093 23.9789 19.8797 24.1091 21.2689 24.7687C21.893 26.5296 23.079 28.0185 24.6317 28.9904C26.1843 29.9623 28.011 30.3592 29.8112 30.1159C30.4781 31.0403 30.8568 32.1524 30.8973 33.3045C30.9377 34.4565 30.6379 35.5941 30.0376 36.566C31.3386 37.0051 32.4266 37.9435 33.0769 39.1873C33.7272 40.4312 33.8903 41.8855 33.5322 43.2499C33.5303 43.4302 33.5637 43.6089 33.6305 43.7755C33.6972 43.942 33.7959 44.0929 33.9205 44.2191C35.0206 45.4222 36.1531 46.5585 37.1562 47.5611C37.3531 47.8517 37.6114 48.0922 37.9115 48.2646C38.2116 48.4369 38.5457 48.5365 38.8886 48.5558C39.2315 48.5751 39.5741 48.5136 39.8906 48.376C40.2071 48.2385 40.4892 48.0283 40.7155 47.7616C41.8803 46.5585 41.848 45.3888 40.7155 44.0186C39.583 42.6484 37.4797 40.3758 35.7972 38.5043C34.9559 37.5351 35.1501 36.4657 36.1531 36.0312C37.1562 35.5968 37.5121 36.0312 38.0298 36.6996L43.4982 42.7821C44.7277 44.1189 45.9896 44.2525 47.1221 43.1497C48.2546 42.0468 48.3517 40.71 47.1221 39.3064L40.0683 32.0542C39.7645 31.7632 39.5221 31.4105 39.3565 31.0182C39.275 30.5441 39.3673 30.0557 39.6154 29.648C39.7823 29.4831 39.9809 29.3563 40.1983 29.2757C40.4156 29.1951 40.6469 29.1626 40.8772 29.1801C41.3702 29.3577 41.8143 29.6558 42.1715 30.049L49.5813 37.7691C49.8178 38.0778 50.1241 38.3219 50.4733 38.4799C50.8224 38.6379 51.2038 38.705 51.584 38.6753C51.9641 38.6456 52.3313 38.52 52.6535 38.3096C52.9757 38.0991 53.2429 37.8102 53.4318 37.4683C54.2407 36.332 54.0789 35.2626 52.817 34.1263L32.5938 13.2054L31.8497 12.5036C30.1348 14.3083 28.6139 16.0795 26.8019 17.7839C26.0773 18.5378 25.1518 19.0516 24.1433 19.26C23.1348 19.4683 22.089 19.3616 21.1394 18.9536C20.221 18.6497 19.4166 18.0589 18.8371 17.2628C18.2575 16.4667 17.9314 15.5044 17.9037 14.5088C17.8224 13.6712 17.929 12.8254 18.2152 12.0372C18.5013 11.249 18.9594 10.5395 19.554 9.96366L24.2134 4.95067ZM47.8988 25.0026C48.9584 23.5977 49.7265 21.9825 50.1551 20.2575C50.5838 18.5326 50.6638 16.735 50.3902 14.9766C50.115 12.3854 49.1499 9.92369 47.6019 7.86476C46.054 5.80584 43.984 4.23031 41.6215 3.3131C39.4049 2.27378 36.9461 1.9134 34.5372 2.27477C32.1282 2.63614 29.8702 3.70407 28.0315 5.35172C25.6088 7.50877 23.3076 9.80736 21.1394 12.2362C20.7517 12.5958 20.5023 13.0875 20.4369 13.6215C20.3716 14.1554 20.4946 14.6958 20.7835 15.1438C20.9665 15.5105 21.2342 15.8249 21.563 16.0591C21.8919 16.2933 22.2716 16.44 22.6685 16.4863C23.0654 16.5326 23.4672 16.477 23.8383 16.3244C24.2094 16.1718 24.5383 15.927 24.7958 15.6116L30.6201 9.56263C30.7577 9.36261 30.9396 9.19948 31.1507 9.08693C31.3618 8.97438 31.5959 8.91566 31.8335 8.91566C32.0711 8.91566 32.3051 8.97438 32.5162 9.08693C32.7273 9.19948 32.9093 9.36261 33.0469 9.56263L47.0898 24.1003C47.3487 24.3677 47.6399 24.6016 47.8988 24.8021V25.0026ZM28.8081 33.6584C28.8227 33.0335 28.6545 32.4185 28.3255 31.8939C27.9964 31.3692 27.5219 30.9592 26.9637 30.7174C26.5258 30.5231 26.0381 30.4833 25.576 30.6041C25.1139 30.7249 24.7032 30.9997 24.4075 31.3859C20.0393 35.8641 15.6387 40.3758 11.4647 44.7538C11.2013 44.9731 10.9889 45.2505 10.8429 45.5657C10.6969 45.8808 10.6211 46.2258 10.6211 46.5752C10.6211 46.9246 10.6969 47.2696 10.8429 47.5848C10.9889 47.8999 11.2013 48.1773 11.4647 48.3966C11.6795 48.6813 11.9544 48.9116 12.2684 49.07C12.5824 49.2284 12.9272 49.3108 13.2767 49.3108C13.6261 49.3108 13.971 49.2284 14.285 49.07C14.599 48.9116 14.8738 48.6813 15.0887 48.3966C15.8976 47.6279 16.6418 46.7924 17.4184 45.9903C20.8806 42.381 24.4075 38.8385 27.8697 35.1957C28.2942 34.6817 28.6631 34.1214 28.9699 33.5247L28.8081 33.6584ZM8.84377 42.5147C9.31736 42.307 9.76322 42.0374 10.1704 41.7126C13.6973 38.1032 17.2243 34.4605 20.6865 30.8177C20.9329 30.5981 21.1307 30.3262 21.2662 30.0205C21.4017 29.7149 21.4719 29.3826 21.4719 29.0464C21.4719 28.7103 21.4017 28.378 21.2662 28.0724C21.1307 27.7667 20.9329 27.4948 20.6865 27.2752C20.4769 27.0156 20.2147 26.8067 19.9183 26.6634C19.622 26.52 19.2988 26.4458 18.9715 26.4458C18.6443 26.4458 18.321 26.52 18.0247 26.6634C17.7283 26.8067 17.4662 27.0156 17.2566 27.2752C16.5448 27.977 15.8976 28.7457 15.1857 29.4475L6.87004 37.9361C6.43233 38.2589 6.11811 38.73 5.98212 39.2674C5.84613 39.8048 5.89694 40.3744 6.12579 40.8771C6.39716 41.3654 6.79578 41.7652 7.27628 42.0311C7.75678 42.297 8.29986 42.4182 8.84377 42.381V42.5147ZM18.0008 50.2347C17.9345 50.8471 18.0627 51.4651 18.3662 51.9956C18.6697 52.5261 19.1321 52.9403 19.6834 53.1757C20.1245 53.409 20.6305 53.4765 21.1145 53.3667C21.5986 53.257 22.0307 52.9768 22.3367 52.5741C25.1841 49.6665 28.0315 46.7256 30.8465 43.7846C31.3185 43.3016 31.5855 42.6446 31.5885 41.9583C31.5915 41.2721 31.3304 40.6127 30.8627 40.1252C30.6311 39.8838 30.3558 39.6919 30.0524 39.5604C29.749 39.4289 29.4236 39.3604 29.0946 39.3589C28.4301 39.3558 27.7916 39.6254 27.3196 40.1085C24.4398 43.0494 21.6248 45.9569 18.8097 48.9313C18.4945 49.2854 18.2228 49.6783 18.0008 50.101V50.2347ZM1.49876 32.2882C1.42657 32.8927 1.54898 33.505 1.84723 34.0305C2.14548 34.556 2.60291 34.9655 3.1489 35.1957C3.56832 35.4292 4.05371 35.5035 4.52068 35.4058C4.98765 35.3081 5.40672 35.0446 5.70514 34.661L13.4708 26.6402C13.7035 26.4332 13.8902 26.1767 14.0182 25.8883C14.1461 25.5999 14.2124 25.2865 14.2124 24.9692C14.2124 24.652 14.1461 24.3385 14.0182 24.0501C13.8902 23.7618 13.7035 23.5053 13.4708 23.2982C13.2824 23.0528 13.0482 22.8489 12.7821 22.6987C12.5159 22.5486 12.2233 22.4551 11.9215 22.424C11.6197 22.3928 11.3149 22.4245 11.0253 22.5173C10.7356 22.6101 10.4669 22.762 10.2351 22.964C7.61418 25.6042 5.02561 28.2444 2.43704 30.9514C2.08214 31.3153 1.76751 31.7189 1.49876 32.1545V32.2882ZM31.979 46.2577L28.5492 49.7668C29.2611 50.5021 30.0052 51.4044 30.8465 52.1731C31.0719 52.3892 31.3393 52.5534 31.6309 52.6546C31.9224 52.7558 32.2314 52.7919 32.5375 52.7603C32.8435 52.7287 33.1396 52.6301 33.4059 52.4713C33.6723 52.3124 33.9028 52.0968 34.0822 51.8388C34.3252 51.6458 34.5258 51.4017 34.6708 51.1228C34.8157 50.8438 34.9017 50.5363 34.9231 50.2205C34.9445 49.9046 34.9008 49.5877 34.7949 49.2906C34.689 48.9935 34.5233 48.723 34.3088 48.4968C33.4675 47.6279 32.6585 46.8259 31.979 46.1241V46.2577Z"
          fill="white"
        />
      </svg>
    ),
    title: "Comercio justo",
  },
  {
    svg: (
      <svg
        width={56}
        height={55}
        viewBox="0 0 56 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[55px] h-[55px] relative"
        preserveAspectRatio="none"
      >
        <path
          d="M8.48748 36.7232C8.47753 36.8466 8.44065 36.9661 8.37953 37.0735C8.3184 37.1808 8.23451 37.2731 8.13387 37.3439C8.03322 37.4147 7.91835 37.4622 7.79738 37.483C7.6764 37.5039 7.55236 37.4974 7.43412 37.4643C5.83428 37.087 4.3703 36.2677 3.20636 35.0984C2.04242 33.9291 1.22453 32.4559 0.84443 30.844C0.431547 29.2601 0.389262 27.6011 0.720854 25.9978C1.05245 24.3945 1.74884 22.8908 2.75519 21.6053C1.3512 18.6995 1.07169 15.3703 1.97127 12.2678C2.41584 11.18 3.08154 10.1981 3.92539 9.38544C4.76924 8.5728 5.77252 7.94744 6.87067 7.54966C8.92642 6.72305 11.2054 6.65383 13.3067 7.35413C15.4081 8.05444 17.1974 9.47944 18.3598 11.3785C20.0362 10.3865 22.022 10.0689 23.9205 10.4893C25.7633 10.9806 27.392 12.0755 28.5505 13.6018C30.4475 12.5202 32.6855 12.2192 34.7972 12.7619C36.8216 13.4526 38.5506 14.8212 39.6966 16.6401C41.0071 16.7817 42.2557 17.2761 43.3116 18.0714C44.3676 18.8667 45.1919 19.9337 45.6984 21.1607C45.7452 21.2705 45.7689 21.3888 45.7681 21.5083C45.7672 21.6278 45.7418 21.7458 45.6935 21.8549C45.6451 21.964 45.575 22.0618 45.4873 22.1421C45.3996 22.2225 45.2962 22.2836 45.1839 22.3217V22.3217C44.988 22.3842 44.7765 22.3737 44.5876 22.2921C44.3988 22.2105 44.2453 22.0632 44.1551 21.8771C43.7597 20.8748 43.0884 20.0075 42.2203 19.3772C41.3523 18.747 40.3237 18.3801 39.2557 18.3199H38.7412L38.4963 17.8753C37.574 16.2425 36.0935 15.0044 34.3318 14.3922C33.3737 14.1831 32.3839 14.1693 31.4205 14.3517C30.4571 14.5341 29.5396 14.9091 28.722 15.4544L28.0117 15.8744L27.5706 15.158C26.6367 13.7647 25.2509 12.7428 23.6511 12.2678C22.8038 12.1122 21.9343 12.1282 21.0932 12.3148C20.252 12.5014 19.456 12.8549 18.7517 13.3547L17.9923 13.8488L17.5514 13.0583C16.6577 11.3296 15.1691 9.98928 13.365 9.28885C11.5608 8.58842 9.56514 8.57607 7.7526 9.25414C6.86109 9.55876 6.04403 10.0511 5.3556 10.6984C4.66718 11.3458 4.12312 12.1334 3.75958 13.0089C2.9967 15.861 3.33821 18.899 4.71492 21.5065L4.95991 22.05L4.5435 22.4946C3.59484 23.5805 2.92994 24.888 2.60911 26.2986C2.28829 27.7091 2.32168 29.1781 2.70622 30.5723C2.9933 31.8905 3.64875 33.0983 4.59516 34.0526C5.54156 35.0069 6.73928 35.6679 8.04655 35.9574C8.2408 36.0041 8.41199 36.1195 8.52889 36.2827C8.6458 36.446 8.70067 36.6461 8.68349 36.8467L8.48748 36.7232Z"
          fill="white"
        />
        <path
          d="M36.4629 49.0745H35.728C34.1194 48.9971 32.5493 48.5521 31.1362 47.7733C29.723 46.9945 28.5037 45.9021 27.5705 44.5787C26.057 46.6824 23.8808 48.2064 21.3973 48.9016C20.1972 49.1443 18.9595 49.1244 17.7676 48.8431C16.5758 48.5619 15.4578 48.0258 14.4892 47.2712C7.40955 42.3308 11.0841 34.1543 12.0395 32.1287C10.8003 29.8732 10.3679 27.2567 10.8146 24.7179C11.1195 23.5664 11.6579 22.491 12.3958 21.5599C13.1337 20.6288 14.055 19.862 15.1016 19.3081C17.1183 17.9982 19.5586 17.5239 21.9136 17.9841C24.2687 18.4443 26.3566 19.8036 27.742 21.7784C29.4606 20.6837 31.5393 20.3196 33.5234 20.7656C35.4455 21.368 37.0942 22.6368 38.1777 24.3474C40.1419 23.3221 42.4204 23.0924 44.547 23.7051C46.6193 24.4929 48.3527 25.9874 49.4464 27.9292C50.8132 28.4347 52.0412 29.2605 53.0293 30.3385C54.0174 31.4165 54.7372 32.7159 55.1296 34.1296C55.5581 35.494 55.616 36.9493 55.2972 38.3439C54.9784 39.7386 54.2945 41.0215 53.3168 42.059C52.0351 43.4457 50.3435 44.3776 48.4938 44.7159C46.6442 45.0542 44.7356 44.7808 43.0526 43.9364C42.6655 45.4033 41.8106 46.7011 40.6198 47.6297C39.4289 48.5582 37.9682 49.0659 36.4629 49.0745ZM27.7175 41.0956L28.3789 42.6272C29.1182 44.0045 30.2004 45.1639 31.5191 45.9913C32.8378 46.8186 34.3476 47.2853 35.8995 47.3453C36.6124 47.4169 37.3322 47.3457 38.0177 47.1359C38.7032 46.926 39.3409 46.5817 39.894 46.1226C40.4472 45.6635 40.905 45.0987 41.241 44.4607C41.5771 43.8227 41.7848 43.1241 41.8523 42.4049L42.0238 41.0956L43.1507 41.7873C44.5687 42.6913 46.2506 43.079 47.9173 42.8857C49.584 42.6925 51.135 41.9301 52.3125 40.7251C53.0843 39.8978 53.6247 38.8789 53.8786 37.7723C54.1325 36.6657 54.0907 35.511 53.7578 34.426C53.4267 33.2247 52.8061 32.1247 51.9513 31.2239C51.0965 30.3231 50.0339 29.6495 48.8584 29.2632H48.491L48.3195 28.9173C47.4025 27.2171 45.9056 25.9095 44.1059 25.2367C43.1422 24.9814 42.1372 24.9264 41.1518 25.0751C40.1663 25.2237 39.2212 25.5728 38.3737 26.1013L37.6143 26.5212L37.2223 25.7554C36.3438 24.1451 34.9033 22.9213 33.1804 22.3218C32.2946 22.1464 31.3818 22.1637 30.5031 22.3724C29.6244 22.5811 28.8 22.9766 28.085 23.5322L27.3501 24.0263L26.9092 23.2852C26.3756 22.3859 25.6705 21.6022 24.8348 20.9794C23.999 20.3566 23.0491 19.907 22.04 19.6566C21.0308 19.4062 19.9825 19.36 18.9556 19.5207C17.9286 19.6814 16.9434 20.0457 16.0569 20.5927C15.2064 21.0334 14.456 21.6474 13.853 22.3957C13.25 23.1441 12.8076 24.0106 12.5539 24.9403C12.1836 27.2454 12.6349 29.6083 13.8277 31.6099L14.1217 32.0546L13.8277 32.4992C13.6317 32.845 8.68335 41.1203 15.4445 45.8138C16.2289 46.4227 17.1316 46.8583 18.0939 47.0924C19.0562 47.3265 20.0564 47.3537 21.0298 47.1724C23.4747 46.3769 25.5534 44.7193 26.8846 42.5037L27.7175 41.0956Z"
          fill="white"
        />
      </svg>
    ),
    title: "Suave",
  },
  {
    svg: (
      <svg
        width={34}
        height={55}
        viewBox="0 0 34 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[34px] h-[55px] relative"
        preserveAspectRatio="none"
      >
        <path
          d="M17.5226 20.866V20.7396L17.0233 20.7389C13.8646 20.7341 10.7774 21.7052 8.15221 23.5268C5.5273 25.3483 3.48307 27.9375 2.27532 30.9645C1.06762 33.9914 0.749576 37.3222 1.36057 40.5363C1.97157 43.7505 3.4848 46.7064 5.7118 49.029C7.93901 51.3517 10.7804 52.9368 13.8774 53.5801C16.9746 54.2235 20.1852 53.8956 23.1021 52.6386C26.0187 51.3818 28.5086 49.2538 30.2589 46.5269C32.0092 43.8002 32.9422 40.5962 32.9422 37.3201L32.9422 37.3159C32.9055 32.952 31.2183 28.7752 28.2407 25.6926C25.3802 22.7312 21.5498 21.0088 17.5226 20.866ZM17.0219 54.5C13.7613 54.5045 10.5709 53.5016 7.85459 51.6156C5.138 49.7294 3.01687 47.044 1.76286 43.8972C0.508797 40.7502 0.179236 37.2854 0.816705 33.9422C1.45416 30.5991 3.02944 27.5308 5.33994 25.1247C7.65023 22.7188 10.5915 21.0833 13.7903 20.4218C16.9889 19.7604 20.3043 20.1019 23.3177 21.4042C26.3313 22.7066 28.9094 24.9123 30.7232 27.7454C32.5372 30.5786 33.5043 33.9106 33.5 37.3195C33.4942 41.8806 31.7515 46.2493 28.6601 49.4685C25.5694 52.6871 21.3837 54.494 17.0219 54.5Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M13.5233 38.3842H13.5477L13.5721 38.3818C14.5199 38.2889 15.3496 38.1496 15.9201 37.7634C16.2243 37.5575 16.4547 37.2832 16.5927 36.928C16.727 36.5824 16.7627 36.1892 16.7312 35.7555L16.7312 35.7555L16.7307 35.7499C16.6705 35.0324 16.3692 34.3565 15.8752 33.842C15.3808 33.3272 14.7245 33.0069 14.0202 32.9428L13.9976 32.9407H13.9749H2.0127V32.3185H14.0247C14.8742 32.3815 15.6767 32.7655 16.2795 33.4047C16.8868 34.0486 17.2485 34.9061 17.2908 35.815L17.2906 35.815L17.2916 35.8279C17.3481 36.6098 17.2137 37.1733 16.9928 37.5863C16.7719 37.9991 16.4455 38.297 16.0606 38.5168C15.2774 38.9643 14.3032 39.0639 13.6363 39.124H13.1621H13.131L13.1002 39.1278C12.7313 39.1739 12.3759 39.2965 12.0552 39.4874C11.7344 39.6782 11.4552 39.9333 11.233 40.2364C11.0109 40.5395 10.8501 40.8848 10.7594 41.2518C10.6714 41.6074 10.6507 41.9772 10.6982 42.3407C10.7046 42.6873 10.8053 43.3298 11.3531 43.893C11.9242 44.4802 12.8987 44.8966 14.4941 44.8966H14.518L14.5419 44.8943C14.8534 44.8644 15.1677 44.9016 15.4656 45.0039C15.7635 45.1062 16.0395 45.2718 16.2757 45.4915L16.2888 45.5038L16.3028 45.515C16.6367 45.7837 16.9353 46.3528 17.1136 47.7514C17.2797 49.054 17.3301 50.9621 17.2969 53.7711H16.7324C16.7318 52.0571 16.7244 50.3888 16.6383 49.0318C16.5912 48.288 16.5195 47.6204 16.4077 47.0812C16.3018 46.5702 16.1414 46.0721 15.8481 45.7666C15.5617 45.4684 15.1725 45.3778 14.4941 45.3778C12.6859 45.3778 11.6568 44.8628 11.0604 44.2664C10.4557 43.6617 10.2306 42.908 10.1594 42.317C10.0564 41.3961 10.3001 40.4715 10.8352 39.7375C11.3623 39.0145 12.13 38.5334 12.9784 38.3842H13.5233Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M26.4039 45.4515L26.3716 45.4478L26.3391 45.4483C25.3353 45.4632 24.3546 45.1184 23.5616 44.4678C23.2414 44.1649 22.9839 43.7948 22.8066 43.3803C22.6273 42.9609 22.5344 42.5061 22.5345 42.0456L22.5345 42.0364L22.5342 42.0272C22.5154 41.5133 22.5957 41.0011 22.77 40.521C22.9444 40.0409 23.2089 39.6035 23.547 39.234C23.885 38.8645 24.2897 38.5706 24.7363 38.3685C25.1822 38.1668 25.6615 38.0604 26.1461 38.0549H32.6872V38.6772H26.2563C25.9827 38.6772 25.1872 38.7975 24.4618 39.2574C23.7036 39.7382 23.0197 40.5977 23.092 42.0073C23.0865 42.3805 23.1556 42.7514 23.2957 43.0966C23.4382 43.4479 23.6513 43.7653 23.9219 44.0271L23.9435 44.0479L23.9674 44.0661C24.7138 44.6321 25.6299 44.9104 26.5568 44.8486L31.0616 44.6172V45.2382L26.5657 45.4702L26.4039 45.4515Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M16.7324 10.8771H17.2902V19.9396H16.7324V10.8771Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M4.47353 2.92387V2.71855H4.65079H4.68659L4.72204 2.71344C6.48092 2.46023 8.27227 2.63072 9.95867 3.21222C11.6353 3.79034 13.1649 4.7598 14.4302 6.04823C15.499 7.47216 16.2891 9.10246 16.7543 10.8464C17.2222 12.6008 17.3519 14.4347 17.1357 16.242L17.1322 16.2716V16.3014V16.4597H17H16.9852L16.9705 16.4605L15.7752 16.531C15.7749 16.531 15.7747 16.531 15.7745 16.531C14.2887 16.6153 12.8018 16.3779 11.4074 15.8334C10.0203 15.2917 8.75392 14.4574 7.688 13.3815C5.35093 10.4827 4.19455 6.74181 4.47219 2.96048L4.47353 2.9422V2.92387ZM8.03058 12.9226L8.04987 12.9467L8.07197 12.9682C9.15575 14.0247 10.4433 14.8315 11.8506 15.3342C13.258 15.837 14.7523 16.0239 16.2348 15.8822L16.6526 15.8423L16.6857 15.4238C16.9394 12.2122 16.0184 9.01695 14.103 6.47845L14.0827 6.45142L14.0588 6.42739C12.9274 5.28739 11.5714 4.41426 10.083 3.86922C8.59461 3.32416 7.00993 3.12046 5.43795 3.27256L5.4861 3.77023L4.98629 3.75635C4.89363 7.09326 5.97474 10.3531 8.03058 12.9226Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M31.381 0.62659H31.5584V0.831896V0.849786L31.5597 0.86763C31.8731 5.24247 30.54 9.56961 27.8478 12.9343C26.5975 14.1756 25.1165 15.1349 23.4976 15.7536C21.8702 16.3755 20.1377 16.6402 18.4085 16.5317L18.3772 17.0307V16.5307H17.0677H16.9355V16.3724V16.3421L16.9318 16.3121C16.6777 14.2198 16.8239 12.096 17.3617 10.0632C17.8966 8.04148 18.8081 6.15049 20.0434 4.49776C21.5186 3.01179 23.295 1.8923 25.24 1.22104C27.1954 0.546199 29.2715 0.34152 31.3129 0.621939L31.3468 0.62659H31.381ZM27.395 12.4754L27.4175 12.4535L27.437 12.4291C29.8588 9.39818 31.1254 5.55003 31.0004 1.61539L30.9865 1.17991L30.5532 1.13404C28.7034 0.938224 26.835 1.16592 25.0794 1.80073C23.3238 2.43552 21.7245 3.46168 20.3925 4.80592L20.3696 4.829L20.3499 4.85485C18.0713 7.84589 16.9933 11.635 17.3372 15.4301L17.8352 15.3849L17.786 15.8825C19.5295 16.0549 21.2881 15.8398 22.9449 15.252C24.6018 14.6642 26.1183 13.7173 27.395 12.4754Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M23.2278 32.3592C23.2278 32.7386 22.9375 33.0112 22.6216 33.0112C22.3057 33.0112 22.0154 32.7386 22.0154 32.3592C22.0154 31.9798 22.3057 31.7072 22.6216 31.7072C22.9375 31.7072 23.2278 31.9798 23.2278 32.3592Z"
          fill="white"
          stroke="white"
        />
      </svg>
    ),
    title: "Sostenible",
  },
];

function CoreValues() {
  return (
    <>
      {/* For the mobile Version
       */}
      <div className="py-14 max-w-6xl m-auto md:hidden">
        <div className="relative   m-auto w-full h-[500px] ">
          <div className="w-[100%] h-full absolute left-0 top-0 bottom-0 opacity-60 bg-[#bd9575] mix-blend-multiply z-20"></div>
          <div className="absolute top-0 left-0 z-40  items-center w-full h-full">
            <h1 className="text-lg font-medium text-center text-white py-14">
              100% alpaca y además
            </h1>
            <div className="flex justify-center items-center flex-wrap pt-5">
              {CoreData.map((i) => {
                return (
                  <div
                    key={i.title}
                    className="flex w-[45%] justify-center items-center pb-5 flex-col space-y-3"
                  >
                    {i.svg}
                    <p className=" text-xs text-center text-white">{i.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <Image
            src={"/assets/home/Lombu.png"}
            height={260}
            width={200}
            layout="responsive"
            alt="Lombu"
            // objectFit="cover"
          />
        </div>
        <form className="m-auto p-5 mt-5 space-y-9 max-w-xl">
          <h4 className=" text-sm text-left text-[#333]">
            Recibe promociones exclusivas, ventas privadas y <br /> novedades
          </h4>
          <input
            type="text"
            placeholder="Escribe tu e-mail"
            className="placeholder:text-[#333] w-full border-b-2 border-gray-800 text-sm pb-3 outline-none"
          />
          <button className="rounded-sm bg-[#bd9575] border border-[#bd9575] text-white px-4 w-full py-5">
            Suscribirme
          </button>
        </form>
      </div>
      {/* For the web version */}
      <div className="py-14 max-w-6xl m-auto hidden md:block">
        <div className="relative   m-auto w-full  ">
          <div className="w-[100%] h-[88%] m-auto absolute left-0 top-0 bottom-0 opacity-60 bg-[#bd9575] mix-blend-multiply z-20"></div>
          <div className="absolute top-0 left-0 z-40  items-center w-full h-full pt-36">
            <div className="flex w-auto justify-start items-center  pt-5 max-w-4xl h-[400px]  m-auto bg-white bg-opacity-25 rounded shadow-xl flex-col mt-24">
              <h1 className=" font-medium text-center text-white py-14 capitalize text-2xl">
                100% alpaca y además
              </h1>
              <div className="flex items-center justify-center w-full mt-5">
                {CoreData.map((i) => {
                  return (
                    <div
                      key={i.title}
                      className="flex w-[45%] justify-center items-center pb-5 flex-col space-y-3"
                    >
                      {i.svg}
                      <p className=" text-xs md:text-xl text-center text-white">
                        {i.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Image
            src={"/assets/home/animal.png"}
            height={200}
            width={300}
            layout="responsive"
            alt="Lombu"
            objectFit="contain"
          />
        </div>
        <form className="m-auto p-5 mt-5 space-y-9 max-w-xl ">
          <h4 className=" text-sm text-left text-[#333]">
            Recibe promociones exclusivas, ventas privadas y <br /> novedades
          </h4>
          <input
            type="text"
            placeholder="Escribe tu e-mail"
            className="placeholder:text-[#333] w-full border-b-2 border-gray-800 text-sm pb-3 outline-none"
          />
          <button className="rounded-sm bg-[#bd9575] border border-[#bd9575] text-white px-4 w-full py-5">
            Suscribirme
          </button>
        </form>
      </div>
    </>
  );
}

export default CoreValues;
