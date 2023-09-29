import { useRouteError, Link } from "react-router-dom";

export const NotFound = () => {
    const error = useRouteError();
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Página no encontrada</p>
                    <p className="lead">{error.statusText || error.message}</p>
                    <Link to= '/' className="btn btn-primary">Volver al home</Link>
                </div>
            </div>
        </>
    );
};

     
      