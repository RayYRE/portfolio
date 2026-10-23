import { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { Composer } from "../components/Composer";
import { AssistantMessage, UserMessage } from "../components/Messages";
import { Suggestions } from "../components/Suggestions";
import { getConversation } from "../data/conversations";
import { profile } from "../data/profile";

export function Conversation() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const conversation = getConversation(slug);

  useEffect(() => {
    if (conversation) document.title = `${conversation.title} · ${profile.name}`;
  }, [conversation]);

  if (!conversation) return <Navigate to="/" replace />;

  // A typed question arrives in router state; a direct link falls back to the page's default prompt.
  const typed = (location.state as { question?: string } | null)?.question;
  const question = typed ?? (conversation.prompt || "Help");

  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl space-y-8 px-4 pt-6 pb-10 sm:px-6 md:pt-12">
          <UserMessage>{question}</UserMessage>
          {/* Keyed by location so the reply replays its reveal on every navigation. */}
          <AssistantMessage key={location.key}>{conversation.answer()}</AssistantMessage>
          <Suggestions exclude={slug} />
        </div>
      </div>
      <div className="px-4 pb-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Composer />
        </div>
      </div>
    </>
  );
}
