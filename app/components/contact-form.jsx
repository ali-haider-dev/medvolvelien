"use client"

import { useActionState, useEffect, useRef } from "react"
import { Input } from "@/app/components/local-ui/input"
import { Textarea } from "@/app/components/local-ui/textarea"
import { Label } from "@/app/components/local-ui/label"
import { Button } from "@/app/components/local-ui/button"
import { Alert, AlertDescription } from "@/app/components/local-ui/alert"
import { submitLead} from "@/app/lib/actions/submit-lead"

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, null)
  const formRef = useRef(null)

  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="grid gap-4" aria-describedby="form-status">
      <div className="grid gap-2 text-black">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Dr. Jane Doe" required />
        {state?.errors?.name && <p className="text-sm text-red-600">{state.errors.name.join(", ")}</p>}
      </div>
      <div className="grid gap-2 sm:grid-cols-2 text-black">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="dr.jane@example.com" required />
          {state?.errors?.email && <p className="text-sm text-red-600">{state.errors.email.join(", ")}</p>}
        </div>
        <div className="grid gap-2 text-black">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
          {state?.errors?.phone && <p className="text-sm text-red-600">{state.errors.phone.join(", ")}</p>}
        </div>
      </div>
      <div className="grid gap-2 text-black">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your practice and PI goals..."
          minLength={10}
          required
          rows={5}
        />
        {state?.errors?.message && <p className="text-sm text-red-600">{state.errors.message.join(", ")}</p>}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"We’ll respond within 1 business day. Your information is kept confidential."}
        </p>
        <Button
          type="submit"
          disabled={isPending}
          className="bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-600"
        >
          {isPending ? "Sending..." : "Request Intro Call"}
        </Button>
      </div>

      <div id="form-status" aria-live="polite" className="mt-2">
        {state?.message && (
          <Alert variant={state?.ok ? "default" : "destructive"}>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </form>
  )
}
