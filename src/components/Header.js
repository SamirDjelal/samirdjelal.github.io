import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPathname: ''
		}
		this.indecator = this.indecator.bind(this);
	}
	
	componentDidMount() {
		this.indecator();
		setTimeout(function () {
			document.addEventListener('mousemove', function (e) {
				const navigationCircle = document.getElementById('navigation-circle');
				const navigationMenu = document.getElementById('navigation-menu');
				const X = navigationCircle?.clientLeft - (navigationCircle?.clientWidth / 2);
				const Y = navigationCircle?.clientTop - (navigationCircle?.clientHeight / 2);
				if (e.clientY + Y > navigationMenu?.clientHeight) {
					navigationCircle.style.opacity = '0';
				} else {
					navigationCircle.style.opacity = '1';
					navigationCircle.style.left = `${e.clientX + X}px`;
					navigationCircle.style.top = `${e.clientY + Y}px`;
					navigationMenu.style.left = `-${navigationCircle.style.left}`;
					if (e.clientY + Y >= 0) navigationMenu.style.top = `-${navigationCircle.style.top}`;
					else navigationMenu.style.top = `${-(e.clientY + Y)}px`;
					
				}
			})
		}, 0);
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.currentPathname !== this.props.history.location.pathname) {
			this.indecator();
			return true;
		}
		return false;
	}
	
	render() {
		return (
			<div className="relative">
				<Navigation main={false}/>
				<Navigation main={true}/>
			</div>
		);
	}
	
	indecator() {
		const indecator = document.getElementsByClassName('indecator');
		let number = ['/', '/work', '/freebie', '/contact', '/about'].indexOf(this.props.history.location.pathname);
		let name = ['home', 'work', 'freebie', 'contact', 'about'];
		if (number >= 0) {
			const menuWrapper = document.getElementById('menu-wrapper');
			const el = document.getElementById(name[number]);
			const left = el.getBoundingClientRect().left - menuWrapper.getBoundingClientRect().left;
			indecator[0].style.width = `${el.offsetWidth}px`;
			indecator[0].style.left = `${left}px`;
			indecator[1].style.width = `${el.offsetWidth}px`;
			indecator[1].style.left = `${left}px`;
			this.setState({currentPathname: this.props.history.location.pathname});
		}
	}
}

const Navigation = ({main}) => {
	const dark = document.body.classList.hasOwnProperty('dark')
	return (
		<div id="navigation-circle"
		     className={`select-none ${main === false && 'opacity-0 cursor-default absolute z-10 overflow-hidden w-16 h-16 rounded-full text-white '} ${(main === false && !dark) && 'dark'}`}>
			<div id="navigation-menu" className={`${main === false && 'absolute'} w-screen bg-white dark:bg-gray-700 shadow-sm dark:shadow-none text-gray-900 dark:text-white`}>
				<div className="max-w-4xl mx-auto py-6 px-4 flex justify-between items-center border-b border-transparent dark:border-gray-800">
					<div className="font-light uppercase text-xl">Samir Djelal</div>
					<div id="menu-wrapper" className="text-sm relative select-none">
						<div className={`indecator ${main === false ? 'bg-red-400' :  'bg-amber-300'} w-8 h-1 top-5 absolute animation duration-300 ease-in-out`}/>
						<Link id="home" to="/" className="ml-4 px-0.5">Home</Link>
						<Link id="work" to="/work" className="ml-4 px-0.5">Work</Link>
						<Link id="freebie" to="/freebie" className="ml-4 px-0.5">Freebie</Link>
						<Link id="contact" to="/contact" className="ml-4 px-0.5">Contact</Link>
						<Link id="about" to="/about" className="ml-4 px-0.5">About</Link>
					</div>
				</div>
			</div>
		</div>
	);
}


export default withRouter(Header);

