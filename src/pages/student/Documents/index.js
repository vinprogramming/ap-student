/**
 * 
 * @returns {reactNode}
 */
import { Layout } from 'antd';
import { useState } from 'react';
import './style.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';



export default function Documents() {
  const { Dragger } = Upload;
  const [selectedFile, setselectedFile] = useState()
  const CustomRequest=(e)=>{
    const formData = new FormData();
    formData.append('File', selectedFile);
    console.log(formData);
  }
  const handleChange = (e) => {
    if (e.target.files[0]) //if user has selected multiple files, we want 1st one only.
    {
      setselectedFile(e.target.files[0])
    }
  }
  const props = {
    name: 'file',
    accept: '.pdf',
    headers:{
      "content-type":"application/pdf",
    },
    multiple: false,
    action:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/studentupload",
    // customRequest:(e)=>{
    //   const formData = new FormData();
    //   formData.append('File', selectedFile);
    //   console.log(formData);
    //   fetch(
    //     'https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/studentupload',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify(formData),
    //     }
    //   )
    //     .then((response) => response)
    //     .then((result) => {
    //       console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // },
    onChange(info) {
      console.log(info)

    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div className="Documents" style={{ marginTop: '1.5em' }}>
      <Dragger {...props} >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      <input id="fileinput" type="file" accept=".gif,.jpg,.jpeg,.png" onChange={handleChange} />
    </div>
  )
}