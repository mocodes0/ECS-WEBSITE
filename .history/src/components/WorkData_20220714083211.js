import React from "react";

function WorkData() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <button className="px-4 py-2 font-light  border border-[#6366F1] bg-[#6366F1] duration-300 hover:bg-[#6366F1]">
            All 4
          </button>
          <button className="px-4 py-2 font-light border border-[#6366F1]  duration-300 hover:bg-[#6366F1]">
            Video 4
          </button>
        </div>
        <div>
          <button className="px-4 py-2 font-light  border border-[#6366F1] bg-[#6366F1] duration-300 hover:bg-[#6366F1]">
            Date
          </button>
          <button className="px-4 py-2 font-light border border-[#6366F1]  duration-300 hover:bg-[#6366F1]">
            Name
          </button>
        </div>
      </div>

      <div className="grid my-10 justify-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-[#ffffff1a] border-[#131022]">
          <img
            className="w-full h-64"
            src="https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="candle"
          />
          <div>
            <div className="p-3 border-b border-[#131022]">
              <h3 className="cursor-pointer text-[#6366F1]">
                AMERICAN FAMILY INSURANCE 5
              </h3>
              <h4 className="mt-2">Video</h4>
            </div>
            <div className="p-3 flex items-center justify-between">
              <p>July 15,2015</p>
              <p className="cursor-pointer duration-200 hover:text-[#6366F1]">
                Details
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff1a] border-[#131022]">
          <img
            className="w-full h-64"
            src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="car-insurance"
          />
          <div>
            <div className="p-3 border-b border-[#131022]">
              <h3 className="cursor-pointer text-[#6366F1]">
                AMERICAN FAMILY INSURANCE 4s
              </h3>
              <h4 className="mt-2">Video</h4>
            </div>
            <div className="p-3 flex items-center justify-between">
              <p>July 15,2015</p>
              <p className="cursor-pointer duration-200 hover:text-[#6366F1]">
                Details
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff1a] border-[#131022]">
          <img
            className="w-full h-64"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8upkOygNsZCa51OiJJNA6hmGx-NqJFOx-6yg4Q46bBgUvwF9tjFtmRmx4046N5SZp3XY&usqp=CAU"
            alt="family"
          />
          <div>
            <div className="p-3 border-b border-[#131022]">
              <h3 className="cursor-pointer text-[#6366F1]">
                AMERICAN FAMILY INSURANCE 3
              </h3>
              <h4 className="mt-2">Video</h4>
            </div>
            <div className="p-3 flex items-center justify-between">
              <p>July 15,2015</p>
              <p className="cursor-pointer duration-200 hover:text-[#6366F1]">
                Details
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff1a] border-[#131022]">
          <img
            className="w-full h-64"
            src="https://media.istockphoto.com/photos/interior-of-co-sharing-office-lot-in-day-time-picture-id1299604050?b=1&k=20&m=1299604050&s=170667a&w=0&h=rhnLqUnuG7t6s5EePzWrlaMEchnKph9i4ZPIE7JtyhQ="
            alt="family"
          />
          <div>
            <div className="p-3 border-b border-[#131022]">
              <h3 className="cursor-pointer text-[#6366F1]">
                AMERICAN FAMILY INSURANCE 
              </h3>
              <h4 className="mt-2">Video</h4>
            </div>
            <div className="p-3 flex items-center justify-between">
              <p>July 15,2015</p>
              <p className="cursor-pointer duration-200 hover:text-[#6366F1]">
                Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkData;
