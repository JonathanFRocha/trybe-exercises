import React from 'react';

class DogViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      picture: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getPicture();
  }

  shouldComponentUpdate(nextProps, { picture }) {
    return !picture.includes('terrier');
  }

  componentDidUpdate() {
    const { picture } = this.state;
    localStorage.setItem('URL', picture);
    const dog = picture.split('/')[4];
    alert(dog);
  }

  async getPicture() {
    this.setState({ loading: true }, async () => {
      const headers = { Accept: 'application/json' };
      const response = await fetch('https://dog.ceo/api/breeds/image/random', headers);
      const { message } = await response.json();
      this.setState({
        picture: message,
        loading: false,
      });
    });
  }

  renderImage() {
    const { picture, loading } = this.state;
    if (loading) {
      return <h1>Loading</h1>;
    }
    return <img src={ picture } alt="Dog" />;
  }

  render() {
    return (
      <div>
        {this.renderImage()}
        <button onClick={ () => this.getPicture() } type="button">next dog</button>
      </div>
    );
  }
}

export default DogViewer;
