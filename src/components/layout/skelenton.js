import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import person from '../../image/person2.jpg'

const ReactSkelenton = () => {
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        // @desc creating a little delay before we render proper content to the user by changing the state
        const timer = setTimeout(() => {
            setLoading(false);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h2> React Skelenton </h2>
            <p style={{fontSize: "14px"}} className="w-md-75 p-4 bg-white rounded">
                React skelenton enable us to make very attractive loading effect rather than the normal loader we are used to.
            </p>
            <div className="row justify-content-around">
                <div className="col-md-3 border rounded p-2 bg-white shadow mb-2">
                    {loading? (<ReactLoader />) : <Content /> }
                </div>

                <div className="col-md-3  border rounded p-2 bg-white shadow mb-2">
                    {loading? (<ReactLoaderTheme/>) : <Content /> }
                </div>

                <div className="col-md-3  border rounded p-2 bg-white shadow mb-2">
                    {loading? 
                        (<SkeletonTheme color="green" highlightColor="white ">
                        {/* @params and props to give size if the size is not specified
                        height = (prop value)
                        width = (prop value)
                        */}
                            <Skeleton circle={true} height={50} width={50} />
                                <Skeleton />
                                <Skeleton />
                        </SkeletonTheme>) :
                        <div>
                            <img src={person} className="rounded-circle w-25" alt="Logo here" />
                            <div className="ml-2">
                                <p> Hey Lady </p>
                                <span className="text-secondary"> sexylady@unsplash.com </span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ReactSkelenton



// @Desc  creating loader sample
export const ReactLoader = () => {
    return (
        <div>
            <div style={{ fontSize: 20, lineHeight: 2}}>
                <h1>{ <Skeleton duration={3} />}</h1>
                <Skeleton count={3} />
            </div>
        </div>
    )
}

// @Desc  creating loader sample with Theme
export const ReactLoaderTheme = () => {
    return (
        <div>
            <SkeletonTheme color="orange" highlightColor="#444">
            <h3>{ <Skeleton duration={3} /> }</h3>
            <p>
                <Skeleton count={4} />
            </p>
            </SkeletonTheme>
        </div>
    )
}

// @Desc content to render after finish loading
export const Content = () => {
    return (
        <div>
            <h3> Header </h3>
            <span className="text-secondary"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
    )
}