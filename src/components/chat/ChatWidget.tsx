import { useEffect, useState } from 'react';
import { aiService } from '@/services/aiService';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  question: string;
  answer: string;
}

export default function ChatWidget() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const history = await aiService.getHistory();

        setMessages(
            history.map((item, index) => ({
              id: item.id ?? String(index),
              question: item.question,
              answer: item.answer,
            }))
        );
      } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Failed to load history';

        toast({
          title: 'Error',
          description: message,
          variant: 'destructive',
        });
      }
    };

    loadHistory();
  }, []);

  const handleSend = async () => {
    if (!question.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a question.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);

      const result = await aiService.askQuestion(question.trim());

      setMessages((prev) => [
        ...prev,
        {
          id: result.id ?? String(Date.now()),
          question: result.question,
          answer: result.answer,
        },
      ]);

      setQuestion('');
    } catch (error) {
      const message =
          error instanceof Error ? error.message : 'Failed to send question';

      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="space-y-4">
        <div className="max-h-[400px] space-y-3 overflow-y-auto rounded-lg border border-border bg-background p-4">
          {messages.length === 0 ? (
              <p className="text-sm text-muted-foreground">No messages yet.</p>
          ) : (
              messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    <div className="rounded-lg bg-muted p-3 text-sm">
                      <strong>You:</strong> {message.question}
                    </div>
                    <div className="rounded-lg border border-border bg-surface p-3 text-sm">
                      <strong>AI:</strong> {message.answer}
                    </div>
                  </div>
              ))
          )}
        </div>

        <div className="flex gap-2">
          <input
              className="flex-1 rounded-lg border border-border bg-background px-4 py-3"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question..."
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
          />

          <button
              type="button"
              onClick={handleSend}
              disabled={loading}
              className="rounded-lg bg-slate-800 px-6 py-3 text-white disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
  );
}