function  failed() {

    return (
      <>
        <div>
          <a href="https://flutter.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Verification Completed Successfully  </h1>
        <div className="card">
          <p>
             <code>flutter/react</code> will make a change
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

  export default failed