const ContactForm = () => {
  return (
    <div className="flex justify-center py-6 font-amaranth">
      <div>
        <div className="py-6">
          <h1 className="text-center text-5xl font-bold underline decoration-primary underline-offset-4">
            Envoyer vos messages
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-24 py-2">
          <form className="space-y-4 py-4 pl-72">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-lg font-semibold">
                E-mail:
              </label>
              <input
                id="email"
                type="email"
                placeholder="exmaple@acme.com"
                className="input-bordered input-primary input w-full bg-white"
              />
            </div>
            {/* Object */}
            <div className="flex flex-col gap-1">
              <label htmlFor="object" className="text-lg font-semibold">
                Objet:
              </label>
              <input
                id="object"
                type="text"
                placeholder="Feedback"
                className="input-bordered input-primary input w-full bg-white"
              />
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-lg font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                className="textarea-primary textarea bg-white"
                placeholder="Votre message..."
              />
            </div>
            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button className="btn-primary btn font-bold">Envoyer</button>
            </div>
          </form>
          {/* ART Section */}
          <div className="py-5">
            <img
              src="/images/dejrba-hood.jpg"
              alt="dejrba-hood"
              className="rounded-box w-[70%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
