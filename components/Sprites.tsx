"use client";
import { useState } from "react";
import { Button } from "react-daisyui";

import { RemoteImage } from "./RemoteImage";

export const Sprites = ({ sprites }: any) => {
  const initSprite = sprites.other["official-artwork"].front_default;
  const [spriteUrl, setSpriteUrl] = useState(initSprite);

  const spriteUrls = {
    1: sprites.back_default,
    2: sprites.back_shiny,
    3: sprites.front_default,
    4: sprites.front_shiny,
    5: sprites.other.dream_world.front_default,
    6: sprites.other.home.front_default,
    7: sprites.other.home.front_shiny,
    8: sprites.other["official-artwork"].front_default,
    9: sprites.other["official-artwork"].front_shiny,
  };

  const handleSpritePick = (url: string) => setSpriteUrl(url);

  return (
    <div className="mb-10">
      <RemoteImage alt="" imageUrl={spriteUrl} />
      <div>
        {Object.entries(spriteUrls).map(([i, url]) => (
          <Button
            key={url}
            className="mx-2 hover:bg-red-500"
            onClick={() => handleSpritePick(url)}
          >
            {i}
          </Button>
        ))}
      </div>
    </div>
  );
};
