import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

interface CongratProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const Congrat: React.FC<CongratProps> = ({
  isOpen,
  title,
  message,
  onClose,
}) => {
  const { theme } = useThemeContext(); // Access theme from context

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel
              className={`relative rounded-lg p-6 shadow-lg transform transition-all ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-900"
              }`}
            >
              {/* Close button */}
              <button
                className={`absolute top-2 right-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
                onClick={onClose}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Dialog title */}
              <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>

              {/* Dialog description */}
              <p className="mt-2">{message}</p>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Congrat;
