import { useState } from "react";
import { ShareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { useThemeContext } from "../hooks/useThemeContext"; // Mengimpor ThemeContext untuk Dark Mode

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useThemeContext(); // Mendapatkan tema dari context

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const shareUrl = window.location.href; // Link yang akan dibagikan

  const handleShare = (platform: string) => {
    let shareLink = "";

    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard!");
        break;
      case "whatsapp":
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareUrl
        )}`;
        window.open(shareLink, "_blank");
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        window.open(shareLink, "_blank");
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}`;
        window.open(shareLink, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${
          theme === "dark" ? "bg-green-600" : "bg-green-500"
        } text-white hover:bg-green-700 transition duration-200 mb-6`}
        aria-label="Share"
      >
        <ShareIcon className="h-6 w-6" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={`mx-auto max-w-sm rounded-lg p-6 transform transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                <DialogTitle className="text-lg font-bold flex items-center justify-between">
                  <span>Share This</span>
                  <button onClick={closeModal} aria-label="Close">
                    <XMarkIcon className="h-6 w-6 hover:text-gray-800" />
                  </button>
                </DialogTitle>
                <Description className="mt-2">
                  Choose a platform to share this link.
                </Description>
                <div className="mt-4 flex flex-col space-y-2">
                  <button
                    onClick={() => handleShare("copy")}
                    className={`w-full rounded-md py-2 text-white hover:bg-blue-600 transition duration-200 ${
                      theme === "dark" ? "bg-blue-600" : "bg-blue-500"
                    }`}
                  >
                    Copy Link
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className={`w-full rounded-md py-2 text-white hover:bg-green-600 transition duration-200 ${
                      theme === "dark" ? "bg-green-600" : "bg-green-500"
                    }`}
                  >
                    Share on WhatsApp
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className={`w-full rounded-md py-2 text-white hover:bg-blue-700 transition duration-200 ${
                      theme === "dark" ? "bg-blue-700" : "bg-blue-600"
                    }`}
                  >
                    Share on Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className={`w-full rounded-md py-2 text-white hover:bg-blue-500 transition duration-200 ${
                      theme === "dark" ? "bg-blue-500" : "bg-blue-400"
                    }`}
                  >
                    Share on Twitter
                  </button>
                </div>

                <button
                  onClick={closeModal}
                  className={`mt-4 w-full rounded-md py-2 text-white hover:bg-red-700 transition duration-200 ${
                    theme === "dark" ? "bg-red-600" : "bg-red-500"
                  }`}
                >
                  Close
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShareButton;
