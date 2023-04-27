const ErrorMsg=({error,messages})=>{
    return(
        <div className="containerErrorMsg">
            <div className="boxcontainer">
                <h2>{messages ? 'Emty!':'Error!'}</h2>
                <p>{messages ? messages :error}</p>
            </div>

        </div>
    )
}
export default ErrorMsg