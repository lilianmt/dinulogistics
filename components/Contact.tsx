'use client';

import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { BackgroundBeams } from './ui/background-beams';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative w-[min(100%,100%)] py-20 flex flex-col items-center text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.div>
        <motion.div className="relative px-10 py-12 z-[100] flex flex-col bg-gradient-to-br from-prime-500/5 to-prime-600/20 backdrop-blur-[3px] rounded-3xl">
          <SectionHeading>
            <motion.span className="text-4xl font-light">
              Contact us
            </motion.span>
          </SectionHeading>
          <p className="text-white/50 -mt-6">
            Please contact us directly at{' '}
            <a className="underline" href="mailto:contact@dinulogistics.com">
              contact@dinulogistics.com
            </a>{' '}
            or through this form.
          </p>

          <form
            className="mt-10 flex flex-col"
            // action={async (formData) => {
            //   const { data, error } = await sendEmail(formData);

            //   if (error) {
            //     toast.error(error);
            //     return;
            //   }

            //   toast.success("Email sent successfully!");
            // }}
          >
            <input
              className="h-14 px-4 text-white bg-transparent rounded-xl border border-prime-100/20 hover:border-prime-200/30 focus:border-prime-200/50  outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-80 min-h-[200px] max-h-[600px] p-4 my-5 text-white bg-transparent rounded-xl border border-prime-100/20 focus:border-prime-200/50 hover:border-prime-200/30 outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </form>
        </motion.div>
        <BackgroundBeams />
      </motion.div>
    </motion.section>
  );
}
