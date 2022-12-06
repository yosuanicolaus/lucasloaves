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
      <div className="border">(Maps integration here)</div>
    </div>
  );
}
