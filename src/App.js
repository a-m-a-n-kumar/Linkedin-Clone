import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import Widget from "./Widget";
function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					}),
				);
			} else {
				// use is logged out
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className="app">
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<SideBar />
					<Feed />
					<Widget />
				</div>
			)}
		</div>
	);
}

export default App;
