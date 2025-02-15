
function Footer() {
  return (
    <>
        <section>
            <div className="flex flex-wrap sm:justify-around space-x-10 space-y-10 border-t border-gray-200">
                <div>
                    <h1 className="font-bold">About</h1>
                    <ul>
                        <li>About MyFeedback</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold">MyFeedback</h1>
                    <ul>
                        <li>
                            MyFeedback for business
                        </li>
                        <li>Collections</li>
                        <li>Talk</li>
                        <li>Events</li>
                        <li>MyFeedback blog</li>
                        <li>Support</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <div>
                        <h1 className="font-bold">Languages</h1>
                        <select id="language">
                            <option value="english">English</option>
                            <option value="bangla">Bangla</option>
                        </select>
                    </div>
                    <div>
                        <h1 className="font-bold">Countries</h1>
                        <select id="Countries">
                            <option value="singapour">Singapour</option>
                            <option value="malayshia">Malayshia</option>
                        </select>
                    </div>

                </div>
                
            </div>
            <h1 className="text-center font-semibold">Copyright@Septembre 2023 myfeedback, designed by scott</h1>
        </section>
    </>    
  )
}

export default Footer