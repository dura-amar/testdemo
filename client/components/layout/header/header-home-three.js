/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
 import {
// 	BlogDropdownMenus,
// 	ContactDropdownMenus,
// 	DemoDropdownMenus,
// 	ElementsMegaMenu,
	PagesDropdownMenus,
 } from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";
import Web3 from 'web3';

export default function HeaderHomeThree() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [account,setAccount]=useState('');

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const loadBlockchainData=async()=>{
		const web3=window.web3
		const accounts=await web3.eth.getAccounts()

		setAccount(accounts[0])
	}

	const connectWallet=async()=>{
		console.log("Inside connect.")
		try{
			if(window.ethereum){
			  window.web3=new Web3(window.ethereum)
			  await window.ethereum.enable()
			}
			else if(window.web3){
			  window.web3=new Web3(window.web3.currentProvider)
			}
			else{
			  window.alert('Non-Ethereum Browser Detected!')
			}
		  }
		  catch(err){
			console.log(err.message)
		  }
		  loadBlockchainData();
	}

	const scroll = useScroll();
	return (
		<header
			className={`site-header site-header--menu-right fugu--header-section fugu--header-three ${
				scroll ? "sticky-menu" : ""
			}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							<img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" />
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<NavItem navItemText="Home" />
								{/* <Link className="nav-link-item" href="/">Home</Link> */}
								{/* <Link href="/" className="nav-link-item ">Home</Link> */}
								<Link href="/about-us" className="nav-link-item ">About</Link>
								{/* <Link className="nav-link-item" menuItems={PagesDropdownMenus}>More</Link> */}
								<NavItem navItemText="More" menuItems={PagesDropdownMenus}/>
								<NavItem navItemText='Are you recruiter?'/>
								{/* <Link href="/about-us" className="nav-link-item ">Are you recuiter?</Link> */}
							</Navbar>
						</nav>
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex" onClick={connectWallet}>
						{account? <a className="fugu--btn fugu--menu-btn1">
							{account} 
						</a>: <a className="fugu--btn fugu--menu-btn1">
							Connect Wallet 
						</a>}
					</div>
					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
