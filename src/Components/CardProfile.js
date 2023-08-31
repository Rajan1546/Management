import React, { Component } from 'react';
import './CardProfile.css'; // Import your CSS file

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} alt="Uploaded" />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

// const Name = ({ onChange, value }) => (
//   <div className="field">
//     <label htmlFor="name">name:</label>
//     <input
//       id="name"
//       type="text"
//       onChange={onChange}
//       maxLength="25"
//       value={value}
//       placeholder="Alexa"
//       required
//     />
//   </div>
// );

// const Status = ({ onChange, value }) => (
//   <div className="field">
//     <label htmlFor="status">status:</label>
//     <input
//       id="status"
//       type="text"
//       onChange={onChange}
//       maxLength="35"
//       value={value}
//       placeholder="It's a nice day!"
//       required
//     />
//   </div>
// );

const Profile = ({ onSubmit, src, name, status }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img htmlFor="photo-upload" src={src} alt="Uploaded" />
        </div>
      </label>
      {/* <Name value={name} />
      <Status value={status} />
      <button type="submit" className="save">
        Save
      </button> */}
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      {/* <h1>Profile Card</h1> */}
      {children}
      {/* <button type="submit" className="save">
        Save
      </button> */}
    </form>
  </div>
);

class CardProfile extends Component {
  state = {
    file: '',
    imagePreviewUrl:
      'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    name: '',
    status: '',
    active: 'edit',
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log('Form submitted');
  };

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;
    return (
      <div className='Profile'>
        {active === 'edit' ? (
          <Edit onSubmit={this.handleSubmit} active={active}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={status}
          />
        )}
      </div>
    );
  }
}

export default CardProfile;
