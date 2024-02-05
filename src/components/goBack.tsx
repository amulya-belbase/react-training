import { Link } from "react-router-dom";

export default function GoBack() {
    return (
        <div className="goback">
            <Link to="/">
                <button>
                    <img src="../../resources/back.png" alt="" />               
                </button>
            </Link>
        </div>
    );
}