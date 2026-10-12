
import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Bright Future Academy`;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    return () => {
      document.title =
        "Bright Future Academy | Learn Today. Lead Tomorrow.";
    };
  }, [title, description]);

  return null;
}
