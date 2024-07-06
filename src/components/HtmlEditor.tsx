import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const HtmlEditor: React.FC = () => {
    const [htmlContent, setHtmlContent] = useState<string>(`
<h1>Интерактивный редактор HTML с подсветкой синтаксиса</h1>
<p>Это пример интерактивного создания статьи посредством HTML-разметки.</p>
<ul>
    <li>Редактируйте HTML-код в левом окне.</li>
    <li>Смотрите отрендеренный HTML в правом окне.</li>
</ul>
<p>Вы можете добавлять свои элементы и стили:</p>
<pre><code>&lt;div style="color: red;"&gt;Красный текст&lt;/div&gt;</code></pre>
`);

  const handleEditorChange = (value: string | undefined) => {
    setHtmlContent(value || '');
  };

  return (
    <div style={{ display: 'flex', height: '90vh' }}>
      <div style={{ width: '50%', padding: '8px', background:'#1e1e1e'}}>
        <Editor
          defaultLanguage="html"
          defaultValue={htmlContent}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            wordWrap: "on",
          }}
          width={"50vw"}
        />
      </div>
      <div
        style={{
          width: '50%',
          border: '1px solid #ddd',
          padding: '10px',
          overflow: 'auto',
          backgroundColor: 'white',
          color: 'black'
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default HtmlEditor;
