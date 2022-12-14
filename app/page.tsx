import {
  FeatureBody,
  FeatureContent,
  FeatureHead,
  FeatureIcon,
  FeatureTitle,
} from "components/Feature"
import Image from "next/image"
import Link from "next/link"
import { SiNextdotjs, SiGithub, SiGit } from "react-icons/si"

const Page = () => {
  return (
    <>
      {/* bandage */}
      <span className="px-4 py-2 mx-auto max-w-xs flex items-center text-base rounded-full text-slate-900  bg-slate-100 ">
        <SiNextdotjs size={"20px"} className="mr-2" />
        DinoCore: Next.Js Starter Template
      </span>
      {/* hero */}
      <div className="bg-white dark:bg-gray-800 ">
        <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
            Fullstack starter template for your Next projects.
            </span>
            <span className="block text-indigo-500">
            Today or never!
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className=" inline-flex rounded-md shadow">
              <a
                href={"https://github.com/trongar/dinocore/fork"}
                target="_blank"
                className="py-4 px-6 flex bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <SiGit size={"20px"} className="mr-2" />
                Use Template
              </a>
            </div>
            <div className="inline-flex ml-3 rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6 flex bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <SiGithub size={"20px"} className="mr-2" />
                See source
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* features */}

      <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
        <div className="mb-16 text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Features
          </h2>
          <p className="mt-2 max-w-lg mx-auto text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          A battery of modern tools and features to improve the development experience
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-12 gap-px bg-slate-200 dark:text-white">
          {/* Jotai */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Jotai">👻</FeatureIcon>
              <FeatureTitle>Jotai</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            No extra re-renders, state resides within React, and you get the full benefits from suspense and concurrent features.
            </FeatureContent>
          </FeatureBody>
          {/* NextJs */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="NextJs">
                <SiNextdotjs size={"20px"} className="mr-2" />
              </FeatureIcon>
              <FeatureTitle>NextJs</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            React Suspense and concurrent mode allow for improved frontend performance and scalability, providing similar capabilities as a full-stack framework.
            </FeatureContent>
          </FeatureBody>
          {/* Pocketbase */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Pocketbase">
                <Image width={20} height={20} src={'/logos/pocketbase.svg'} alt="Pocketbase"/>
              </FeatureIcon>
              <FeatureTitle>Pocketbase</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            An open source Go backend featuring an embedded database, realtime subscriptions, and user/file management. It has a convenient admin dashboard and simple API.
            </FeatureContent>
          </FeatureBody>
          {/* Typescript */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Typescript">
              <Image width={20} height={20} src={'/logos/typescript.svg'} alt="Typescirpt"/>
              </FeatureIcon>
              <FeatureTitle>Typescript</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            TypeScript is a programming language that is a typed superset of JavaScript, offering additional features such as type checking and interfaces. It is used to build large-scale applications and can be compiled to plain JavaScript.
            </FeatureContent>
          </FeatureBody>
          {/* Cypress */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Cypress">
              <Image width={20} height={20} src={'/logos/cypress.png'} alt="Cypress"/>
              </FeatureIcon>
              <FeatureTitle>Cypress</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            A testing tool is a software platform that helps teams create, execute, and evaluate test cases for their software products.
            </FeatureContent>
          </FeatureBody>
          {/* Prettier */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Prettier">
              <Image width={20} height={20} src={'/logos/prettier.png'} alt="Prettier"/>
              </FeatureIcon>
              <FeatureTitle>Prettier</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
              Its a tool that automatically organizes and standardizes the layout and indentation of source code, making it easier to read and understand.
            </FeatureContent>
          </FeatureBody>
          {/* Husky */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Husky">
              🐶
              </FeatureIcon>
              <FeatureTitle>Husky</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
            </FeatureContent>
          </FeatureBody>
          {/* Lint-staged */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Lint-staged">
              🚫
              </FeatureIcon>
              <FeatureTitle>Lint-staged</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            Linting makes more sense when run before committing your code
            </FeatureContent>
          </FeatureBody>
          {/* Tailwind */}
          <FeatureBody>
            <FeatureHead>
              <FeatureIcon alt="Tailwind">
              <Image width={20} height={20} src={'/logos/tailwind.png'} alt="Tailwind"/>
              </FeatureIcon>
              <FeatureTitle>Tailwind</FeatureTitle>
            </FeatureHead>
            <FeatureContent>
            A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
            </FeatureContent>
          </FeatureBody>
        </div>
      </div>
    </>
  )
}
export default Page
