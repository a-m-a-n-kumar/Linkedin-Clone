import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
function Login() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();
	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profilePic: userAuth.user.photoUrl,
					}),
				);
			})
			.catch((error) => {
				alert(error);
			});
	};
	const register = () => {
		if (!name) {
			return alert("Please Enter a full name");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoUrl: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							}),
						);
					});
			})
			.catch((error) => alert(error));
	};
	return (
		<div className="login">
			<img
				src="https://www.pinclipart.com/picdir/middle/55-557165_graphic-transparent-library-file-logo-wikimedia-commons-transparent.png"
				alt=""></img>

			<form>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full Name(required if registering)"
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					type="text"
					placeholder="Profile pic URL(optional)"
				/>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					placeholder="Email"
				/>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					placeholder="Password"
				/>
				<button onClick={loginToApp}>Sign in</button>
			</form>
			<p>
				Not a member ?
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
