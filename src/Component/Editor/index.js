import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import './styles/containerEditor.css';

const Editor = () => {

    const [editor, seteditor] = useState({});
    const [blocks, setBlocks] = useState([{}]);
    const [value, setValue] = useState('');


    const textFields = async () => {
      await axios.get("http://localhost:4000/blocks")
      .then(response => {
        const editor = new EditorJS(Configuration(response.data));
        seteditor(editor);
        setBlocks(response.data);
      }).catch(error => {
        console.log(error)
      })
    }

    useEffect(() => {
        textFields()
    }, []);


    const onSave = async () => {
      try {
        const response = await editor.save()

        const selectedBlock = response.blocks.filter(block => block.data.text.indexOf('</span>') !== -1)

        if(selectedBlock.length !== 0) {
          if(value === '') {
            alert('Y el comentario?')
            return
          }
        }

        if(value !== '') {
          if(selectedBlock.length === 0) {
            alert('No has selecciona lo que quieres comentar')
            return
          }
        }
        
        const dataBlock = selectedBlock[0]
        
        const proceso = await blocks.blocks.map(block => {
          if(block.id === dataBlock.id) {
            const captions = block.data.caption
            block.data.caption = [...captions, {
              autor: 'yo',
              comentario: value,
              text: dataBlock.data.text
            }]
            axios.put('http://localhost:4000/blocks', {
              "time": 1652112633831,
              "blocks": [block],
              "version": "2.24.3"
            })
            return true
          }
        })
        
        if(proceso) {
          return
        }

        console.log('paso')

        dataBlock.data.caption = [{
          autor: 'yo',
          comentario: value,
          text: dataBlock.data.text
        }]

        const respuesta = await axios.put('http://localhost:4000/blocks', {
          "time": 1652112633831,
          "blocks": [dataBlock],
          "version": "2.24.3"
        })

        console.log(respuesta, 'respuesta')
        console.log(dataBlock, 'bloque')
        console.log(response, 'edito')
        console.log(blocks, 'db')
      } catch (error) {
        console.log(error)
      }
    }




    const handleChange = (event) => {
      setValue(event.target.value);
    };


    return (
        <div style={{margin:"20px"}}>
            <h1>Document</h1>
            <div id="editorjs" className='container-editor'/>

            {/* Text area */}
            <div>
              <textarea 
                id="w3review" 
                name="w3review" 
                rows="4" 
                cols="50"
                placeholder="Agregue comentarios.."
                style={{marginTop: "30px"}}
                value={value}
                onChange={handleChange}
              >
              </textarea>
            </div>
            <button onClick={onSave}>Save</button>
        </div>
    );
};

export default Editor;

