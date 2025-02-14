
function Feedback() {
  return (
    <section className="flex justify-center bg-secondary my-10">
        <div className="flex gap-5 items-center  py-5 w-[90%]">
            <div className="flex flex-col space-y-5 w-1/2">
                <h1 className="font-bold">MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                <p className="text-xs text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia officia iusto quos quis velit, debitis nam fugiat veniam tempore!</p>
                <button className="bg-black p-2 text-white mt-10 w-2/3 rounded-full cursor-pointer">Explore MyFeedback business</button>
            </div>
            <div className="w-1/2">
                <img src="Feedback.png" alt="" />
            </div>
        </div>
    </section>    
  )
}

export default Feedback