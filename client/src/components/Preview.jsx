import ReactMarkdown from 'react-markdown'

const Preview = ({ body }) => {
  return (
    <div className='prose border border-gray-300 bg-gray-50 rounded-md h-96 p-3 min-w-full overflow-y-auto break-words dark:bg-gray-800 dark:border-gray-900 dark:prose-headings:text-white dark:prose-p:text-white dark:prose-a:text-blue-400 dark:prose-pre:bg-gray-700 dark:prose-li:text-white dark:prose-strong:text-white dark:prose-code:text-gray-300'>
      <ReactMarkdown children={body}></ReactMarkdown>
    </div>
  );
}

export default Preview;