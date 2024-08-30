function getRequest() {
    fetch("X?name=ravindu")
        .then(
            Response => {
                console.log("Response done");
                return Response.text();
            }
        )
        .then(
            text => {
                console.log(text);
            }
        );
}
