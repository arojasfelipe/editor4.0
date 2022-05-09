import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import './styles/containerEditor.css';

const Editor = () => {

    const [editor, seteditor] = useState({});


    const textFields = async () => {
      await axios.get("http://localhost:4000/blocks")
      .then(response => {
        const editor = new EditorJS(Configuration(response.data));
        seteditor(editor);
      }).catch(error => {
        console.log(error)
      })
    }

    useEffect(() => {
        textFields()
    }, []);


    const onSave = () => {
        editor.save().then((outputData) => {
            console.log('Document data: ', outputData)
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    };


    return (
        <div style={{margin:"20px"}}>
            <h1>Document</h1>
            <div id="editorjs" className='container-editor'/>
            <button onClick={onSave}>Save</button>
        </div>
    );
};

export default Editor;
