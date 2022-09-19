const signin = () => {
    return (
        <div className="container my-4 p-5">
            <h1>Upgreen</h1>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Log in</button>
                <p>or</p>
                <button class="btn btn-primary" type="button">Sign Up</button>
            </div>
        </div>
    )
}

export default signin