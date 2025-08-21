"use client";

import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

function FocusTrap({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        if (document.activeElement === last && !e.shiftKey) {
          e.preventDefault();
          (first as HTMLElement)?.focus();
        } else if (document.activeElement === first && e.shiftKey) {
          e.preventDefault();
          (last as HTMLElement)?.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return <div ref={ref}>{children}</div>;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 max-w-xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <FocusTrap onClose={onClose}>
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              aria-label="Close modal"
              onClick={onClose}
              className="ml-4 px-2 py-1 rounded text-gray-700 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </FocusTrap>
      </div>
    </div>
  );
}

export default function ClientModals() {
  const [showEmail, setShowEmail] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 400 && !scrolled) {
        setScrolled(true);
        setShowQuiz(true);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  useEffect(() => {
    const timer = setTimeout(() => setShowEmail(true), 60000); // show email after 60s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal
        isOpen={showEmail}
        onClose={() => setShowEmail(false)}
        title="Join the list"
      >
        <p className="text-sm text-gray-700">
          Get occasional updates and project deep dives.
        </p>
        {/* Subscribe via internal API (Zoho CRM and Zoho Campaigns). */}
        <SubscribeFormFallback onClose={() => setShowEmail(false)} />
      </Modal>

      <Modal
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
        title="Quick quiz"
      >
        <p className="text-sm text-gray-700">
          Which project would you like to see more of?
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => {
              setShowQuiz(false);
            }}
            className="px-3 py-2 rounded bg-gray-100"
          >
            Web apps
          </button>
          <button
            onClick={() => {
              setShowQuiz(false);
            }}
            className="px-3 py-2 rounded bg-gray-100"
          >
            Games
          </button>
          <button
            onClick={() => {
              setShowQuiz(false);
            }}
            className="px-3 py-2 rounded bg-gray-100"
          >
            Mobile
          </button>
        </div>
      </Modal>
    </>
  );
}

function SubscribeFormFallback({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("ok");
        setTimeout(() => {
          onClose();
        }, 900);
      } else {
        setStatus("error");
      }
    } catch (err) {
      // log to console for debugging
      console.error("Subscribe error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-3 flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Sending..." : "Subscribe"}
        </button>
      </div>
      {status === "ok" && (
        <div className="text-green-700 text-sm">
          Thanks — check your inbox for confirmation.
        </div>
      )}
      {status === "error" && (
        <div className="text-red-700 text-sm">
          Something went wrong. Try again later.
        </div>
      )}
    </form>
  );
}
