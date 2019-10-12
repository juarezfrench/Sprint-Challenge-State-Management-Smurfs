import React from "react";
import { Card, Button } from "semantic-ui-react";

const Smurf = props => {
	console.log("Smurf.js -> %cprops:", "color: darkMagenta", props);
	return (
        <div className="smurf-container">
			{/* <Card.Group className="card-group"> */}
			
            	<Card className="smurf-card">
					<Card.Content>
						<Card.Header>{props.smurf.name}</Card.Header>
						<Card.Meta>Smurf</Card.Meta>
						<Card.Description>
							{props.smurf.name} is {props.smurf.age} years old and about{" "}
							{Math.round(parseFloat(props.smurf.height))} inches tall.
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button basic color="yellow">
								Edit
							</Button>
							<Button basic color="red">
								Delete
							</Button>
						</div>
					</Card.Content>
				</Card>
			{/* </Card.Group> */}
		</div>
	);
};

export default Smurf;
