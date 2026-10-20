export const school = {
  name: "SirEmmy Academy",
  phone: "+234 814 171 3798",
  whatsapp: "2348141713798",
  email: "info@siremmy9.com",
  address: "12 Emmys Road, Emmanuel City, Lagos ",
  // classes: ["Crèche", "Nursery", "Primary", "Secondary"],
  classes: [
    "Crèche",
    "Nursery",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
    "JSS 1",
    "JSS 2",
    "JSS 3",
    "SS 1",
    "SS 2",
    "SS 3",
  ],
  contactMethods: ["Phone call", "WhatsApp", "Email"],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.5759963602173!2d3.6532217315704663!3d6.473223739971658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf950c1d3a5a9%3A0x662522ae15dbb88a!2sEaglesworld%20Global%20Schools!5e1!3m2!1sen!2sng!4v1791262427893!5m2!1sen!2sng",
  mapLink: "",
};
export const whatsappUrl = `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to make an enquiry.",
)}`;
