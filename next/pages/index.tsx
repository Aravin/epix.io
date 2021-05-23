import Head from "next/head";
import Image from "next/image";
import Layout from "../component/layout/layout";
import {
  TemplateIcon,
  DeviceMobileIcon,
  ViewGridAddIcon,
  CodeIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Web Application Development",
    description:
      "We design and develop a website/ web application as per the business requirements using industry standard technologies and programming languages",
    icon: TemplateIcon,
  },
  {
    name: "Mobile Application Development",
    description:
      "We design and develop all kind of mobile application such Android, iOS mobile application using Flutter framework.",
    icon: DeviceMobileIcon,
  },
  {
    name: "Development Tools",
    description:
      "Our website also contains a service like sample HTTP response, HTTP mock responses, JSON viewer, JSON editor, Diff tool etc.",
    icon: ViewGridAddIcon,
  },
  {
    name: "Open Source",
    description:
      "Most of our codes are available in github as open source under the MIT License. You can find our source code in github.",
    icon: CodeIcon,
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="sm:relative">
        <div className="max-w-7xl mx-auto">
          <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            {/* <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> */}

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Build an website/app</span>{" "}
                  <span className="block text-green-600 xl:inline">
                    for your business
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We provide end-to-end information technology solutions from
                  consulting, software development, application development,
                  maintenance, storage, and security.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="images/undraw_Development_re_g5hq.svg"
            alt=""
          />
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A complete software solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide end-to-end information technology solutions from
              consulting, software development, application development,
              maintenance, storage, and security.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
