import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 30px;

  .file-upload_wrapper {
    position: relative;
    width: 180px;
    height: 200px;
    border-radius: 5px;
    border: 2px dashed #aeaeae;
  }

  .file-upload_label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 2rem;
    color: #aeaeae;
    cursor: pointer;
  }

  .file-upload_preview {
    width: 200px;
    height: 200px;
  }

  .file-upload {
    display: none;
  }
`;

const Index = ({ fileUrl = [], onChange, ...otherProps }) => {
  return (
    <Wrapper>
      <div class="file-upload_wrapper">
        <label class="file-upload_label">
          {fileUrl.length === 0 ? <span>+</span> : <></>}
          {fileUrl.length > 0 ? <img src={fileUrl} class="file-upload_preview" alt="uploaded_images" /> : ""}
          <input type="file" class="file-upload" accept="image/*" name="image" onChange={onChange} {...otherProps} />
        </label>
      </div>
    </Wrapper>
  );
};

export default Index;
