import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
	const newsArticle = (heading, subtitle) => (
		<div className="widget__article">
			<div className="widgets__articleleft">
				<FiberManualRecordIcon />
			</div>

			<div className="widgets__articleright">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className="widget">
			<div className="widget__header">
				<h2>Linkedin News</h2>
				<InfoIcon></InfoIcon>
			</div>

			{newsArticle(
				"How to stick to your biggest goals",
				"1d ago • 2,126 readers",
			)}
			{newsArticle("Do CEOs want a lockdown?", "1h ago • 310 readers")}
			{newsArticle(
				"Using a job offer to get a pay hike",
				"9d ago • 16,366 readers",
			)}
			{newsArticle("It's raining unicorns", "1h ago • 192 readers")}
			{newsArticle(
				"What burnout does to your health",
				"2d ago • 15,424 readers",
			)}
		</div>
	);
}

export default Widget;
