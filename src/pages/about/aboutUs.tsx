import  "./about.css";
const AboutUs: React.FC = () => {
  return (
    <div className="overflow-y-auto h-screen p-4">
      <section className="mt-20 relative">
        <h1 className="bg-black text-head text-3xl mb-6 font-audiowide md:mr-40 lg:mr-96 xl:mr-[800px]">
          ABOUT US
        </h1>
      </section>

      <div className="container mx-auto mb-8 text-justify text-xl mt-10 px-4 md:px-20 lg:px-40 mt-20">
        <p className="text-gray-300 Name">
        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
        </p>
      </div>

      <div className="container mx-auto mb-8 text-justify text-xl mt-20 px-4 md:px-20 lg:px-40 " style={{marginRight:"500px"}}>
        <h2 className="text-3xl font-bold text-green-500 mb-4 md:ml-10 lg:ml-20 headd">
          HOW WE FUNCTION?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8 md:ml-10 lg:ml-20 Name">
        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A pa
        </p>
      </div>

      <div className="container mx-auto mb-8 text-justify text-xl px-4 md:px-20 lg:px-40 mr-80">
        <h2 className="text-3xl font-bold text-green-500 mb-4 md:ml-10 lg:ml-20 headd">
          WAHT DO WE DO ?
        </h2>
        <ul className="text-gray-300 list-disc list-inside leading-relaxed md:ml-10 lg:ml-20 Name">
          <li>Learning & Researching on various Cyber Security fields</li>
          <li>Participating & organizing CTFs across the world</li>
          <li>Organizing workshops & training programmes</li>
          <li>Contributing to open-source security tools</li>
          <li>Designing and testing hardware security modules</li>
          <li>Collaborating in international cyber-security research projects</li>
          <li>Penetration testing, bug-bounty hunting & submitting CVEs</li>
          <li>Providing Cyber Security Consultancy Services</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

