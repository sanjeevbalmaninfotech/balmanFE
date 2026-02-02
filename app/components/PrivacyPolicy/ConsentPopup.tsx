import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

type Category = {
  id: string;
  title: string;
  description: string;
  locked?: boolean;
};

type ToggleStates = Record<string, boolean>;

const ConsentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    const saved = localStorage.getItem("user_cookie_consent");
    return !saved;
  });
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const [toggleStates, setToggleStates] = useState<ToggleStates>({
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
    uncategorised: false,
  });

  const categories: Category[] = [
    {
      id: "necessary",
      title: "Necessary",
      description:
        "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
      locked: true,
    },
    {
      id: "functional",
      title: "Functional",
      description:
        "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    },
    {
      id: "analytics",
      title: "Analytics",
      description:
        "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    },

    {
      id: "performance",
      title: "Performance",
      description:
        "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    },
    {
      id: "advertising",
      title: "Advertising",
      description:
        "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
    },
    {
      id: "uncategorised",
      title: "Uncategorised",
      description:
        "Uncategorised Other uncategorised cookies are those that are being analysed and have not been classified into a category as yet.",
    },
  ];

  const handleSave = (data: ToggleStates) => {
    localStorage.setItem("user_cookie_consent", JSON.stringify(data));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allTrue = categories.reduce(
      (acc, cat) => ({ ...acc, [cat.id]: true }),
      {},
    );
    handleSave(allTrue as ToggleStates);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#010101]/80 flex items-center justify-center p-4 z-[100]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">
        <div className="p-8 pb-4">
          <h2
            className=" font-semibold text-[18px] sm:text-[20px] lg:text-[24px]
  leading-[28px] sm:leading-[36px] lg:leading-[48.98px] tracking-[0]   align-middle   text-gray-900  mb-6"
          >
            Customise Consent Preferences
          </h2>

          <div className="h-px bg-[#ff5900]"></div>
        </div>

        <div className="font-normal pl-[30px]  pr-[30px] text-[14px] leading-[150%] tracking-[0] text-gray-700">
          We use cookies to help you navigate efficiently and perform certain
          functions. You will find detailed information about all cookies under
          each consent category below. The cookies that are categorised as
          Necessary are stored on your browser as they are essential for
          enabling the basic functionalities of the site. We also use
          third-party cookies that help us analyse how you use this website,
          store your preferences, and provide the content and advertisements
          that are relevant to you. These cookies will only be stored in your
          browser with your prior consent. You can choose to enable or disable
          some or all of these cookies but disabling some of them may affect
          your browsing experience.
        </div>

        <div className="flex-1 overflow-y-auto px-8 scrollbar-custom">
          {categories.map((cat) => (
            <div key={cat.id} className="border-b border-gray-200 py-4">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() =>
                    setExpandedCategories((p) => ({
                      ...p,
                      [cat.id]: !p[cat.id],
                    }))
                  }
                >
                  {expandedCategories[cat.id] ? (
                    <ChevronDown className="w-5 h-5 mr-2" />
                  ) : (
                    <ChevronRight className="w-5 h-5 mr-2" />
                  )}
                  <span className="font-semibold">{cat.title}</span>
                </div>
                <button
                  onClick={() =>
                    !cat.locked &&
                    setToggleStates((p) => ({ ...p, [cat.id]: !p[cat.id] }))
                  }
                  className={`w-14 h-7 rounded-full relative transition-all ${toggleStates[cat.id] ? "bg-teal-500" : "bg-gray-300"}`}
                  style={toggleStates[cat.id] ? { background: " #ff5900" } : {}}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${toggleStates[cat.id] ? "left-8" : "left-1"}`}
                  />
                </button>
              </div>
              {expandedCategories[cat.id] && (
                <p className="text-sm text-gray-600 mt-2 ml-7">
                  {cat.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="px-8 py-6 flex gap-4 justify-end border-t">
          <button
            onClick={() => handleSave(toggleStates)}
            className="px-6 py-2 border rounded-lg font-medium text-gray-700"
          >
            Save Preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-8 py-3 text-white rounded-lg font-medium shadow-md  bg-[#ff5900]"
          >
            Accept All
          </button>
        </div>
      </div>
      {/* ... CSS remains same as yours ... */}
    </div>
  );
};

export default ConsentPopup;
