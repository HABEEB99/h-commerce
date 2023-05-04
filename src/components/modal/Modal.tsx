"use client";

import { FC, useCallback, useEffect, useState } from "react";

import { RiCloseCircleFill } from "react-icons/ri";
import Button from "../Button";

interface Imodal {
  title?: string;
  body?: string;
  footer?: string;
  disabled?: boolean;
  isOpen?: boolean;
  actionLabel: string;
  secondaryActionLabel?: string;
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction: () => void;
}

const Modal: FC<Imodal> = ({
  title,
  body,
  footer,
  disabled,
  isOpen,
  actionLabel,
  secondaryAction,
  onClose,
  onSubmit,
  secondaryActionLabel,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleCloseModal = useCallback(() => {
    if (disabled) {
      return;
    }

    setIsModalOpen(false);
    setTimeout(() => {
      onClose();
    }, 500);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="flex items-center justify-center fixed overflow-x-hidden 
      overflow-y-auto inset-0 z-100 outline-none focus:outline-none bg-neutral-700/80"
      >
        <div className="w-full relative md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/* Modal Content */}
          <div
            className={`translate duration-500 h-full ${
              isModalOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <div
              className="flex flex-col h-full w-full bg-modal outline-none focus:outline-none 
            relative translate lg:h-auto md:h-auto border-0 rounded-lg shadow-lg"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-center p-6 rounded-t relative border-b-2">
                <button
                  className="absolute right-10"
                  onClick={handleCloseModal}
                >
                  <RiCloseCircleFill className="text-red-400 hover:text-red-500 active:text-red-600 text-2xl" />
                </button>

                <div className="text-lg font-semibold">{title}</div>
              </div>

              {/* Modal Body */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* Modal Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4">
                  {secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
