import famsi from "../assets/Famasi-3.png"
import footcity from "../assets/foot-city.png"


function Main() {
    return(
        <main className="h-screen">
        <div>
            <h1 className=" text-8xl font-extrabold p-10 flex flex-col">
                    <span className="text-orange-400 p-2">Endless<br/></span> 
                    <span className="text-orange-400 p-2">possibilities<br/></span>
                    <span className="p-2">for all</span>
            </h1>
            <div className="pl-10 text-2xl w-1/2">
            <p>
                Unlocking boundless payment opportunities for enterprises, 
                individuals, small businesses, emerging markets, and startups alike.
            </p>
        </div>
        <div className="p-10">
            <button className="bg-black text-white mr-10 p-4 rounded-md">Crerate a free account</button>
            <button className="bg-slate-200 mr-10 p-4 rounded-md dark:text-blue-950">Contact sales</button>
        </div>
        </div>
        <div className="flex gap-14">
            <div className="items-center">
                <img src={footcity} alt="footcity" className="relative top-52 w-98 rounded-xl"/>
            </div>
            <div>
                <img src={famsi} alt="famsi" className="relative bottom-15 w-3/5 rounded-xl"/>
                <p className="text-2xl p-2">
                Send money home to loved ones, sell online as a small business, 
                process global payments as an enterprise,
                 build financial products as a startup. With Flutterwave, 
                the question is not what is possible—it is: what is not?
                </p>
            </div>
        </div>


        </main>
    )
}

export default Main