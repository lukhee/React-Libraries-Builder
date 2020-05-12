import React, {useState} from 'react';
import { GithubPicker, CirclePicker, TwitterPicker  } from 'react-color'
import styled from 'styled-components'

const ColorContainer = styled.div`
    background: ${p=> p.color };
    padding: 20px;
    margin: 10px;
    color: white;
`

const ColorPicker = () => {
    const [bgColor, setBGColor] = useState({
        circleColor: '#c49bde',
        githubColor: '#fe30da',
        twitterColor: 'green',
    })

    const {circleColor, githubColor, twitterColor} = bgColor

    // @Desc  handler for circlecolor
    const handleCircleColorChange = (color) => setBGColor({...bgColor, circleColor: color.hex})

    // @Desc  handler for githubColor
    const handleGithubColorChange = (color) => setBGColor({...bgColor, githubColor: color.hex})

    // @Desc  handler for githubColor
    const handleTwitterColorChange = (color) => setBGColor({...bgColor, twitterColor: color.hex})

return (
    <div className="container px-0 pt-4">
        <h2> React Color Picker </h2>
        <p style={{fontSize: "14px"}} className="w-md-75 p-4 bg-white rounded">
            Color pickers is a very nice tools that aren't commonly used in a
            project. The color offers 13 different color pickers,which are based on
            well-known ones. For example the Chrone, sketch, Guthub and Photoshop
            Color Picker are available as React,js components and we will exploring
            some on this page.
        </p>

        <h4> Select Color </h4>
        <div className="row justify-content-between mb-3">
            <ColorContainer  color={circleColor}>
                <CirclePicker name="circle" onChangeComplete={handleCircleColorChange} />
                <p className="py-2">colorCode : {circleColor} </p>
            </ColorContainer>
            <ColorContainer  color={twitterColor}>
                <TwitterPicker name="circle" onChangeComplete={handleTwitterColorChange} />
                <p className="py-2">colorCode : {circleColor} </p>
            </ColorContainer>
            <ColorContainer  color={githubColor}>
                <GithubPicker onChangeComplete={handleGithubColorChange} />
                <p className="py-2"> colorCode : {githubColor} </p>
            </ColorContainer>
        </div>
        <div>
            <h2> Installation & Usage </h2>
            <p className="p-3 rounded bg-white"> npm install react-color --save </p>
        </div>
    </div>
    );
};

export default ColorPicker;