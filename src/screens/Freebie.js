import React, {Component} from 'react';

class Freebie extends Component {
	render() {
		return (
			<div>
				<div className="flex">
					<div>
						<img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""
						     loading="lazy"
						     className="w-48 h-48 rounded-3xl border-none bg-white shadow-sm object-cover object-center"/>
					</div>
					<div className="pl-4 flex-1">
						<div className="font-semibold text-xl text-coolGray-700 leading-10">Application name</div>
						<div className="text-sm text-coolGray-600 leading-5 w-3/4">App that allows you to download videos from youtube</div>
					</div>
					<div className="w-32 flex-shrink-0">
						<div className="text-sm text-coolGray-600 mb-2">Download for</div>
						<div className="bg-coolGray-200 border border-coolGray-300 hover:border-amber-500 hover:bg-amber-400 transition duration-200 text-sm rounded py-2 px-2 cursor-pointer mb-3">Windows</div>
						<div className="bg-coolGray-200 border border-coolGray-300 hover:border-amber-500 hover:bg-amber-400 transition duration-200 text-sm rounded py-2 px-2 cursor-pointer mb-3">macOS</div>
						<div className="bg-coolGray-200 border border-coolGray-300 hover:border-amber-500 hover:bg-amber-400 transition duration-200 text-sm rounded py-2 px-2 cursor-pointer mb-3">Linux</div>
					</div>
				
				</div>
			</div>
		);
	}
}

export default Freebie;