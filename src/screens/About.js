import React, {Component} from 'react';

class About extends Component {
	
	componentDidMount() {
		setTimeout(function () {
			const buttonWrapper = document.getElementById('buttonWrapper');
			const {
				left: wrapperLeft,
				top: wrapperTop,
				width: wrapperWidth,
				height: wrapperHeight
			} = buttonWrapper.getBoundingClientRect();
			
			const buttonCircle = document.getElementById('buttonCircle');
			const {
				left: circleLeft,
				top: circleTop,
				width: circleWidth,
				height: circleHeight
			} = buttonCircle.getBoundingClientRect();
			// const X =
			
			const buttonContent = document.getElementById('buttonContent');
			// console.log(buttonWrapper.offsetLeft, buttonWrapper.offsetTop)
			
			// console.log(buttonWrapper.clientWidth, buttonWrapper.clientHeight);
			
			document.addEventListener('mousemove', function (e) {
				// console.log()
				if ((e.clientX >= wrapperLeft - (circleWidth / 2) && e.clientX <= wrapperLeft + wrapperWidth + (circleWidth / 2)) && (e.clientY >= wrapperTop - (circleHeight / 2) && e.clientY <= wrapperTop + wrapperHeight + (circleHeight / 2))) {
					buttonCircle.style.opacity = '1';
					buttonCircle.style.left = `${(e.clientX - wrapperLeft) - (circleWidth / 2)}px`;
					buttonCircle.style.top = `${(e.clientY - wrapperTop) - (circleHeight / 2)}px`;

					buttonContent.style.left = `-${(e.clientX - wrapperLeft) - (circleWidth / 2)}px`;
					if ((e.clientY - wrapperTop) - (circleHeight / 2) >= 0) {
						buttonContent.style.top = `-${(e.clientY - wrapperTop) - (circleHeight / 2)}px`;
					}else{
						buttonContent.style.top = `${Math.abs((e.clientY - wrapperTop) - (circleHeight / 2))}px`;
					}
					
				}
			})
			
			
			// console.log(buttonCircle.offsetLeft, buttonCircle.offsetTop)
			
		}, 100)
	}
	
	render() {
		return (
			<div className="grid grid-cols-5 gap-6">
				{/*<img src="" alt=""/>*/}
				<div className="col-span-2 bg-amber-400 rounded-lg">image here</div>
				<div className="col-span-3">
					<p className="mb-3">Hello World 👋</p>
					<p className="mb-3">I'm Samir, an Algerian guy interested in everything related to Information Technologies.</p>
					<p className="mb-3">You can call me whatever you want! a full-stack developer,<br/>a UI / UX designer, a security guy.</p>
					<p className="mb-3">I make awesome apps for the Web, Desktop, and Mobile.</p>
					<p className="mb-3">Do you have a custom project you want to make? or you want to fix or edit your existing project?</p>
					
					<div id="buttonWrapper" className="overflow-hidden relative w-48 h-10 mb-4">
						{/*<div className="rounded-lg">*/}
						{/*	<button className="w-48 mb-4">better call samir</button>*/}
						{/*</div>*/}
						<div className="h-full">
							<button className="rounded-lg w-48 h-full bg-coolGray-200 text-sm">Better Call Samir</button>
						</div>
						<div id="buttonCircle" className="opacity-0 rounded-full w-10 h-10 overflow-hidden absolute top-0 left-10">
							<button id="buttonContent" className="rounded-lg absolute w-48 h-full bg-yellow-400 text-sm">Better Call Samir</button>
						</div>
					</div>
					
					<div className="font-mono text-xs">
						Email: samiir@hey.com <br/>
						Phone: +213696413091 <br/>
						Website: samirdjelal.com <span className="text-coolGray-500">&lt;- You are here now!</span>
					</div>
				</div>
			</div>
		);
	}
}

export default About;