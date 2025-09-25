import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Edit3, Plus, Calendar, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: string;
  timestamp: number;
}

const MOOD_OPTIONS = [
  { emoji: "😊", label: "Great", value: "great" },
  { emoji: "🙂", label: "Good", value: "good" },
  { emoji: "😐", label: "Okay", value: "okay" },
  { emoji: "😔", label: "Low", value: "low" },
  { emoji: "😰", label: "Anxious", value: "anxious" },
];

const PersonalJournal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mood: "okay"
  });
  const { toast } = useToast();

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = () => {
    try {
      const stored = localStorage.getItem("journal-entries");
      if (stored) {
        const parsed = JSON.parse(stored);
        setEntries(parsed.sort((a: JournalEntry, b: JournalEntry) => b.timestamp - a.timestamp));
      }
    } catch (error) {
      console.error("Error loading journal entries:", error);
    }
  };

  const saveEntries = (newEntries: JournalEntry[]) => {
    try {
      localStorage.setItem("journal-entries", JSON.stringify(newEntries));
      setEntries(newEntries.sort((a, b) => b.timestamp - a.timestamp));
    } catch (error) {
      console.error("Error saving journal entries:", error);
      toast({
        title: "Error saving entry",
        description: "Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both title and content are required.",
        variant: "destructive"
      });
      return;
    }

    const now = new Date();
    const entry: JournalEntry = {
      id: editingId || Date.now().toString(),
      date: now.toLocaleDateString(),
      title: formData.title.trim(),
      content: formData.content.trim(),
      mood: formData.mood,
      timestamp: now.getTime()
    };

    let newEntries;
    if (editingId) {
      newEntries = entries.map(e => e.id === editingId ? entry : e);
      toast({
        title: "Entry updated",
        description: "Your journal entry has been updated successfully."
      });
    } else {
      newEntries = [entry, ...entries];
      toast({
        title: "Entry saved",
        description: "Your journal entry has been saved successfully."
      });
    }

    saveEntries(newEntries);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: "", content: "", mood: "okay" });
    setIsWriting(false);
    setEditingId(null);
  };

  const handleEdit = (entry: JournalEntry) => {
    setFormData({
      title: entry.title,
      content: entry.content,
      mood: entry.mood
    });
    setEditingId(entry.id);
    setIsWriting(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const newEntries = entries.filter(e => e.id !== id);
      saveEntries(newEntries);
      toast({
        title: "Entry deleted",
        description: "Your journal entry has been deleted."
      });
    }
  };

  const getMoodEmoji = (mood: string) => {
    return MOOD_OPTIONS.find(option => option.value === mood)?.emoji || "😐";
  };

  if (isWriting) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <Card className="wellness-card">
          <CardHeader>
            <CardTitle className="text-wellness-calm flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {editingId ? "Edit Entry" : "New Journal Entry"}
            </CardTitle>
            <CardDescription>
              Take a moment to reflect on your thoughts and feelings
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="How are you feeling today?"
                  className="border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mood">Current Mood</Label>
                <div className="flex gap-2">
                  {MOOD_OPTIONS.map(({ emoji, label, value }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, mood: value }))}
                      className={`p-3 rounded-xl border transition-all ${
                        formData.mood === value
                          ? "border-primary bg-primary/10 shadow-soft"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl">{emoji}</div>
                        <div className="text-xs text-muted-foreground">{label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Your Thoughts</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Write about your day, your feelings, or anything on your mind..."
                  className="min-h-[200px] border-border/50 resize-none"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-primary">
                  {editingId ? "Update Entry" : "Save Entry"}
                </Button>
                <Button type="button" onClick={resetForm} variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-wellness-calm">Personal Journal</h1>
          <p className="text-muted-foreground">Your private space for reflection and growth</p>
        </div>
        <Button onClick={() => setIsWriting(true)} className="bg-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Entry
        </Button>
      </div>

      {entries.length === 0 ? (
        <Card className="wellness-card text-center py-12">
          <CardContent>
            <Heart className="w-12 h-12 text-wellness-calm mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Start Your Journey</h3>
            <p className="text-muted-foreground mb-6">
              Begin journaling to track your thoughts, feelings, and personal growth.
            </p>
            <Button onClick={() => setIsWriting(true)} className="bg-primary">
              Write Your First Entry
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {entries.map((entry) => (
            <Card key={entry.id} className="wellness-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
                      {entry.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4" />
                      {entry.date}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(entry)}
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                  {entry.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonalJournal;