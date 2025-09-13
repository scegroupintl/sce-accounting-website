"use client";
import React from "react";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useTranslations } from "../context/LanguageContext";

export default function Contact() {
  // Local State
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslations();

  // Constants
  const inputClassNames =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-gray-300 focus:outline-none";

  // Methods
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formInputs = e.target as HTMLFormElement;
    const firstName = formInputs.firstName.value;
    const lastName = formInputs.lastName.value;
    const email = formInputs.email.value;
    const phone = formInputs.phone.value;
    const service = formInputs.service.value;
    const message = formInputs.message.value;

    const formData = new FormData();
    formData.append("Nombre", `${firstName} ${lastName}`);
    formData.append("Correo Electrónico", email);
    formData.append("Teléfono", phone);
    formData.append("Servicio", service);
    formData.append("Mensaje", message);
    formData.append("access_key", "d4d2ab83-9ae1-4db5-b9ac-b33e89562cab");

    const promise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    toast.promise(
      promise.then((res) => {
        setLoading(false);

        if (!res.ok) {
          return Promise.reject(new Error("Failed to send message"));
        }
      }),
      {
        loading: t("contact.sending"),
        success: t("contact.successMessage"),
        error: t("contact.errorMessage"),
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.contactInfo.getInTouch")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t("contact.contactInfo.phone")}
                  </h4>
                  <p className="text-gray-600">+1 (385) 254-1415</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t("contact.contactInfo.email")}
                  </h4>
                  <p className="text-gray-600">info@sceaccounting.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t("contact.contactInfo.hours")}
                  </h4>
                  <p className="text-gray-600">
                    {t("contact.contactInfo.mondayFriday")}
                    <br />
                    {t("contact.contactInfo.sunday")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            <BarLoader
              loading={loading}
              width={"100%"}
              color="#0d9488"
              cssOverride={{ position: "absolute", top: 0, left: 0 }}
            />
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.title")}
            </h3>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.firstName")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={inputClassNames}
                    placeholder={t("contact.firstName")}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.lastName")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={inputClassNames}
                    placeholder={t("contact.lastName")}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputClassNames}
                  placeholder={t("contact.email")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={inputClassNames}
                  placeholder="+1 (385) 254-1415"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.service")}
                </label>
                <select
                  id="service"
                  name="service"
                  className={inputClassNames}
                  required
                >
                  <option value="">{t("contact.selectService")}</option>
                  <option value={t("contact.serviceOptions.taxReturns")}>
                    {t("contact.serviceOptions.taxReturns")}
                  </option>
                  <option value={t("contact.serviceOptions.taxPlanning")}>
                    {t("contact.serviceOptions.taxPlanning")}
                  </option>
                  <option value={t("contact.serviceOptions.bookkeeping")}>
                    {t("contact.serviceOptions.bookkeeping")}
                  </option>
                  <option
                    value={t("contact.serviceOptions.businessConsulting")}
                  >
                    {t("contact.serviceOptions.businessConsulting")}
                  </option>
                  <option value={t("contact.serviceOptions.other")}>
                    {t("contact.serviceOptions.other")}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClassNames}
                  placeholder={t("contact.messagePlaceholder")}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {t("contact.sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
