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

  const props = {
    name: 'file',
    accept: '.pdf',
    multiple: false,
    request:'',
    // customRequest: (e)=>{console.log('aha')},
    onChange(info) {
      console.log(info)
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
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
    </div>
  )
}