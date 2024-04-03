// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Crm" width="100" />
     *
     */
    // <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path
    //     d="M33.085 26.4841V12.3839H37.9541C39.6408 12.3839 40.9202 12.7131 41.7922 13.3717C42.6642 14.0237 43.1002 14.9825 43.1002 16.2478C43.1002 16.9387 42.9251 17.5488 42.5751 18.0782C42.225 18.6011 41.7381 18.9853 41.1143 19.2306C41.8272 19.4114 42.3873 19.7761 42.7947 20.3249C43.2084 20.8737 43.4152 21.5452 43.4152 22.3392C43.4152 23.695 42.9888 24.7215 42.1359 25.4188C41.283 26.1161 40.0673 26.4712 38.4888 26.4841H33.085ZM35.9492 20.3443V24.1502H38.4028C39.0775 24.1502 39.6026 23.9888 39.9781 23.666C40.36 23.3367 40.551 22.8848 40.551 22.3102C40.551 21.0189 39.8922 20.3637 38.5747 20.3443H35.9492ZM35.9492 18.2912H38.0687C39.5135 18.2654 40.236 17.6811 40.236 16.5384C40.236 15.8992 40.0514 15.4408 39.6822 15.1632C39.3194 14.8792 38.7434 14.7371 37.9541 14.7371H35.9492V18.2912ZM53.9365 20.3733H48.4371V24.1502H54.8913V26.4841H45.573V12.3839H54.8723V14.7371H48.4371V18.0976H53.9365V20.3733ZM61.7175 21.3224H59.436V26.4841H56.5717V12.3839H61.7365C63.379 12.3839 64.6455 12.7551 65.5365 13.4975C66.4276 14.24 66.8734 15.2891 66.8734 16.6449C66.8734 17.6069 66.6661 18.4107 66.2527 19.0563C65.8455 19.6954 65.2248 20.2055 64.3907 20.5864L67.3985 26.3485V26.4841H64.3242L61.7175 21.3224ZM59.436 18.9691H61.746C62.4656 18.9691 63.0226 18.7851 63.417 18.4172C63.8114 18.0427 64.0092 17.5294 64.0092 16.8773C64.0092 16.2124 63.8214 15.6894 63.4455 15.3085C63.0768 14.9276 62.5069 14.7371 61.7365 14.7371H59.436V18.9691ZM74.2058 21.3224H71.9237V26.4841H69.0594V12.3839H74.2248C75.8667 12.3839 77.1337 12.7551 78.0248 13.4975C78.9159 14.24 79.3611 15.2891 79.3611 16.6449C79.3611 17.6069 79.1544 18.4107 78.7404 19.0563C78.3332 19.6954 77.7125 20.2055 76.879 20.5864L79.8863 26.3485V26.4841H76.8119L74.2058 21.3224ZM71.9237 18.9691H74.2343C74.9533 18.9691 75.5103 18.7851 75.9052 18.4172C76.2997 18.0427 76.4969 17.5294 76.4969 16.8773C76.4969 16.2124 76.3092 15.6894 75.9337 15.3085C75.5645 14.9276 74.9946 14.7371 74.2248 14.7371H71.9237V18.9691ZM85.8823 18.7367L88.7751 12.3839H91.9064L87.3427 21.3708V26.4841H84.4309V21.3708L79.8673 12.3839H83.008L85.8823 18.7367Z"
    //     fill={theme.palette.grey[900]}
    //   />
    //   <path
    //     d="M10.987 31.5841C4.92849 31.5841 0 26.626 0 20.5323C0 14.4385 4.92899 9.48041 10.987 9.48041C17.045 9.48041 21.974 14.4385 21.974 20.5323C21.974 26.626 17.0459 31.5841 10.987 31.5841ZM10.987 10.536C5.50765 10.536 1.04938 15.0196 1.04938 20.5318C1.04938 26.044 5.50765 30.5275 10.987 30.5275C16.4663 30.5275 20.9251 26.0429 20.9251 20.5308C20.9251 15.0186 16.4673 10.536 10.987 10.536Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M18.96 21.0225C18.6182 19.7483 15.4851 19.6108 13.6203 20.0779C12.6437 20.3235 11.6456 20.6428 10.6162 20.8265C11.3697 21.4989 12.1788 22.135 13.34 22.2932C16.2211 22.6842 18.0112 21.775 18.96 21.0225Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M13.34 22.2932C12.1764 22.135 11.3697 21.4989 10.6162 20.8265C9.45013 19.7857 8.41298 18.6579 6.37723 19.0823C3.14069 19.7572 2.71488 23.6081 5.21404 26.0828C6.28706 27.2131 7.66455 28.0041 9.17779 28.3586C10.691 28.7132 12.2742 28.616 13.7333 28.079C15.1924 27.5419 16.4641 26.5883 17.3925 25.3352C18.3209 24.0819 18.8656 22.5835 18.96 21.0235C18.0112 21.775 16.221 22.6842 13.34 22.2932Z"
    //     fill={theme.palette.secondary.main}
    //   />
    //   <path
    //     d="M15.034 13.9586C14.6301 14.8295 18.2304 15.7957 18.6611 18.6879C18.8687 15.8409 15.5335 12.882 15.034 13.9586Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M7.46619 17.5935C8.11524 17.3231 8.42345 16.5746 8.15463 15.9217C7.8858 15.2688 7.14167 14.9587 6.49262 15.2292C5.84357 15.4996 5.53536 16.2481 5.80418 16.9011C6.07306 17.5539 6.81714 17.8639 7.46619 17.5935Z"
    //     fill={theme.palette.secondary.main}
    //   />
    //   <path
    //     d="M10.3549 14.08C10.6585 13.7746 10.6585 13.2795 10.3549 12.9741C10.0513 12.6687 9.55909 12.6687 9.25551 12.9741C8.95194 13.2795 8.95194 13.7746 9.25551 14.08C9.55909 14.3854 10.0513 14.3854 10.3549 14.08Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M13.1014 9.05206C14.2245 5.7149 13.4696 3.04871 11.1614 1.78241C9.58359 2.10513 8.647 2.87335 8.12549 3.93383C11.2204 3.68185 13.1844 5.63041 13.1014 9.05206Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M25.6983 6.13641C20.1389 4.1294 16.6304 4.81756 16.0786 9.39055C19.2648 12.6973 22.474 11.1146 25.6983 6.13641Z"
    //     fill={theme.palette.primary.main}
    //   />
    //   <path
    //     d="M21.2765 4.32541C21.5343 3.21728 21.6681 1.90776 21.6881 0.41748C15.9226 1.70883 13.3224 4.17658 15.2839 8.33846C15.3816 8.36203 15.4754 8.38119 15.5696 8.40085C16.0281 5.14422 18.0463 3.93835 21.2765 4.32541Z"
    //     fill={theme.palette.primary.main}
    //   />
    // </svg>

    <svg width="92" height="40" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="insurance">
      <path
        fill="#f8be32"
        d="M256 280.83c-28.894-15.999-53.134-37.256-70.601-62.02C165.512 190.616 155 158.455 155 125.805V47.713a223.034 223.034 0 0 0 70.264-20.868A198.853 198.853 0 0 0 256.758 7.5a227.413 227.413 0 0 0 42.845 23.405A246.967 246.967 0 0 0 357 46.939v78.866c0 32.65-10.512 64.81-30.399 93.005-17.467 24.764-41.707 46.021-70.601 62.02Z"
      ></path>
      <path
        fill="#fddd5a"
        d="M256 245.724c-18.546-12.412-34.292-27.484-46.086-44.206C193.615 178.41 185 152.23 185 125.805V72.782a246.107 246.107 0 0 0 53.554-19.041q9.638-4.763 18.748-10.361a262.312 262.312 0 0 0 30.777 15.223A274.855 274.855 0 0 0 327 71.466v54.34c0 26.424-8.615 52.605-24.914 75.712-11.794 16.722-27.54 31.794-46.086 44.206Z"
      ></path>
      <path
        fill="#fed030"
        d="M288.08 58.603a262.31 262.31 0 0 1-30.778-15.223q-7.115 4.373-14.59 8.246 7.54 3.717 15.367 6.977A274.856 274.856 0 0 0 297 71.466v54.34c0 26.424-8.615 52.605-24.914 75.712A169.201 169.201 0 0 1 241 234.594q7.144 5.857 15 11.13c18.546-12.412 34.292-27.484 46.086-44.206C318.385 178.411 327 152.23 327 125.805V71.466a274.856 274.856 0 0 1-38.92-12.863Z"
      ></path>
      <path
        fill="#fdd8ae"
        d="m398.136 274.099-12.826-64.58a17.948 17.948 0 0 1 14.678-21.204 17.948 17.948 0 0 1 20.051 12.336l24.346 77.604a60 60 0 0 1-.832 38.381l-17.82 49.23a60 60 0 0 1-19.211 26.65l-11.108 8.78a30 30 0 0 0-11.383 24.465l.918 29.642-81.367 1.303Z"
      ></path>
      <path
        fill="#fbbf7d"
        d="m444.385 278.255-24.345-77.604a17.948 17.948 0 0 0-20.051-12.336 17.921 17.921 0 0 0-4.572 1.42 17.912 17.912 0 0 1 9.623 10.916l24.345 77.604a60.001 60.001 0 0 1-.831 38.381l-17.82 49.23a60.001 60.001 0 0 1-19.212 26.651l-11.108 8.78a30 30 0 0 0-11.383 24.464l.918 29.642-66.241 1.06-.126.243 81.367-1.303-.918-29.642a30 30 0 0 1 11.383-24.464l11.108-8.78a60.001 60.001 0 0 0 19.212-26.65l17.82-49.23a60.001 60.001 0 0 0 .83-38.382Z"
      ></path>
      <path
        fill="#fdd8ae"
        d="m299.95 455.663-5.597-47.412a45 45 0 0 1 11.853-36.043l91.93-98.109a25.5 25.5 0 0 1 10.465 34.509l-21.248 39.751"
      ></path>
      <path
        fill="#fbbf7d"
        d="M376.682 348.359a17.805 17.805 0 0 0 15.702-9.412l16.217-30.34a25.5 25.5 0 0 0-10.465-34.508l-4.412 4.708a25.51 25.51 0 0 1 4.206 29.8l-21.248 39.752Z"
      ></path>
      <path
        fill="#2370b5"
        d="M414.261 495.724 280.49 512l-3.83-39.45-1.69-14.09a14.322 14.322 0 0 1 12.53-15.91l104.44-12.53a14.33 14.33 0 0 1 15.94 12.5l1.57 13.13Z"
      ></path>
      <path
        fill="#1067ae"
        d="M361.94 433.636a14.33 14.33 0 0 1 15.94 12.5l1.57 13.13 4.815 40.108 29.996-3.65-4.811-40.074-1.57-13.13a14.33 14.33 0 0 0-15.94-12.5L287.5 442.55c-.111.013-.218.04-.328.056Z"
      ></path>
      <path
        fill="#1067ae"
        d="M409.45 455.65v.01l-132.79 16.89-1.69-14.09a14.322 14.322 0 0 1 12.53-15.91l104.44-12.53a14.33 14.33 0 0 1 15.94 12.5Z"
      ></path>
      <path
        fill="#0a56a4"
        d="M407.88 442.52a14.33 14.33 0 0 0-15.94-12.5L287.5 442.55a14.456 14.456 0 0 0-1.594.288l76.034-9.122a14.33 14.33 0 0 1 15.94 12.5l1.57 13.13v.01l30-3.696v-.01Z"
      ></path>
      <path
        fill="#fdd8ae"
        d="m114.039 274.099 12.825-64.58a17.948 17.948 0 0 0-14.678-21.204 17.948 17.948 0 0 0-20.051 12.336l-24.346 77.604a60 60 0 0 0 .832 38.381l17.82 49.23a60 60 0 0 0 19.211 26.65l11.108 8.78a30 30 0 0 1 11.383 24.465l-.918 29.642 81.367 1.303Z"
      ></path>
      <path
        fill="#fbbf7d"
        d="m116.76 401.297-11.107-8.78a60.001 60.001 0 0 1-19.212-26.65l-17.82-49.23a60.001 60.001 0 0 1-.832-38.382l24.346-77.604a17.948 17.948 0 0 1 20.05-12.336 17.921 17.921 0 0 1 4.573 1.42 17.912 17.912 0 0 0-9.623 10.916l-24.346 77.604a60.001 60.001 0 0 0 .832 38.381l17.82 49.23a60.001 60.001 0 0 0 19.212 26.651l11.107 8.78a30 30 0 0 1 11.383 24.464l-.918 29.642 66.242 1.06.125.243-81.367-1.303.918-29.642"
      ></path>
      <path
        fill="#fdd8ae"
        d="m212.225 455.663 5.596-47.412a45 45 0 0 0-11.853-36.043l-91.93-98.109a25.5 25.5 0 0 0-10.465 34.509l21.248 39.751"
      ></path>
      <path
        fill="#fbbf7d"
        d="M135.492 348.359a17.805 17.805 0 0 1-15.702-9.412l-16.217-30.34a25.5 25.5 0 0 1 10.465-34.508l4.412 4.708a25.51 25.51 0 0 0-4.205 29.8l21.247 39.752Z"
      ></path>
      <path
        fill="#2370b5"
        d="M97.908 495.762 231.684 512l3.83-39.45 1.69-14.09a14.322 14.322 0 0 0-12.53-15.91l-104.44-12.53a14.33 14.33 0 0 0-15.94 12.5l-1.57 13.13Z"
      ></path>
      <path
        fill="#1067ae"
        d="m224.674 442.55-104.44-12.53a14.286 14.286 0 0 0-9.812 2.422l84.252 10.108a14.322 14.322 0 0 1 12.53 15.91l-1.69 14.09-3.098 35.897L231.684 512l3.83-39.45 1.69-14.09a14.322 14.322 0 0 0-12.53-15.91Z"
      ></path>
      <path
        fill="#1067ae"
        d="M102.724 455.65v.01l132.79 16.89 1.69-14.09a14.322 14.322 0 0 0-12.53-15.91l-104.44-12.53a14.33 14.33 0 0 0-15.94 12.5Z"
      ></path>
      <path
        fill="#0a56a4"
        d="m224.674 442.55-28.034-3.363a14.322 14.322 0 0 1 11.084 15.662l-1.673 13.953 29.463 3.748 1.69-14.09a14.322 14.322 0 0 0-12.53-15.91Z"
      ></path>
      <path
        d="m225.396 435.106-3.32-.399 3.023-25.58a52.408 52.408 0 0 0-13.836-42.045l-89.296-95.299 12.08-60.806a25.44 25.44 0 0 0-20.84-30.06 25.95 25.95 0 0 0-4.137-.337 25.335 25.335 0 0 0-24.266 17.826L60.466 276.01a67.761 67.761 0 0 0 .932 43.183l17.82 49.232a67.522 67.522 0 0 0 21.612 29.979l11.108 8.779a22.615 22.615 0 0 1 8.415 15.334 21.836 21.836 0 0 0-23.675 19.106l-1.57 13.088-.002.006v.008l-3.952 32.935a7.5 7.5 0 0 0 14.893 1.787l3.046-25.39 117.916 14.996-2.946 24.554a7.5 7.5 0 1 0 14.892 1.787l3.824-31.872.004-.024.002-.03 1.694-14.11a21.82 21.82 0 0 0-19.082-24.252Zm-115.262-48.468a52.537 52.537 0 0 1-16.813-23.32l-17.82-49.234a52.691 52.691 0 0 1-.725-33.58l24.34-77.606a10.396 10.396 0 0 1 9.954-7.318 10.893 10.893 0 0 1 1.72.14 10.44 10.44 0 0 1 8.544 12.338l-12.196 61.389a32.954 32.954 0 0 0-10.352 42.7l21.25 39.75a7.5 7.5 0 0 0 13.229-7.073l-21.252-39.754a17.743 17.743 0 0 1-2.133-8.46 18.005 18.005 0 0 1 5.054-12.53l87.383 93.258a37.441 37.441 0 0 1 9.885 30.032l-3.019 25.55-71.716-8.604a37.667 37.667 0 0 0-14.227-28.9Zm119.452 70.933-.79 6.587-117.916-14.996.69-5.752a6.834 6.834 0 0 1 7.599-5.943l7.642.917h.005l96.793 11.614a6.822 6.822 0 0 1 5.977 7.573ZM332.73 223.133c20.785-29.468 31.77-63.123 31.77-97.33V46.94a7.5 7.5 0 0 0-6.36-7.413 240.087 240.087 0 0 1-55.656-15.546A220.472 220.472 0 0 1 261.05 1.35a7.497 7.497 0 0 0-8.801.157 191.875 191.875 0 0 1-30.308 18.614 214.312 214.312 0 0 1-67.895 20.153 7.501 7.501 0 0 0-6.546 7.44v78.09c0 34.207 10.985 67.862 31.77 97.33 18.008 25.53 43.285 47.75 73.097 64.258a7.5 7.5 0 0 0 7.266 0c29.812-16.508 55.089-38.728 73.097-64.258ZM256 272.214c-26.262-15.18-48.493-35.071-64.473-57.727-18.99-26.922-29.027-57.59-29.027-88.682v-71.58a227.698 227.698 0 0 0 66.086-20.655 208.111 208.111 0 0 0 28.329-16.894 236.85 236.85 0 0 0 39.808 21.154A254.402 254.402 0 0 0 349.5 53.292v72.513c0 31.093-10.037 61.76-29.027 88.682-15.98 22.656-38.211 42.547-64.473 57.726Zm78.5-200.748a7.501 7.501 0 0 0-5.682-7.276 267.926 267.926 0 0 1-37.858-12.512 255.53 255.53 0 0 1-29.896-14.786 7.503 7.503 0 0 0-7.689.098 226.39 226.39 0 0 1-18.144 10.027 239.177 239.177 0 0 1-51.923 18.458 7.5 7.5 0 0 0-5.808 7.306v53.024c0 27.98 9.089 55.656 26.285 80.036 12.377 17.548 28.541 33.063 48.043 46.115a7.5 7.5 0 0 0 8.344 0c19.502-13.052 35.666-28.567 48.043-46.115 17.196-24.38 26.285-52.056 26.285-80.036Zm-15 54.339c0 24.868-8.14 49.554-23.543 71.39A167.906 167.906 0 0 1 256 236.616a167.906 167.906 0 0 1-39.957-39.421c-15.402-21.836-23.543-46.522-23.543-71.39V78.673a253.124 253.124 0 0 0 49.376-18.209 241.454 241.454 0 0 0 15.533-8.396 271.531 271.531 0 0 0 27.788 13.46A282.614 282.614 0 0 0 319.5 77.259Zm132.036 150.21-24.34-77.611a25.449 25.449 0 0 0-49.243 12.578l12.08 60.801-89.296 95.3a52.411 52.411 0 0 0-13.836 42.047l3.023 25.577-3.32.399a21.82 21.82 0 0 0-19.082 24.252l1.693 14.111.002.03.004.023 3.824 31.872a7.5 7.5 0 0 0 14.893-1.787l-2.946-24.554 117.915-14.996 3.046 25.39a7.5 7.5 0 0 0 14.893-1.787l-3.952-32.935v-.008l-.001-.006-1.57-13.088a21.848 21.848 0 0 0-23.676-19.105 22.613 22.613 0 0 1 8.413-15.334l11.113-8.782a67.526 67.526 0 0 0 21.61-29.979l17.818-49.228a67.76 67.76 0 0 0 .935-43.18Zm-58.705 161.452a6.837 6.837 0 0 1 7.599 5.943l.69 5.752-117.915 14.996-.79-6.588a6.822 6.822 0 0 1 5.976-7.572l96.793-11.614h.005Zm43.667-123.38-17.82 49.229a52.531 52.531 0 0 1-16.809 23.32l-11.11 8.781a37.667 37.667 0 0 0-14.226 28.899l-71.716 8.604-3.02-25.547a37.444 37.444 0 0 1 9.886-30.035l87.383-93.259a18.005 18.005 0 0 1 5.054 12.532 17.749 17.749 0 0 1-2.135 8.463l-21.25 39.75a7.5 7.5 0 0 0 13.229 7.073l21.248-39.746a32.955 32.955 0 0 0-10.35-42.704l-12.195-61.384a10.44 10.44 0 0 1 8.52-12.338 10.937 10.937 0 0 1 1.743-.145 10.395 10.395 0 0 1 9.954 7.315l24.342 77.615a52.69 52.69 0 0 1-.728 33.577Z"
        fill={theme.palette.grey[900]}
      ></path>
    </svg>
  );
};

export default Logo;
