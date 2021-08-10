import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderBlogs = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountBlogs = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Blogs-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
