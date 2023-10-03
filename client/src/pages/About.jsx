const About = () => {
  return (
    <div className='p-4 md:px-36 md:py-16 dark:text-white space-y-5'>
      <h1 className='text-4xl font-semibold'>
        Notebook App - Notily
      </h1>
      <p className='text-lg'>
        Notebook app to add, manage and organize group of markdown based notes.
      </p>
      <div>
        <h2 className='text-xl font-medium mb-2'>Build With</h2>
        <ul className='list-disc space-y-1 ml-4 text-lg'>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default About;