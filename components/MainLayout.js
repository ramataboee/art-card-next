/*import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;*/

import Header from "./Header";

export default class Layout extends React.Component {
  componentDidMount() {}

  componentsWillMount() {}

  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Header />
        <main>{children}</main>
        <footer>foot</footer>
        <style jsx>{`
          main {
            width: 85%;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }
}
