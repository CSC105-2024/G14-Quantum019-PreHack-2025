import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { Trash2 } from "lucide-react";

const AlertBox = ({ btnName, css, title, onClick }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className={`bg-[var(--primary-color)] ${css}`}>
          {!btnName ? <Trash2 size={16} /> : { btnName }}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className={"md:w-100"}>
        <div>
          <div className="flex justify-end">
            <AlertDialogCancel
              className={
                "border-none shadow-none focus:ring-0 focus:outline-none p-0 m-0"
              }
            >
              <RxCross2 />
            </AlertDialogCancel>
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle className={"md:flex justify-center text-center"}>
              {title}
            </AlertDialogTitle>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter className="flex justify-around md:justify-center flex-row">
          <AlertDialogCancel className={"w-30"}>No</AlertDialogCancel>
          <AlertDialogAction
            className={
              "w-30 text-white bg-[var(--color-secondary)] hover:bg-[var(--color-primary)]"
            }
            onClick={onClick}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertBox;
