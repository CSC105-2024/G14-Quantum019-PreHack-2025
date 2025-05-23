import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import ActivityModel from "./ActivityModel";

const ActivityBox = ({ mode, text }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* TODO: need to fix this */}
      <Button
        onClick={() => setOpen(true)}
        className={
          "bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
        }
      >
        <Plus />
        {text}
      </Button>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Add New Activity" : "Edit Activity"}
          </DialogTitle>
          <DialogDescription>
            <ActivityModel setOpen={setOpen} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityBox;
