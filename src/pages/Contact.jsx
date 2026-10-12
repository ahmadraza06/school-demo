
import schoolConfig from "../data/schoolConfig";

export default function Contact() {
  const phone = schoolConfig.phone.replace(/[^\d+]/g, "");
  const whatsapp = schoolConfig.whatsapp.replace(/\D/g, "");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="font-semibold text-blue-700">CONTACT US</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">
        We'd love to hear from you
      </h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
        Contact our school office for admission enquiries, school
        information and general assistance.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 p-7">
          <h2 className="text-xl font-bold">School Office</h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-slate-500">Address</p>
              <p className="mt-1 font-medium">{schoolConfig.address}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <a className="mt-1 block font-medium text-blue-700" href={`tel:${phone}`}>
                {schoolConfig.phone}
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-500">Email</p>
              <a className="mt-1 block break-all font-medium text-blue-700" href={`mailto:${schoolConfig.email}`}>
                {schoolConfig.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-500">Office Hours</p>
              <p className="mt-1 font-medium">{schoolConfig.officeHours}</p>
            </div>

            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-50 p-7">
          <h2 className="text-xl font-bold">Find Our School</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Open a map to find the school's location. Confirm the exact
            address before sharing directions with parents.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolConfig.address)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Open Google Maps
          </a>
        </section>
      </div>
    </div>
  );
}
