import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import apis from '../../../apis';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import CONFIG from '../../../config';

const FILE_PATH = CONFIG.FILE[process.env.REACT_APP_MODE || 'dev'];

const Wysiwyg = props => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );

  const [text, setText] = useState('');

  useEffect(() => {
    if (!props.value) return ;
    if (!text) {
      const blocksFromHtml = htmlToDraft(props.value);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState)
      setText(props.value)
    }
  }, [props.value])

  const onEditorStateChange = editorState => {
    const rawText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    
    setEditorState(editorState);
    props.onChange(rawText)
  };

  const onUploadHandler = async file => {
    let form = new FormData()

    form.append('file', file)

    try {
      let {data} = await apis.file.upload(form);
      console.log(data)

      return new Promise(
        (resolve, reject) => {
          resolve({ data: { link: `${FILE_PATH}${data.path}` } });
        }
      );
    } catch(err) {
      console.log(err);
    }

  }

  return (
    <div style={{height: '100%'}}>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar-class"
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
          image: {
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: onUploadHandler,
            previewImage: false,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
        }}
        placeholder="한글입력의 경우 정상적으로 저장되지 않을 수 있습니다."
        localization={{
          locale: 'ko',
        }}
      />
    </div>
  )
}

// value는 html 형태의 스트링을 받는다
// 입력이 이루어지면 onChange를 통해 상위 컴포넌트에게 알린다.
Wysiwyg.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Wysiwyg