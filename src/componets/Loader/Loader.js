import "./Loader.scss";

const Loader = () => {
    return (
        <svg viewBox="0 0 140 140">
            <circle fill="#71e" stroke="transparent" stroke-width="4" cx="70" cy="70" r="0">
                <animate
                    attributeName="r"
                    dur="1.4s"
                    values="0; 46; 0"
                    repeatCount="indefinite" />
            </circle>
            <circle fill="#a2f" stroke="transparent" stroke-width="4" cx="70" cy="70" r="0">
                <animate
                    attributeName="r"
                    dur="1.4s"
                    begin=".2s"
                    values="0; 40; 0"
                    repeatCount="indefinite" />
            </circle>
            <circle fill="#f4f" stroke="transparent" stroke-width="4" cx="70" cy="70" r="0">
                <animate
                    attributeName="r"
                    dur="1.4s"
                    begin=".38s"
                    values="0; 30; 0"
                    repeatCount="indefinite" />
            </circle>
        </svg>

    )
}

export default Loader;