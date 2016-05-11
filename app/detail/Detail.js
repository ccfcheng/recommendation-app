import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }

  render() {
    return (
      <Detail
        business={this.props.business}
        handleExpandChange={this.handleExpandChange}
      />
    );
  }
}

class Detail extends Component {
  render() {
    const {
      business,
    } = this.props;

    return (
      <Card
        expanded={this.props.expanded}
        onExpandChange={this.props.handleExpandChange}
      >

        <CardHeader
          title={business.name}
          subtitle={business.rating + ' stars, ' + business.review_count + ' reviews'}
          avatar={business.image_url.replace('ms.jpg', 'ss.jpg')}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardMedia
          expandable={true}
          overlay={<CardTitle
                    title={business.categories[0][0]}
                    subtitle={business.location.display_address.join(', ')}
                  />}
        >
          <img src={business.image_url.replace('ms.jpg', 'ls.jpg')} />
        </CardMedia>

        <CardTitle
          subtitle={business.display_phone}
          expandable={true}
        />

        <CardText expandable={true}>
          {business.snippet_text}
        </CardText>

      </Card>
    );
  }
}
