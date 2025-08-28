import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          About Tech Gadgets
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Your one-stop shop for all your tech gadgets needs
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Our Story
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            How it all began
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-4">
                Welcome to tech gadgets, your trusted destination for
                high-quality tech and accessories. Founded in 2025, we started
                with a simple mission: to make premium tech accessible to
                everyone without compromising on quality or customer service.
              </p>
              <p>
                What began as a small online store has grown into a
                comprehensive e-commerce platform, offering a wide range of
                products from leading brands. Our commitment to excellence and
                customer satisfaction has helped us build a loyal community of
                tech enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Our Mission
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            What drives us forward
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-4">
                At tech gadgets, we believe that technology should enhance your
                life, not complicate it. Our mission is to provide carefully
                curated, high-quality electronics that combine innovative design
                with practical functionality.
              </p>
              <p>
                We're committed to offering competitive prices, fast shipping,
                and exceptional customer service. Whether you're a tech
                enthusiast or just looking for reliable everyday electronics,
                we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Our Team
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            The people behind tech gadgets
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-4">
                Our team is made up of passionate tech enthusiasts, designers,
                and customer service experts who are dedicated to providing you
                with the best shopping experience possible. We carefully test
                and select every product in our inventory to ensure it meets our
                high standards for quality and performance.
              </p>
              <p>
                From our customer support team to our warehouse staff, every
                member of the tech family is committed to making your experience
                with us exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to shop with us?
        </h2>
        <p className="text-gray-600 mb-6">
          Discover our collection of high-quality tech gadgets and accessories.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default About;
