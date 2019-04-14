import React from 'react';
import gnomeService from '../services/gnome-service';

const withGnomes = (WrappedComponent) => {

  class withGnomes extends React.Component {

    state = {
      gnomes: [],
    }

    componentDidMount = () => {
      this.getGnomes();
    }

    getGnomes = async () => {
      try {
        const gnomes = await gnomeService.getGnomes();
        this.setState({ gnomes: gnomes.Brastlewark });
      } catch (err) {
        console.log(err)
      }
    }

    getByName = name => {
      const filter = this.state.gnomes.filter(gnome => gnome.name.trim().toLowerCase().includes(name.trim().toLowerCase().replace(',', '')));
      return filter[0];
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          getGnomes={this.getGnomes}
          getByName={this.getByName}
        />
      );
    }
  }

  return withGnomes;
};

export default withGnomes;