"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import type { Species } from "./species-card";

export default function LearnMoreDialog({ species }: { species: Species }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            <h3 className="mt-3 text-2xl font-semibold italic">{species.scientific_name}</h3>
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-stretch">
          {species.image && (
            <div className="relative mr-5 h-40 w-1/2">
              <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
            </div>
          )}

          <div className="w-1/2">
            {species.common_name && <h4 className="text-lg font-light">Common Name: {species.common_name}</h4>}
            {species.kingdom && <h4 className="text-lg font-light">Kingdom: {species.kingdom}</h4>}
            {species.total_population && (
              <h4 className="text-lg font-light"> Total Population: {species.total_population}</h4>
            )}
          </div>
        </div>

        {species.description && <p> {species.description}</p>}

        <div className="flex">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
