import React from 'react'

export default function Home() 
{
  return (
<div className="container py-4" id="home">
    <div className="bg-body-tertiary p-5 rounded">
        <div className="col-sm-8 py-5 mx-auto">
            <h1 className="display-5 fw-normal">Welcome to Henri Lehtonen's React application.</h1>
            
            <p>
            This React application is implemented with react-router v6 and react-bootstrap. 
            Click on "Music groups" in the header to find  fetched data from the remove WebApi bellow.
            </p>
            <p>
                <a className="btn btn-primary" href="https://appmusicwebapinet8.azurewebsites.net/swagger/index.html" role="button">AppMusic WebApi</a>
            </p>
        </div>
    </div>
</div>
  )
}
