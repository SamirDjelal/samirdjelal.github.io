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
			const navigationCircle = document.getElementById('navigation-circle');
			const navigationMenu = document.getElementById('navigation-menu');
			// const X = navigationCircle.getBoundingClientRect().left - (navigationCircle.getBoundingClientRect().width / 2);
			// const Y = navigationCircle.getBoundingClientRect().top - (navigationCircle?.getBoundingClientRect().height / 2);
			const {
				left: circleLeft,
				top: circleTop,
				width: circleWidth,
				height: circleHeight
			} = navigationCircle.getBoundingClientRect();
			
			
			document.addEventListener('mousemove', function (e) {
				if (e.clientY > navigationMenu.getBoundingClientRect().height) {
					navigationCircle.style.opacity = '0';
				} else {
					navigationCircle.style.opacity = '1';
					navigationCircle.style.left = `${e.clientX - (circleWidth / 2)}px`;
					navigationCircle.style.top = `${window.scrollY + (e.clientY - (circleHeight / 2))}px`;
					navigationMenu.style.left = `-${navigationCircle.style.left}`;
					if (e.clientY - (circleHeight / 2) >= 0) navigationMenu.style.top = `-${navigationCircle.style.top}`;
					else navigationMenu.style.top = `${Math.abs(e.clientY - (circleHeight / 2))}px`;
					
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
			<div className="relative overflow-hidden">
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
		     className={`select-none ${main === false && 'absolute opacity-0 cursor-default absolute z-10 overflow-hidden w-16 h-16 rounded-full text-white '} ${(main === false && !dark) && 'dark'}`}>
			<div id="navigation-menu" className={`${main === false && 'absolute'} w-screen bg-white dark:bg-yellow-400 shadow-sm dark:shadow-none text-gray-900 dark:text-white`}>
				<div className="max-w-4xl mx-auto py-6 px-4 flex justify-between items-center">
					<div className="font-light uppercase text-xl">Samir Djelal</div>
					<div id="menu-wrapper" className="text-sm relative select-none" style={{textShadow: main ? '1px 1px 1px rgba(0,0,0,0)' : '1px 1px 1px rgba(0,0,0,0.3)'}}>
						<div className={`indecator ${main === false ? 'bg-orange-400' : 'bg-amber-300'} w-8 h-1 top-5 absolute animation duration-300 ease-in-out`}/>
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

