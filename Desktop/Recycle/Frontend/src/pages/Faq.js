import React, { useState } from "react";
import FAQ from "../components/pageComponents/faqPage/faqDropdown";
import faqImg from './images/FaqImg.png';

export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "Do I need to clean my toys beforehand",
      answer:
        "It's appreciated but not necessary as we quality control and clean our items after receiving them.",
      open: true
        
    },
    {
      question: "Is there a weight limit",
      answer: "No there is not.",
      open: false
    },
    {
      question:
        "Can i recycle items other than toys",
      answer: "We only recycle toys, but you can recycle with our partner SRV.",
      open: false
    },
    {
      question:
        "How do i get my payment",
      answer: "It is given after the evaluation of your items at one of our drop off locations.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
        <div className="Container">
            <img className="FAQimg" src={faqImg} />
                <div className="faqs">
                    {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
        </div>            
    
    </>
  );
}