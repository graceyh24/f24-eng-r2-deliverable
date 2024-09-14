"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Species } from "./species-card";

export default function EditableDialog({ species }: { species: Species }) {
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

        <div>
          {species.common_name && <h4 className="text-lg font-light">Common Name: {species.common_name}</h4>}
          {species.total_population && (
            <h4 className="text-lg font-light"> Total Population: {species.total_population}</h4>
          )}
          {species.kingdom && <h4 className="text-lg font-light">Kingdom: {species.kingdom}</h4>}
          {species.description && <p> {species.description}</p>}
        </div>

        <div className="flex">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              EDITTTClose
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
