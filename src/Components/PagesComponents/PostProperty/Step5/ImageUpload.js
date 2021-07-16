import React from "react";

class ImageUpload extends React.Component {
  state = {
    files: [],
  };

  fileSelectedHandler = (e) => {
    this.setState({ files: [...this.state.files, ...e.target.files] });
  };

  render() {
    return (
      <form>
        <div>
          <h2>Upload images</h2>
        </div>
        <h3>Images</h3>
        <input type="file" multiple onChange={this.fileSelectedHandler} />
      </form>
    );
  }
}

export default ImageUpload;
