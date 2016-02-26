import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import Card from '../components/Card';

class IdeasList extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(Actions.addIdeas());
    }, 1000);

  }

  render() {
    return (
      <div>
        {this.renderLoading()}
        {this.props.ideas.data.map((idea, key) => {
          return <Card key={key} title={idea.title} detail={idea.detail} author={idea.author} />
        })}
      </div>
    );
  }

  renderLoading = () => {
    if (this.props.ideas.pending) {
      return (<div>Loading...</div>);
    }
  }

};

function mapStateToProps(store) {
  return {
    ideas: store.ideas
  }
}

export default connect(mapStateToProps)(IdeasList);
