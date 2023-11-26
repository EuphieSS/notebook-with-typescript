import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Note } from "./App";

type NoteLayoutProps = {
  notes: Note[]
}

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find(n => n.id === id);

  /** Below:  In many cases, especially when checking if a variable is either null or undefined, 
  using == null is a concise way to perform the check without having to explicitly check for 
  both null and undefined. */
  if (note == null) {
    return (
      <Navigate to="/" replace />
    )
  }

  return (
    <Outlet context={note} />
  )
}

export function useNote() {
  return useOutletContext<Note>();
}