// import SimpleImage from './simple-image';
// const Marker = require('@editorjs/marker');

const CustomMarker = require('editor-js-custom-marker');
const Quote = require('@editorjs/quote');
const Paragraph = require('editorjs-paragraph-with-alignment');
const Header = require('@editorjs/header');


const Configuration = (datas) => {
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
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3
          }
        }
        
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
            "blocks": datas,
            "version": "2.22.2"
        }
  });

};

export default Configuration;
