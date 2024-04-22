import React from 'react'

export default function MusicGroupDetailsView(props) {
  
  const musicGroup = props;
  
  
    return (

      <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
            <div className="col-md-7 col-lg-10">
                <form className="needs-validation" novalidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="groupName" className="form-label">Group Name</label>
                            <p className="form-control" id="groupName">{musicGroup.data.name}</p>
                        </div>

                        <div className="col-sm-6">
                            <label for="genre" className="form-label">Genre</label>
                            <p className="form-control" id="genre">{musicGroup.data.strGenre}</p>
                        </div>

                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <label for="established" className="form-label">Established Year</label>
                            <p className="form-control" id="established">{musicGroup.data.establishedYear}</p>
                        </div>
                    </div>
                    <div className="row g-1">
                      <h3 className="pb-2">Artists</h3>
        
                      <div className="row mb-2 text-center">
                        <div className="col-md-12 themed-grid-head-col">Name</div>
                      </div>

                      {musicGroup.data.artists.map(artist => (
                        <div className="row mb-2 text-center" id="artistList">
                        <div className="col-md-12 themed-grid-col">{artist.firstName} {artist.lastName}</div>
                      </div>
                      ))}

                    </div> 
                    <div className="row g-1" id="albumList">
                      <h3 className="pb-2">Albums</h3>
        
                      <div className="row mb-2 text-center">
                          <div className="col-md-10 themed-grid-head-col">Name</div>
                          <div className="col-md-2 themed-grid-head-col">Year</div>
                      </div>

                      {musicGroup.data.albums.map(album => (
                        <div className="row mb-2 text-center">
                          <div className="col-md-10 themed-grid-col">{album.name}</div>
                          <div className="col-md-2 themed-grid-col">{album.releaseYear}</div>
                      </div>
                      ))}

                      
                    </div>                      
                </form>
            </div>
          </div>
      
  )
}