export function ContactPage() {
  return (
    <div className="flex-grow p-5 text-center grid grid-cols-2">
      <div className="grid grid-cols-2">
        <div className="border flex flex-col justify-center items-center">
          <div>128 Chalmers St, Surry Hills NSW 2010</div>
          <div>Phone: 9212 7799</div>
          <div>info@lucasloaves.com.au</div>
        </div>
        <div className="border flex flex-col justify-center items-center">
          <div>Opening hours</div>
          <div>7am to 4 pm</div>
          <div>7 days a week</div>
        </div>
      </div>
      <div className="border flex justify-center items-center">
        <div className="border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0976644807492!2d151.20266391740094!3d-33.88713847459785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae20f3969661%3A0x7538925ba83f7b6f!2s128%20Chalmers%20St%2C%20Surry%20Hills%20NSW%202010!5e0!3m2!1sen!2sau!4v1670390356675!5m2!1sen!2sau"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={600}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
