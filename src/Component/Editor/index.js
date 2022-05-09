import React, { useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import './styles/containerEditor.css';

const Editor = (props) => {

    const [editor, seteditor] = useState({});

    useEffect(() => {
        const editor = new EditorJS(Configuration());
        seteditor(editor);
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
