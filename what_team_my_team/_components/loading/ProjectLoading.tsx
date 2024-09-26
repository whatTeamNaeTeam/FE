export function ProjectLoading() {
  return (
    <div className="w-full max-w-[1048px] rounded-md animate-pulse shadow-sm">
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="w-80 h-8 bg-gray-4 rounded-full"></div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-gray-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div className="w-12 bg-gray-4 h-4 rounded-full"></div>
            </div>
          </div>
          <div className="w-20 h-20 bg-gray-4 rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full h-40 bg-gray-4 rounded-md"></div>
        <div className="w-full h-80 bg-gray-4 rounded-md"></div>
      </div>
    </div>
  )
}
