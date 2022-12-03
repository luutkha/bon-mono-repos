import { Editor } from '@tinymce/tinymce-react';
import parse from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
const Button = styled.button`
font-size: 1em;
margin-top: 1em;
margin-right: 1em;
padding: 0.5em 1em;
border-radius: 3px;
background-color: #f0e9ff;
color: #6924fc;
font-family: 'UTM avo Bold';
border: 0px;
&:hover {
  background-color: #6924fc;
  color: white;
;
}
`;

const Preview = styled.div`
  margin: 1em;
  padding: 1em 0px;
  border-radius: 5px;
  background-color: black;
  width: 100%;

` ;
const BlogEditor = () => {

    const editorRef = useRef<any>(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setdata(editorRef.current.getContent())
        }
    };
    const [data, setdata] = useState<string>('')
    useEffect(() => {

    }, [])

    return (
        <div>
            <Editor
                apiKey='your-api-key'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>Nhập nội dung blog ở đây...</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <Button onClick={log}>Lưu</Button>
            <Button onClick={log}>Xoá toàn bộ</Button>

            <Preview    >
                {parse(data)}
            </Preview>
        </div>
    )
}

export default BlogEditor