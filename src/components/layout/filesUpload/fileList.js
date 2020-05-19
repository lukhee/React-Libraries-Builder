import React from 'react'
const FileList = ({list}) => {
    console.log(list)
    return (
        <>
        {list.length > 0 &&
            (<div>
                <h4> Uploaded Data </h4>
                {/* {list.map(loaded=>
                    <div>
                        <h5>  </h5>
                    </div>
                )} */}
            </div>)
            }
        </>
    )
}

export default FileList
