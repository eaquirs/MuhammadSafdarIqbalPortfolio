export interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
  avatarBg: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    role: "CEO, UAE Tech Solutions",
    content: "Muhammad delivered an exceptional ERP solution that transformed our business operations. His technical expertise and attention to detail are remarkable.",
    initials: "AH",
    avatarBg: "bg-blue-600"
  },
  {
    name: "Dr. Sarah Khan",
    role: "Medical Director, Eye Care Center",
    content: "Outstanding work on our hospital management system. The solution is robust, user-friendly, and has significantly improved our patient care workflow.",
    initials: "SK",
    avatarBg: "bg-green-600"
  },
  {
    name: "Maria Rodriguez",
    role: "Operations Manager, Café Chain",
    content: "The POS system Muhammad developed for our restaurant chain exceeded expectations. It's fast, reliable, and the reporting features are incredibly detailed.",
    initials: "MR",
    avatarBg: "bg-blue-600"
  },
  {
    name: "Muhammad Ali Khan",
    role: "Government Official, Cholistan Development",
    content: "Muhammad's work on the Cholistan Wool Union website was exemplary. The project received official appreciation for its contribution to digitalizing our wool trade operations.",
    initials: "MAK",
    avatarBg: "bg-green-600"
  }
];
