import { WeatherDetailsField } from '../components/WeatherDetails'
import { formatTemperature } from '../helpers/textFormatters'

export const weatherDetailsFields: WeatherDetailsField[] = [
  {
    icon: (
      <svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.375 13.125H9.625C9.39315 13.1243 9.17099 13.0319 9.00705 12.868C8.8431 12.704 8.7507 12.4819 8.75 12.25V9.1875C8.51815 9.18681 8.29599 9.0944 8.13205 8.93046C7.9681 8.76651 7.8757 8.54435 7.875 8.3125V5.6875C7.8718 5.51426 7.90356 5.34215 7.96838 5.18146C8.03321 5.02077 8.12976 4.8748 8.25229 4.75228C8.37481 4.62976 8.52078 4.5332 8.68146 4.46838C8.84215 4.40355 9.01426 4.3718 9.1875 4.375H11.8125C11.9857 4.3718 12.1579 4.40355 12.3185 4.46838C12.4792 4.5332 12.6252 4.62976 12.7477 4.75228C12.8702 4.8748 12.9668 5.02077 13.0316 5.18146C13.0964 5.34215 13.1282 5.51426 13.125 5.6875V8.3125C13.1243 8.54435 13.0319 8.76651 12.868 8.93046C12.704 9.0944 12.4819 9.18681 12.25 9.1875V12.25C12.2493 12.4819 12.1569 12.704 11.993 12.868C11.829 13.0319 11.6069 13.1243 11.375 13.125ZM9.1875 5.25C9.12914 5.24649 9.07069 5.2554 9.01602 5.27615C8.96135 5.2969 8.9117 5.329 8.87035 5.37035C8.829 5.4117 8.7969 5.46134 8.77615 5.51601C8.75541 5.57068 8.74649 5.62913 8.75 5.6875V8.3125H9.625V12.25H11.375V8.3125H12.25V5.6875C12.2535 5.62913 12.2446 5.57068 12.2239 5.51601C12.2031 5.46134 12.171 5.4117 12.1297 5.37035C12.0883 5.329 12.0387 5.2969 11.984 5.27615C11.9293 5.2554 11.8709 5.24649 11.8125 5.25H9.1875ZM10.5 3.9375C10.1539 3.9375 9.81554 3.83487 9.52776 3.64257C9.23997 3.45028 9.01567 3.17697 8.88321 2.8572C8.75076 2.53743 8.7161 2.18556 8.78363 1.84609C8.85115 1.50663 9.01783 1.19481 9.26257 0.950064C9.50731 0.705322 9.81913 0.538651 10.1586 0.471127C10.4981 0.403602 10.8499 0.438258 11.1697 0.570712C11.4895 0.703165 11.7628 0.927467 11.9551 1.21525C12.1474 1.50304 12.25 1.84138 12.25 2.1875C12.2486 2.6512 12.0638 3.09552 11.7359 3.42341C11.408 3.7513 10.9637 3.93612 10.5 3.9375ZM10.5 1.3125C10.3269 1.3125 10.1578 1.36382 10.0139 1.45996C9.86999 1.55611 9.75783 1.69277 9.69161 1.85265C9.62538 2.01254 9.60805 2.18847 9.64182 2.3582C9.67558 2.52794 9.75891 2.68385 9.88128 2.80622C10.0037 2.92859 10.1596 3.01193 10.3293 3.04569C10.499 3.07945 10.675 3.06212 10.8349 2.9959C10.9947 2.92967 11.1314 2.81752 11.2275 2.67362C11.3237 2.52973 11.375 2.36056 11.375 2.1875C11.3743 1.95565 11.2819 1.73349 11.118 1.56955C10.954 1.4056 10.7319 1.31319 10.5 1.3125ZM4.375 8.8305V5.25H3.5V8.8305C3.2081 8.93371 2.96207 9.13678 2.80541 9.40384C2.64876 9.67089 2.59155 9.98473 2.6439 10.2899C2.69626 10.595 2.85481 10.8719 3.09153 11.0714C3.32824 11.271 3.62789 11.3804 3.9375 11.3804C4.24712 11.3804 4.54676 11.271 4.78348 11.0714C5.0202 10.8719 5.17874 10.595 5.2311 10.2899C5.28346 9.98473 5.22625 9.67089 5.06959 9.40384C4.91293 9.13678 4.66691 8.93371 4.375 8.8305Z' />
        <path d='M3.93751 13.125C3.33463 13.1257 2.74498 12.9482 2.24261 12.6149C1.74025 12.2816 1.34755 11.8073 1.11385 11.2515C0.880148 10.6958 0.81585 10.0834 0.929032 9.49121C1.04221 8.89904 1.32783 8.35351 1.75001 7.92313V3.0625C1.75001 2.48234 1.98048 1.92594 2.39072 1.5157C2.80095 1.10547 3.35735 0.875 3.93751 0.875C4.51768 0.875 5.07407 1.10547 5.48431 1.5157C5.89455 1.92594 6.12501 2.48234 6.12501 3.0625V7.92313C6.5472 8.35351 6.83282 8.89904 6.946 9.49121C7.05918 10.0834 6.99488 10.6958 6.76118 11.2515C6.52747 11.8073 6.13478 12.2816 5.63242 12.6149C5.13005 12.9482 4.5404 13.1257 3.93751 13.125ZM3.93751 1.75C3.58952 1.75035 3.25589 1.88874 3.00982 2.13481C2.76375 2.38087 2.62536 2.71451 2.62501 3.0625V8.30506L2.47976 8.43587C2.1494 8.73115 1.91649 9.11979 1.81187 9.55035C1.70725 9.98091 1.73584 10.4331 1.89387 10.847C2.0519 11.261 2.33192 11.6172 2.69685 11.8685C3.06178 12.1198 3.49442 12.2544 3.93751 12.2544C4.3806 12.2544 4.81325 12.1198 5.17818 11.8685C5.54311 11.6172 5.82313 11.261 5.98116 10.847C6.13919 10.4331 6.16778 9.98091 6.06316 9.55035C5.95854 9.11979 5.72563 8.73115 5.39526 8.43587L5.25001 8.30506V3.0625C5.24967 2.71451 5.11127 2.38087 4.86521 2.13481C4.61914 1.88874 4.2855 1.75035 3.93751 1.75Z' />
        <defs>
          <clipPath id='clip0_23_27'>
            <rect width='14' height='14' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Ощущается как',
    name: 'Feels Like',
    formatValue: (weatherInfo) =>
      formatTemperature(Number(weatherInfo.main.feels_like))
  },
  {
    icon: (
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9.66663 12C9.9444 12 10.1806 11.9027 10.3753 11.708C10.57 11.5133 10.6671 11.2773 10.6666 11C10.6666 10.7222 10.5693 10.486 10.3746 10.2913C10.18 10.0967 9.94396 9.99955 9.66663 10C9.38885 10 9.15263 10.0973 8.95796 10.292C8.76329 10.4867 8.66618 10.7227 8.66663 11C8.66663 11.2778 8.76396 11.514 8.95863 11.7087C9.15329 11.9033 9.38929 12.0004 9.66663 12ZM6.29996 11.9667L10.6333 7.63333L9.69996 6.7L5.36663 11.0333L6.29996 11.9667ZM6.33329 8.66667C6.61107 8.66667 6.84729 8.56933 7.04196 8.37467C7.23663 8.18 7.33374 7.944 7.33329 7.66667C7.33329 7.38889 7.23596 7.15267 7.04129 6.958C6.84663 6.76333 6.61063 6.66622 6.33329 6.66667C6.05552 6.66667 5.81929 6.764 5.62463 6.95866C5.42996 7.15333 5.33285 7.38933 5.33329 7.66667C5.33329 7.94444 5.43063 8.18067 5.62529 8.37533C5.81996 8.57 6.05596 8.66711 6.33329 8.66667ZM7.99996 14.6667C6.47774 14.6667 5.20818 14.1444 4.19129 13.1C3.1744 12.0556 2.66618 10.7556 2.66663 9.2C2.66663 8.08889 3.1084 6.88044 3.99196 5.57467C4.87552 4.26889 6.21151 2.85511 7.99996 1.33333C9.78885 2.85555 11.1251 4.26955 12.0086 5.57533C12.8922 6.88111 13.3337 8.08933 13.3333 9.2C13.3333 10.7556 12.8248 12.0556 11.808 13.1C10.7911 14.1444 9.52174 14.6667 7.99996 14.6667ZM7.99996 13.3333C9.15552 13.3333 10.1111 12.9416 10.8666 12.158C11.6222 11.3744 12 10.3884 12 9.2C12 8.38889 11.6637 7.47222 10.9913 6.45C10.3188 5.42778 9.32174 4.31111 7.99996 3.1C6.67774 4.31111 5.68063 5.42778 5.00863 6.45C4.33663 7.47222 4.0004 8.38889 3.99996 9.2C3.99996 10.3889 4.37774 11.3751 5.13329 12.1587C5.88885 12.9422 6.8444 13.3338 7.99996 13.3333Z' />
      </svg>
    ),
    label: 'Влажность',
    name: 'Humidity',
    formatValue: (weatherInfo) => weatherInfo.main.humidity + ' %'
  },
  {
    icon: (
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7.00004 2.66667C6.7696 2.66659 6.54621 2.7461 6.36764 2.89175C6.18907 3.0374 6.06628 3.24025 6.02004 3.466C6.00257 3.5518 5.96838 3.63331 5.91941 3.7059C5.87044 3.77848 5.80766 3.8407 5.73464 3.88902C5.66162 3.93734 5.5798 3.9708 5.49385 3.9875C5.4079 4.0042 5.3195 4.0038 5.23371 3.98633C5.14791 3.96887 5.06639 3.93467 4.99381 3.8857C4.92123 3.83674 4.859 3.77395 4.81069 3.70093C4.76237 3.62791 4.72891 3.54609 4.71221 3.46014C4.69551 3.37419 4.69591 3.2858 4.71337 3.2C4.80167 2.76744 5.01087 2.3688 5.31668 2.05039C5.62249 1.73198 6.01236 1.50686 6.441 1.40118C6.86965 1.29549 7.31948 1.31358 7.73825 1.45335C8.15702 1.59311 8.52755 1.84881 8.80681 2.19075C9.08606 2.53269 9.26257 2.94684 9.31585 3.3851C9.36912 3.82335 9.29697 4.26773 9.10778 4.66661C8.91858 5.0655 8.6201 5.40253 8.24701 5.63855C7.87392 5.87457 7.44152 5.99991 7.00004 6H3.33337C3.15656 6 2.98699 5.92976 2.86197 5.80474C2.73695 5.67971 2.66671 5.51014 2.66671 5.33333C2.66671 5.15652 2.73695 4.98695 2.86197 4.86193C2.98699 4.73691 3.15656 4.66667 3.33337 4.66667H7.00004C7.26526 4.66667 7.51961 4.56131 7.70715 4.37377C7.89468 4.18624 8.00004 3.93188 8.00004 3.66667C8.00004 3.40145 7.89468 3.1471 7.70715 2.95956C7.51961 2.77202 7.26526 2.66667 7.00004 2.66667ZM12.3334 5.33333C12.1029 5.33326 11.8795 5.41276 11.701 5.55841C11.5224 5.70406 11.3996 5.90692 11.3534 6.13267C11.336 6.21846 11.3018 6.29999 11.2529 6.37259C11.2039 6.44519 11.1412 6.50744 11.0682 6.55579C10.9952 6.60414 10.9134 6.63763 10.8275 6.65437C10.7416 6.67111 10.6532 6.67076 10.5674 6.65333C10.4816 6.63591 10.4001 6.60176 10.3275 6.55283C10.2549 6.5039 10.1926 6.44115 10.1443 6.36817C10.0959 6.29518 10.0624 6.21339 10.0457 6.12745C10.0289 6.04152 10.0293 5.95313 10.0467 5.86733C10.1349 5.43471 10.344 5.03599 10.6497 4.71748C10.9555 4.39896 11.3454 4.17374 11.774 4.06796C12.2027 3.96218 12.6525 3.98019 13.0714 4.1199C13.4902 4.2596 13.8608 4.51527 14.1401 4.85721C14.4194 5.19914 14.596 5.61331 14.6493 6.05159C14.7026 6.48988 14.6305 6.93429 14.4413 7.33322C14.2521 7.73214 13.9536 8.0692 13.5805 8.30523C13.2073 8.54127 12.7749 8.6666 12.3334 8.66667H2.00004C1.82323 8.66667 1.65366 8.59643 1.52864 8.4714C1.40361 8.34638 1.33337 8.17681 1.33337 8C1.33337 7.82319 1.40361 7.65362 1.52864 7.5286C1.65366 7.40357 1.82323 7.33333 2.00004 7.33333H12.3334C12.5986 7.33333 12.8529 7.22798 13.0405 7.04044C13.228 6.8529 13.3334 6.59855 13.3334 6.33333C13.3334 6.06812 13.228 5.81376 13.0405 5.62623C12.8529 5.43869 12.5986 5.33333 12.3334 5.33333ZM8.68671 12.534C8.72467 12.7193 8.81442 12.8901 8.94553 13.0264C9.07665 13.1628 9.24375 13.2592 9.42745 13.3044C9.61114 13.3496 9.80388 13.3417 9.9833 13.2818C10.1627 13.2218 10.3215 13.1122 10.4411 12.9657C10.5607 12.8191 10.6363 12.6416 10.6591 12.4538C10.6819 12.266 10.6509 12.0756 10.5699 11.9047C10.4888 11.7338 10.3609 11.5894 10.201 11.4883C10.0412 11.3871 9.85588 11.3334 9.66671 11.3333H5.33337C5.15656 11.3333 4.98699 11.2631 4.86197 11.1381C4.73695 11.013 4.66671 10.8435 4.66671 10.6667C4.66671 10.4899 4.73695 10.3203 4.86197 10.1953C4.98699 10.0702 5.15656 10 5.33337 10H9.66671C10.1082 10.0001 10.5407 10.1254 10.9138 10.3614C11.2869 10.5975 11.5854 10.9345 11.7746 11.3334C11.9638 11.7324 12.0359 12.1768 11.9826 12.6151C11.9293 13.0534 11.7528 13.4675 11.4734 13.8095C11.1941 14.1514 10.8235 14.4071 10.4047 14.5468C9.98587 14.6865 9.536 14.7045 9.10734 14.5987C8.67868 14.4929 8.28884 14.2677 7.98308 13.9492C7.67733 13.6307 7.46822 13.232 7.38004 12.7993C7.34486 12.6261 7.37994 12.4459 7.47759 12.2985C7.57523 12.1511 7.72743 12.0485 7.90071 12.0133C8.07398 11.9781 8.25414 12.0132 8.40154 12.1109C8.54894 12.2085 8.65152 12.3607 8.68671 12.534Z' />
      </svg>
    ),
    label: 'Ветер',
    name: 'Wind',
    formatValue: (weatherInfo) => weatherInfo.wind.speed + ' м/с'
  },
  {
    icon: (
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M1.33338 3V0.999999C1.33338 0.633332 1.46404 0.319332 1.72538 0.0579985C1.98671 -0.203335 2.30049 -0.333779 2.66671 -0.333335H13.3334C13.7 -0.333335 14.014 -0.202668 14.2754 0.0586651C14.5367 0.319998 14.6672 0.633776 14.6667 0.999999V4.66667H13.3334V0.999999H2.66671V3H1.33338ZM4.66671 8.33333C4.54449 8.33333 4.42782 8.30267 4.31671 8.24133C4.2056 8.18 4.12226 8.08844 4.06671 7.96667L2.91671 5.66667H1.33338V4.33333H3.33338C3.4556 4.33333 3.57226 4.364 3.68338 4.42533C3.79449 4.48667 3.87782 4.57822 3.93338 4.7L4.66671 6.16667L6.73338 2.03333C6.78893 1.92222 6.87226 1.83889 6.98338 1.78333C7.09449 1.72778 7.21115 1.7 7.33338 1.7C7.4556 1.7 7.57226 1.72778 7.68338 1.78333C7.79449 1.83889 7.87782 1.92222 7.93338 2.03333L9.05004 4.26667C8.85004 4.38889 8.65849 4.51667 8.47538 4.65C8.29226 4.78333 8.12271 4.93333 7.96671 5.1L7.33338 3.83333L5.26671 7.96667C5.21115 8.08889 5.12782 8.18067 5.01671 8.242C4.9056 8.30333 4.78893 8.33378 4.66671 8.33333ZM7.11671 10.3333H2.66671C2.30004 10.3333 1.98604 10.2027 1.72471 9.94133C1.46338 9.68 1.33293 9.36622 1.33338 9V7H2.66671V9H6.71671C6.75004 9.23333 6.80004 9.46111 6.86671 9.68333C6.93338 9.90555 7.01671 10.1222 7.11671 10.3333ZM11.3334 11.6667C10.4112 11.6667 9.62493 11.3416 8.97471 10.6913C8.32449 10.0411 7.9996 9.25511 8.00004 8.33333C8.00004 7.41111 8.32515 6.62489 8.97538 5.97467C9.6256 5.32444 10.4116 4.99955 11.3334 5C12.2556 5 13.0418 5.32511 13.692 5.97533C14.3423 6.62555 14.6672 7.41155 14.6667 8.33333C14.6667 9.25555 14.3416 10.0418 13.6914 10.692C13.0412 11.3422 12.2552 11.6671 11.3334 11.6667ZM11.4667 8.66667L12.9834 7.15L12.5167 6.68333L11 8.2L11.4667 8.66667Z' />
        </g>
        <defs>
          <clipPath id='clip0_23_36'>
            <rect width='16' height='16' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Давление',
    name: 'Pressure',
    formatValue: (weatherInfo) => weatherInfo.main.pressure + ' мм рт.ст'
  },
  {
    icon: (
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8.00003 3.66667C8.70223 3.66657 9.39208 3.85132 10.0002 4.20235C10.6084 4.55339 11.1134 5.05833 11.4646 5.66642C11.8157 6.27452 12.0006 6.96433 12.0006 7.66653C12.0006 8.36872 11.8158 9.05855 11.4647 9.66667H13.3334C13.5102 9.66667 13.6797 9.7369 13.8048 9.86193C13.9298 9.98695 14 10.1565 14 10.3333C14 10.5101 13.9298 10.6797 13.8048 10.8047C13.6797 10.9298 13.5102 11 13.3334 11H2.6667C2.48989 11 2.32032 10.9298 2.1953 10.8047C2.07027 10.6797 2.00003 10.5101 2.00003 10.3333C2.00003 10.1565 2.07027 9.98695 2.1953 9.86193C2.32032 9.7369 2.48989 9.66667 2.6667 9.66667H4.53537C4.18427 9.05855 3.99944 8.36872 3.99947 7.66653C3.99949 6.96433 4.18437 6.27452 4.53551 5.66642C4.88665 5.05833 5.39168 4.55339 5.99984 4.20235C6.60799 3.85132 7.29784 3.66657 8.00003 3.66667ZM8.00003 5C7.47094 4.99996 6.9538 5.15731 6.5144 5.45204C6.07499 5.74677 5.73319 6.16554 5.53249 6.65509C5.33178 7.14463 5.28124 7.68282 5.38729 8.20117C5.49334 8.71953 5.75119 9.19462 6.12804 9.566L6.2367 9.666H9.76337C10.1693 9.3077 10.4566 8.83431 10.587 8.30878C10.7174 7.78325 10.6847 7.23048 10.4933 6.72397C10.3018 6.21747 9.96078 5.78124 9.51542 5.47329C9.07006 5.16533 8.5415 5.00026 8.00003 5ZM14 7C14.17 7.00019 14.3334 7.06525 14.4569 7.1819C14.5805 7.29854 14.6549 7.45797 14.6648 7.6276C14.6748 7.79722 14.6196 7.96425 14.5105 8.09455C14.4015 8.22486 14.2468 8.3086 14.078 8.32867L14 8.33333H13.3334C13.1634 8.33315 13 8.26808 12.8765 8.15143C12.7529 8.03479 12.6785 7.87537 12.6686 7.70574C12.6586 7.53611 12.7138 7.36908 12.8229 7.23878C12.9319 7.10848 13.0866 7.02474 13.2554 7.00467L13.3334 7H14ZM2.6667 7C2.83662 7.00019 3.00006 7.06525 3.12361 7.1819C3.24717 7.29854 3.32152 7.45797 3.33148 7.6276C3.34144 7.79722 3.28625 7.96425 3.17719 8.09455C3.06813 8.22486 2.91343 8.3086 2.7447 8.32867L2.6667 8.33333H2.00003C1.83011 8.33315 1.66668 8.26808 1.54312 8.15143C1.41956 8.03479 1.34521 7.87537 1.33525 7.70574C1.3253 7.53611 1.38048 7.36908 1.48954 7.23878C1.5986 7.10848 1.7533 7.02474 1.92203 7.00467L2.00003 7H2.6667ZM4.2287 2.95267L4.70003 3.424C4.82147 3.54973 4.88867 3.71814 4.88715 3.89293C4.88563 4.06773 4.81552 4.23494 4.69191 4.35855C4.56831 4.48215 4.4011 4.55226 4.2263 4.55378C4.0515 4.5553 3.8831 4.48811 3.75737 4.36667L3.28603 3.89533C3.1646 3.7696 3.0974 3.6012 3.09892 3.4264C3.10044 3.2516 3.17055 3.08439 3.29416 2.96079C3.41776 2.83718 3.58497 2.76707 3.75977 2.76555C3.93457 2.76403 4.10297 2.83123 4.2287 2.95267ZM11.7714 2.95267C11.8913 2.8331 12.0523 2.76368 12.2216 2.75851C12.3909 2.75335 12.5558 2.81281 12.6829 2.92483C12.8099 3.03686 12.8896 3.19303 12.9056 3.36165C12.9217 3.53027 12.873 3.69867 12.7694 3.83267L12.714 3.89533L12.2427 4.36667C12.1227 4.48623 11.9617 4.55565 11.7924 4.56082C11.6231 4.56599 11.4582 4.50652 11.3312 4.3945C11.2041 4.28248 11.1245 4.1263 11.1084 3.95768C11.0924 3.78907 11.1411 3.62066 11.2447 3.48667L11.3 3.424L11.7714 2.95267ZM8.00003 -1.74733C8.16343 -1.74729 8.32111 -1.68725 8.44315 -1.57861C8.56519 -1.46996 8.64308 -1.32029 8.66203 -1.158L8.6667 -1.08V0.724L8.9427 0.447333C9.0624 0.326497 9.22375 0.255978 9.39373 0.250211C9.56372 0.244444 9.72948 0.303864 9.85709 0.41631C9.9847 0.528756 10.0645 0.685723 10.0802 0.855083C10.0958 1.02444 10.0462 1.19339 9.94137 1.32733L9.88537 1.39067L8.47203 2.80467C8.35724 2.91945 8.20451 2.98841 8.04249 2.99859C7.88047 3.00878 7.7203 2.9595 7.59203 2.86L7.5287 2.80467L6.1147 1.39067C5.99387 1.27097 5.92335 1.10962 5.91758 0.939635C5.91181 0.76965 5.97123 0.603889 6.08368 0.47628C6.19612 0.348671 6.35309 0.268865 6.52245 0.253197C6.69181 0.23753 6.86075 0.287185 6.9947 0.392L7.05737 0.447333L7.33337 0.724V-1.08C7.33337 -1.25681 7.40361 -1.42638 7.52863 -1.5514C7.65365 -1.67643 7.82322 -1.74667 8.00003 -1.74667V-1.74733Z' />
      </svg>
    ),
    label: 'Время заката',
    name: 'Sunset time',
    formatValue: (weatherInfo) => ''
    // '' + moment(weatherInfo.sys.sunset).format('LT')
  }
]