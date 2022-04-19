import React from "react";

class VideoDetail extends React.Component {
	render() {
		const video = this.props.video;
		if (!video) return <div></div>;
		const videoSnippet = video ? video.snippet : "";
		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
		return (
			<div>
				<div className="ui embed">
					<iframe title="video player" src={videoSrc} />
				</div>
				<div className="ui segment">
					<h4 className="ui header">{videoSnippet.title}</h4>
					<p>{videoSnippet.channelTitle}</p>
				</div>
			</div>
		);
	}
}

export default VideoDetail;
