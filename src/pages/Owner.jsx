import Navbar from "../components/Navbar";

export default function Owner() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="mx-auto flex flex-col max-w-7xl items-center p-6">
          <p className="font-semibold text-3xl pb-6">
            Kulsaya's - Group "7" - 13
          </p>
          <img
            className="object-cover w-9/12"
            src="https://images.unsplash.com/photo-1686052185092-f8b305e8260d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cat film"
          />

          <div className="mx-auto max-w-7xl items-center w-9/12 mt-6">
            <p className="font-semibold text-xl mb-2">Short Biography :</p>
            <p>
              Melbourne, Australia, is a place I've always dreamed of living in.
              I want to go there, experience the good weather, the beautiful
              environment, and a great work-life balance. Many times, I've
              wanted to make this dream happen, but I've had to put it on hold
              because of various obstacles. However, I once met a Malaysian
              person who told me,{" "}
              <span className="italic bg-indigo-200">
                "You have to go, whether it’s to study or to live in Australia.
                I hope you get the chance to go at least once. It can help you
                grow and develop yourself.' If you have the chance, I truly hope
                you go."
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
