import React from 'react';


export default function MusicGroupList(props)
{
    const data = props.serviceData?.pageItems;

    
    return (
        <>
        
        <div className="row mb-2 text-center">
            <div className="col-md-6 themed-grid-col themed-grid-head-col">Music Group:</div>
        </div>
        {data?.map((row, idx) => (

            //assign the id to the row and the eventhandler from props
            <div className="row mb-2 text-center" 
                >

                <div className="col-md-6 themed-grid-col"
                key={row.musicGroupId} 
                data-rowitemid={row.musicGroupId} 
                onClick={props.onClick}>
                    {row.name}
                </div>
            </div>
        ))}
    </>
    );
}



