import { useState } from "react";
import { useToast } from "@/hooks/toast";
import styles from "../styles/ContactStyles.module.css";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Icon } from "@iconify/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/codecraft2k@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: "New Contact from Code Craft Website",
            _template: "table",
            _replyto: formData.email,
            _captcha: "false",
          }),
        }
      );

      if (!res.ok) throw new Error("Failed");

      toast({
        title: "Message Sent!",
        description:
          "Thank you for your message! We will get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconSize = 32;

  return (
    <section id="contact" className={styles.Contact}>
      <div className={styles.ContactWrapper}>
        <div className={styles.infoCard}>
          <div>
            <h3 className={styles.infoTitle}>Get In Touch</h3>

            <div className={styles.infoRow}>
              <Icon
                icon={"material-symbols:mail-outline"}
                width={iconSize}
                height={iconSize}
              />
              <span>codecraft2k@gmail.com</span>
            </div>

            <div className={styles.infoRow}>
              <Icon
                icon={"material-symbols:call"}
                width={iconSize}
                height={iconSize}
              />

              <span>+91 9629590312, +91 9597755722</span>
            </div>

            <div className={styles.infoRow}>
              <Icon
                icon={"iconamoon:location-light"}
                width={iconSize}
                height={iconSize}
              />
              <span>Coimbatore, Tamil Nadu</span>
            </div>

            <p className={styles.hours}>
              Mon-Fri 9AM-6PM IST
              <br />
              Serving clients worldwide
            </p>
          </div>
          <div className={styles.VerticalLine}></div>
        </div>
        <div className={styles.formCard}>
          <div className={styles.HeadingWrapper}>
            <h2 className={styles.formTitle}>
              Let's Build Something Amazing Together
            </h2>

            <p className={styles.formSubtitle}>
              Ready to start your project? Get in touch and let’s bring your
              vision to life.
            </p>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e)}
            className={styles.form}
            noValidate
          >
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                className={styles.input}
              />
            </div>

            <select
              name="projectType"
              value={formData.projectType}
              onChange={(e) => handleInputChange(e)}
              className={styles.input}
            >
              <option value="" disabled>
                Project Type
              </option>
              <option>Website Development</option>
              <option>E-commerce Store</option>
              <option>Web Application</option>
              <option>Website Maintenance</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Project Details *"
              required
              value={formData.message}
              onChange={(e) => handleInputChange(e)}
              className={styles.textarea}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              <span className={styles.spn2}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>

            {/* <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
}
