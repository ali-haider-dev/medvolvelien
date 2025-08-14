"use server"

import { z } from "zod"

const leadSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number.").max(20, "Phone number seems too long."),
  message: z.string().min(10, "Please provide a brief message (10+ characters)."),
})

export async function submitLead(_, formData) {
  try {
    const raw = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    }

    const parsed = leadSchema.safeParse(raw)
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors
      return {
        ok: false,
        message: "Please correct the errors and try again.",
        errors: Object.fromEntries(Object.entries(fieldErrors).map(([k, v]) => [k, v?.filter(Boolean) ?? []])),
      }
    }

    console.log("New PI lead:", parsed.data)
    await new Promise((r) => setTimeout(r, 600))

    return {
      ok: true,
      message: "Thanks! We’ll contact you within 1 business day to schedule your Zoom introductions.",
    }
  } catch (err) {
    console.error("submitLead error", err)
    return { ok: false, message: "Something went wrong. Please try again later." }
  }
}
