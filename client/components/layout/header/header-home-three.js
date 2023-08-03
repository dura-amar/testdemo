/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect} from "react";
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
import NFTicketContract from '../../../blockchain/NFTicket'

export default function HeaderHomeThree() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [account,setAccount]=useState('');
	const [userType,setUserType]=useState('');
	const [web3js,setWeb3]=useState(null);
	const [nfticket,setNfticket]=useState(null);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	useEffect(()=>{
		if(web3js && account) checkUser(account)
	})

	const checkUser=async(user)=>{
		const reply=await nfticket.methods.name().call()

		// const reply2=await nfticket.methods.getRole(user).call()
		console.log(reply)
	}

	const connectWallet=async()=>{
		console.log("Inside connect.")
		if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
			try{
				await window.ethereum.request({method:"eth_requestAccounts"})
				let web3js=new Web3(window.ethereum)
				setWeb3(web3js)

				const accounts=await web3js.eth.getAccounts()
				setAccount(accounts[0])

				const nfticket_temp=NFTicketContract(web3js)
				setNfticket(nfticket_temp)
			}
			catch(err){
				console.log(err)
			}
		}
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
