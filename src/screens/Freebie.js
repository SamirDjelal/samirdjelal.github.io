import React, {Component} from 'react';

class Freebie extends Component {
	render() {
		return (
			<div>
				<div className="flex">
					<div>
						<img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""
						     loading="lazy"
						     className="w-56 h-56 rounded-3xl border-none bg-white shadow-sm object-cover object-center"/>
					</div>
					<div className="pl-4 flex-1">
						<div className="font-semibold text-lg text-coolGray-900 leading-10">Application name</div>
						<div className="text-sm text-coolGray-800 leading-5 h-16">App that allows you to download videos from youtube</div>
						<div className="text-sm text-coolGray-800 leading-5">Platform: Windows/macOS/Linux</div>
						<div>version</div>
					</div>
					<div className="w-32 flex-shrink-0">download</div>
				
				</div>
			</div>
		);
	}
}

export default Freebie;