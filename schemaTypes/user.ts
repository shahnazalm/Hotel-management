import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "check if the user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      //readOnly:true,
      //hidden:true,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "name of the user",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "a breif description about the user ",
      readOnly: true,
    }),
  ],
};

export default user;
