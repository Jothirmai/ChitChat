import React, { useState } from "react";
import styled from "styled-components";
import Wave from "react-wavify";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.from_name || !form.from_email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    emailjs
      .send(
        "service_6fmru36", // ✅ Your EmailJS service ID
        "template_mxt0xff", // ✅ Your EmailJS template ID
        form,
        "o9PxcoyYFU1HLrQ3N" // ✅ Your public key
      )
      .then(
        () => {
          alert("✅ Feedback sent successfully!");
          setForm({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          alert("❌ Error sending feedback.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="custom-container">
        <div className="wrapper w-full flex lg:flex-row flex-col lg:space-x-[30px] justify-center items-center">
          <div className="feedback-content lg:w-1/2 w-full">
            <div className="title" data-aos="fade-right">
              <h1>Feel free to drop us your feedback</h1>
            </div>
          </div>

          <div className="feedback-content" data-aos="fade-left">
            <div className="feedback-form flex-1 bg-white sm:p-10 py-5 px-5">
              <div className="title">
                <h2>Send us your feedback</h2>
              </div>

              <form className="mt-5" onSubmit={sendEmail}>
                <input
                  className="input w-full mt-3 p-2 rounded"
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="input w-full mt-3 p-2 rounded"
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  className="w-full mt-3 p-2 rounded"
                  name="message"
                  rows="5"
                  placeholder="Your suggestion..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="mt-5 bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Send Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="shapes">
        <div className="svg-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="1"
              d="M0,0L48,32C96,64,192,128,288,133.3C384,139,480,85,576,64C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <Wave className="svg-2" paused={false} options={{ height: 20, amplitude: 50, speed: 0.2, points: 3 }} opacity={0.03} />
        <Wave className="svg-3" paused={false} options={{ height: 20, amplitude: 50, speed: 0.3, points: 3 }} opacity={0.02} />
        <Wave className="svg-4" paused={false} options={{ height: 20, amplitude: 50, speed: 0.4, points: 3 }} opacity={0.01} />
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  position: relative;
  max-width: 100vw;
  height: 100%;
  background-color: #0c1631;
  overflow: hidden;
  padding: 9rem 0;

  .shapes {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .svg-1 {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0%;
      left: 0%;
      svg {
        fill: ${({ theme }) => theme.colors.bg2.secondary};
      }
    }

    .svg-2,
    .svg-3,
    .svg-4 {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .svg-2 {
      top: 80%;
      left: 0%;
    }

    .svg-3 {
      top: 75%;
      left: 0%;
    }
    .svg-4 {
      top: 70%;
      left: 0%;
    }
  }

  .custom-container {
    position: relative;
    height: 100%;
    padding: 6rem 5rem;
    z-index: 5;
    .wrapper {
      .feedback-content {
        height: 100%;
        position: relative;
        margin-right: 20px;
        padding-right: 20px;
        .title {
          text-align: center;
          h1 {
            line-height: 1.3;
            color: ${({ theme }) => theme.colors.white};
          }
        }
        .feedback-form {
          input, textarea {
            background-color: #f6f6f9;
          }
          .title {
            text-align: center;
            h2 {
              line-height: 1.3;
              color: ${({ theme }) => theme.colors.black};
            }
          }
        }
      }
      .feedback-content {
        .shape-container {
          top: -50px;
          right: -60px;
          img {
            width: 100%;
          }
        }
        .feedback-form {
          border-radius: 10px;
          input, textarea {
            color: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    .custom-container .wrapper {
      .feedback-content {
        margin: 0;
        padding: 0;
      }
    }
    .feedback-content {
      margin-bottom: 2.5rem;
    }
  }
`;
