import '../app/globals.css';


const Newsletter = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center px-4 m-0">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Subscribe to my Newsletter
        </h2>
        <p className=" mb-4 text-center">
          Enter your email to get monthly updates on my journey.
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Your email"
            className="px-16 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            className="subscribe px-4 py-2 rounded-r"
          >
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  
  



