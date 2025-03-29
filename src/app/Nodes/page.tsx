import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";
import StayInLoop from "../components/StayInLoop";
import Link from "next/link";
import GradientText from "@/components/GradientText/GradientText";

function page() {
  return (
    <>
      <Header />
      <section className="w-screen flex flex-col gap-12 items-center md:p-20 p-10 max-sm:px-4 pt-20 pb-0 md:pb-0 bg-[#080808] min-h-screen text-white overflow-x-hidden">
        <div className="flex justify-center items-center w-full pt-5">
        <svg width="auto" height="auto" viewBox="0 0 1105 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_146_439" maskUnits="userSpaceOnUse" x="0" y="0" width="1105" height="88" fill="black">
<rect fill="white" width="1105" height="88"/>
<path d="M2.935 84V3.49999H29.845C39.1983 3.49999 46.9033 5.18666 52.96 8.56C59.0933 11.8567 63.6167 16.5333 66.53 22.59C69.52 28.57 71.015 35.6233 71.015 43.75C71.015 51.8767 69.52 58.9683 66.53 65.025C63.6167 71.005 59.1317 75.6817 53.075 79.055C47.0183 82.3517 39.275 84 29.845 84H2.935ZM18.46 70.66H29.04C35.6333 70.66 40.8083 69.5867 44.565 67.44C48.3983 65.2933 51.12 62.2267 52.73 58.24C54.34 54.1767 55.145 49.3467 55.145 43.75C55.145 38.0767 54.34 33.2467 52.73 29.26C51.12 25.1967 48.3983 22.0917 44.565 19.945C40.8083 17.7983 35.6333 16.725 29.04 16.725H18.46V70.66ZM84.2436 84V3.49999H137.144V16.035H99.7686V37.08H133.694V49.155H99.7686V71.465H137.144V84H84.2436ZM187.399 85.38C179.349 85.38 172.411 83.655 166.584 80.205C160.834 76.6783 156.388 71.81 153.244 65.6C150.178 59.3133 148.644 52.0683 148.644 43.865C148.644 35.6617 150.178 28.4167 153.244 22.13C156.388 15.8433 160.834 10.9367 166.584 7.41C172.411 3.88333 179.349 2.12 187.399 2.12C197.136 2.12 205.109 4.535 211.319 9.36499C217.529 14.195 221.401 21.0183 222.934 29.835H206.029C205.033 25.5417 202.924 22.2067 199.704 19.83C196.561 17.3767 192.421 16.15 187.284 16.15C182.531 16.15 178.429 17.3 174.979 19.6C171.606 21.8233 168.999 25.005 167.159 29.145C165.319 33.2083 164.399 38.115 164.399 43.865C164.399 49.5383 165.319 54.445 167.159 58.585C168.999 62.725 171.606 65.9067 174.979 68.13C178.429 70.3533 182.531 71.465 187.284 71.465C192.421 71.465 196.561 70.3533 199.704 68.13C202.848 65.83 204.918 62.6483 205.914 58.585H222.934C221.401 66.9417 217.529 73.4967 211.319 78.25C205.109 83.0033 197.136 85.38 187.399 85.38ZM236.192 84V3.49999H289.092V16.035H251.717V37.08H285.642V49.155H251.717V71.465H289.092V84H236.192ZM303.238 84V3.49999H318.763L355.793 59.045V3.49999H371.318V84H355.793L318.763 28.57V84H303.238ZM405.762 84V16.035H382.187V3.49999H444.632V16.035H421.172V84H405.762ZM455.635 84V3.49999H485.65C492.167 3.49999 497.534 4.61166 501.75 6.835C505.967 9.05833 509.11 12.0483 511.18 15.805C513.25 19.485 514.285 23.5867 514.285 28.11C514.285 32.4033 513.289 36.4283 511.295 40.185C509.302 43.865 506.159 46.855 501.865 49.155C497.649 51.3783 492.205 52.49 485.535 52.49H471.16V84H455.635ZM497.38 84L480.82 48.58H497.61L515.09 84H497.38ZM471.16 41.22H484.73C489.407 41.22 492.857 40.07 495.08 37.77C497.304 35.47 498.415 32.4417 498.415 28.685C498.415 24.9283 497.304 21.9767 495.08 19.83C492.934 17.6067 489.484 16.495 484.73 16.495H471.16V41.22ZM522.779 84L552.219 3.49999H569.814L599.139 84H582.694L560.959 21.21L539.109 84H522.779ZM535.774 65.715L539.914 53.64H580.854L584.879 65.715H535.774ZM609.717 84V3.49999H625.242V71.925H660.547V84H609.717ZM673.843 84V3.49999H689.368V84H673.843ZM702.876 84V72.04L740.021 16.38H703.106V3.49999H757.846V15.46L720.586 71.12H758.076V84H702.876ZM766.143 84L795.583 3.49999H813.178L842.503 84H826.058L804.323 21.21L782.473 84H766.143ZM779.138 65.715L783.278 53.64H824.218L828.243 65.715H779.138ZM863.291 84V16.035H839.716V3.49999H902.161V16.035H878.701V84H863.291ZM913.164 84V3.49999H928.689V84H913.164ZM981.643 85.38C973.823 85.38 966.923 83.6167 960.943 80.09C954.963 76.5633 950.286 71.695 946.913 65.485C943.539 59.1983 941.853 51.9533 941.853 43.75C941.853 35.5467 943.539 28.34 946.913 22.13C950.286 15.8433 954.963 10.9367 960.943 7.41C966.923 3.88333 973.823 2.12 981.643 2.12C989.539 2.12 996.478 3.88333 1002.46 7.41C1008.44 10.9367 1013.08 15.8433 1016.37 22.13C1019.75 28.34 1021.43 35.5467 1021.43 43.75C1021.43 51.9533 1019.75 59.1983 1016.37 65.485C1013.08 71.695 1008.44 76.5633 1002.46 80.09C996.478 83.6167 989.539 85.38 981.643 85.38ZM981.643 71.465C986.549 71.465 990.766 70.3533 994.293 68.13C997.896 65.83 1000.69 62.61 1002.69 58.47C1004.68 54.33 1005.68 49.4233 1005.68 43.75C1005.68 38 1004.68 33.0933 1002.69 29.03C1000.69 24.89 997.896 21.7083 994.293 19.485C990.766 17.2617 986.549 16.15 981.643 16.15C976.813 16.15 972.596 17.2617 968.993 19.485C965.389 21.7083 962.591 24.89 960.598 29.03C958.604 33.0933 957.608 38 957.608 43.75C957.608 49.4233 958.604 54.33 960.598 58.47C962.591 62.61 965.389 65.83 968.993 68.13C972.596 70.3533 976.813 71.465 981.643 71.465ZM1034.68 84V3.49999H1050.2L1087.23 59.045V3.49999H1102.76V84H1087.23L1050.2 28.57V84H1034.68Z"/>
</mask>
<path d="M2.935 84H0.935V86H2.935V84ZM2.935 3.5V1.49999H0.935V3.5H2.935ZM52.96 8.56L51.9868 10.3073L51.9999 10.3146L52.0131 10.3216L52.96 8.56ZM66.53 22.59L64.7277 23.4569L64.7343 23.4707L64.7411 23.4844L66.53 22.59ZM66.53 65.025L64.7366 64.1397L64.732 64.1491L66.53 65.025ZM53.075 79.055L54.0311 80.8116L54.0397 80.807L54.0482 80.8023L53.075 79.055ZM18.46 70.66H16.46V72.66H18.46V70.66ZM44.565 67.44L43.5878 65.695L43.5802 65.6992L43.5727 65.7035L44.565 67.44ZM52.73 58.24L54.5845 58.9889L54.5894 58.9767L52.73 58.24ZM52.73 29.26L50.8706 29.9967L50.8755 30.0089L52.73 29.26ZM44.565 19.945L43.5727 21.6815L43.5802 21.6858L43.5878 21.69L44.565 19.945ZM18.46 16.725V14.725H16.46V16.725H18.46ZM4.935 84V3.5H0.935V84H4.935ZM2.935 5.5H29.845V1.49999H2.935V5.5ZM29.845 5.5C38.9719 5.5 46.3137 7.14754 51.9868 10.3073L53.9332 6.81273C47.493 3.22579 39.4248 1.49999 29.845 1.49999V5.5ZM52.0131 10.3216C57.7882 13.4258 62.0046 17.7959 64.7277 23.4569L68.3323 21.723C65.2287 15.2708 60.3985 10.2876 53.9069 6.79835L52.0131 10.3216ZM64.7411 23.4844C67.5655 29.1332 69.015 35.8679 69.015 43.75H73.015C73.015 35.3788 71.4745 28.0068 68.3189 21.6956L64.7411 23.4844ZM69.015 43.75C69.015 51.6312 67.5658 58.4087 64.7366 64.1397L68.3234 65.9103C71.4742 59.5279 73.015 52.1221 73.015 43.75H69.015ZM64.732 64.1491C62.0059 69.7449 57.8169 74.1246 52.1018 77.3077L54.0482 80.8023C60.4464 77.2387 65.2275 72.2651 68.328 65.9009L64.732 64.1491ZM52.1189 77.2984C46.4436 80.3874 39.058 82 29.845 82V86C39.492 86 47.5931 84.3159 54.0311 80.8116L52.1189 77.2984ZM29.845 82H2.935V86H29.845V82ZM18.46 72.66H29.04V68.66H18.46V72.66ZM29.04 72.66C35.8138 72.66 41.3802 71.5634 45.5573 69.1765L43.5727 65.7035C40.2364 67.61 35.4529 68.66 29.04 68.66V72.66ZM45.5422 69.185C49.7634 66.8211 52.8 63.4077 54.5845 58.9889L50.8755 57.4911C49.44 61.0456 47.0333 63.7655 43.5878 65.695L45.5422 69.185ZM54.5894 58.9767C56.3143 54.6233 57.145 49.5313 57.145 43.75H53.145C53.145 49.1621 52.3657 53.73 50.8706 57.5033L54.5894 58.9767ZM57.145 43.75C57.145 37.8977 56.3159 32.7985 54.5845 28.5111L50.8755 30.0089C52.3641 33.6948 53.145 38.2556 53.145 43.75H57.145ZM54.5894 28.5233C52.809 24.03 49.7745 20.5701 45.5422 18.2L43.5878 21.69C47.0222 23.6133 49.431 26.3633 50.8706 29.9967L54.5894 28.5233ZM45.5573 18.2085C41.3802 15.8216 35.8138 14.725 29.04 14.725V18.725C35.4529 18.725 40.2364 19.775 43.5727 21.6815L45.5573 18.2085ZM29.04 14.725H18.46V18.725H29.04V14.725ZM16.46 16.725V70.66H20.46V16.725H16.46ZM84.2436 84H82.2436V86H84.2436V84ZM84.2436 3.5V1.49999H82.2436V3.5H84.2436ZM137.144 3.5H139.144V1.49999H137.144V3.5ZM137.144 16.035V18.035H139.144V16.035H137.144ZM99.7686 16.035V14.035H97.7686V16.035H99.7686ZM99.7686 37.08H97.7686V39.08H99.7686V37.08ZM133.694 37.08H135.694V35.08H133.694V37.08ZM133.694 49.155V51.155H135.694V49.155H133.694ZM99.7686 49.155V47.155H97.7686V49.155H99.7686ZM99.7686 71.465H97.7686V73.465H99.7686V71.465ZM137.144 71.465H139.144V69.465H137.144V71.465ZM137.144 84V86H139.144V84H137.144ZM86.2436 84V3.5H82.2436V84H86.2436ZM84.2436 5.5H137.144V1.49999H84.2436V5.5ZM135.144 3.5V16.035H139.144V3.5H135.144ZM137.144 14.035H99.7686V18.035H137.144V14.035ZM97.7686 16.035V37.08H101.769V16.035H97.7686ZM99.7686 39.08H133.694V35.08H99.7686V39.08ZM131.694 37.08V49.155H135.694V37.08H131.694ZM133.694 47.155H99.7686V51.155H133.694V47.155ZM97.7686 49.155V71.465H101.769V49.155H97.7686ZM99.7686 73.465H137.144V69.465H99.7686V73.465ZM135.144 71.465V84H139.144V71.465H135.144ZM137.144 82H84.2436V86H137.144V82ZM166.584 80.205L165.539 81.9099L165.552 81.918L165.566 81.9259L166.584 80.205ZM153.244 65.6L151.447 66.4768L151.453 66.4901L151.46 66.5032L153.244 65.6ZM153.244 22.13L151.456 21.2356L151.451 21.2443L151.447 21.2531L153.244 22.13ZM166.584 7.41L165.549 5.69897L165.539 5.70512L166.584 7.41ZM211.319 9.36499L212.547 7.78629L211.319 9.36499ZM222.934 29.835V31.835H225.312L224.905 29.4923L222.934 29.835ZM206.029 29.835L204.081 30.2873L204.441 31.835H206.029V29.835ZM199.704 19.83L198.474 21.4066L198.495 21.4232L198.517 21.4391L199.704 19.83ZM174.979 19.6L176.08 21.2699L176.089 21.2641L174.979 19.6ZM167.16 29.145L168.981 29.97L168.987 29.9573L167.16 29.145ZM167.16 58.585L168.987 57.7727L167.16 58.585ZM174.979 68.13L173.879 69.7999L173.887 69.8056L173.896 69.8111L174.979 68.13ZM199.704 68.13L200.859 69.7628L200.873 69.7535L200.886 69.7441L199.704 68.13ZM205.914 58.585V56.585H204.346L203.972 58.1086L205.914 58.585ZM222.934 58.585L224.902 58.9459L225.335 56.585H222.934V58.585ZM211.319 78.25L210.104 76.6618L211.319 78.25ZM187.399 83.38C179.64 83.38 173.068 81.7195 167.603 78.484L165.566 81.9259C171.754 85.5905 179.059 87.38 187.399 87.38V83.38ZM167.63 78.5001C162.206 75.1735 158.011 70.5874 155.029 64.6968L151.46 66.5032C154.765 73.0326 159.463 78.1832 165.539 81.9099L167.63 78.5001ZM155.042 64.7232C152.13 58.753 150.644 51.8167 150.644 43.865H146.644C146.644 52.32 148.226 59.8737 151.447 66.4768L155.042 64.7232ZM150.644 43.865C150.644 35.9133 152.13 28.977 155.042 23.0068L151.447 21.2531C148.226 27.8563 146.644 35.41 146.644 43.865H150.644ZM155.033 23.0244C158.017 17.0573 162.213 12.4377 167.63 9.11488L165.539 5.70512C159.456 9.43563 154.759 14.6294 151.456 21.2356L155.033 23.0244ZM167.62 9.121C173.082 5.81535 179.648 4.12 187.399 4.12V0.119999C179.051 0.119999 171.741 1.95132 165.549 5.699L167.62 9.121ZM187.399 4.12C196.8 4.12 204.309 6.44643 210.092 10.9437L212.547 7.78629C205.91 2.62356 197.473 0.119999 187.399 0.119999V4.12ZM210.092 10.9437C215.855 15.4261 219.503 21.7788 220.964 30.1777L224.905 29.4923C223.299 20.2579 219.204 12.9639 212.547 7.78629L210.092 10.9437ZM222.934 27.835H206.029V31.835H222.934V27.835ZM207.978 29.3827C206.885 24.676 204.535 20.9096 200.892 18.2208L198.517 21.4391C201.314 23.5037 203.181 26.4074 204.081 30.2873L207.978 29.3827ZM200.935 18.2534C197.35 15.4553 192.737 14.15 187.285 14.15V18.15C192.105 18.15 195.772 19.298 198.474 21.4066L200.935 18.2534ZM187.285 14.15C182.196 14.15 177.695 15.3861 173.87 17.9359L176.089 21.2641C179.164 19.2139 182.867 18.15 187.285 18.15V14.15ZM173.879 17.9301C170.148 20.3888 167.308 23.887 165.332 28.3327L168.987 29.9573C170.691 26.123 173.064 23.2579 176.08 21.2699L173.879 17.9301ZM165.338 28.32C163.351 32.706 162.399 37.9095 162.399 43.865H166.399C166.399 38.3205 167.288 33.7107 168.981 29.97L165.338 28.32ZM162.399 43.865C162.399 49.7498 163.353 54.9457 165.332 59.3973L168.987 57.7727C167.286 53.9443 166.399 49.3269 166.399 43.865H162.399ZM165.332 59.3973C167.308 63.843 170.148 67.3412 173.879 69.7999L176.08 66.4601C173.064 64.4721 170.691 61.607 168.987 57.7727L165.332 59.3973ZM173.896 69.8111C177.718 72.2739 182.209 73.465 187.285 73.465V69.465C182.853 69.465 179.141 68.4328 176.063 66.4489L173.896 69.8111ZM187.285 73.465C192.699 73.465 197.282 72.2933 200.859 69.7628L198.55 66.4972C195.84 68.4134 192.144 69.465 187.285 69.465V73.465ZM200.886 69.7441C204.438 67.1448 206.757 63.5452 207.857 59.0614L203.972 58.1086C203.079 61.7515 201.258 64.5152 198.523 66.5159L200.886 69.7441ZM205.914 60.585H222.934V56.585H205.914V60.585ZM220.967 58.2241C219.515 66.1384 215.884 72.2373 210.104 76.6618L212.535 79.8382C219.175 74.756 223.287 67.7449 224.902 58.9459L220.967 58.2241ZM210.104 76.6618C204.321 81.0883 196.806 83.38 187.399 83.38V87.38C197.466 87.38 205.898 84.9184 212.535 79.8382L210.104 76.6618ZM236.192 84H234.192V86H236.192V84ZM236.192 3.5V1.49999H234.192V3.5H236.192ZM289.092 3.5H291.092V1.49999H289.092V3.5ZM289.092 16.035V18.035H291.092V16.035H289.092ZM251.717 16.035V14.035H249.717V16.035H251.717ZM251.717 37.08H249.717V39.08H251.717V37.08ZM285.642 37.08H287.642V35.08H285.642V37.08ZM285.642 49.155V51.155H287.642V49.155H285.642ZM251.717 49.155V47.155H249.717V49.155H251.717ZM251.717 71.465H249.717V73.465H251.717V71.465ZM289.092 71.465H291.092V69.465H289.092V71.465ZM289.092 84V86H291.092V84H289.092ZM238.192 84V3.5H234.192V84H238.192ZM236.192 5.5H289.092V1.49999H236.192V5.5ZM287.092 3.5V16.035H291.092V3.5H287.092ZM289.092 14.035H251.717V18.035H289.092V14.035ZM249.717 16.035V37.08H253.717V16.035H249.717ZM251.717 39.08H285.642V35.08H251.717V39.08ZM283.642 37.08V49.155H287.642V37.08H283.642ZM285.642 47.155H251.717V51.155H285.642V47.155ZM249.717 49.155V71.465H253.717V49.155H249.717ZM251.717 73.465H289.092V69.465H251.717V73.465ZM287.092 71.465V84H291.092V71.465H287.092ZM289.092 82H236.192V86H289.092V82ZM303.238 84H301.238V86H303.238V84ZM303.238 3.5V1.49999H301.238V3.5H303.238ZM318.763 3.5L320.427 2.39059L319.833 1.49999H318.763V3.5ZM355.793 59.045L354.129 60.1544L357.793 65.6506V59.045H355.793ZM355.793 3.5V1.49999H353.793V3.5H355.793ZM371.318 3.5H373.318V1.49999H371.318V3.5ZM371.318 84V86H373.318V84H371.318ZM355.793 84L354.13 85.111L354.724 86H355.793V84ZM318.763 28.57L320.426 27.459L316.763 21.9758V28.57H318.763ZM318.763 84V86H320.763V84H318.763ZM305.238 84V3.5H301.238V84H305.238ZM303.238 5.5H318.763V1.49999H303.238V5.5ZM317.099 4.60939L354.129 60.1544L357.457 57.9356L320.427 2.39059L317.099 4.60939ZM357.793 59.045V3.5H353.793V59.045H357.793ZM355.793 5.5H371.318V1.49999H355.793V5.5ZM369.318 3.5V84H373.318V3.5H369.318ZM371.318 82H355.793V86H371.318V82ZM357.456 82.889L320.426 27.459L317.1 29.681L354.13 85.111L357.456 82.889ZM316.763 28.57V84H320.763V28.57H316.763ZM318.763 82H303.238V86H318.763V82ZM405.762 84H403.762V86H405.762V84ZM405.762 16.035H407.762V14.035H405.762V16.035ZM382.187 16.035H380.187V18.035H382.187V16.035ZM382.187 3.5V1.49999H380.187V3.5H382.187ZM444.632 3.5H446.632V1.49999H444.632V3.5ZM444.632 16.035V18.035H446.632V16.035H444.632ZM421.172 16.035V14.035H419.172V16.035H421.172ZM421.172 84V86H423.172V84H421.172ZM407.762 84V16.035H403.762V84H407.762ZM405.762 14.035H382.187V18.035H405.762V14.035ZM384.187 16.035V3.5H380.187V16.035H384.187ZM382.187 5.5H444.632V1.49999H382.187V5.5ZM442.632 3.5V16.035H446.632V3.5H442.632ZM444.632 14.035H421.172V18.035H444.632V14.035ZM419.172 16.035V84H423.172V16.035H419.172ZM421.172 82H405.762V86H421.172V82ZM455.635 84H453.635V86H455.635V84ZM455.635 3.5V1.49999H453.635V3.5H455.635ZM501.75 6.835L500.817 8.60414L501.75 6.835ZM511.18 15.805L509.429 16.7702L509.433 16.7779L509.437 16.7855L511.18 15.805ZM511.295 40.185L513.054 41.1376L513.058 41.13L513.062 41.1224L511.295 40.185ZM501.865 49.155L502.798 50.9242L502.81 50.918L501.865 49.155ZM471.16 52.49V50.49H469.16V52.49H471.16ZM471.16 84V86H473.16V84H471.16ZM497.38 84L495.568 84.8471L496.107 86H497.38V84ZM480.82 48.58V46.58H477.677L479.008 49.4271L480.82 48.58ZM497.61 48.58L499.404 47.6949L498.853 46.58H497.61V48.58ZM515.09 84V86H518.307L516.884 83.1149L515.09 84ZM471.16 41.22H469.16V43.22H471.16V41.22ZM495.08 37.77L496.518 39.16L495.08 37.77ZM495.08 19.83L493.641 21.2192L493.666 21.2444L493.691 21.2688L495.08 19.83ZM471.16 16.495V14.495H469.16V16.495H471.16ZM457.635 84V3.5H453.635V84H457.635ZM455.635 5.5H485.65V1.49999H455.635V5.5ZM485.65 5.5C491.955 5.5 496.974 6.57775 500.817 8.60414L502.683 5.06586C498.093 2.64558 492.378 1.49999 485.65 1.49999V5.5ZM500.817 8.60414C504.728 10.6663 507.568 13.3932 509.429 16.7702L512.932 14.8398C510.653 10.7034 507.205 7.45038 502.683 5.06586L500.817 8.60414ZM509.437 16.7855C511.327 20.1449 512.285 23.9049 512.285 28.11H516.285C516.285 23.2685 515.174 18.8251 512.923 14.8245L509.437 16.7855ZM512.285 28.11C512.285 32.0797 511.367 35.7825 509.529 39.2476L513.062 41.1224C515.21 37.0742 516.285 32.7269 516.285 28.11H512.285ZM509.537 39.2324C507.759 42.5151 504.927 45.2458 500.921 47.392L502.81 50.918C507.39 48.4642 510.845 45.2149 513.054 41.1376L509.537 39.2324ZM500.932 47.3859C497.095 49.4092 492.003 50.49 485.535 50.49V54.49C492.408 54.49 498.202 53.3474 502.798 50.9241L500.932 47.3859ZM485.535 50.49H471.16V54.49H485.535V50.49ZM469.16 52.49V84H473.16V52.49H469.16ZM471.16 82H455.635V86H471.16V82ZM499.192 83.1529L482.632 47.7329L479.008 49.4271L495.568 84.8471L499.192 83.1529ZM480.82 50.58H497.61V46.58H480.82V50.58ZM495.817 49.4651L513.297 84.8851L516.884 83.1149L499.404 47.6949L495.817 49.4651ZM515.09 82H497.38V86H515.09V82ZM471.16 43.22H484.73V39.22H471.16V43.22ZM484.73 43.22C489.698 43.22 493.773 41.9996 496.518 39.16L493.642 36.38C491.94 38.1404 489.116 39.22 484.73 39.22V43.22ZM496.518 39.16C499.164 36.4228 500.415 32.8634 500.415 28.685H496.415C496.415 32.0199 495.443 34.5172 493.642 36.38L496.518 39.16ZM500.415 28.685C500.415 24.5111 499.165 20.9937 496.469 18.3912L493.691 21.2688C495.442 22.9596 496.415 25.3456 496.415 28.685H500.415ZM496.519 18.4408C493.834 15.6601 489.739 14.495 484.73 14.495V18.495C489.228 18.495 492.033 19.5532 493.641 21.2192L496.519 18.4408ZM484.73 14.495H471.16V18.495H484.73V14.495ZM469.16 16.495V41.22H473.16V16.495H469.16ZM522.779 84L520.901 83.3131L519.918 86H522.779V84ZM552.219 3.5V1.49999H550.821L550.341 2.81306L552.219 3.5ZM569.814 3.5L571.693 2.81543L571.214 1.49999H569.814V3.5ZM599.139 84V86H601.996L601.018 83.3154L599.139 84ZM582.694 84L580.804 84.6542L581.27 86H582.694V84ZM560.959 21.21L562.849 20.5558L560.964 15.1103L559.07 20.5527L560.959 21.21ZM539.109 84V86H540.531L540.998 84.6573L539.109 84ZM535.774 65.715L533.882 65.0664L532.974 67.715H535.774V65.715ZM539.914 53.64V51.64H538.485L538.022 52.9913L539.914 53.64ZM580.854 53.64L582.751 53.0075L582.296 51.64H580.854V53.64ZM584.879 65.715V67.715H587.654L586.776 65.0825L584.879 65.715ZM524.657 84.6869L554.097 4.18693L550.341 2.81306L520.901 83.3131L524.657 84.6869ZM552.219 5.5H569.814V1.49999H552.219V5.5ZM567.935 4.18456L597.26 84.6846L601.018 83.3154L571.693 2.81543L567.935 4.18456ZM599.139 82H582.694V86H599.139V82ZM584.584 83.3458L562.849 20.5558L559.069 21.8642L580.804 84.6542L584.584 83.3458ZM559.07 20.5527L537.22 83.3427L540.998 84.6573L562.848 21.8673L559.07 20.5527ZM539.109 82H522.779V86H539.109V82ZM537.666 66.3636L541.806 54.2887L538.022 52.9913L533.882 65.0664L537.666 66.3636ZM539.914 55.64H580.854V51.64H539.914V55.64ZM578.957 54.2725L582.982 66.3475L586.776 65.0825L582.751 53.0075L578.957 54.2725ZM584.879 63.715H535.774V67.715H584.879V63.715ZM609.717 84H607.717V86H609.717V84ZM609.717 3.5V1.49999H607.717V3.5H609.717ZM625.242 3.5H627.242V1.49999H625.242V3.5ZM625.242 71.925H623.242V73.925H625.242V71.925ZM660.547 71.925H662.547V69.925H660.547V71.925ZM660.547 84V86H662.547V84H660.547ZM611.717 84V3.5H607.717V84H611.717ZM609.717 5.5H625.242V1.49999H609.717V5.5ZM623.242 3.5V71.925H627.242V3.5H623.242ZM625.242 73.925H660.547V69.925H625.242V73.925ZM658.547 71.925V84H662.547V71.925H658.547ZM660.547 82H609.717V86H660.547V82ZM673.843 84H671.843V86H673.843V84ZM673.843 3.5V1.49999H671.843V3.5H673.843ZM689.368 3.5H691.368V1.49999H689.368V3.5ZM689.368 84V86H691.368V84H689.368ZM675.843 84V3.5H671.843V84H675.843ZM673.843 5.5H689.368V1.49999H673.843V5.5ZM687.368 3.5V84H691.368V3.5H687.368ZM689.368 82H673.843V86H689.368V82ZM702.876 84H700.876V86H702.876V84ZM702.876 72.04L701.213 70.9298L700.876 71.4339V72.04H702.876ZM740.021 16.38L741.685 17.4902L743.76 14.38H740.021V16.38ZM703.106 16.38H701.106V18.38H703.106V16.38ZM703.106 3.5V1.49999H701.106V3.5H703.106ZM757.846 3.5H759.846V1.49999H757.846V3.5ZM757.846 15.46L759.508 16.5726L759.846 16.0676V15.46H757.846ZM720.586 71.12L718.924 70.0074L716.841 73.12H720.586V71.12ZM758.076 71.12H760.076V69.12H758.076V71.12ZM758.076 84V86H760.076V84H758.076ZM704.876 84V72.04H700.876V84H704.876ZM704.54 73.1502L741.685 17.4902L738.358 15.2698L701.213 70.9298L704.54 73.1502ZM740.021 14.38H703.106V18.38H740.021V14.38ZM705.106 16.38V3.5H701.106V16.38H705.106ZM703.106 5.5H757.846V1.49999H703.106V5.5ZM755.846 3.5V15.46H759.846V3.5H755.846ZM756.184 14.3474L718.924 70.0074L722.248 72.2326L759.508 16.5726L756.184 14.3474ZM720.586 73.12H758.076V69.12H720.586V73.12ZM756.076 71.12V84H760.076V71.12H756.076ZM758.076 82H702.876V86H758.076V82ZM766.143 84L764.265 83.3131L763.282 86H766.143V84ZM795.583 3.5V1.49999H794.185L793.705 2.81306L795.583 3.5ZM813.178 3.5L815.057 2.81543L814.578 1.49999H813.178V3.5ZM842.503 84V86H845.36L844.383 83.3154L842.503 84ZM826.058 84L824.168 84.6542L824.634 86H826.058V84ZM804.323 21.21L806.213 20.5558L804.328 15.1103L802.434 20.5527L804.323 21.21ZM782.473 84V86H783.895L784.362 84.6573L782.473 84ZM779.138 65.715L777.246 65.0664L776.338 67.715H779.138V65.715ZM783.278 53.64V51.64H781.85L781.386 52.9913L783.278 53.64ZM824.218 53.64L826.116 53.0075L825.66 51.64H824.218V53.64ZM828.243 65.715V67.715H831.018L830.141 65.0825L828.243 65.715ZM768.022 84.6869L797.462 4.18693L793.705 2.81306L764.265 83.3131L768.022 84.6869ZM795.583 5.5H813.178V1.49999H795.583V5.5ZM811.299 4.18456L840.624 84.6846L844.383 83.3154L815.057 2.81543L811.299 4.18456ZM842.503 82H826.058V86H842.503V82ZM827.948 83.3458L806.213 20.5558L802.433 21.8642L824.168 84.6542L827.948 83.3458ZM802.434 20.5527L780.584 83.3427L784.362 84.6573L806.212 21.8673L802.434 20.5527ZM782.473 82H766.143V86H782.473V82ZM781.03 66.3636L785.17 54.2887L781.386 52.9913L777.246 65.0664L781.03 66.3636ZM783.278 55.64H824.218V51.64H783.278V55.64ZM822.321 54.2725L826.346 66.3475L830.141 65.0825L826.116 53.0075L822.321 54.2725ZM828.243 63.715H779.138V67.715H828.243V63.715ZM863.291 84H861.291V86H863.291V84ZM863.291 16.035H865.291V14.035H863.291V16.035ZM839.716 16.035H837.716V18.035H839.716V16.035ZM839.716 3.5V1.49999H837.716V3.5H839.716ZM902.161 3.5H904.161V1.49999H902.161V3.5ZM902.161 16.035V18.035H904.161V16.035H902.161ZM878.701 16.035V14.035H876.701V16.035H878.701ZM878.701 84V86H880.701V84H878.701ZM865.291 84V16.035H861.291V84H865.291ZM863.291 14.035H839.716V18.035H863.291V14.035ZM841.716 16.035V3.5H837.716V16.035H841.716ZM839.716 5.5H902.161V1.49999H839.716V5.5ZM900.161 3.5V16.035H904.161V3.5H900.161ZM902.161 14.035H878.701V18.035H902.161V14.035ZM876.701 16.035V84H880.701V16.035H876.701ZM878.701 82H863.291V86H878.701V82ZM913.164 84H911.164V86H913.164V84ZM913.164 3.5V1.49999H911.164V3.5H913.164ZM928.69 3.5H930.69V1.49999H928.69V3.5ZM928.69 84V86H930.69V84H928.69ZM915.164 84V3.5H911.164V84H915.164ZM913.164 5.5H928.69V1.49999H913.164V5.5ZM926.69 3.5V84H930.69V3.5H926.69ZM928.69 82H913.164V86H928.69V82ZM960.943 80.09L959.927 81.8127L960.943 80.09ZM946.912 65.485L945.15 66.4306L945.155 66.4397L946.912 65.485ZM946.912 22.13L948.67 23.0847L948.675 23.0756L946.912 22.13ZM1002.46 7.41L1001.44 9.13273L1002.46 7.41ZM1016.37 22.13L1014.6 23.0588L1014.61 23.0718L1014.62 23.0847L1016.37 22.13ZM1016.37 65.485L1014.61 64.5394L1014.61 64.5472L1016.37 65.485ZM1002.46 80.09L1001.44 78.3673L1002.46 80.09ZM994.292 68.13L995.359 69.8219L995.369 69.8158L994.292 68.13ZM1002.69 58.47L1004.49 59.3376L1002.69 58.47ZM1002.69 29.03L1000.89 29.8976L1000.89 29.9043L1000.89 29.9108L1002.69 29.03ZM994.292 19.485L993.226 21.1768L993.234 21.182L993.242 21.1871L994.292 19.485ZM968.992 19.485L967.942 17.7829V17.7829L968.992 19.485ZM960.597 29.03L962.393 29.9108L962.396 29.9043L962.399 29.8976L960.597 29.03ZM960.597 58.47L958.795 59.3376L960.597 58.47ZM968.992 68.13L967.916 69.8158L967.929 69.8241L967.942 69.8321L968.992 68.13ZM981.643 83.38C974.134 83.38 967.593 81.6903 961.958 78.3673L959.927 81.8127C966.252 85.543 973.511 87.38 981.643 87.38V83.38ZM961.958 78.3673C956.297 75.0282 951.874 70.4279 948.67 64.5303L945.155 66.4397C948.698 72.9621 953.628 78.0985 959.927 81.8127L961.958 78.3673ZM948.675 64.5394C945.479 58.5844 943.852 51.6732 943.852 43.75H939.852C939.852 52.2335 941.599 59.8122 945.15 66.4306L948.675 64.5394ZM943.852 43.75C943.852 35.8262 945.48 28.9576 948.67 23.0847L945.155 21.1753C941.599 27.7224 939.852 35.2671 939.852 43.75H943.852ZM948.675 23.0756C951.88 17.102 956.303 12.4682 961.958 9.13273L959.927 5.68727C953.622 9.40514 948.691 14.5846 945.15 21.1844L948.675 23.0756ZM961.958 9.13273C967.593 5.80969 974.134 4.12 981.643 4.12V0.119999C973.511 0.119999 966.252 1.95697 959.927 5.68727L961.958 9.13273ZM981.643 4.12C989.232 4.12 995.81 5.81144 1001.44 9.13273L1003.47 5.68727C997.145 1.95523 989.846 0.119999 981.643 0.119999V4.12ZM1001.44 9.13273C1007.09 12.4658 1011.47 17.0941 1014.6 23.0588L1018.14 21.2012C1014.68 14.5925 1009.78 9.40754 1003.47 5.68727L1001.44 9.13273ZM1014.62 23.0847C1017.81 28.9576 1019.43 35.8262 1019.43 43.75H1023.43C1023.43 35.2671 1021.69 27.7224 1018.13 21.1753L1014.62 23.0847ZM1019.43 43.75C1019.43 51.6732 1017.81 58.5844 1014.61 64.5394L1018.13 66.4306C1021.69 59.8122 1023.43 52.2335 1023.43 43.75H1019.43ZM1014.61 64.5472C1011.48 70.4357 1007.1 75.0305 1001.44 78.3673L1003.47 81.8127C1009.78 78.0961 1014.67 72.9543 1018.14 66.4228L1014.61 64.5472ZM1001.44 78.3673C995.81 81.6886 989.232 83.38 981.643 83.38V87.38C989.846 87.38 997.145 85.5448 1003.47 81.8127L1001.44 78.3673ZM981.643 73.465C986.859 73.465 991.46 72.2798 995.359 69.8218L993.226 66.4381C990.071 68.4268 986.24 69.465 981.643 69.465V73.465ZM995.369 69.8158C999.309 67.3008 1002.35 63.7864 1004.49 59.3376L1000.89 57.6024C999.041 61.4336 996.483 64.3592 993.216 66.4442L995.369 69.8158ZM1004.49 59.3376C1006.64 54.871 1007.68 49.6548 1007.68 43.75H1003.68C1003.68 49.1919 1002.72 53.789 1000.89 57.6024L1004.49 59.3376ZM1007.68 43.75C1007.68 37.7748 1006.64 32.5505 1004.48 28.1492L1000.89 29.9108C1002.72 33.6362 1003.68 38.2252 1003.68 43.75H1007.68ZM1004.49 28.1624C1002.35 23.7087 999.299 20.224 995.343 17.7829L993.242 21.1871C996.493 23.1927 999.043 26.0713 1000.89 29.8976L1004.49 28.1624ZM995.359 17.7931C991.46 15.3352 986.859 14.15 981.643 14.15V18.15C986.24 18.15 990.071 19.1882 993.226 21.1768L995.359 17.7931ZM981.643 14.15C976.495 14.15 971.904 15.3386 967.942 17.7829L970.043 21.1871C973.288 19.1848 977.13 18.15 981.643 18.15V14.15ZM967.942 17.7829C963.986 20.224 960.94 23.7087 958.795 28.1624L962.399 29.8976C964.242 26.0713 966.792 23.1927 970.043 21.1871L967.942 17.7829ZM958.802 28.1491C956.643 32.5505 955.607 37.7748 955.607 43.75H959.607C959.607 38.2252 960.566 33.6362 962.393 29.9108L958.802 28.1491ZM955.607 43.75C955.607 49.6548 956.645 54.871 958.795 59.3376L962.399 57.6024C960.563 53.789 959.607 49.1919 959.607 43.75H955.607ZM958.795 59.3376C960.938 63.7864 963.976 67.3008 967.916 69.8158L970.069 66.4442C966.802 64.3592 964.244 61.4336 962.399 57.6024L958.795 59.3376ZM967.942 69.8321C971.904 72.2764 976.495 73.465 981.643 73.465V69.465C977.13 69.465 973.288 68.4302 970.043 66.4279L967.942 69.8321ZM1034.68 84H1032.68V86H1034.68V84ZM1034.68 3.5V1.49999H1032.68V3.5H1034.68ZM1050.2 3.5L1051.87 2.39059L1051.27 1.49999H1050.2V3.5ZM1087.23 59.045L1085.57 60.1544L1089.23 65.6506V59.045H1087.23ZM1087.23 3.5V1.49999H1085.23V3.5H1087.23ZM1102.76 3.5H1104.76V1.49999H1102.76V3.5ZM1102.76 84V86H1104.76V84H1102.76ZM1087.23 84L1085.57 85.111L1086.16 86H1087.23V84ZM1050.2 28.57L1051.87 27.459L1048.2 21.9758V28.57H1050.2ZM1050.2 84V86H1052.2V84H1050.2ZM1036.68 84V3.5H1032.68V84H1036.68ZM1034.68 5.5H1050.2V1.49999H1034.68V5.5ZM1048.54 4.60939L1085.57 60.1544L1088.9 57.9356L1051.87 2.39059L1048.54 4.60939ZM1089.23 59.045V3.5H1085.23V59.045H1089.23ZM1087.23 5.5H1102.76V1.49999H1087.23V5.5ZM1100.76 3.5V84H1104.76V3.5H1100.76ZM1102.76 82H1087.23V86H1102.76V82ZM1088.9 82.889L1051.87 27.459L1048.54 29.681L1085.57 85.111L1088.9 82.889ZM1048.2 28.57V84H1052.2V28.57H1048.2ZM1050.2 82H1034.68V86H1050.2V82Z" fill="white" mask="url(#path-1-outside-1_146_439)"/>
</svg>

        </div>
        <div className="py-10 flex flex-col gap-4 w-full items-center text-center">
          <p className="heading">The Backbone of Our Decentralized Network</p>
          <p className="w-2/3 para max-sm:w-full text-center px-4 py-2 rounded-xl border border-[#004AAD] boxShadow">
          Step into the future with ASS I AM, where transparency, security, and fairness aren't just features
          — they're the foundation.    
          </p>
        </div>
        <div className="w-full para pr-8">
          <p className="w-1/2 max-sm:w-full">
            Nodes are the foundation of ASS I AM, powering the decentralized
            network that drives our vision. These independent systems work
            together to ensure the stability, security, and efficiency of the
            platform. By eliminating reliance on centralized systems nodes make
            the centralized systems, nodes make the network more robust,
            resilient, and adaptable.
          </p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <GradientText
                                colors={["#ffffff", "#ffffff", "#ffffff", "#3570bf", "#004aad", "#3570bf", "#ffffff", "#ffffff", "#ffffff"]}
                                animationSpeed={7}
                                showBorder={false}
                                className="heading"
                              >
          <h3 className="heading">Why Decentralization is Essential</h3>
                              </GradientText>
          <p className="para">
            Decentralization is at the heart of our mission. By distributing
            data and tasks across multiple nodes, we eliminate the
            vulnerabilities of centralized platforms, ensuring:
          </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="para flex gap-2 items-start">
              <FaCircle className="text-xs" />
              <b>No Singal Point of Failure:</b> The network remians operational
              even if one node goes offline.
            </p>
            <p className="para flex gap-2 items-start">
              <FaCircle className="text-xs" />
              <b className="max-sm:mr-4">Enhanced Security:</b> Decentralized
              data storage signficantly reduces the risk of attack.
            </p>
            <p className="para flex gap-2 items-start">
              <FaCircle className="text-xs" />
              <b className="max-sm:mr-2">Resilience and Scalability:</b> The
              system evolves and adapts seamlessly to the growing needs of the
              community.
            </p>
          </div>
          <p className="para my-4">
            This decentralized approach guarantees that ASS I AM delivers a
            reliable, transparent, and secure platform for creators, users, and
            supporters alike.
          </p>
          <h5 className="text-2xl font-medium">Types of Nodes in ASS I AM</h5>
          <p className="para my-4">
            To support the diverse needs of our expanding ecosystem, ASS I AM
            introduces two key types of nodes:
          </p>
          <div className="w-full flex max-md:flex-col max-sm:gap-12 gap-24 justify-center py-12">
            <div className="w-80 h-96 max-sm:w-full  bg-gradient-to-b from-[#004AAD] to-black rounded-tr-[5rem] flex flex-col items-center p-6 gap-6">
              <Image
                src="./fa_bank.svg"
                width={150}
                height={150}
                alt="bank_svg"
              />
              <h5 className="text-2xl font-medium pt-2 text-center w-full border-t-2 border-[#004AAD]">
                Founder Nodes
              </h5>
              <p className="para">
                The cornerstone of the network, forming the essential foundation
                for scalability and functionality.
              </p>
            </div>
            <div className="w-80 h-96 max-sm:w-full bg-gradient-to-b from-[#004AAD] to-black rounded-tl-[5rem] flex flex-col items-center p-6 gap-6">
              <Image
                src="./clarity_clipboard-line.svg"
                width={150}
                height={150}
                alt="clipboard"
              />
              <h5 className="text-2xl font-medium pt-2 text-center w-full border-t-2 border-[#004AAD]">
                Specialized Nodes
              </h5>
              <p className="para">
                Future nodes designed to handle specific tasks, such as content,
                interaction, or gaming.
              </p>
            </div>
          </div>
          <div className="w-full flex-col flex gap-6">
          <div className="w-full flex flex-col gap-6">
          <GradientText
                                colors={["#ffffff", "#ffffff", "#ffffff", "#3570bf", "#004aad", "#3570bf", "#ffffff", "#ffffff", "#ffffff"]}
                                animationSpeed={7}
                                showBorder={false}
                                className="heading"
                              >
            <h5 className="text-2xl font-medium">Supporting the Vision</h5>
                              </GradientText>
            <p className="para">
              Owning a node isn’t an <b>investment</b> — it’s a{" "}
              <b>voluntary commitment</b> to driving <b>decentralization</b> and{" "}
              <b>innovation</b>. It’s more than running infrastructure; it’s
              about building a platform rooted in <b>fairness</b>,{" "}
              <b>transparency</b>, and <b>community empowerment.</b> As a node
              operator, you play a crucial <b>role</b> in keeping the system{" "}
              <b>adaptable</b> and future proof, creating a space where{" "}
              <b>creators</b>, users, and contributors can thrive together.
              together. This isn’t speculation—it’s about fostering{" "}
              <b>meaningful change</b> and supporting an{" "}
              <b>adult entertainment platform</b> that puts its community first.
            </p>
            <p className="heading w-full text-center py-12">
              Join the movement. Support the vision,Be part of something
              revolutionary.
            </p>
            <div className="flex max-md:flex-col gap-8 w-full">
              <div className="w-2/3 max-md:w-full max-sm:h-auto flex max-md:items-center max-sm:text-center flex-col gap-6 py-6 px-10 bg-[#FF8730] rounded-xl">
                <div>
                  <span className="px-6 py-1 border border-white rounded-full">
                    Nodes
                  </span>
                </div>
                <h5 className="text-xl font-semibold">Get your Node Now</h5>
                <p>
                  Transform your home computer into a power ASS I AM Network
                  node. Secure your Node today for exclusive rewards like tokens
                  and rare NFTs. Enhance our platform's transparency, security,
                  and performance, whilst supporting thefuture of adult
                  entertainment and technology. Join us now and make a real
                  impact!
                </p>
                <div>
                  <Link href={"/BuyNodes"}>
                    <button className="px-4 cursor-pointer py-1  bg-black border border-[#004AAD] rounded-full">
                      Get a Node
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 h-80 max-md:w-full max-sm:h-auto max-md:items-center max-sm:text-center flex flex-col gap-6 p-6 items-center bg-gradient-to-r from-[#0C13C1] to-black rounded-xl">
                <span className="px-6 py-1 border border-white rounded-full">
                  Nodes
                </span>
                <h5 className="text-xl font-semibold w-full">
                  Discover the ASS I AM
                </h5>
                <p className="w-full ">
                  By becoming a ASS I AM Node Operator, you join an elite group
                  pf enthusiasts dedicated tp building a better future fpr adult
                  entertainment.
                </p>
                <div className="pt-6">
                  <button className="px-4 cursor-pointer py-1 bg-black border border-[#004AAD] rounded-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StayInLoop />
        <Footer />
      </section>
    </>
  );
}

export default page;
