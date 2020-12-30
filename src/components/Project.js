import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import github from '../img/github_light.png';

class Project extends React.Component {
	constructor(props) {
		super();
		this.baseGitHubUrl = 'https://github.com/Apurv-Deshpande/';
	}

	render() {
		// style the github button and logo
		let btn_github = null;
		if (!this.props.data.privateRepo) {
			btn_github = (
				<Button
					target="_blank"
					rel="noopener noreferrer"
					style={{ margin: '5px' }}
					href={this.baseGitHubUrl + this.props.data.slug}
				>
					<img
						style={{
							height: '1rem',
							transform: 'translateY(-2px)'
						}}
						src={github}
						alt=""
					/>
					<span style={{ marginLeft: '5px' }}>GitHub</span>
				</Button>
			);
		}

		// create tech tags that tell the user what was used to create this project
		let tech_tags = [];
		for (let i = 0; i < this.props.data.tech.length; i++) {
			tech_tags.push(
				<span key={i} className="tech-tag">
					<span className={`tech-tag-icon tech-tag-${this.props.data.tech[i].toLowerCase()}`} />
					{this.props.data.tech[i]}
				</span>
			);
		}

		let col_bg = this.props.light ? 'light' : 'dark';
		let col_text = this.props.light ? 'black' : 'white';
		let col_border = this.props.light ? 'light' : 'dark';
		let col_back = this.props.light ? '' : '#383839';

		return (
			<Card bg={col_bg} text={col_text} border={col_border}>
				<Card.Img variant="top" src={this.props.data.header_img_url} />
				<Card.Body style={{ backgroundColor: col_back }}>
					<Card.Title>{this.props.data.name}</Card.Title>
					<Card.Text>{this.props.data.description}</Card.Text>
					{tech_tags}
					<br />

					{btn_github}
				</Card.Body>
			</Card>
		);
	}
}

export default Project;
