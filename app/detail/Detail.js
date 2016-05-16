import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class DetailContainer extends Component {
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
        slat={this.props.currentLatitude}
        slng={this.props.currentLongitude}
      />
    );
  }
}

class Detail extends Component {
  render() {

    const {
      business,
      slat,
      slng,
    } = this.props;

    const phoneURL = 'tel://' + business.display_phone;
    const phoneLink = <a href={phoneURL}>{business.display_phone}</a>;
    const dlat = business.location.coordinate.latitude;
    const dlng = business.location.coordinate.longitude;
    const mapURL = 'comgooglemaps://?saddr=' + slat + ',' + slng + '&daddr=' + dlat + ',' + dlng + '&directionsmode=driving';
    const mapLink = <a href={mapURL}>{business.location.display_address.join(', ')}</a>;

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
                    subtitle={mapLink}
                  />}
        >
          <img src={business.image_url.replace('ms.jpg', 'ls.jpg')} />
        </CardMedia>

        <CardTitle
          subtitle={phoneLink}
          expandable={true}
        />

        <CardText expandable={true}>
          {business.snippet_text}
        </CardText>

      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLatitude: state.search.currentLatitude,
    currentLongitude: state.search.currentLongitude,
  };
}

export default connect(mapStateToProps)(DetailContainer);
