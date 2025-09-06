"use client"
import  React from "react"
import Image from "next/image"
import { motion} from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/local-ui/card"
import SiteHeader from "@/app/components/site-header"
import SiteFooter from "@/app/components/site-footer"
import ContactForm from "@/app/components/contact-form"
import AnimatedText from "@/app/components/animated-text"
import { Briefcase, Users, Video, RefreshCcw } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 28 } },
}

const hoverLift = { y: -4, scale: 1.01, transition: { type: "spring", stiffness: 350, damping: 22 } }

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col scroll-smooth">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden" aria-label="Hero">
          <Image
            src="/Banner.jpg"
            alt="Professional healthcare and legal marketing background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
          <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 ml-6">
            <div className="max-w-3xl text-white">
              <motion.span
                className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-100 ring-1 ring-inset ring-emerald-300/30"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 24 }}
              >
                Chiropractor Personal Injury Referrals
              </motion.span>

              <AnimatedText
                as="h1"
                text="Helping Chiropractors Win More Personal Injury Cases."
                className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
                delay={0.2}
              />

              <motion.p
                className="mt-4 max-w-2xl text-pretty text-base text-gray-100 sm:text-lg"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                We connect you directly with attorneys, manage referrals, and keep your personal injury pipeline full so you can focus on patient care while we grow your practice.
              </motion.p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-b bg-white mx-8" aria-label="About us">
          <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              className="space-y-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who we are</h2>
              <p className="text-muted-foreground text-black">
                We are a marketing agency dedicated to helping chiropractors grow their personal injury caseload. Our
                mission is simple: put doctors first by building direct relationships with personal injury attorneys and
                managing a reliable referral pipeline.
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground text-black">
                  Doctors pay a transparent upfront fee for us to start marketing on their behalf. We add your practice
                  to our Provider Relations Network, which averages 2–3 qualified referrals per month. From there, we
                  facilitate Zoom intros with attorneys so you can discuss cases directly and build lasting
                  partnerships.
                </p>
                <p className="text-muted-foreground text-black">
                  You stay in the loop at every step. If referrals slow down, we proactively follow up with law firms on
                  your behalf to get your numbers back on track.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 24 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src="/docAtt.jpg"
                alt="Doctor and attorney connecting via Zoom"
                width={780}
                height={520}
                className="w-full rounded-xl border shadow-sm"
              />
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-20 bg-gradient-to-b from-sky-50 to-emerald-50"
          aria-label="Services"
        >
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
              <p className="mt-3 text-muted-foreground">
                Proven, transparent growth systems designed for chiropractors who treat personal injury patients.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedCard delay={0.05}>
                <Card className="border-blue-100 w-[280px] h-[290px]">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
                      <Users className="size-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-gray-900">Provider Relations Network</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    We add your practice to our vetted network to generate an average of 2–3 personal injury referrals
                    per month.
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.1}>
                <Card className="border-emerald-100 w-[280px] h-[290px]">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
                      <Video className="size-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-gray-900">Attorney Zoom Connections</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Direct introductions with personal injury attorneys via Zoom so you can discuss cases and align on
                    care.
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.15}>
                <Card className="border-blue-100 w-[280px] h-[290px]">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
                      <Briefcase className="size-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-gray-900">Marketing & Referral Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    We handle outreach, positioning, and referral workflows so transparent reporting keeps you informed.
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="border-emerald-100 w-[280px] h-[290px]">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
                      <RefreshCcw className="size-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-gray-900">Monthly Follow-ups</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    If referral numbers dip, we follow up with law firms on your behalf to restore momentum.
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="scroll-mt-20 border-y bg-white" aria-label="Testimonials">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What doctors say</h2>
              <p className="mt-3 text-muted-foreground">Results you can count on, from practices like yours.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
              <TestimonialCard
                delay={0.05}
                quote={
                  "We started seeing consistent PI referrals within the first month. The Zoom intros made attorney relationships effortless."
                }
                name="Dr. Taylor Kim"
                role="Chiropractor, Riverside Spine"
              />
              <TestimonialCard
                delay={0.1}
                quote={
                  "The process is transparent and professional. They even followed up with firms when referrals slowed and it worked."
                }
                name="Dr. Marcus Lee"
                role="Owner, AlignCare"
              />
              <TestimonialCard
                delay={0.15}
                quote={
                  "Best decision we made for PI growth. Clear communication, strong attorney partners, and steady monthly cases."
                }
                name="Dr. Priya Patel"
                role="Clinical Director, Peak Motion"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-gradient-to-b from-emerald-50 to-white" aria-label="Contact">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Start Getting More Referrals Today
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tell us about your practice and PI goals. We’ll reach out to schedule your first attorney introductions.
              </p>
            </div>

            <motion.div
              className="mx-auto mt-10 max-w-3xl rounded-xl border bg-white p-6 shadow-sm sm:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function AnimatedCard({ children, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      whileHover={hoverLift}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

function TestimonialCard({
  quote = "Great results.",
  name = "Doctor Name",
  role = "Practice Name",
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      whileHover={hoverLift}
      className="h-full will-change-transform"
    >
      <Card className="h-full">
        <CardContent className="flex h-full flex-col gap-6 pt-6">
          <p className="text-balance text-lg leading-relaxed text-gray-900">{`"${quote}"`}</p>
          <div className="mt-auto">
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
