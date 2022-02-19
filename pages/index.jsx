import Head from 'next/head'

export default function Home() {
  return (<>
  <div>
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black  border-b-8	 border-solid border-[#222]"
      style={{
        background:
          'linear-gradient(rgb(9 9 9 / 60%), rgb(8 7 8 / 90%)), url(/hero-bg.jpg)',
      }}
    >
      <Head>
        <title>Netflix clone</title>        
        <link rel="icon" href="/icon.png" />
      </Head>
      <header className="flex w-full justify-between px-16 pt-10 h-20">
        <div>
          <svg
            viewBox="0.238 0.034 919.406 248.488"
            width="2500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-44"
          >
            <path
              d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
              fill="#e50914"
            />
          </svg>
        </div>
        <div className='flex'>
        <div className="flex bg-trabsparent text-white mr-12 text-xl w-36 border-2 border-solid border-gray-300 h-12 px-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>

          <select id="language" className="bg-transparent outline-none">
            <option className='text-white bg-gray-500' value="English">English</option>
            <option className='text-white bg-gray-500'  value="Hindi">हिन्दी</option>
          </select>
        </div>
        <a href="/login">
          <button className="h-10 w-24 rounded-sm text-xl bg-[#e50914] text-white hover:bg-[#ff0c0cfd]">
          Sign In
        </button></a>
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className=" text-6xl w-1/2 font-medium tracking-wider text-white">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="mt-4 mb-8 text-2xl text-white">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-lg text-white ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mt-4 flex">
          <input
            placeholder="Email Address"
            className="min-w-[400px] bg-white p-4"
          />
          <a href="/login">
         <button className=" h-16 flex items-center bg-[#e50914] px-8 text-xl text-white hover:bg-[#ff0c0cfd] ">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          </a>
         </div>
      </main >
    </div>

    <div className="bg-black  px-36 py-24 border-b-8	 border-solid border-[#222]">
      <div className='flex item-center'>

        <div className='flex-1 mt-40'>
        <h1 className='text-white text-7xl w-3/4 mb-6'>Enjoy on your TV.</h1>
        <p className='text-white text-3xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          
          <div className='flex-1 mt-36 ml-20'>
       <video autoPlay muted loop  className='border-4  border-solid border-[#7c7a7a]'>
         <source className='' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
       </video>
       </div>
      </div>
    </div>

    <div className="bg-black  px-36 py-24 border-b-8	border-solid border-[#222]">
      <div className='flex item-center'>
        <div className='flex-1'>
        <img  src="/first.jpg" alt="" />
        </div>
          <div className='flex-1 my-40'>
        <h1 className='text-white text-7xl w-11/12 mb-6'>Download your shows to watch offline.</h1>
        <p className='text-white text-3xl'>Save your favourites easily and always have something to watch.</p>
          </div>
      </div>
    </div>

    <div className="bg-black  px-36 py-24 border-b-8	 border-solid border-[#222]">
      <div className='flex item-center'>
        
          <div className='flex-1 mt-'>
        <h1 className='text-white text-7xl w-3/4 mb-6'>Watch everywhere.</h1>
        <p className='text-white text-3xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>

          <div className='flex-1'>
       <video autoPlay muted loop className='border-y-4 border-x-8 border-solid border-[#7c7a7a]'>
         <source  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
       </video>
       </div>
      </div>
    </div>
     
    <div className="bg-black  px-36 py-24 border-b-8	 border-solid border-[#222]">
      <div className='flex item-center'>
        <div className='flex-1'>
        <img  src="/second.png" alt="" />
        </div>
          <div className='flex-1 mt-40'>
        <h1 className='text-white text-7xl w-3/4 mb-6'>Create profiles for children.</h1>
        <p className='text-white text-3xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
      </div>
    </div>
    <div className='bg-black'>
      <footer className=' text-white flex item-center justify-center p-16'>
        <div className='flex-1 text-5xl'>
        Questions?<a className='text-blue-500 ' href="https://www.instagram.com/isanjurao">click</a>
        </div>
        <h1 className='flex-1 text-4xl'>Copyright &copy; isanjurao@github</h1>
      </footer>
    </div>
    </div>
    </>
)
}


