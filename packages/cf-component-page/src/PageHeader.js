import React from 'react';

import PropTypes from 'prop-types';

class PageHeader extends React.Component {
  render() {
    return (
      <header className="cf-page__header">
        <h1 className="cf-page__title">{this.props.title}</h1>
        {this.props.subtitle &&
          <h2 className="cf-page__subtitle">{this.props.subtitle}</h2>}
      </header>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default PageHeader;
