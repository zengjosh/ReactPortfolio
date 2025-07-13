import React from 'react';

// Define interfaces for data structure
interface TakeawayItem {
  text: string;
  children?: TakeawayItem[];
}

interface GuestSpeakerData {
  name: string;
  year: string;
  subheading?: string;
  takeaways: string | TakeawayItem[] | (string | TakeawayItem)[]; // Can be a string, a list of items, or a mixed array of strings and items
}

// Guest speaker data (extracted from HTML)
const guestSpeakers: GuestSpeakerData[] = [
  {
    name: "Todd Farrell",
    year: "2025",
    subheading: "",
    takeaways: [
      "Dr. Todd gave a presentation on jailbreaking LLMs, using Lakera AI's Gandalf tool to show how models could be prompted to bypass their instructions.",
      { text: "Learned how to create more secure LLMs, such as censoring the output, or using another model to double check the first output for another layer of security." },
      { text: "Showed how to create better prompts for certain types of responses, like mapping latters to numbers to get restricted information out of a model." },
      { text: "Explained general process for transfer learning through HuggingFace and using training data and fine-tuning." },
    ],
  },
  {
    name: "Adam Brown",
    year: "2024",
    subheading: "Workday Product Trainer",
    takeaways: [
      "Mr. Brown works as a Senior Product Instructor at Workday, a global company specializing in cloud-based software solutions for human capital management and financial management. In his talk, he:",
      { text: "Introduced Workday as a provider of enterprise cloud applications, and its large influence throughout the world" },
      { text: "Explained his job, which involves teaching new hires, customers, and consultants how to use Workday's software. To effectively do this, he creates learning materials to help people understand complex systems" },
      { text: "Went over the importance of Object Oriented Programming, as it helps employees navigate the software more effectively, even if they aren't full-time developers." },
      { text: "Discussed some basics of web services, which allow real-time data updates between Workday and external systems, and data management, which handles complex tasks like currency conversion and large-scale financial processing" },
    ],
  },
  {
    name: "Julie Kolesar",
    year: "2024",
    subheading: "Research Engineer in the Bioengineering Department at Stanford",
    takeaways: [
      "Ms. Kolesar has her Ph.D. in Mechanical Engineering from Ohio State University, and since 2014 has worked in the Human Performance Lab and studied the underlying mechanisms relating biomechanical changes with function and quality of life for individuals with musculoskeletal disorders and injuries. In her talk, she:",
      { text: "Introduced me to biomechanics and bioengineering and how it compares to engineering and biology" },
      { text: "Went over the human body and how it could be viewed as a the most complicated and imporant mechanical system" },
      { 
        text: "Showed common software used in the industry, like OpenSim and OpenCap",
        children: [
          { text: "She currently uses OpenCap and describes it as a great advance. Previous tools used for tracking human movement require markers placed on the human body, making it inaccessible to the majority of people, but OpenCap only requires two smartphones and is completely open-source" },
        ]
      },
      { text: "Discussed the responsibilities of a bioengineer, which include generating simulations of the body and investigating how and why people move the way they do, all for the purpose of improving function and quality of life" },
    ],
  },
  {
    name: "Radhika Paliwal",
    year: "2023, 2024",
    subheading: "Sales, Strategy, Operations at CheckBook",
    takeaways: [
      "Ms. Paliwal's covered many topics spanning from personal goals to finances. She graduated from Purdue with a degree in Electrical and Computer Engineering. Her careers also covers a variety of fields, including being an author, Software and Test Developer at Cummins, Technical Analyst at 3M, Associate System Engineer and Technical Solutions Architect at Cisco, and finally Sales, Strategy, Operations at Checkbook, where she currently works. From both her talks, I learned:",
      { text: "How to set goals smart by asking myself what fields in life I prioritize and where I would see myself in the future" },
      { text: "What to do for an interview and what to expect, such as only receiving one offer out of applying one hundred times" },
      { text: "What a successful elevator pitch would look like (should include background, demonstrate interesting in the company, and shouldn't be asking for opportunities)" },
      { text: "I should ask questions after an interview, as it demonstrates interest and is an opportunity to see if I want to work for the company" },
      { 
        text: "The five stages of an interview, which are:",
        children: [
          { text: "Greeting the interviewer with a handshake or wave if it's virtual" },
          { text: "Introducing yourself, which could be the elevator pitch, also make sure to make it interesting to make yourself stand out" },
          { text: "In the actual interview, be confident, ask clarifying questions, and be honest if you don't know" },
          { text: "Ask questions in the end, at least 1-2" },
          { text: "And finally ask when you can expect to hear back from them and thank them for their time" },
        ]
      },
      { 
        text: "Create a three slide google slides with a theme of the companies colors",
        children: [
          { text: "The first slide should be {Your Name} + {Company Name}" },
          { text: "The second slide should be your professional timeline" },
          { text: "The third slide should be a 30 60 90 plan, which is where you see yourself in 30 days, 60 days, and  90 days from today" },
          { text: "This helps differentiate you from other people" },
        ]
      },
      { text: "After the interview, a follow up email should be sent within 24 hours which should include a thank you, responses to questions you were unable to answer, and show appreciation" },
      { text: "The difference between checking, savings, and credit accounts" },
      { text: "When to use credit cards, the benefits of credit cards, and how it affects credit score" },
    ],
  },
  {
    name: "Lakshmi Hanspal",
    year: "2022",
    subheading: "Global Chief Security Officer at Amazon Devices & Services",
    takeaways: [
      "Ms. Hanspal deals with hardware-related areas such as tablets, satellites for internet connectivity, and self-driving technology, with a primary goal of ensuring security and enhancing customer trust. She discusses the fulfillment process for orders placed with Amazon, cloud computing, ambient intelligence, and the future of technology. Some takeaways I got from this talk were:",
      { text: "Cloud computing provides readily available and scalable computing resources for building and deploying applications and services, such as video games" },
      { text: "Elastic computing involves the ability to dynamically allocate and de-allocate computing resources based on demand" },
      { text: "Future of computing involves ambient intelligence, where systems understand context and deliver personalized experiences without explicit command" },
      { text: "Large language models like chatbots are becoming increasingly prevalent and require engineers for training and continuous improvement" },
      { text: "In computing, it's crucial to protect the entire chain of data custody, including customer identity, personalization, context data, and third-party sources" },
      { text: "Collaboration with regulators and adherence to compliance standards is required for ensuring trust and transparency in computing applications" },
    ],
  },
  {
    name: "Nathan Lewis",
    year: "2021",
    subheading: "Senior Engineer at PlayStation",
    takeaways: [
      "Mr. Lewis talked to us about his career path, and the work environment at Playstation, specifically on the development of Playstation Now. He attended UC Merced and received an internship at Playstation, where he was hired after graduating. Some key takeaways from his talk include:",
      { text: "The internship acts as an interview for Playstation, so performance is judged" },
      { text: "If deciding to decline a job offer until after graduating, the spot is not reserved" },
      { text: "Teams at Playstation may have different skill sets depending on their specific projects" },
      { text: "Junior engineers work on Android controller support and helped with code checks" },
      { text: "Software engineers primarily focused on the screen share feature and Linux" },
      { text: "Promotions come with a 15k-20k payraise" },
      { text: "PlayStation offers ample time off in exchange for lower pay" },
      { text: "Emphasizes work results over strict working hours" },
      { text: "Employees can take days off as long as no critical work is missed and they announce their vacation plans" },
    ],
  },
];

// Helper function to render takeaways, handling nested lists
const renderTakeaways = (takeaways: string | TakeawayItem[] | (string | TakeawayItem)[]) => {
  if (typeof takeaways === 'string') {
    return <p className="text-gray-700 mb-4 leading-relaxed">{takeaways}</p>;
  } else if (Array.isArray(takeaways)) {
    return takeaways.map((item, index) => {
      if (typeof item === 'string') {
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{item}</p>;
      } else {
        const renderListItems = (items: TakeawayItem[], isNested = false) => (
          <ul key={index} className={`list-disc text-gray-700 mb-4 ${isNested ? 'ml-6' : 'ml-4'}`}>
            {items.map((listItem, listIndex) => (
              <li key={listIndex} className={isNested ? 'mt-2' : 'mt-1'}>
                <p className="leading-relaxed inline">{listItem.text}</p>
                {listItem.children && renderListItems(listItem.children, true)}
              </li>
            ))}
          </ul>
        );
        return renderListItems([item]); // Pass the single TakeawayItem in an array to renderListItems
      }
    });
  }
  return null; // Should not happen with correct data structure
};

const GuestSpeakers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Assuming Header is rendered elsewhere, e.g., in App.tsx */}
      {/* <Header /> */}
      <div className="pt-20 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Guest Speakers</h1>
        
        <div className="space-y-12">
          {guestSpeakers.map((speaker: GuestSpeakerData, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {speaker.name}
                    <span className="text-gray-500 text-lg font-normal ml-2">{speaker.year}</span>
                  </h2>
                  {speaker.subheading && (
                    <h3 className="text-lg text-gray-600 mt-1">{speaker.subheading}</h3>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                 {renderTakeaways(speaker.takeaways)}
              </div>
            </div>
          ))}
        </div>

        {/* Assuming Footer is rendered elsewhere */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default GuestSpeakers; 