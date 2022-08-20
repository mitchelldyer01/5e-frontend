export default function LoginForm() {
    return (
        <div className="w-full max-w-xs">
            <form className="bg-neutral-300 shadow-inner rounded-3xl px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-neutral-900 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="appearance-none w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                </div>
                <div className="mb-6">
                    <label className="block text-neutral-900 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="appearance-none w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"></input>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}