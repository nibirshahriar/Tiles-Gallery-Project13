"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    const { error } = await authClient.updateUser({
      name: formValues.name,
      image: formValues.image,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated successfully!");
      router.push("/profile");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="image"
          placeholder="Image URL"
          className="w-full border p-3 rounded-lg"
        />

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Update Information
        </Button>
      </form>
    </div>
  );
}
