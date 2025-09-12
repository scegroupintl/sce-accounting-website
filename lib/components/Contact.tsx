"use client";
import React from "react";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Contact() {
  // Local State
  const [loading, setLoading] = React.useState(false);

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
        loading: "Enviando mensaje...",
        success: "Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje.",
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctenos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarle con todas sus necesidades contables. No
            dude en ponerse en contacto con nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Información de Contacto
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
                    Teléfono
                  </h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
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
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
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
                    Horarios
                  </h4>
                  <p className="text-gray-600">
                    Lunes - Viernes: 8:00 AM - 6:00 PM
                    <br />
                    Sábados y Domingos: Cerrado
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
            <h3 className="text-2xl font-semibold mb-6">Envíenos un Mensaje</h3>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={inputClassNames}
                    placeholder="Su nombre"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={inputClassNames}
                    placeholder="Su apellido"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputClassNames}
                  placeholder="su@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={inputClassNames}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  className={inputClassNames}
                  required
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="Declaraciones de Impuestos">
                    Declaraciones de Impuestos
                  </option>
                  <option value="Planificación Fiscal">
                    Planificación Fiscal
                  </option>
                  <option value="Contabilidad">Contabilidad</option>
                  <option value="Nómina">Nómina</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClassNames}
                  placeholder="Cuéntenos sobre sus necesidades contables..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={loading}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
