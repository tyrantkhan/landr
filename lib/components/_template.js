import React from 'react'

class Template extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/bundle.css"/>
          <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
            <div id="mount">
                  {this.props.children}
            </div>
            <script src="/bundle.js"></script>
        </body>
      </html>
    )

  }
}

export default Template
