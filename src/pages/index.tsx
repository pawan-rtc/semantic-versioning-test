import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        <h1>This is a new feature</h1>
        <h1>This is a new feature 2</h1>
        <h1>This is a new feature 3</h1>
        <h1>This is a new feature 100</h1>

        <h1>This is a new feature on DEVELOP</h1>
        <h1>This is a new feature on DEVELOP 4</h1>
        <h1>This is a new feature on TEST-10 Branch (Fix)</h1>
        <h1>This is a new feature on TEST-10 Branch (Fix 2)</h1>
        <h1>This is a new feature on TEST-11 Branch (Fix 3)</h1>
        <h1>This is a new feature on TEST-11 Branch (Fix 4)</h1>
        <h1>This is a new feature on TEST-11 Branch (Fix 5)</h1>

        <h1>This is a new FEAT on TEST-12 Branch (Fix 6)</h1>
        <h1>This is a new FEAT on TEST-12 Branch (Fix 7)</h1>

        <h1>This is a new FIX on TEST-13 Branch (Fix 8)</h1>
        <h1>This is a new FIX on TEST-13 Branch (Fix 9)</h1>
        <h1>This is a new FEAT on TEST-13 Branch (Feat 10)</h1>

        <h1>This is a new FEAT on TEST-14 Branch (Feat 11)</h1>

        <h1>This is a new FEAT on TEST-15 Branch (Feat 12)</h1>
        <h1>This is a new FEAT on TEST-15 Branch (Feat 13)</h1>

        <h1>This is a new FIX on TEST-16 Branch (Fix 14)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 15)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>

        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>
        <h1>This is a new FEAT on TEST-16 Branch (Feat 16)</h1>

        <h1>New feature</h1>
        <h1>New feature</h1>
        <h1>New feature</h1>

        <h2>Feature 200</h2>
        <h2>Feature 201</h2>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
