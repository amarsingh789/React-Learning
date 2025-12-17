import React from "react";

const ImageCard = (props) => {
  return (
    <div
      key={props.elem.id}
      className="w-44 cursor-pointer hover:shadow-lg hover:shadow-black/40 transition"
    >
      <a href={props.elem.url} target="_blank">
        <div className="h-40 overflow-hidden rounded-xl bg-zinc-800">
          <img
            loading="lazy"
            src={props.elem.download_url}
            alt=""
            className="h-full w-full object-cover opacity-0 transition-all duration-500 hover:scale-105"
            onLoad={(e) => e.target.classList.remove("opacity-0")}
          />
        </div>
        <h3 className="mt-2 text-sm font-semibold text-gray-200 truncate">
          {props.elem.author}
        </h3>
      </a>
    </div>
  );
};

export default ImageCard;
