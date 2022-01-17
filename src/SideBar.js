import React from "react";
import { Avatar } from "@material-ui/core";
import "./SideBar.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function SideBar() {
	const user = useSelector(selectUser);
	const recentItem = (topic) => (
		<div className="recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.unsplash.com/photo-1617435824047-e85931b1a0bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=""
				/>
				<Avatar src={user.photoUrl} className="sidebar__avatar">
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you?</p>
					<p className="sidebar__statnumber">546</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statnumber">1239</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("nextjs")}
				{recentItem("deeplearning")}
				{recentItem("augmentedreality")}
			</div>
		</div>
	);
}

export default SideBar;
