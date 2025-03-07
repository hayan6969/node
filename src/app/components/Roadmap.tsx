"use client";
import React from "react";
import Image from "next/image";
import RoadmapAnimation from "./RoadmapAnimation";
import { motion } from "framer-motion";
function Roadmap() {
  return (
    <>
      <div className="p-10 md:p-20 max-sm:px-3 bg-[#080808] mt-56 flex flex-col items-center relative before:w-96 before:h-96 before:blur-3xl before:absolute before:bg-[#CFB145] before:rounded-full before:bg-opacity-15 before:top-96 before:translate-y-44 before:left-0 before:-translate-x-1/3 after:-right-0 after:translate-x-1/3 after:-top-10 after:w-96 after:h-96 after:blur-3xl after:absolute after:bg-[#cf9f45] after:rounded-full z-10 after:bg-opacity-15 after:mt-4">
        <h1 className="text-7xl max-md:text-4xl max-xl:text-5xl max-lg:text-4xl  font-semibold relative z-20 text-center">
        <svg width="auto" height="100" viewBox="0 0 432 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-8 max-sm:bottom-16 max-sm:-left-0 -left-8">
<mask id="path-1-outside-1_3_62" maskUnits="userSpaceOnUse" x="0" y="0" width="432" height="120" fill="black">
<rect fill="white" width="432" height="120"/>
<path d="M2.04 116V3.99999H43.8C52.8667 3.99999 60.3333 5.54666 66.2 8.64C72.0667 11.7333 76.44 15.8933 79.32 21.12C82.2 26.24 83.64 31.9467 83.64 38.24C83.64 44.2133 82.2533 49.8133 79.48 55.04C76.7067 60.16 72.3333 64.32 66.36 67.52C60.4933 70.6133 52.92 72.16 43.64 72.16H23.64V116H2.04ZM60.12 116L37.08 66.72H60.44L84.76 116H60.12ZM23.64 56.48H42.52C49.0267 56.48 53.8267 54.88 56.92 51.68C60.0133 48.48 61.56 44.2667 61.56 39.04C61.56 33.8133 60.0133 29.7067 56.92 26.72C53.9333 23.6267 49.1333 22.08 42.52 22.08H23.64V56.48ZM154.658 117.92C143.778 117.92 134.178 115.467 125.858 110.56C117.538 105.653 111.031 98.88 106.338 90.24C101.644 81.4933 99.2975 71.4133 99.2975 60C99.2975 48.5867 101.644 38.56 106.338 29.92C111.031 21.1733 117.538 14.3467 125.858 9.44C134.178 4.53333 143.778 2.08 154.658 2.08C165.644 2.08 175.298 4.53333 183.618 9.44C191.938 14.3467 198.391 21.1733 202.978 29.92C207.671 38.56 210.018 48.5867 210.018 60C210.018 71.4133 207.671 81.4933 202.978 90.24C198.391 98.88 191.938 105.653 183.618 110.56C175.298 115.467 165.644 117.92 154.658 117.92ZM154.658 98.56C161.484 98.56 167.351 97.0133 172.258 93.92C177.271 90.72 181.164 86.24 183.938 80.48C186.711 74.72 188.098 67.8933 188.098 60C188.098 52 186.711 45.1733 183.938 39.52C181.164 33.76 177.271 29.3333 172.258 26.24C167.351 23.1467 161.484 21.6 154.658 21.6C147.938 21.6 142.071 23.1467 137.058 26.24C132.044 29.3333 128.151 33.76 125.378 39.52C122.604 45.1733 121.218 52 121.218 60C121.218 67.8933 122.604 74.72 125.378 80.48C128.151 86.24 132.044 90.72 137.058 93.92C142.071 97.0133 147.938 98.56 154.658 98.56ZM213.895 116L254.855 3.99999H279.335L320.135 116H297.255L267.015 28.64L236.615 116H213.895ZM231.975 90.56L237.735 73.76H294.695L300.295 90.56H231.975ZM334.853 116V3.99999H372.293C385.306 3.99999 396.026 6.34666 404.453 11.04C412.986 15.6267 419.279 22.1333 423.333 30.56C427.493 38.88 429.573 48.6933 429.573 60C429.573 71.3067 427.493 81.1733 423.333 89.6C419.279 97.92 413.039 104.427 404.612 109.12C396.186 113.707 385.413 116 372.293 116H334.853ZM356.453 97.44H371.173C380.346 97.44 387.546 95.9467 392.773 92.96C398.106 89.9733 401.893 85.7067 404.133 80.16C406.373 74.5067 407.493 67.7867 407.493 60C407.493 52.1067 406.373 45.3867 404.133 39.84C401.893 34.1867 398.106 29.8667 392.773 26.88C387.546 23.8933 380.346 22.4 371.173 22.4H356.453V97.44Z"/>
</mask>
<path d="M2.04 116H0.0400009V118H2.04V116ZM2.04 3.99999V1.99999H0.0400009V3.99999H2.04ZM66.2 8.64L65.2672 10.4091L66.2 8.64ZM79.32 21.12L77.5683 22.0852L77.5726 22.0929L77.5769 22.1005L79.32 21.12ZM79.48 55.04L81.2386 55.9926L81.2427 55.985L81.2467 55.9774L79.48 55.04ZM66.36 67.52L67.2928 69.2892L67.3044 69.283L66.36 67.52ZM23.64 72.16V70.16H21.64V72.16H23.64ZM23.64 116V118H25.64V116H23.64ZM60.12 116L58.3082 116.847L58.8473 118H60.12V116ZM37.08 66.72V64.72H33.9371L35.2682 67.5671L37.08 66.72ZM60.44 66.72L62.2335 65.8349L61.6833 64.72H60.44V66.72ZM84.76 116V118H87.9773L86.5535 115.115L84.76 116ZM23.64 56.48H21.64V58.48H23.64V56.48ZM56.92 51.68L58.358 53.07L56.92 51.68ZM56.92 26.72L55.4812 28.1092L55.5056 28.1344L55.5308 28.1588L56.92 26.72ZM23.64 22.08V20.08H21.64V22.08H23.64ZM4.04 116V3.99999H0.0400009V116H4.04ZM2.04 5.99999H43.8V1.99999H2.04V5.99999ZM43.8 5.99999C52.6551 5.99999 59.774 7.51275 65.2672 10.4091L67.1328 6.87086C60.8926 3.58057 53.0782 1.99999 43.8 1.99999V5.99999ZM65.2672 10.4091C70.8281 13.3413 74.8976 17.2382 77.5683 22.0852L81.0717 20.1548C77.9825 14.5484 73.3052 10.1254 67.1328 6.87086L65.2672 10.4091ZM77.5769 22.1005C80.2765 26.8999 81.64 32.2648 81.64 38.24H85.64C85.64 31.6285 84.1235 25.5801 81.0632 20.1395L77.5769 22.1005ZM81.64 38.24C81.64 43.8897 80.3319 49.1675 77.7133 54.1026L81.2467 55.9774C84.1748 50.4592 85.64 44.5369 85.64 38.24H81.64ZM77.7214 54.0874C75.1633 58.8101 71.1019 62.7108 65.4156 65.757L67.3044 69.283C73.5648 65.9292 78.25 61.5099 81.2386 55.9926L77.7214 54.0874ZM65.4272 65.7509C59.9397 68.6442 52.7174 70.16 43.64 70.16V74.16C53.1226 74.16 61.0469 72.5824 67.2928 69.2891L65.4272 65.7509ZM43.64 70.16H23.64V74.16H43.64V70.16ZM21.64 72.16V116H25.64V72.16H21.64ZM23.64 114H2.04V118H23.64V114ZM61.9318 115.153L38.8918 65.8729L35.2682 67.5671L58.3082 116.847L61.9318 115.153ZM37.08 68.72H60.44V64.72H37.08V68.72ZM58.6465 67.6051L82.9665 116.885L86.5535 115.115L62.2335 65.8349L58.6465 67.6051ZM84.76 114H60.12V118H84.76V114ZM23.64 58.48H42.52V54.48H23.64V58.48ZM42.52 58.48C49.3175 58.48 54.743 56.8096 58.358 53.07L55.482 50.29C52.9103 52.9504 48.7358 54.48 42.52 54.48V58.48ZM58.358 53.07C61.874 49.4328 63.56 44.6884 63.56 39.04H59.56C59.56 43.8449 58.1527 47.5272 55.482 50.29L58.358 53.07ZM63.56 39.04C63.56 33.3961 61.8747 28.7237 58.3092 25.2812L55.5308 28.1588C58.152 30.6896 59.56 34.2306 59.56 39.04H63.56ZM58.3588 25.3308C54.834 21.6801 49.3888 20.08 42.52 20.08V24.08C48.8779 24.08 53.0327 25.5732 55.4812 28.1092L58.3588 25.3308ZM42.52 20.08H23.64V24.08H42.52V20.08ZM21.64 22.08V56.48H25.64V22.08H21.64ZM125.857 110.56L124.842 112.283L125.857 110.56ZM106.338 90.24L104.575 91.1856L104.58 91.1947L106.338 90.24ZM106.338 29.92L108.095 30.8747L108.1 30.8656L106.338 29.92ZM183.618 9.44L182.602 11.1627L183.618 9.44ZM202.978 29.92L201.206 30.8488L201.213 30.8618L201.22 30.8747L202.978 29.92ZM202.978 90.24L201.215 89.2944L201.211 89.3022L202.978 90.24ZM183.618 110.56L182.602 108.837L183.618 110.56ZM172.258 93.92L173.324 95.6119L173.334 95.6058L172.258 93.92ZM183.938 80.48L185.74 81.3476L183.938 80.48ZM183.938 39.52L182.135 40.3876L182.139 40.3942L182.142 40.4008L183.938 39.52ZM172.258 26.24L171.191 27.9318L171.199 27.937L171.207 27.9421L172.258 26.24ZM137.057 26.24L136.007 24.5379H136.007L137.057 26.24ZM125.378 39.52L127.173 40.4008L127.176 40.3942L127.18 40.3876L125.378 39.52ZM125.378 80.48L123.576 81.3476L125.378 80.48ZM137.057 93.92L135.981 95.6058L135.994 95.6141L136.007 95.6221L137.057 93.92ZM154.658 115.92C144.089 115.92 134.848 113.54 126.873 108.837L124.842 112.283C133.507 117.393 143.466 119.92 154.658 119.92V115.92ZM126.873 108.837C118.872 104.118 112.619 97.6129 108.095 89.2853L104.58 91.1947C109.443 100.147 116.203 107.189 124.842 112.283L126.873 108.837ZM108.1 89.2944C103.584 80.8794 101.298 71.1332 101.298 60H97.2975C97.2975 71.6935 99.7038 82.1072 104.575 91.1856L108.1 89.2944ZM101.298 60C101.298 48.8662 103.585 39.1776 108.095 30.8747L104.58 28.9653C99.7036 37.9424 97.2975 48.3071 97.2975 60H101.298ZM108.1 30.8656C112.625 22.432 118.878 15.8782 126.873 11.1627L124.842 7.71727C116.197 12.8151 109.436 19.9146 104.575 28.9744L108.1 30.8656ZM126.873 11.1627C134.848 6.45969 144.089 4.08 154.658 4.08V0.079998C143.466 0.079998 133.507 2.60698 124.842 7.71727L126.873 11.1627ZM154.658 4.08C165.337 4.08 174.63 6.46144 182.602 11.1627L184.633 7.71727C175.965 2.60523 165.951 0.079998 154.658 0.079998V4.08ZM182.602 11.1627C190.593 15.8758 196.788 22.4241 201.206 30.8488L204.749 28.9912C199.993 19.9225 193.282 12.8175 184.633 7.71727L182.602 11.1627ZM201.22 30.8747C205.73 39.1776 208.018 48.8662 208.018 60H212.018C212.018 48.3071 209.611 37.9424 204.735 28.9653L201.22 30.8747ZM208.018 60C208.018 71.1332 205.731 80.8794 201.215 89.2944L204.74 91.1856C209.611 82.1072 212.018 71.6935 212.018 60H208.018ZM201.211 89.3022C196.795 97.6207 190.6 104.121 182.602 108.837L184.633 112.283C193.276 107.186 199.987 100.139 204.744 91.1778L201.211 89.3022ZM182.602 108.837C174.63 113.539 165.337 115.92 154.658 115.92V119.92C165.951 119.92 175.965 117.395 184.633 112.283L182.602 108.837ZM154.658 100.56C161.794 100.56 168.045 98.9398 173.324 95.6118L171.191 92.2281C166.656 95.0868 161.174 96.56 154.658 96.56V100.56ZM173.334 95.6058C178.684 92.1908 182.817 87.4164 185.74 81.3476L182.135 79.6124C179.511 85.0636 175.858 89.2492 171.181 92.2342L173.334 95.6058ZM185.74 81.3476C188.67 75.261 190.098 68.1248 190.098 60H186.098C186.098 67.6619 184.752 74.179 182.135 79.6124L185.74 81.3476ZM190.098 60C190.098 51.7748 188.672 44.6305 185.733 38.6391L182.142 40.4008C184.749 45.7161 186.098 52.2252 186.098 60H190.098ZM185.74 38.6524C182.815 32.5787 178.674 27.849 173.308 24.5379L171.207 27.9421C175.868 30.8177 179.513 34.9413 182.135 40.3876L185.74 38.6524ZM173.324 24.5481C168.045 21.2202 161.794 19.6 154.658 19.6V23.6C161.174 23.6 166.656 25.0732 171.191 27.9318L173.324 24.5481ZM154.658 19.6C147.62 19.6 141.379 21.2236 136.007 24.5379L138.108 27.9421C142.763 25.0698 148.255 23.6 154.658 23.6V19.6ZM136.007 24.5379C130.641 27.849 126.5 32.5787 123.576 38.6524L127.18 40.3876C129.802 34.9413 133.447 30.8177 138.108 27.9421L136.007 24.5379ZM123.582 38.6391C120.643 44.6305 119.217 51.7748 119.217 60H123.217C123.217 52.2252 124.566 45.7161 127.173 40.4008L123.582 38.6391ZM119.217 60C119.217 68.1248 120.645 75.261 123.576 81.3476L127.18 79.6124C124.563 74.179 123.217 67.6619 123.217 60H119.217ZM123.576 81.3476C126.498 87.4164 130.631 92.1908 135.981 95.6058L138.134 92.2342C133.457 89.2492 129.804 85.0636 127.18 79.6124L123.576 81.3476ZM136.007 95.6221C141.379 98.9364 147.62 100.56 154.658 100.56V96.56C148.255 96.56 142.763 95.0902 138.108 92.2179L136.007 95.6221ZM213.895 116L212.017 115.313L211.034 118H213.895V116ZM254.855 3.99999V1.99999H253.457L252.977 3.31306L254.855 3.99999ZM279.335 3.99999L281.214 3.31543L280.735 1.99999H279.335V3.99999ZM320.135 116V118H322.992L322.014 115.315L320.135 116ZM297.255 116L295.365 116.654L295.831 118H297.255V116ZM267.015 28.64L268.905 27.9858L267.02 22.5403L265.126 27.9827L267.015 28.64ZM236.615 116V118H238.037L238.504 116.657L236.615 116ZM231.975 90.56L230.083 89.9113L229.175 92.56H231.975V90.56ZM237.735 73.76V71.76H236.306L235.843 73.1114L237.735 73.76ZM294.695 73.76L296.592 73.1275L296.137 71.76H294.695V73.76ZM300.295 90.56V92.56H303.07L302.192 89.9275L300.295 90.56ZM215.773 116.687L256.733 4.68692L252.977 3.31306L212.017 115.313L215.773 116.687ZM254.855 5.99999H279.335V1.99999H254.855V5.99999ZM277.456 4.68456L318.256 116.685L322.014 115.315L281.214 3.31543L277.456 4.68456ZM320.135 114H297.255V118H320.135V114ZM299.145 115.346L268.905 27.9858L265.125 29.2942L295.365 116.654L299.145 115.346ZM265.126 27.9827L234.726 115.343L238.504 116.657L268.904 29.2973L265.126 27.9827ZM236.615 114H213.895V118H236.615V114ZM233.867 91.2086L239.627 74.4086L235.843 73.1114L230.083 89.9113L233.867 91.2086ZM237.735 75.76H294.695V71.76H237.735V75.76ZM292.798 74.3925L298.398 91.1925L302.192 89.9275L296.592 73.1275L292.798 74.3925ZM300.295 88.56H231.975V92.56H300.295V88.56ZM334.853 116H332.853V118H334.853V116ZM334.853 3.99999V1.99999H332.853V3.99999H334.853ZM404.453 11.04L403.479 12.7873L403.492 12.7946L403.506 12.8016L404.453 11.04ZM423.333 30.56L421.53 31.4269L421.537 31.4407L421.544 31.4544L423.333 30.56ZM423.333 89.6L421.539 88.7146L421.535 88.7241L423.333 89.6ZM404.612 109.12L405.569 110.877L405.577 110.872L405.586 110.867L404.612 109.12ZM356.453 97.44H354.453V99.44H356.453V97.44ZM392.772 92.96L391.795 91.215L391.788 91.2192L391.78 91.2235L392.772 92.96ZM404.133 80.16L405.987 80.9089L405.992 80.8967L404.133 80.16ZM404.133 39.84L402.273 40.5767L402.278 40.5889L404.133 39.84ZM392.772 26.88L391.78 28.6165L391.788 28.6208L391.795 28.625L392.772 26.88ZM356.453 22.4V20.4H354.453V22.4H356.453ZM336.853 116V3.99999H332.853V116H336.853ZM334.853 5.99999H372.293V1.99999H334.853V5.99999ZM372.293 5.99999C385.079 5.99999 395.436 8.30753 403.479 12.7873L405.426 9.29273C396.615 4.38579 385.532 1.99999 372.293 1.99999V5.99999ZM403.506 12.8016C411.681 17.1958 417.667 23.3959 421.53 31.4269L425.135 29.693C420.891 20.8708 414.291 14.0576 405.399 9.27835L403.506 12.8016ZM421.544 31.4544C425.538 39.4432 427.573 48.9379 427.573 60H431.573C431.573 48.4488 429.447 38.3168 425.121 29.6656L421.544 31.4544ZM427.573 60C427.573 71.0612 425.538 80.6137 421.539 88.7147L425.126 90.4853C429.447 81.7329 431.573 71.5521 431.573 60H427.573ZM421.535 88.7241C417.668 96.6599 411.724 102.87 403.639 107.373L405.586 110.867C414.354 105.984 420.89 99.1801 425.13 90.4759L421.535 88.7241ZM403.656 107.363C395.611 111.742 385.196 114 372.293 114V118C385.629 118 396.761 115.671 405.569 110.877L403.656 107.363ZM372.293 114H334.853V118H372.293V114ZM356.453 99.44H371.172V95.44H356.453V99.44ZM371.172 99.44C380.526 99.44 388.118 97.9234 393.765 94.6965L391.78 91.2235C386.974 93.97 380.165 95.44 371.172 95.44V99.44ZM393.75 94.705C399.471 91.5011 403.572 86.8877 405.987 80.9089L402.278 79.4111C400.213 84.5256 396.741 88.4455 391.795 91.215L393.75 94.705ZM405.992 80.8967C408.347 74.9533 409.492 67.9713 409.492 60H405.492C405.492 67.6021 404.398 74.0601 402.273 79.4233L405.992 80.8967ZM409.492 60C409.492 51.9277 408.348 44.9385 405.987 39.0911L402.278 40.5889C404.397 45.8348 405.492 52.2856 405.492 60H409.492ZM405.992 39.1033C403.582 33.02 399.482 28.3451 393.75 25.135L391.795 28.625C396.73 31.3883 400.203 35.3533 402.273 40.5767L405.992 39.1033ZM393.765 25.1435C388.118 21.9166 380.526 20.4 371.172 20.4V24.4C380.165 24.4 386.974 25.87 391.78 28.6165L393.765 25.1435ZM371.172 20.4H356.453V24.4H371.172V20.4ZM354.453 22.4V97.44H358.453V22.4H354.453Z" fill="white" mask="url(#path-1-outside-1_3_62)"/>
</svg>
<svg width="auto" height="100" viewBox="0 0 350 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 max-sm:top-20 max-sm:-right-0 -right-20">
<g filter="url(#filter0_d_102_210)">
<mask id="path-1-outside-1_102_210" maskUnits="userSpaceOnUse" x="4" y="0" width="342" height="116" fill="black">
<rect fill="white" x="4" width="342" height="116"/>
<path d="M6.04 114V1.99999H31.8L66.04 71.92L99.96 1.99999H125.72V114H104.12V38.8L74.52 98.32H57.4L27.64 38.8V114H6.04ZM140.239 114L181.199 1.99999H205.679L246.479 114H223.599L193.359 26.64L162.959 114H140.239ZM158.319 88.56L164.079 71.76H221.039L226.639 88.56H158.319ZM261.196 114V1.99999H303.116C312.183 1.99999 319.703 3.54666 325.676 6.64C331.65 9.73333 336.076 13.8933 338.956 19.12C341.836 24.3467 343.276 30.32 343.276 37.04C343.276 43.2267 341.89 48.9333 339.116 54.16C336.343 59.3867 331.97 63.6533 325.996 66.96C320.023 70.16 312.396 71.76 303.116 71.76H282.796V114H261.196ZM282.796 54.32H301.836C308.77 54.32 313.73 52.7733 316.716 49.68C319.81 46.48 321.356 42.2667 321.356 37.04C321.356 31.4933 319.81 27.2267 316.716 24.24C313.73 21.1467 308.77 19.6 301.836 19.6H282.796V54.32Z"/>
</mask>
<path d="M6.04 114H4.04V116H6.04V114ZM6.04 1.99999V-7.62939e-06H4.04V1.99999H6.04ZM31.8 1.99999L33.5962 1.12039L33.0475 -7.62939e-06H31.8V1.99999ZM66.04 71.92L64.2438 72.7996L66.0484 76.4848L67.8394 72.7929L66.04 71.92ZM99.96 1.99999V-7.62939e-06H98.7073L98.1606 1.12704L99.96 1.99999ZM125.72 1.99999H127.72V-7.62939e-06H125.72V1.99999ZM125.72 114V116H127.72V114H125.72ZM104.12 114H102.12V116H104.12V114ZM104.12 38.8H106.12L102.329 37.9094L104.12 38.8ZM74.52 98.32V100.32H75.759L76.3108 99.2106L74.52 98.32ZM57.4 98.32L55.6111 99.2144L56.1639 100.32H57.4V98.32ZM27.64 38.8L29.4289 37.9056L25.64 38.8H27.64ZM27.64 114V116H29.64V114H27.64ZM8.04 114V1.99999H4.04V114H8.04ZM6.04 3.99999H31.8V-7.62939e-06H6.04V3.99999ZM30.0038 2.87959L64.2438 72.7996L67.8362 71.0404L33.5962 1.12039L30.0038 2.87959ZM67.8394 72.7929L101.759 2.87294L98.1606 1.12704L64.2406 71.0471L67.8394 72.7929ZM99.96 3.99999H125.72V-7.62939e-06H99.96V3.99999ZM123.72 1.99999V114H127.72V1.99999H123.72ZM125.72 112H104.12V116H125.72V112ZM106.12 114V38.8H102.12V114H106.12ZM102.329 37.9094L72.7292 97.4294L76.3108 99.2106L105.911 39.6906L102.329 37.9094ZM74.52 96.32H57.4V100.32H74.52V96.32ZM59.1889 97.4256L29.4289 37.9056L25.8511 39.6944L55.6111 99.2144L59.1889 97.4256ZM25.64 38.8V114H29.64V38.8H25.64ZM27.64 112H6.04V116H27.64V112ZM140.239 114L138.36 113.313L137.378 116H140.239V114ZM181.199 1.99999V-7.62939e-06H179.801L179.32 1.31306L181.199 1.99999ZM205.679 1.99999L207.558 1.31543L207.079 -7.62939e-06H205.679V1.99999ZM246.479 114V116H249.336L248.358 113.315L246.479 114ZM223.599 114L221.709 114.654L222.175 116H223.599V114ZM193.359 26.64L195.249 25.9858L193.364 20.5403L191.47 25.9827L193.359 26.64ZM162.959 114V116H164.38L164.848 114.657L162.959 114ZM158.319 88.56L156.427 87.9113L155.519 90.56H158.319V88.56ZM164.079 71.76V69.76H162.65L162.187 71.1114L164.079 71.76ZM221.039 71.76L222.936 71.1275L222.48 69.76H221.039V71.76ZM226.639 88.56V90.56H229.414L228.536 87.9275L226.639 88.56ZM142.117 114.687L183.077 2.68692L179.32 1.31306L138.36 113.313L142.117 114.687ZM181.199 3.99999H205.679V-7.62939e-06H181.199V3.99999ZM203.8 2.68456L244.6 114.685L248.358 113.315L207.558 1.31543L203.8 2.68456ZM246.479 112H223.599V116H246.479V112ZM225.489 113.346L195.249 25.9858L191.469 27.2942L221.709 114.654L225.489 113.346ZM191.47 25.9827L161.07 113.343L164.848 114.657L195.248 27.2973L191.47 25.9827ZM162.959 112H140.239V116H162.959V112ZM160.211 89.2086L165.971 72.4086L162.187 71.1114L156.427 87.9113L160.211 89.2086ZM164.079 73.76H221.039V69.76H164.079V73.76ZM219.141 72.3925L224.741 89.1925L228.536 87.9275L222.936 71.1275L219.141 72.3925ZM226.639 86.56H158.319V90.56H226.639V86.56ZM261.196 114H259.196V116H261.196V114ZM261.196 1.99999V-7.62939e-06H259.196V1.99999H261.196ZM325.676 6.64L324.757 8.41599H324.757L325.676 6.64ZM338.956 19.12L340.708 18.1548L338.956 19.12ZM339.116 54.16L340.883 55.0974L339.116 54.16ZM325.996 66.96L326.941 68.723L326.953 68.7165L326.965 68.7098L325.996 66.96ZM282.796 71.76V69.76H280.796V71.76H282.796ZM282.796 114V116H284.796V114H282.796ZM282.796 54.32H280.796V56.32H282.796V54.32ZM316.716 49.68L315.278 48.29L315.277 48.2908L316.716 49.68ZM316.716 24.24L315.277 25.6292L315.302 25.6544L315.327 25.6788L316.716 24.24ZM282.796 19.6V17.6H280.796V19.6H282.796ZM263.196 114V1.99999H259.196V114H263.196ZM261.196 3.99999H303.116V-7.62939e-06H261.196V3.99999ZM303.116 3.99999C311.969 3.99999 319.149 5.51199 324.757 8.41599L326.596 4.86401C320.257 1.58134 312.397 -7.62939e-06 303.116 -7.62939e-06V3.99999ZM324.757 8.41599C330.425 11.3513 334.539 15.2481 337.205 20.0852L340.708 18.1548C337.613 12.5385 332.874 8.11538 326.596 4.86401L324.757 8.41599ZM337.205 20.0852C339.902 24.9805 341.276 30.6143 341.276 37.04H345.276C345.276 30.0257 343.771 23.7128 340.708 18.1548L337.205 20.0852ZM341.276 37.04C341.276 42.9152 339.963 48.2979 337.35 53.2226L340.883 55.0974C343.817 49.5687 345.276 43.5381 345.276 37.04H341.276ZM337.35 53.2226C334.785 58.0566 330.715 62.0617 325.028 65.2102L326.965 68.7098C333.224 65.245 337.901 60.7168 340.883 55.0974L337.35 53.2226ZM325.052 65.197C319.456 68.1946 312.183 69.76 303.116 69.76V73.76C312.61 73.76 320.59 72.1254 326.941 68.723L325.052 65.197ZM303.116 69.76H282.796V73.76H303.116V69.76ZM280.796 71.76V114H284.796V71.76H280.796ZM282.796 112H261.196V116H282.796V112ZM282.796 56.32H301.836V52.32H282.796V56.32ZM301.836 56.32C308.992 56.32 314.616 54.7351 318.155 51.0692L315.277 48.2908C312.844 50.8115 308.547 52.32 301.836 52.32V56.32ZM318.154 51.07C321.67 47.4328 323.356 42.6884 323.356 37.04H319.356C319.356 41.8449 317.949 45.5272 315.278 48.29L318.154 51.07ZM323.356 37.04C323.356 31.1161 321.694 26.2659 318.105 22.8012L315.327 25.6788C317.925 28.1874 319.356 31.8706 319.356 37.04H323.356ZM318.155 22.8508C314.616 19.1849 308.992 17.6 301.836 17.6V21.6C308.547 21.6 312.844 23.1085 315.277 25.6292L318.155 22.8508ZM301.836 17.6H282.796V21.6H301.836V17.6ZM280.796 19.6V54.32H284.796V19.6H280.796Z" fill="white" mask="url(#path-1-outside-1_102_210)"/>
</g>
<defs>
<filter id="filter0_d_102_210" x="0.0400391" y="0" width="349.236" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_210"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_210" result="shape"/>
</filter>
</defs>
</svg>

          From Vision to Reality
        </h1>
        <div className="flex flex-col gap-12">
          <div className="w-screen flex px-24 max-md:px-4 gap-12">
            <div className="flex pt-40 gap-12 max-sm:items-center max-md:gap-6">
              <div className="w-full max-md:hidden"></div>
              <RoadmapAnimation initialHeight={0} />
              <div className="w-full h-full justify-center max-md:justify-start flex flex-col py-4 max-md:py-2 gap-4 text-white">
                <div className="h-14">
                  <motion.div
                     initial={{ opacity: 0, translateY: 5 }}
                     whileInView={{ opacity: 1, targetY: 0 }}
                     transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-6xl font-bold relative bg-[#cf9f45]   overflow-visible w-12 text-center bg-clip-text text-transparent"
                  >
                    <span className="playfair ">1</span>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-3xl font-semibold"
                >
                  Foundational Excellence
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Establishing the legal, organizational, and technical
                  framework to ensure a stable and scalable platform foundation.
                  This includes creating a strong brand identity and crafting a
                  strategic roadmap that aligns innovation with long-term
                  sustainability
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-screen flex px-24 max-md:px-4 gap-12">
            <div className="flex items-start max-md:flex-row-reverse justify-start  gap-12 max-md:gap-6">
              <div className="w-full h-full justify-center flex flex-col py-4 max-md:py-2 text-white">
                <div className="h-16">
                  <motion.div
                     initial={{ opacity: 0, translateY: 5 }}
                     whileInView={{ opacity: 1, targetY: 0 }}
                     transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-6xl font-bold relative bg-[#cf9f45]   overflow-visible w-12 text-center bg-clip-text text-transparent"
                  >
                    <span className="playfair ">2</span>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-3xl font-semibold"
                >
                  Decentralized Empowerment
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Pioneering the early Node Sale to empower supporters with the
                  opportunity to shape the decentralized infrastructure. This
                  phase focuses on building a participatory ecosystem where
                  contributors directly support the project's vision while
                  laying the groundwork for governance and tokenomics
                </motion.p>
              </div>
              <RoadmapAnimation initialHeight={0} />
              <div className="w-full max-md:hidden"></div>
            </div>
          </div>
          <div className="w-screen flex px-24 max-md:px-4 gap-12">
            <div className="flex gap-12 max-md:gap-6">
              <div className="w-full max-md:hidden"></div>
              <RoadmapAnimation initialHeight={0} />
              <div className="w-full h-full justify-center max-md:justify-start flex flex-col py-4 max-md:py-2 gap-4 text-white">
                <div className="h-16">
                  <motion.div
                   initial={{ opacity: 0, translateY: 5 }}
                   whileInView={{ opacity: 1, targetY: 0 }}
                   transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-6xl font-bold relative bg-[#cf9f45]   overflow-visible w-12 text-center bg-clip-text text-transparent"
                  >
                    <span className="playfair ">3</span>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-3xl font-semibold"
                >
                  Technological Innovation
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Advancing the development of a secure and highly scalable
                  decentralized system, prioritizing robust data protection,
                  seamless interoperability, and transparency. Emphasis on
                  technical infrastructure ensures a future-proof foundation for
                  global adoption
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-screen flex px-24 max-md:px-4 gap-12">
            <div className="flex items-start justify-start max-md:flex-row-reverse max-md:gap-6 gap-12">
              <div className="w-full h-full justify-center flex flex-col py-4 max-md:py-2 gap-4 text-white">
                <div className="h-16">
                  <motion.div
                 initial={{ opacity: 0, translateY: 5 }}
                 whileInView={{ opacity: 1, targetY: 0 }}
                 transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-6xl font-bold relative bg-[#cf9f45]   overflow-visible w-12 text-center bg-clip-text text-transparent"
                  >
                    <span className="playfair ">4</span>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-3xl font-semibold"
                >
                  {" "}
                  Collaborative Evolution
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Engaging the community through structured testing and
                  iterative refinements of the platform. This phase highlights
                  user-centered design and performance optimization, ensuring a
                  seamless experience that meets the diverse needs of users and
                  creators
                </motion.p>
              </div>
              <RoadmapAnimation initialHeight={0} />
              <div className="w-full max-md:hidden"></div>
            </div>
          </div>
          <div className="w-screen flex px-24 max-md:px-4 gap-12">
            <div className="flex max-md:gap-6 gap-12">
              <div className="w-full max-md:hidden"></div>
              <RoadmapAnimation initialHeight={0} />
              <div className="w-full h-full justify-center max-md:justify-start flex flex-col py-4 max-md:py-2 gap-4 text-white ">
                <div className="h-16">
                  <motion.div
            initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, targetY: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-6xl font-bold relative bg-[#cf9f45]   overflow-visible w-12 text-center bg-clip-text text-transparent"
                  >
                    <span className="playfair ">5</span>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-3xl font-semibold"
                >
                  Continuous Growth
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, targetY: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Introducing the platform to a global audience with advanced
                  features and governance-driven decision-making. This phase
                  focuses on scaling the ecosystem, fostering innovation, and
                  maintaining leadership in a dynamic and ever-evolving industry
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 pt-24">
        <div className="flex flex-col gap-4">
          <h1 className="heading">A Roadmap That Evolves with Us</h1>
          <p className="para">
            Our roadmap is a living, adaptable framework designed to grow with
            us. It evolves alongside new opportunities, unexpected challenges,
            and the invaluable contributions of our community. At every step, we
            remain committed to transparency, keeping you informed and engaged
            throughout our journey
          </p>
        </div>
        <p className="para">
          Our ultimate goal is simple: to empower you, our community, to
          actively shape our development and share in our success
        </p>
      </div>
    </>
  );
}

export default Roadmap;
