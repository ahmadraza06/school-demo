
const photos = [
  {
    title: "Classroom Learning",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Learning Resources",
    url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "School Activities",
    url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Campus Environment",
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Collaboration",
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Learning Together",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="font-semibold text-blue-700">OUR GALLERY</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">
        Moments from school life
      </h1>
      <p className="mt-4 text-slate-600">
        A sample gallery layout. Replace these images with approved
        photographs from the actual school.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure
            key={photo.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={photo.url}
              alt={photo.title}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-300 hover:scale-105"
            />
            <figcaption className="p-4 font-semibold text-slate-800">
              {photo.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
