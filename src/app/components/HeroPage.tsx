import Link from "next/link";

function HeroPage() {

    return (
      <>
        <div className=" p-10 md:p-20 max-w-[100vw] overflow-hidden bg-[#080808] text-white">
          {/* Hero Section */}
          <div className="mt-14 lg:mb-20 flex flex-col gap-4">
            <h1 className="font-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              WELCOME TO ASS I AM – THE FUTURE STARTS HERE
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Do you feel truly satisfied as a user? Truly valued as a creator? Or
              do you sometimes feel like adult entertainment prioritizes quantity
              over meaningful experiences — numbers over people? The industry
              today is riddled with cookie-cutter content, opaque systems, and a
              lack of appreciation
            </p>
          </div>
          <div className="w-full py-10 flex justify-center items-center gap-6 italic text-lg">
            <p className="text-end">
              <b>For user,</b> this means feeling like <br />
              just snohter number.
            </p>
            <span className="w-1 h-14 bg-white border border-[#A92E2E]"></span>
            <p className="text-start">
              <b>For creators,</b> it often means low <br />
              payout and little control.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="text-xl border-b border-[#CD7F32] pb-1 mb-4">BUT THINGS CAN BE DIFFERENT - AND THAT'S WHERE WE COME IN</h3>
            <p className="text-lg">We put you at the center, creating an environment that's</p>
            <p className="text-blue-700 font-medium">fair, transparent <span className="text-white">and</span> full of opportunities</p>
          </div>
          <div className="mt-14 lg:mb-20 flex flex-col gap-4 ">
            <h1 className="font-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              Imagine This:
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              A world where you not only explore your fantasies — you actively
              shape them. At ASS I AM, you'll discover more than mere
              content; you'll uncover an entire universe of entertainment,
              interaction, and limitless possibilities. You’re not just a number.
              You’re part of a community that values you and gives you the freedom
              to express your creativity and individuality
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-6">
            <h1 className="text-4xl font-light ">
              What Sets Us Apart: Our C.O.R.E Values
            </h1>
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-44">
                <div className=" border-white border-opacity-70 border-b flex gap-6 relative before:absolute before:bottom-0 before:h-2/4 before:w-[1px] before:bg-white before:bg-opacity-70 after:absolute after:w-2/3 after:h-[1px] after:bg-white after:bg-opacity-70 after:bottom-36">
                  <div className="h-full p-3 pt-0 flex flex-col gap-4 justify-end">
                    <h1 className="font-semibold">
                      CREATORS & USERS <br />
                      First:
                    </h1>
                    <p className="text-sm">
                      We prioritize freedom and <br />
                      appreciation for both creators <br />
                      and users
                    </p>
                  </div>
                  <p className="unbordered-white text-[12rem] roboto-condensed translate-x-10 translate-y-[4.75rem] relative before:w-32 before:h-32 before:blur-2xl before:absolute before:bg-[#CFB145] before:rounded-full z-10 before:bg-opacity-20 before:top-16 before:-left-4">
                    C
                  </p>
                </div>
                <div className=" border-white border-opacity-70 border-b flex gap-6 relative before:absolute before:right-0 before:bottom-0 before:h-2/4 before:w-[1px] before:bg-white before:bg-opacity-70 after:absolute after:w-2/3 after:h-[1px] after:bg-white after:bg-opacity-70 after:bottom-36 after:right-0 text-end">
                  <p className="unbordered-white text-[12rem] roboto-condensed -translate-x-12 translate-y-[4.75rem] relative before:w-32 before:h-32 before:blur-2xl before:absolute before:bg-blue-500 before:rounded-full z-10 before:bg-opacity-20 before:top-16 before:-left-3">
                    O
                  </p>
                  <div className="h-full p-3 pt-0 flex flex-col gap-4 justify-end">
                    <h1 className="font-semibold">
                      ONE UNIFIED <br />
                      PLATFORM:
                    </h1>
                    <p className="text-sm">
                      {" "}
                      Everything you need, all in one <br />
                      place—from sensual content to <br />
                      gaming and genuine interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-52 -translate-y-12">
                <div className=" border-white border-opacity-70 border-b flex gap-6 relative before:absolute before:bottom-0 before:h-2/4 before:w-[1px] before:bg-white before:bg-opacity-70 after:absolute after:w-2/3 after:h-[1px] after:bg-white after:bg-opacity-70 after:bottom-36">
                  <div className="h-full p-3 pt-0 flex flex-col gap-4 justify-end pl-4">
                    <h1 className="font-semibold">
                      REVOLUTIONARY
                      <br />
                      DECENTRALIZATION
                    </h1>
                    <p className="text-sm">
                      Modern technologies ensure <br />
                      transparent, secure, and <br />
                      independent processes.
                    </p>
                  </div>
                  <p className="unbordered-white text-[12rem] roboto-condensed translate-x-[4.5rem] translate-y-[4.75rem] relative before:w-32 before:h-32 before:blur-2xl before:absolute before:bg-blue-500 before:rounded-full z-10 before:bg-opacity-20 before:top-16 before:-left-4">
                    R
                  </p>
                </div>
                <div className=" border-white border-opacity-70 border-b flex gap-6 relative before:absolute before:right-0 before:bottom-0 before:h-2/4 before:w-[1px] before:bg-white before:bg-opacity-70 after:absolute after:w-2/3 after:h-[1px] after:bg-white after:bg-opacity-70 after:bottom-36 after:right-0 text-end">
                  <p className="unbordered-white text-[12rem] roboto-condensed -translate-x-12 translate-y-[4.75rem] relative before:w-32 before:h-32 before:blur-2xl before:absolute before:bg-[#CFB145] before:rounded-full z-10 before:bg-opacity-20 before:top-16 before:-left-3">
                    E
                  </p>
                  <div className="h-full p-3 pt-0 flex flex-col gap-4 justify-end">
                    <h1 className="font-semibold">
                      ENGAGED
                      <br />
                      COMMUNITY:
                    </h1>
                    <p className="text-sm">
                      Your voice matters. Shape the <br />
                      platform through feedback, <br />
                      events, and voting opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mb-20 flex flex-col gap-4 ">
            <h1 className="font-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              What Makes Us Unique
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl relative before:w-24 before:h-24 before:blur-2xl before:absolute before:bg-[#CFB145] before:rounded-full before:bg-opacity-15 after:w-32 after:h-32 after:blur-2xl after:absolute after:bg-[#CFB145] after:rounded-full z-10 after:bg-opacity-15 after:mt-4">
            A world where you not only explore your fantasies — you actively
              shape them. At ASS I AM, you'll discover more than mere
              content; you'll uncover an entire universe of entertainment,
              interaction, and limitless possibilities. You’re not just a number.
              You’re part of a community that values you and gives you the freedom
              to express your creativity and individuality
            </p>
            <p className="mt-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl boxShadow p-4">
            At ASS I AM, we understand that success isn’t about maximizing profits, monopolizing markets, or standardizing creativity. The key lies in diversity and staying close to the community. Only with active user involvement can we create an ecosystem that truly satisfies and inspires
            </p>
          </div>
          <div className="mt-20 lg:mb-20 flex flex-col gap-4 ">
            <h1 className="font-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              What Makes Us Unique
            </h1>
          <div className="flex flex-col gap-8 py-8">
            <div className="flex gap-8 ">
              <div className="flex gap-8">
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://images.unsplash.com/photo-1623621461302-e6b5236629cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGhvbGRpbiUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">VIDEOS</div>
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGl2ZWNhbXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">LIVECAM</div>
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVzfGVufDB8fDB8fHww')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">GAMES</div>
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://images.unsplash.com/photo-1623621461302-e6b5236629cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGhvbGRpbiUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">VIDEOS</div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVzfGVufDB8fDB8fHww')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">GAMES</div>
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://images.unsplash.com/photo-1623621461302-e6b5236629cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGhvbGRpbiUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">VIDEOS</div>
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGl2ZWNhbXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">LIVECAM</div>
              <div className="w-64 h-20 rounded-tl-3xl rounded-br-3xl flex justify-center items-center text-5xl unbordered-white text-opacity-70 bg-[url('https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVzfGVufDB8fDB8fHww')] bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-30">GAMES</div>
            </div>
          </div>
          </div>
          <div className="mt-20 lg:mb-20 flex flex-col gap-4 ">
            <h1 className="font-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            Shaping the Future of Adult Entertainment
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Together, let’s redefine the future of adult entertainment—a space that’s fairer, more inclusive, and truly revolutionary. A place where freedom sparks creativity and meaningful connections aren’t just possible—they’re inevitable
            </p>
          </div>
          <div className="mt-20 lg:mb-20 flex flex-col gap-4 text-center items-center">
            <h1 className="font-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            Be Part of the Next Era
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-3/4">
            Step into a world where imagination knows no limits, and everyone is an essential part of a greater vision.
            </p>
            <Link href='/register' className="buttonShadow px-3 py-1 text-white rounded-full mt-12 hover:scale-105 duration-150">Sign Up</Link>
          </div>

        </div>
      </>
    );
  }
  
  export default HeroPage;
  