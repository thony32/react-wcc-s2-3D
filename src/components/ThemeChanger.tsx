import { useEffect, useState } from "react"

function ThemeChanger() {
    const [theme_value, setThemeCurrent] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        if (localStorage.getItem("theme") != null) {
            document
                .getElementById("app")!
                .setAttribute("data-theme", localStorage.getItem("theme") as any)
            window.dispatchEvent(new Event("themeChanged"))
        } else {
            localStorage.setItem("theme", "valentine")
            document.getElementById("app")!.setAttribute("data-theme", "valentine")
            window.dispatchEvent(new Event("themeChanged"))
        }
    }, [])

    function HandleTheme(theme: any) {
        document.getElementById("app")!.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
        setThemeCurrent(theme)
        window.dispatchEvent(new Event("themeChanged"))
    }

    window.addEventListener("themeChanged", () => {
        setThemeCurrent(localStorage.getItem("theme"))
    })
    return (
        <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Lahy">
                <svg onClick={() => HandleTheme("light")}
                    className={theme_value === "light"
                        ?
                        "fill-primary duration-300 w-8 group cursor-pointer"
                        :
                        "fill-current hover:fill-primary duration-300 w-8 group cursor-pointer"}
                    viewBox="0 0 24 24" fill="none">
                    <path className="group-hover:translate-x-1 duration-300"
                        d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14Z"
                    />
                    <path className="group-hover:translate-x-1 duration-300"
                        d="M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z"
                    />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 11.1637 19.8717 10.3574 19.6337 9.59973C18.7991 9.82556 17.9212 9.94604 17.0152 9.94604C13.2921 9.94604 10.0442 7.91139 8.32277 4.89334C5.75469 6.22486 4 8.90751 4 12C4 16.4183 7.58172 20 12 20Z"
                    />
                </svg>
            </div>
            <div className="tooltip" data-tip="Vavy">
                <svg onClick={() => HandleTheme("valentine")}
                    className={theme_value === "valentine"
                        ?
                        "fill-primary duration-300 w-7 group cursor-pointer"
                        :
                        "fill-current hover:fill-primary duration-300 w-7 group cursor-pointer"}
                    viewBox="0 0 64 64">
                    <path
                        d="M62 37.504c0-1.877-.893-3.766-2.613-4.768c.391-1.949.678-4.204.678-6.734C60.064 15.001 52.205 2 32 2C11.793 2 3.936 15.001 3.936 26.002c0 2.529.287 4.783.678 6.732C2.891 33.736 2 35.627 2 37.504c0 2.102 1.125 4.211 3.277 5.078c-2.347 4.422-3.338 10.773-.886 15.254c1.061 1.939 10.699 8.119 13.9.342c3.66 1.736 8.209 2.828 13.709 2.828s10.047-1.092 13.707-2.828c3.203 7.777 12.84 1.598 13.902-.342c2.449-4.48 1.459-10.83-.889-15.254c2.153-.867 3.28-2.975 3.28-5.078M32.01 6c14.799 0 24.668 8.001 24.668 18.002c0 0-2.961-15.001-24.668-15.001S6.354 24.002 6.354 24.002C6.354 14.001 17.209 6 32.01 6m23.541 35.004v1c0 7.061-7.307 17.002-23.551 17.002c-16.246 0-23.553-9.941-23.553-17.002v-1H7.48c-2.449 0-3.545-1.758-3.545-3.5s1.096-3.5 3.545-3.5h.184l.172-.07c.092-.037 8.426-3.567 8.336-13.917c9.475 9.174 34.137 10.723 39.379 10.952v3.036h.969c2.447 0 3.545 1.758 3.545 3.5s-1.098 3.5-3.545 3.5h-.969z"
                    ></path>
                    <circle className="group-hover:-translate-x-1 duration-300" cx="44.5" cy="36.504" r="5" ></circle>
                    <circle className="group-hover:-translate-x-1 duration-300" cx="19.5" cy="36.504" r="5" ></circle>
                    <path
                        d="M40.09 48.131c-5.215 3.6-11 3.578-16.182 0c-.621-.432-1.184.314-.762 1.006c1.576 2.572 4.768 4.867 8.852 4.867c4.086 0 7.277-2.295 8.854-4.867c.425-.692-.137-1.438-.762-1.006"
                    ></path>
                </svg>
            </div>
            <div className="tooltip" data-tip="Maizina">
                <svg onClick={() => HandleTheme("dark")}
                    className={theme_value === "dark"
                        ?
                        "fill-primary duration-300 w-8 group cursor-pointer"
                        :
                        "fill-current hover:fill-primary hover:scale-110 duration-300 w-8 group cursor-pointer"}
                    viewBox="0 0 24 24">
                    <path
                        d="M22,10A6.99,6.99,0,0,0,9.191,6.118a6.905,6.905,0,0,0-1.486-.112A7.212,7.212,0,0,0,1,13.271,7.737,7.737,0,0,0,8.729,21H18a5.006,5.006,0,0,0,5-5,5.96,5.96,0,0,0-1.358-3.8A6.931,6.931,0,0,0,22,10ZM15,5a5,5,0,0,1,4.94,5.772A6.074,6.074,0,0,0,17,10h0a5.582,5.582,0,0,0-2.457.523,7.189,7.189,0,0,0-3.364-3.745A4.977,4.977,0,0,1,15,5Zm3,14H8.729A5.735,5.735,0,0,1,3,13.271,5.194,5.194,0,0,1,7.787,8a5.074,5.074,0,0,1,5.148,4.233,1,1,0,0,0,1.607.635,3.931,3.931,0,0,1,5.214.242A3.981,3.981,0,0,1,21,16,3,3,0,0,1,18,19Z" />
                </svg>
            </div>
        </div>
    )
}

export default ThemeChanger