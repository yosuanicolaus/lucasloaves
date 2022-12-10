export function CareerDetailsPage() {
  return (
    <div className="flex-grow flex justify-center items-center">
      <form
        className="border p-5 grid"
        onSubmit={(e) => {
          e.preventDefault();
          alert("your application has been submitted");
        }}
      >
        <label htmlFor="fn">First Name</label>
        <input type="text" name="fn" className="border" required />
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="ln" className="border" required />
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" className="border" required />
        <label htmlFor="cv">CV</label>
        <input type="file" name="cv" id="cv" className="border" required />
        <button className="bg-blue-500 rounded text-white m-3 p-1">
          Submit
        </button>
      </form>
    </div>
  );
}
