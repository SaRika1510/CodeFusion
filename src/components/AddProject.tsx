import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Input, Label } from "@/components/ui";
import { auth } from "@/lib/auth";
import { createProjectAction } from "@/data/actions";

export default async function AddProject() {
  const session = await auth();

  return (
    <div className="flex justify-end items-center gap-8 w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Project</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <form action={createProjectAction}>
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>
                Ensure all project details are available on GitHub by including
                the description, topics, and collaborators in your repository
                before adding the project.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  name="title"
                  id="title"
                  placeholder="Enter Project Title"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="repo">Github Repo:</Label>
                <div className="col-span- flex items-center">
                  <span className="text-sm">
                    github.com/{session?.user.username}/
                  </span>
                  <Input
                    name="repo"
                    id="repo"
                    className="border-0 border-b rounded-none h-7 p-0 focus-visible:border-ring focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
              <div className="grid gap-2.5"></div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}