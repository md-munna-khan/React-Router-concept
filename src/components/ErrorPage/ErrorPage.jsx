import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h3>OOps!!</h3>
            <p>{error.status || error.message}</p>
            {
                error.status === 404 && <div>
<h3>page not found</h3>
<Link to='/'><button>Go to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;