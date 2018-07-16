import React, { Component } from 'react';
import images from '../../images/';
require(`./skeletor-wat.less`);

class SkeletorWat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showVideo: false,
        };
    }

    handleButtonClick = () => {
        if (!this.state.showVideo) {
            this.setState({ showVideo: true });
        }
    }

    WatButton = (
        <button
            className="skeletor-wat__button"
            onClick={this.handleButtonClick}
            style={{
                backgroundImage: `url(${images.watGif})`
            }}
        />
    );

    WatVid = (
        <video
            src="https://s3-us-west-2.amazonaws.com/react-perf-presentation/WAT.mp4"
            className="skeletor-wat__video"
            autoPlay
            loop
        />
    );

    render() {
        return (
            <div>
                {!this.state.showVideo ? this.WatButton : this.WatVid}
            </div>
        );
    }
}

export default SkeletorWat;
