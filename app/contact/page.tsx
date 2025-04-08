import ContactForm from "@/components/ContactForm";
import Sidebar from "@/components/Sidebar";

export default function ContactPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <ContactForm />
      </div>
    </div>
  );
}
