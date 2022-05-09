// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import SimpleImage from './simple-image';
// const Marker = require('@editorjs/marker');

const CustomMarker = require('editor-js-custom-marker');
const Quote = require('@editorjs/quote');
const Paragraph = require('editorjs-paragraph-with-alignment');


const Configuration = () => {

  // const [editor, seteditor] = useState({});

  // const textFields = async () => {
  //   await axios.get("")
  //   .then(response => {
  //     console.log(response.data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }
  
  // useEffect(() => {
  //   textFields()
  // }, [])

  return ({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
      autofocus: true,

     /**
      * Available Tools list.
      * Pass Tool's class or Settings object for each Tool you want to use
      */
      tools: {
        // image: {
        //   class: SimpleImage,
        //   inlineToolbar: true
        // },
        redMarker: CustomMarker("green", "rgb(37, 202, 37)", "bg-green", "span"),
        blueMarker: CustomMarker("red", "red", "bg-red", "span"),
        redFontMarker: CustomMarker("red", "red", "red", "span", true), // font color
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Comentario',
            captionPlaceholder: 'Comentario',
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        
        
        // Marker: {
        //   class: Marker,
        //   shortcut: 'CMD+SHIFT+M',
        // }
      },
     /**
      * Previously saved data that should be rendered
      */
    //  onReady: () => {
    //     console.log('Editor.js is ready to work!')
    //  },
    //  onChange: (api, event) => {

    //     console.log('Now I know that Editor\'s content changed!', event)
    // },
    data:
        {
            "time": 1643195431504,
            "blocks": [
                {
                    "id": "o72AO0sY-1",
                    "type": "paragraph",
                    "data": {
                        "text": "Ingrese su texto"
                    }
                },
                // {
                //     type: "image",
                //     data: {
                //       url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
                //       caption: 'Here is a caption field',
                //       withBorder: false,
                //       withBackground: true,
                //       stretched: false
                //     }
                //   }
            ],
            "version": "2.22.2"
        }
  });

};

export default Configuration;
