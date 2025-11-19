// import Image from 'next/image';

// export default function SeamlessLayoutPage() {
//   return (
//     // Main container: full height, vertical flex layout
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* 1. TOP IMAGE SECTION */}
//       {/* h-[30vh] sets the height to 30% of the viewport height */}
//       <div className="relative w-full h-[30vh] overflow-hidden">
//         <Image
//           src="/images/fibre-optic.jpg"
//           alt="Top background image"
//           fill // Makes the image fill its parent container
//           priority
//           style={{ objectFit: 'cover' }}
//         />
//       </div>

//       {/* 2. CENTRAL CONTENT SECTION (The seamless modal wrapper) */}
//       {/* flex-grow makes it take up the remaining space.
//           The wrapper is semi-transparent for the "seamless" effect. */}
//       <div className="flex flex-grow justify-center items-center p-6 bg-white bg-opacity-90">
//         {/* The actual seamless modal content block */}
//         <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-2xl text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Seamless Text Area</h2>
//           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//             This central block is optimized for readability and responsive scaling, working great on
//             both **mobile** (full width) and **web** (max-width centered).
//           </p>

//           <textarea
//             placeholder="Start writing here..."
//             rows={8}
//             className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700 resize-y"
//           />
//         </div>
//       </div>

//       {/* 3. BOTTOM IMAGE SECTION */}
//       <div className="relative w-full h-[30vh] overflow-hidden">
//         <Image
//           src="/images/progress-mountain.jpg"
//           alt="Bottom background image"
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';

export default function SeamlessLayoutPage() {
  return (
    // Main container: full height, vertical flex layout, and relative for positioning the modal
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      {/* 1. TOP IMAGE SECTION */}
      {/* The height is increased slightly to give space for the modal to overlap */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/fibre-optic.jpg"
          alt="Top background image"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* 2. CENTRAL CONTENT SECTION (The seamless modal - ABSOLUTELY POSITIONED) */}
      {/* - absolute: Takes it out of the flow.
          - top-1/2: Positions the top edge at 50% down the container.
          - left-1/2: Positions the left edge at 50% across the container.
          - -translate-x-1/2 -translate-y-1/2: Centers the block perfectly.
          - max-w-4xl: Responsive width cap.
      */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-11/12 max-w-4xl p-8 bg-white rounded-xl shadow-2xl text-center z-10 
                      md:w-3/4 lg:w-2/3"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Seamless Text Area</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          This block now floats directly over the background transition, making the images touch!
        </p>

        <textarea
          placeholder="Start writing here..."
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700 resize-y"
        />

        <a
          href="files/aus-cv-test.zip" // Use the path relative to the public folder
          download // Tells the browser to download the file
          className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Download Resume
        </a>
      </div>

      {/* 3. BOTTOM IMAGE SECTION */}
      {/* The second image starts immediately after the first, fulfilling the "touch" requirement */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/progress-mountain.jpg"
          alt="Bottom background image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
