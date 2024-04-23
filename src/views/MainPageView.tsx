import React, {useState} from 'react'
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { Editor } from 'tinymce';

export const MainPageView = () => {
    const [content, setContent] = useState('');

    const handleEditorChange = (content: string, editor: Editor) => {
        setContent(content);
    };

    return (
        <TinyMCEEditor
            apiKey="implement-your-api-key-here"
            initialValue=""
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'codesample'
                ],
                codesample_languages: [
                    { text: 'HTML/XML', value: 'markup' },
                    { text: 'JavaScript', value: 'javascript' },
                    { text: 'CSS', value: 'css' },
                    { text: 'PHP', value: 'php' },
                    { text: 'Ruby', value: 'ruby' },
                    { text: 'Python', value: 'python' },
                    { text: 'Java', value: 'java' },
                    { text: 'C', value: 'c' },
                    { text: 'C#', value: 'csharp' },
                    { text: 'C++', value: 'cpp' },
                    { text: 'SQL', value: 'sql' },
                ],
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help' + ' | codesample',

            }}

            onEditorChange={handleEditorChange}
        />
    );
};