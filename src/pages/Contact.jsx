import { Mail, Phone, MapPin, Send} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-36 pb-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#5C4033] font-semibold">

            Contact

          </p>

          <h1 className="text-6xl font-bold text-[#13273F] mt-4">

            Let's Work Together

          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-8">

            Whether you're looking for a UI/UX Designer, Front-End Developer,
            or simply want to connect, I'd love to hear from you.

          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left Column */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <Mail className="text-[#13273F]" size={32} />

              <h3 className="text-2xl font-semibold mt-5 mb-2">

                Email

              </h3>

              <p className="text-gray-600">

                teyanaraubenheimer18@gmail.com

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <Phone className="text-[#13273F]" size={32} />

              <h3 className="text-2xl font-semibold mt-5 mb-2">

                Phone

              </h3>

              <p className="text-gray-600">

                078 117 7830

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <MapPin className="text-[#13273F]" size={32} />

              <h3 className="text-2xl font-semibold mt-5 mb-2">

                Location

              </h3>

              <p className="text-gray-600">

                Cape Town, South Africa

              </p>

            </div>

            {/* Socials */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-6">

                Connect With Me

              </h3>

              <div className="flex gap-5">

                <a
                  href="https://github.com/TRaubenheimer18"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#13273F] p-4 rounded-full text-white hover:bg-[#5C4033] duration-300"
                >
                  {/* <Github /> */}
                </a>

                <a
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#13273F] p-4 rounded-full text-white hover:bg-[#5C4033] duration-300"
                >
                  {/* <Linkedin /> */}
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="lg:col-span-3">

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h2 className="text-4xl font-bold text-[#13273F] mb-10">

                Send Me a Message

              </h2>

              <form className="space-y-6">

                <div>

                  <label className="block mb-2 font-medium">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#13273F]"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#13273F]"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">

                    Subject

                  </label>

                  <input
                    type="text"
                    placeholder="Project Enquiry"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#13273F]"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">

                    Message

                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-gray-300 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#13273F]"
                  />

                </div>

                <button
                  className="flex items-center gap-3 bg-[#13273F] text-white px-8 py-4 rounded-full hover:bg-[#5C4033] duration-300"
                >

                  <Send size={20} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}